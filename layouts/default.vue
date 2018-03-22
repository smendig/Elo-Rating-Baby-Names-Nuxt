<template>
    <v-app>
    <v-toolbar app color="primary">
        <v-toolbar-title><router-link to="/"><img class="imgnino" src="@/static/boy.svg"></router-link></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat to="/">Elige</v-btn>
            <v-btn flat to="/lista">Ranking</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <v-content>
        <nuxt/>
    </v-content>
    <v-footer app>RaiSabin Creations©</v-footer>
    </v-app>
</template>

<script>
    import Menu from '@/components/Menu'
    export default {
        components: { Menu },
        data() {
            return {}
        },
        created() {
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

<style>
    .imgnino {
        max-height: 100%;
        width: 50px;
        margin: 0px 20px;
    }

</style>
