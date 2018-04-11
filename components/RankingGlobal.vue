<template>
<v-container grid-list-md>
    <h1>Ranking Global</h1>
        <p>* Rating por sistema de puntuación ELO</p>
        <v-text-field class="filtroglobal"
        append-icon="search"
        label="Filtro"
        single-line
        hide-details
        v-model="searchFilterGlobal">
        </v-text-field>
        <v-data-table 
        :headers="headers" 
        :loading="false" 
        :rows-per-page-items="[10]" 
        :items="nameList" 
        :search="searchFilterGlobal"
        no-results-text="No existe"
        disable-initial-sort 
        class="elevation-1">
            <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.rating }}</td>
                <td class="justify-center layout px-0">
                    <v-btn icon class="mx-0" @click="deleteItem(props.item)">
                        <v-icon color="pink">delete</v-icon>
                    </v-btn>
                </td>
            </template>
<template slot="pageText" slot-scope="props">
                {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
        </template>
</v-data-table>
<v-dialog v-model="nedry" max-width="500px">
    <Nedry />
</v-dialog>
<audio v-if="nedry" src="/you-didnt-say-the-magic-word.mp3" autoplay loop></audio>
</v-container>
</template>

<script>
    import axios from '~/plugins/axios'
    import Nedry from '@/components/Nedry.vue'
    export default {
        components: { Nedry },
        data() {
            return {
                nedry: false,
                searchFilterGlobal: '',
                waitingServerResponse: false,
                headers: [
                    { text: 'Nombre', align: 'left', sortable: false, value: 'name' },
                    { text: 'Rating', align: 'right', value: 'rating' },
                    { text: 'Borrar', align: 'center', value: 'i', sortable: false, width: 30 }
                ]
            }
        },
        computed: {
            nameList() { return this.$store.state.nameList },
            username() { return this.$store.state.per.username }
        },
        created() {
            if (this.nameList.length < 2) {
                this.$store.dispatch('updateList')
            }
        },
        methods: {
            deleteItem(i) {
                if (this.waitingServerResponse) { return }
                if (!localStorage || !localStorage.token) {
                    this.nedry = true
                } else {
                    console.log(i)
                    this.waitingServerResponse = true
                    axios.post('/api/deletename', { uname: this.username, prevu: localStorage.prevu, name: i.name, token: localStorage.token }).then((d) => {
                        this.$store.commit('setNamelist', d.data)
                        this.waitingServerResponse = false
                    }).catch(e => {
                        console.log(e.response)
                        this.waitingServerResponse = false
                    })
                }
            }
        },
        watch: {}
    }

</script>

<style scoped>
    .filtroglobal {
        width: 50%;
    }

</style>
