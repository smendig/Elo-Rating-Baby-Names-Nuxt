<template>
    <nav>
        <div class="nav-wrapper">
            <router-link to="/" class="brand-logo"><img src="@/static/boy.svg"></router-link>
            <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
                <li v-for="m in menu" :key="m.u" v-bind:class="{ active: m.u === $route.path }"><router-link :to="m.u">{{m.n}}</router-link></li>
            </ul>
            <ul class="side-nav" id="mobile-demo">
                <li v-for="m in menu" :key="m.u" v-bind:class="{ active: m.u === $route.path }"><router-link :to="m.u">{{m.n}}</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                menuArray: [{
                    n: 'Nuevo nombre',
                    u: '/aniadir-nombre'
                }, {
                    n: 'Lista Nombres',
                    u: '/lista-nombres'
                }]
            }
        },
        computed: {
            menu() { return this.menuArray }
        },
        created() {},
        methods: {}
    }

</script>

<style scoped>
    img {
        width: 50px;
        margin: 5px 20px;
        height: auto;
    }

    .nav-wrapper {
        background-color: #687287;
    }

</style>
