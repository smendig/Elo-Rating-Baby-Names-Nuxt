<template>
    <div id="intro">
        <FondoNubes />
        <div v-if="!hide" class="container">
            <div v-if="!storedUsername">
            <transition appear name="fade"><v-progress-circular v-if="animationState==='loading'" :size="300" :width="15" :rotate="90" :value="circleValue" color="teal">
                <img class="introImg bebeAnimado" src="@/static/boy.svg">
            </v-progress-circular></transition>
            <div ref="dtypedjs" class="dtypedjs"></div>
            <transition appear name="fade"><v-text-field ref="nameinput" v-if="animationState==='nameinput'" v-model="username" label="Nombre" color="#000"></v-text-field></transition>
            <transition appear name="fade"><v-btn v-if="animationState==='nameinput'" v-on:click.stop="cName" :loading="false" :disabled="false" color="blue-grey">Empezar
                <v-icon right dark>done</v-icon>
            </v-btn></transition>
            </div>
            <div v-else>
                <div><img class="bebeAnimado" src="/boy.svg"></div>
                <h1 class="display-1">HOLA OTRA VEZ:</h1>
                <div class="uname"><h2 class="">{{storedUsername}}</h2></div>
                <transition appear name="fade"><div class="cElige"><v-btn to="/elige" color="primary" light>Empezar a elegir</v-btn></div></transition>
                <transition appear name="fade"><div class="cNewUsername"><v-btn v-on:click.stop="cNewUsername" :loading="false" :disabled="false" color="error">¿No eres {{storedUsername}}?
                </v-btn></div></transition>
            </div>
        </div>
        <v-snackbar :timeout="4000" :bottom="true" v-model="snackbar">Pon un nombre decente</v-snackbar>
    </div>
</template>

<script>
    import Typed from 'typed.js'
    import FondoNubes from '@/components/FondoNubes.vue'
    import utils from '@/utils.js'
    export default {
        components: { FondoNubes },
        data() {
            return {
                snackbar: false,
                username: '',
                animationState: 'loading',
                typedInstance: null,
                circleValue: 0,
                hide: false
            }
        },
        computed: {
            nameList() { return this.$store.state.nameList },
            storedUsername() { return this.$store.state.per.username }
        },
        created() {
            if (this.storedUsername) {
                this.withUsernameAnimation()
            } else {
                this.noUsernameAnimation()
            }
        },
        beforeDestroy() {
            if (this.typedInstance) { this.typedInstance.destroy() }
        },
        methods: {
            cName() {
                const un = this.username.trim()
                console.log(utils.malas(un))
                if (un.length < 3 || un.length > 35 || utils.malas(un)) {
                    this.snackbar = true
                    return
                }
                this.hide = true
                this.$store.commit('setUsername', this.username.trim())
                this.$store.commit('addPrevu', this.username.trim())
                this.$router.push({ path: '/elige' })
            },
            noUsernameAnimation() {
                function sleep(time) {
                    return new Promise(resolve => {
                        setTimeout(resolve, time)
                    })
                }
                sleep(300).then(() => {
                    this.circleValue = 10
                    return sleep(500)
                }).then(() => {
                    this.circleValue = 60
                    return sleep(500)
                }).then(() => {
                    this.circleValue = 90
                    return sleep(500)
                }).then(() => {
                    this.circleValue = 100
                    return sleep(500)
                }).then(() => {
                    this.animationState = ''
                    return sleep(1000)
                }).then(() => {
                    this.animationState = '1'
                    var options = {
                        strings: ['Hola!^2000',
                            'Esto es un pasatiempo hecho por <span style="font-weight:bold">RaiSabin Creations©</span> para ayudarnos a elegir el nombre del niño.^2000',
                            'La opinión de los demás no nos importa^400, la elección del nombre será nues^1000',
                            'La opinión de los demás no nos importa <span style="color:#666">(bueno...^400 un poco^700, depende de quién seas)^1000</span>, la elección del nombre será nuestra.^2000 Pero si quieres participar...^1500',
                            '¿Quién Eres?'
                        ],
                        typeSpeed: 40,
                        startDelay: 1500,
                        onComplete: () => {
                            this.typedInstance.destroy()
                            this.$refs.dtypedjs.innerHTML = '¿Quien Eres?'
                            this.animationState = 'nameinput'
                            setTimeout(() => { this.$refs.nameinput.focus() }, 500)
                        }
                    }
                    this.typedInstance = new Typed(this.$refs.dtypedjs, options)
                    return sleep(3000)
                })
            },
            withUsernameAnimation() {

            },
            cNewUsername() {
                this.$store.commit('setUsername', '')
                this.$store.commit('addPrevu', 'usernamereset')
                this.noUsernameAnimation()
            }
        },
        watch: {},
        layout: 'empty'
    }

</script>

<style>
    .typed-cursor {
        opacity: 1;
        animation: blink .7s infinite;
        font-size: 37px;
    }

    @keyframes blink {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

</style>

<style scoped>
    #intro {
        text-align: center;
        background-color: #ccc;
        width: 100%;
        height: 100%;
        display: flex;
        background: #f2f9fe;
        /* Old browsers */
        background: -moz-linear-gradient(top, #f2f9fe 0%, #d6f0fd 100%);
        /* FF3.6-15 */
        background: -webkit-linear-gradient(top, #f2f9fe 0%, #d6f0fd 100%);
        /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, #f2f9fe 0%, #d6f0fd 100%);
        /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    }

    .container {
        z-index: 2;
    }

    @media screen and (min-width: 900px) {
        .container {
            max-width: 50%;
        }
    }

    .introImg {
        width: 100%;
        height: auto;
    }

    .introtxt {
        font-size: 40px;
        position: absolute;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        left: 0;
    }

    .dtypedjs {
        font-size: 30px;
        display: inline;
    }

    @media screen and (max-width: 900px) {
        .dtypedjs {
            font-size: 23px;
        }
    }

    .cElige {
        margin: 10px auto;
    }

    .cNewUsername {
        margin: 40px auto;
    }

    .uname {
        border: 4px solid #22637b;
        padding: 3px 22px;
    }

    .bebeAnimado {
        position: relative;
        width: 200px;
        height: auto;
        animation-name: babymovement;
        animation-iteration-count: infinite;
        animation-duration: 4s;
    }

    @keyframes babymovement {
        0% {
            left: 0;
            transform: rotateX(0deg);
            transform: rotateZ(0deg);
        }
        25% {
            left: -2px;
            transform: rotateX(20deg) rotateZ(3deg);
        }
        50% {
            left: 2px;
            transform: rotateX(-15deg) rotateZ(-3deg);
        }
        100% {
            left: 0;
            transform: rotateX(0deg) rotateZ(0deg);
        }
    }

</style>
