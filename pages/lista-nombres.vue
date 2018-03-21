<template>
    <v-container grid-list-md>
        <h1>Lista Nombres</h1>
        <v-data-table :headers="headers" :items="nameList" hide-actions class="elevation-1">
            <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.rating }}</td>
            <td class="text-xs-right">{{ props.item.i }}</td>
            <td class="justify-center layout px-0">
                <v-btn icon class="mx-0" @click="deleteItem(props.item)">
                    <v-icon color="pink">delete</v-icon>
                </v-btn>
            </td>
            </template>
</v-data-table>
</v-container>
</template>

<script>
    import axios from '~/plugins/axios'
    export default {
        components: {},
        data() {
            return {
                waitingServerResponse: false,
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
        created() {},
        methods: {
            deleteNombre() {
                if (this.waitingServerResponse) { return }
                this.waitingServerResponse = true
                axios.delete('/api/deletename', { name: this.nombre }).then((d) => {
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
