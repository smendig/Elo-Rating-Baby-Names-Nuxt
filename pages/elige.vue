<template>
    <v-container class="c2" grid-list-md text-xs-center fill-height>
        <v-layout row justify-center align-center>
            <v-flex xs12>
                <v-container class="c1">
                    <transition appear name="slideup-fade"><v-layout v-if="animationStep===1||animationStep===2" row>
                        <v-flex xs12><h1 class="msg1">Van a salir nombres aleatoriamente</h1></v-flex>
                    </v-layout></transition>
                    <transition appear name="slideup-fade"><v-layout v-if="animationStep===2" row>
                        <v-flex xs12><h1 class="msg2">Elige el que <span style="color: #c30000">más te guste</span> de los 2</h1></v-flex>
                    </v-layout></transition>
                    <transition appear name="slideup-fade"><v-layout v-if="animationStep===5" row>
                        <v-flex class="cFinVotacion" xs12>
                            <h1>Gracias por participar.</h1>
                            <h1>Esta votación no se tendrá en cuenta para la decisión final.</h1>
                            <img src="/boy.svg">
                            <h1>O igual si...</h1>
                            <v-btn @click="retry"><v-icon color="pink">replay</v-icon>Seguir Votando</v-btn>
                        </v-flex>
                    </v-layout></transition>
                    <transition appear name="fade" mode="out-in"><v-layout v-if="animationStep===4&&!waitingServerResponse&&n1&&n2" row>      
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
        <transition appear name="slideup-fade"><div class="cProgress" v-if="animationStep===4">
            <v-progress-linear :indeterminate="waitingServerResponse" class="progressbar" height="50" v-model="progressvalue"></v-progress-linear>
            <div class="progressbarTxt">{{nOfVotes}}/{{nOfVotesMax}}</div>
        </div></transition>
    </v-container>
</template>

<script>
    import axios from '~/plugins/axios'
    export default {
        components: {},
        data() {
            return {
                animationStep: 0,
                nOfVotes: 0,
                nOfVotesMax: 10,
                waitingServerResponse: false,
                n1: null,
                n2: null
            }
        },
        computed: {
            nameList() { return this.$store.state.nameList },
            username() { return this.$store.state.per.username },
            showIntro() { return this.$store.state.showIntro },
            progressvalue() { return this.nOfVotes * 100 / this.nOfVotesMax },
            prevu() { return this.$store.state.per.prevu }
        },
        created() {
            function sleep(time) {
                return new Promise(resolve => {
                    setTimeout(resolve, time)
                })
            }
            if (!this.username) {
                this.$router.push({ path: '/' })
                return
            }
            this.$store.dispatch('updateList', () => {
                this.randomNames()
            })
            sleep(300).then(() => {
                this.animationStep = 1
                return sleep(2000)
            }).then(() => {
                this.animationStep = 2
                return sleep(2000)
            }).then(() => {
                this.animationStep = 3
                return sleep(1500)
            }).then(() => {
                this.animationStep = 4
                return sleep(500)
            })
        },
        methods: {
            clickName(n) {
                if (this.waitingServerResponse) { return }
                this.waitingServerResponse = true
                this.nOfVotes += 1
                axios.post('/api/choose', { uname: this.username, prevu: this.prevu, battle: n }).then((d) => {
                    this.$store.commit('setNamelist', d.data)
                    if (this.nOfVotes >= this.nOfVotesMax) {
                        this.animationStep = 0
                        setTimeout(() => {
                            this.animationStep = 5
                        }, 1000)
                    } else {
                        setTimeout(() => {
                            this.randomNames()
                            this.waitingServerResponse = false
                        }, 1000)
                    }
                }).catch(e => {
                    console.log(e)
                    this.waitingServerResponse = false
                })
                this.$store.dispatch('localRankingCalc', { u: this.username, n: n })
            },
            randomNames() {
                if (this.nameList < 2) {
                    this.n1 = null
                    this.n2 = null
                } else {
                    this.n1 = this.nameList[Math.floor(Math.random() * this.nameList.length)]
                    this.n2 = this.nameList.filter(n => n.name !== this.n1.name)[Math.floor(Math.random() * (this.nameList.length - 1))]
                }
            },
            retry() {
                this.randomNames()
                this.waitingServerResponse = false
                this.nOfVotes = 0
                this.animationStep = 0
                setTimeout(() => { this.animationStep = 4 }, 1000)
            }
        },
        watch: {},
        transition: 'fadeoutfast'
    }

</script>

<style scoped>
    .cItemName {
        cursor: pointer;
    }

    .c1 {
        min-height: 250px;
        font-size: 16px;
    }

    @media screen and (max-width: 700px) {
        .c1 {
            font-size: 14px;
        }
        .cFinVotacion {
            font-size: 80%;
        }
    }

    .cProgress {
        position: absolute;
        text-align: center;
        bottom: 140px;
        width: 80%;
        left: 10%;
    }

    .progressbarTxt {
        position: absolute;
        text-align: center;
        bottom: 18px;
        width: 100%;
        font-size: 30px;
        z-index: 1;
    }

    .progressbar {
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .cFinVotacion {}

    .cFinVotacion img {
        position: relative;
        width: 200px;
        height: auto;
        animation-name: babymovement;
        animation-iteration-count: infinite;
        animation-duration: 4s;
    }

    .msg1 {
        color: #143b6b;
    }

    .msg2 {
        color: #143b6b;
    }

    @keyframes babymovement {
        0% {
            left: 0;
            transform: rotateX(0deg);
            transform: rotateZ(0deg);
        }
        25% {
            left: -4px;
            transform: rotateX(25deg) rotateZ(4deg);
        }
        50% {
            left: 4px;
            transform: rotateX(-20deg) rotateZ(-4deg);
        }
        100% {
            left: 0;
            transform: rotateX(0deg) rotateZ(0deg);
        }
    }

</style>
