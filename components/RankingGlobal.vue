<template>
<v-container grid-list-md>
    <h4>Clasificación global, basada en todos los votos</h4>
    <v-text-field class="filtroglobal"
    append-icon="search"
    label="Buscar"
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
    no-data-text="No hay datos"
    no-results-text="No existe"
    disable-initial-sort 
    class="elevation-1">
        <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{(props.item.i>3)?props.item.rating+props.item.s:'-'}}</td>
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
<p>* Rating por sistema de puntuación ELO</p>
<p>* Los nombres nuevos aparecen sin rating hasta que sea mas exacto</p>
</v-container>
</template>

<script>
    import axios from '~/plugins/axios'
    export default {
        components: {},
        data() {
            return {
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
            nameList() {
                return this.$store.state.nameList.sort((a, b) => {
                    let a2
                    let b2
                    if (a.i > 4) { a2 = a.rating + a.s } else { a2 = 0 }
                    if (b.i > 4) { b2 = b.rating + b.s } else { b2 = 0 }
                    return b2 - a2
                })
            },
            username() { return this.$store.state.per.username },
            prevu() { return this.$store.state.per.prevu }
        },
        created() {},
        methods: {
            deleteItem(i) {
                if (this.waitingServerResponse) { return }
                if (!localStorage || !localStorage.token) {
                    // tiene que activarse desde aquí sino no funciona en movil (en movil necesita acion de usuario, por eso):
                    document.getElementById('nedvideo').play()
                    this.$store.commit('setNedry', true)
                    axios.post('/api/deletename', { uname: this.username, prevu: this.prevu, name: i.name }).then(() => {
                        this.waitingServerResponse = false
                    }).catch(() => {
                        this.waitingServerResponse = false
                    })
                } else {
                    this.waitingServerResponse = true
                    axios.post('/api/deletename', { uname: this.username, prevu: this.prevu, name: i.name, token: localStorage.token }).then((d) => {
                        this.$store.commit('setNamelist', d.data)
                        this.waitingServerResponse = false
                    }).catch(() => {
                        this.weaitingServerResponse = false
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
