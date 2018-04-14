<template>
<v-container grid-list-md>
    <h4>Esta es tu clasificación, basado los en los votos que sólo tú has hecho:</h4>
        <v-btn class="bBorraLocal" @click="resetLocal">Borra tu ranking</v-btn>
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
        :items="uLocalRanking" 
        :search="searchFilterGlobal"
        no-data-text="No hay datos, vota y aparecerá aquí la clasificación"
        no-results-text="No existe"
        disable-initial-sort 
        class="elevation-1">
            <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.rating }}</td>
                <td class="text-xs-right">{{ props.item.s }}</td>
            </template>
<template slot="pageText" slot-scope="props">
                {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
        </template>
</v-data-table>
<p>* Rating por sistema de puntuación ELO</p>
</v-container>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                searchFilterGlobal: '',
                waitingServerResponse: false,
                headers: [
                    { text: 'Nombre', align: 'left', sortable: false, value: 'name' },
                    { text: 'Rating', align: 'right', value: 'rating' },
                    { text: 'Nº veces votado', align: 'right', value: 'i' }
                ]
            }
        },
        computed: {
            username() { return this.$store.state.per.username },
            uLocalRanking() {
                if (this.username && this.$store.state.per.localRanking && this.$store.state.per.localRanking[this.username].length > 1) { return this.$store.state.per.localRanking[this.username].sort((a, b) => b.rating - a.rating) }
                return []
            }
        },
        created() {},
        methods: {
            resetLocal() {
                this.$store.commit('resetUserLocalRanking', this.username)
            }
        },
        watch: {}
    }

</script>

<style scoped>
    .filtroglobal {
        width: 50%;
    }

    .bBorraLocal {
        float: right;
        max-width: 43%;
    }

</style>
