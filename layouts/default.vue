<template>
    <v-app>
    <v-navigation-drawer app v-model="drawer">
        <v-toolbar flat class="transparent">
            <v-list class="pa-0">
            <v-list-tile avatar>
                <v-list-tile-avatar>
                    <img src="@/static/boy.svg" >
                </v-list-tile-avatar>
                <v-list-tile-content>
                <v-list-tile-title>John Leider</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            </v-list>
        </v-toolbar>
        <v-list class="pt-0" dense>
            <v-divider></v-divider>
            <v-list-tile v-for="item in menuArray" :key="item.title" :to="item.u">
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.n }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Application</v-toolbar-title>
        <v-spacer></v-spacer>
        <router-link to="/"><img class="imgnino" src="@/static/boy.svg"></router-link>
    </v-toolbar>
    <v-content>
        <nuxt/>
    </v-content>
    <v-footer app></v-footer>
    </v-app>
</template>

<script>
    import Menu from '@/components/Menu'
    export default {
        components: { Menu },
        data() {
            return {
                menuArray: [
                    { n: 'Nuevo nombre', u: '/aniadir-nombre', icon: 'dashboard' },
                    { n: 'Lista Nombres', u: '/lista-nombres', icon: 'question_answer' }
                ],
                drawer: false
            }
        },
        created() {
            this.$store.dispatch('startUpdates')
        }
    }

</script>

<style>
    .imgnino {
        max-height: 100%;
        width: 50px;
    }

</style>
