<template>
    <div v-if="ultimoVoto.user">
        <div class="tit">Último Voto</div>
        <div>Gana <span class="d1">{{ultimoVoto.b[0].name}}</span> a <span class="d1">{{ultimoVoto.b[1].name}}</span></div>
        <div class="d3">
        <div><span class="d4">{{ultimoVoto.user}}</span></div>
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
            ultimoVoto() { return this.$store.state.ultimoVoto },
            timeString() {
                if (this.ultimoVoto && this.ultimoVoto.time) { return this.timeToString(this.ultimoVoto.time) }
                return ''
            }

        },
        created() {
            this.$store.dispatch('updateUltimoVoto')
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
