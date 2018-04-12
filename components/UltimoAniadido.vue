<template>
    <v-container v-if="ultimoAniadido.user" class="c" grid-list-md>
        <h2>Último Nombre Añadido</h2>
        <div>{{ultimoAniadido.name}}</div>
        <div>Añadido por {{ultimoAniadido.user}} a las {{ultimoAniadido.time}}</div>
    </v-container>
</template>

<script>
    export default {
        components: {},
        data() {
            return {}
        },
        computed: {
            ultimoAniadido() { return this.$store.state.ultimoAniadido }
        },
        created() {
            this.$store.dispatch('updateUltimoAniadido')
        },
        methods: {},
        watch: {}
    }

</script>

<style scoped>


</style>
