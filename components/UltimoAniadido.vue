<template>
<div v-if="ultimoAniadido.user">
    <div class="tit">Último Nombre Añadido</div>
    <div><span class="d1">{{ultimoAniadido.name}}</span></div>
    <div class="d3">
    <div><span class="d4">{{ultimoAniadido.user}}</span></div>
    <div>{{timeString}}</div>
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
            ultimoAniadido() { return this.$store.state.ultimoAniadido },
            timeString() {
                if (this.ultimoAniadido && this.ultimoAniadido.time) { return this.timeToString(this.ultimoAniadido.time) }
                return ''
            }
        },
        created() {
            this.$store.dispatch('updateUltimoAniadido')
        },
        methods: {
            timeToString(t0) {
                let t = new Date(t0)
                let h = t.getHours()
                let m = t.getMinutes()
                if (m < 10) m = '0' + m
                return t.toLocaleDateString() + ' a las ' + h + ':' + m
            }
        },
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
