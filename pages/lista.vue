<template>
    <v-container grid-list-md>
        <h1>Lista</h1>
        <v-data-table :headers="headers" :loading="false" :rows-per-page-items="[10]" :items="nameList" class="elevation-1">
            <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.rating }}</td>
                <td class="text-xs-right">{{ props.item.i }}</td>
                <td v-if="adm" class="justify-center layout px-0">
                    <v-btn icon class="mx-0" @click="deleteItem(props.item)">
                        <v-icon color="pink">delete</v-icon>
                    </v-btn>
                </td>
            </template>
<template slot="pageText" slot-scope="props">
                {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
            </template>
</v-data-table>
<div style="margin:10px"></div>
<h1>Añadir nombre</h1>
<AniadirNombre />
</v-container>
</template>

<script>
    import axios from '~/plugins/axios'
    import AniadirNombre from '@/components/AniadirNombre.vue'
    export default {
        components: { AniadirNombre },
        data() {
            return {
                waitingServerResponse: false,
                adm: false,
                headers: [
                    { text: 'Nombre', align: 'left', sortable: false, value: 'name' },
                    { text: 'Rating (Sistema de puntuación Elo)', align: 'right', value: 'rating' },
                    { text: 'Numero de veces votado', align: 'right', value: 'i' }
                ]
            }
        },
        computed: {
            nameList() { return this.$store.state.nameList }
        },
        created() {
            if (this.nameList.length < 2) {
                this.$store.dispatch('updateList')
            }
            if (this.$route.query.adm === '1') { this.adm = true }
        },
        methods: {
            deleteItem(i) {
                console.log(i)
                if (this.waitingServerResponse) { return }
                this.waitingServerResponse = true
                axios.post('/api/deletename', { name: i.name }).then((d) => {
                    this.$store.commit('setNamelist', d.data)
                    this.waitingServerResponse = false
                }).catch(e => {
                    console.log(e.response)
                    this.waitingServerResponse = false
                })
            }
        },
        watch: {}
    }

</script>

<style scoped>


</style>
