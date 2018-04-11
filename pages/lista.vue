<template>
    <v-container grid-list-md>
        <RankingLocal />
        <RankingGlobal />
        <div class="cAniadir"></div>
        <h1>Añadir nombre</h1>
        <h3>Puedes añadir aquí nombres para que se incluyan en entre las opciones de votar. Mete algún nombre que te guste y no esté en la lista.</h3>
        <AniadirNombre />
    </v-container>
</template>

<script>
    import AniadirNombre from '@/components/AniadirNombre.vue'
    import RankingGlobal from '@/components/RankingGlobal.vue'
    import RankingLocal from '@/components/RankingLocal.vue'
    export default {
        components: { AniadirNombre, RankingGlobal, RankingLocal },
        data() {
            return {}
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
        watch: {}
    }

</script>

<style scoped>
    .cAniadir {
        margin: 50px
    }

</style>
