<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row>
            <v-flex xs12><h1>Que nombre te gusta mas</h1></v-flex>
        </v-layout>
        <transition appear name="fade" mode="out-in"><v-layout v-if="!waitingServerResponse&&n1&&n2" row>      
            <v-flex xs6 v-on:click.stop="clickName([n1,n2])">
                <v-card dark color="secondary">
                    <v-card-text class="px-0">{{n1.name}}</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs6 v-on:click.stop="clickName([n2,n1])">
                <v-card dark color="secondary">
                    <v-card-text class="px-0">{{n2.name}}</v-card-text>
                </v-card>
            </v-flex>
        </v-layout></transition>
    </v-container>
</template>

<script>
    import axios from '~/plugins/axios'
    export default {
        components: {},
        data() {
            return {
                waitingServerResponse: false
            }
        },
        computed: {
            nameList() { return this.$store.state.nameList },
            n1() { return this.$store.state.n1 },
            n2() { return this.$store.state.n2 }
        },
        created() {},
        methods: {
            clickName(n) {
                if (this.waitingServerResponse) { return }
                this.waitingServerResponse = true
                axios.post('/api/choose', n).then((d) => {
                    this.$store.commit('setNamelist', d.data)
                    this.$store.dispatch('resetNames')
                    setTimeout(() => {
                        this.$store.dispatch('randomNames')
                        this.waitingServerResponse = false
                    }, 1000)
                }).catch(e => {
                    console.log(e)
                    this.waitingServerResponse = false
                })
            }
        },
        watch: {}
    }

</script>

<style scoped>


</style>
