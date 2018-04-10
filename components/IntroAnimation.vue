<template>
    <div id="intro">
        <div class="container">
            <transition appear name="fade"><v-progress-circular v-if="animationState==='loading'" :size="400" :width="15" :rotate="90" :value="circleValue" color="teal">
                <img class="introImg" src="@/static/boy.svg">
            </v-progress-circular></transition>
<!--             <vue-typer v-if="animationState==='1'"
            :text='["Hola!","Esto no es mas que un pasatiempo hecho por RaiSabin Creations© para ayudar a elegir el nombre.","Tu opinion no nos importa (bueno... un poco, depende de quien seas), la elección del nombre será nuestra","¿Quien Eres?"]'
            :repeat='0'
            :shuffle='false'
            initial-action='typing'
            :pre-type-delay='770'
            :type-delay='100'
            :pre-erase-delay='2000'
            :erase-delay='250'
            erase-style='select-all'
            :erase-on-complete='false'
            caret-animation='blink'
            ></vue-typer> -->
            <div ref="dtypedjs" class="dtypedjs"></div>
        </div>
    </div>
</template>

<script>
    import { VueTyper } from 'vue-typer'
    import Typed from 'typed.js'
    export default {
        components: { VueTyper },
        data() {
            return {
                animationState: 'loading',
                typedInstance: null,
                circleValue: 0
            }
        },
        computed: {
            nameList() { return this.$store.state.nameList }
        },
        created() {
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
                    strings: ['Hola!',
                        'Esto no es mas que un pasatiempo hecho por RaiSabin Creations© para ayudar a elegir el nombre.',
                        'Tu opinion no nos importa, la elección del nombre será nuestra',
                        'Tu opinion no nos importa (bueno... un poco, depende de quien seas), la elección del nombre será nuestra',
                        '¿Quien Eres?'
                    ],
                    typeSpeed: 40,
                    startDelay: 1500
                }
                this.typedInstance = new Typed(this.$refs.dtypedjs, options)
                return sleep(300)
            })
        },
        beforeDestroy() {
            console.log('mirar si se destruye')
            if (this.typedInstance) { this.typedInstance.destroy() }
        },
        methods: {},
        watch: {}
    }

</script>

<style>
    .typed-cursor {
        opacity: 1;
        animation: blink .7s infinite;
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
        position: absolute;
        top: 0;
        left: 0;
        background-color: #ccc;
        z-index: 3000;
        width: 100%;
        height: 100%;
    }

    .container {
        display: flex
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

</style>
