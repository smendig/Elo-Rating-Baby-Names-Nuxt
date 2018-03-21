<template>
    <v-app>
    <v-navigation-drawer app></v-navigation-drawer>
    <v-toolbar app><router-link to="/"><img class="imgnino" src="@/static/boy.svg"></router-link></v-toolbar>
    <v-content>
        <v-container fluid>
            <nuxt/>
        </v-container>
    </v-content>
    <v-footer app></v-footer>
    </v-app>
</template>

<script>
    import Menu from '@/components/Menu'
    export default {
        components: { Menu }
    }

</script>

<style>
    .imgnino{
        max-height: 100%;
    }

</style>
