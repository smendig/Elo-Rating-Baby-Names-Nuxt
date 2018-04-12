<template>
    <v-container grid-list-md>
        <div class="cUltimos">
            <UltimoVoto />
            <UltimoAniadido />
        </div>
        <v-tabs v-model="active" color="primary" dark slider-color="pink" grow>
            <v-tab ripple>Tu Ranking</v-tab>
            <v-tab-item>
                <RankingLocal />
            </v-tab-item>
            <v-tab ripple>Ranking Global</v-tab>
            <v-tab-item>
                <RankingGlobal />
            </v-tab-item>
        </v-tabs>
        <div class="cAniadir"></div>
        <h1>Añadir nombre</h1>
        <div class="">
            <v-btn class="bAniadir" to="/aniadirnombre">Añadir Nuevo Nombre</v-btn>
            <h3>Añade algún nombre que <span style="color:#e91e63">te guste</span> para que se incluyan en entre las opciones de votar.</h3>
        </div>
    </v-container>
</template>

<script>
    import RankingGlobal from '@/components/RankingGlobal.vue'
    import RankingLocal from '@/components/RankingLocal.vue'
    import UltimoVoto from '@/components/UltimoVoto.vue'
    import UltimoAniadido from '@/components/UltimoAniadido.vue'
    export default {
        components: { RankingGlobal, RankingLocal, UltimoVoto, UltimoAniadido },
        data() {
            return {
                active: null
            }
        },
        computed: {
            nameList() { return this.$store.state.nameList },
            username() { return this.$store.state.per.username }
        },
        created() {
            if (!this.username) {
                this.$router.push({ path: '/' })
            }
        },
        methods: {},
        watch: {},
        transition: 'fadeoutfast'
    }

</script>

<style scoped>
    .cAniadir {
        margin: 50px
    }

    .bAniadir {
        float: right;
        margin: 10px 5px 10px 20px;
    }

    .cUltimos {
        display: flex;
        text-align: center;
    }

    .cUltimos>* {
        flex: 1 1 50%;
    }

</style>
