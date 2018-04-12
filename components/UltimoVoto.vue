<template>
    <v-container v-if="ultimoVoto.user" class="c" grid-list-md>
        <v-card color="primary">
            <v-card-media height="200px" >
                <v-container fill-height fluid>
                    <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                            <span class="headline white--text" v-text="'Último Voto'"></span>
                            <div>Votado {{ultimoVoto.b[0].name}} frente a {{ultimoVoto.b[1].name}}</div>
                            <div>Por {{ultimoVoto.user}} a las {{(new Date(ultimoVoto.time)).toLocaleTimeString()}}</div>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-media>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        components: {},
        data() {
            return {}
        },
        computed: {
            ultimoVoto() { return this.$store.state.ultimoVoto }
        },
        created() {
            this.$store.dispatch('updateUltimoVoto')
        },
        methods: {},
        watch: {}
    }

</script>

<style scoped>


</style>
