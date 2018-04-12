<template>
    <div v-if="ultimoVoto.user">
        <div class="tit">Último Voto</div>
        <div>Gana <span class="d1">{{ultimoVoto.b[0].name}}</span> a <span class="d1">{{ultimoVoto.b[1].name}}</span></div>
        <div class="d3">
        <div><span class="d4">{{ultimoVoto.user}}</span></div>
        <div>A las {{(new Date(ultimoVoto.time)).toLocaleTimeString()}}</div>
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
    .tit {
        font-size: 17px;
        color: #07176b;
    }

    .d1{
        color: #c30000;
    }

    .d4{
        color: #07176b;
    }

    .d3{
        margin:10px;
    }

</style>
