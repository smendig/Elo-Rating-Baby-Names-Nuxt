<template>
    <v-container grid-list-md text-xs-center fill-height>
        <v-layout row justify-center align-center>
            <v-flex xs12>
                <v-container>
                    <v-layout row>
                        <v-flex xs12><h1>Que nombre te gusta mas</h1></v-flex>
                    </v-layout>
                    <transition appear name="fade" mode="out-in"><v-layout v-if="!waitingServerResponse&&n1&&n2" row>      
                        <v-flex xs6 class="cItemName" v-on:click.stop="clickName([n1,n2])">
                            <v-card dark color="secondary">
                                <v-card-text class="px-0">{{n1.name}}</v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs6 class="cItemName" v-on:click.stop="clickName([n2,n1])">
                            <v-card dark color="secondary">
                                <v-card-text class="px-0">{{n2.name}}</v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout></transition>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import axios from '~/plugins/axios'
    export default {
        components: {},
        data() {
            return {
                waitingServerResponse: false,
                n1: null,
                n2: null
            }
        },
        computed: {
            nameList() { return this.$store.state.nameList },
            username() { return this.$store.state.per.username },
            showIntro() { return this.$store.state.showIntro }
        },
        created() {
            if (!this.username) {
                this.$router.push({ path: '/' })
            }
            this.$store.dispatch('updateList', () => {
                this.randomNames()
            })
        },
        methods: {
            clickName(n) {
                if (this.waitingServerResponse) { return }
                this.waitingServerResponse = true
                axios.post('/api/choose', n).then((d) => {
                    this.$store.commit('setNamelist', d.data)
                    setTimeout(() => {
                        this.randomNames()
                        this.waitingServerResponse = false
                    }, 1000)
                }).catch(e => {
                    console.log(e)
                    this.waitingServerResponse = false
                })
            },
            randomNames() {
                if (this.nameList < 2) {
                    this.n1 = null
                    this.n2 = null
                } else {
                    this.n1 = this.nameList[Math.floor(Math.random() * this.nameList.length)]
                    this.n2 = this.nameList.filter(n => n.name !== this.n1.name)[Math.floor(Math.random() * (this.nameList.length - 1))]
                }
            }
        },
        watch: {}
    }

</script>

<style scoped>
    .cItemName {
        cursor: pointer;
    }

</style>
