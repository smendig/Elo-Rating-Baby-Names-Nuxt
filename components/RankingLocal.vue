<template>
<v-container v-if="localRanking.length" grid-list-md>
    <h1>Ranking Local</h1>
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
        :items="localRanking" 
        :search="searchFilterGlobal"
        no-results-text="No existe"
        disable-initial-sort 
        class="elevation-1">
            <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.rating }}</td>
                <td class="text-xs-right">{{ props.item.i }}</td>
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
                    { text: 'Nº veces votado', align: 'right', value: 'i' }
                ]
            }
        },
        computed: {
            username() { return this.$store.state.per.username },
            localRanking() { return this.$store.state.per.localRanking }
        },
        created() {},
        methods: {
        },
        watch: {}
    }

</script>

<style scoped>
    .filtroglobal {
        width: 50%;
    }

</style>
