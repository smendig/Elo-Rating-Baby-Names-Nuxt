<template>
<div v-if="ultimoAniadido.user">
    <div class="tit">Último Nombre Añadido</div>
    <div><span class="d1">{{ultimoAniadido.name}}</span></div>
    <div class="d3">
    <div><span class="d4">{{ultimoAniadido.user}}</span></div>
    <div>A las {{(new Date(ultimoAniadido.time)).toLocaleTimeString()}}</div>
    </div>
</div>
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
    .tit {
        font-size: 17px;
        color: #07176b;
    }

    .d1 {
        color: #c30000;
    }

    .d4 {
        color: #07176b;
    }

    .d3 {
        margin: 10px;
    }

</style>
