<template>
    <v-app>
    <transition name="fadeoutfast">
    <v-toolbar v-if="$route.path!=='/'" app color="primary">
        <v-toolbar-title><router-link to="/"><img class="imgnino" src="@/static/boy.svg"></router-link></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat to="/elige">Elige</v-btn>
            <v-btn flat to="/resultados">Resultados</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    </transition>
    <v-content>
        <nuxt/>
    </v-content>
    <transition name="fadeoutfast">
    <v-footer v-if="$route.path!=='/'" color="primary" class="footer" app>RaiSabin Creations©</v-footer>
    </transition>
    </v-app>
</template>

<script>
    export default {
        components: {},
        data() {
            return {}
        },
        computed: {
            username() { return this.$store.state.per.username },
            uLocalRanking() {
                if (this.username) { return this.$store.state.per.localRanking[this.username].sort((a, b) => b.rating - a.rating) }
                return []
            },
            localRanking() { return this.$store.state.per.localRanking }

        },
        created() {
            if (this.localRanking instanceof Array) { this.$store.commit('resetLocalRanking', this.username) }

            this.$vuetify.theme.primary = '#9FA8DA'
            this.$vuetify.theme.secondary = '#F06292'
            this.$vuetify.theme.accent = '#9c27b0'
            this.$vuetify.theme.error = '#f44336'
            this.$vuetify.theme.warning = '#ffeb3b'
            this.$vuetify.theme.info = '#2196f3'
            this.$vuetify.theme.success = '#4caf50'
        }
    }

</script>

<style scoped>
    .imgnino {
        max-height: 100%;
        width: 50px;
        margin: 0px 20px;
    }

    .footer {
        padding: 0px 10px;
    }

</style>
