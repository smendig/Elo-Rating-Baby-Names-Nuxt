<template>
    <v-container grid-list-md>
        <h1>Añadir nombre</h1>
        <h3>Puedes añadir aquí nombres para que se incluyan en entre las opciones de votar. Incluye nombre que te guste y no esté en la lista.</h3>
        <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field ref="nameinput" label="Nombre a añadir" v-model="nombre" :rules="nameRules" :counter="20" required></v-text-field>
            <v-btn @click="aniadirNombre" :disabled="!valid">Añadir</v-btn>
        </v-form>
        <v-alert type="success" :value="addedShow" transition="scale-transition">Nombre añadido</v-alert>
        <v-alert type="info" :value="existsShow" transition="scale-transition">Ya existe el nombre</v-alert>
    </v-container>
</template>

<script>
    import axios from '~/plugins/axios'
    import utils from '@/utils.js'
    export default {
        components: {},
        data() {
            return {
                valid: true,
                nombre: '',
                nameRules: [
                    v => (v && v.length > 2) || 'El nombre es demasiado corto',
                    v => (v && v.length <= 20) || 'El nombre es demasiado largo',
                    v => (v && !utils.malas(v.trim())) || ''
                ],
                waitingServerResponse: false,
                addedShow: false,
                existsShow: false
            }
        },
        computed: {
            nameList() { return this.$store.state.nameList },
            username() { return this.$store.state.per.username },
            prevu() { return this.$store.state.per.prevu }
        },
        created() {},
        methods: {
            aniadirNombre() {
                if (this.waitingServerResponse) { return }
                this.existsShow = false
                this.addedShow = false
                this.waitingServerResponse = true
                axios.post('/api/addname', { uname: this.username, prevu: this.prevu, name: this.nombre }).then((d) => {
                    this.$store.commit('setNamelist', d.data)
                    this.addedShow = true
                    this.waitingServerResponse = false
                    this.$refs.nameinput.reset()
                }).catch(e => {
                    if (e.response && e.response.status === 409) {
                        this.existsShow = true
                    } else {
                        console.log(e.response)
                    }
                    this.waitingServerResponse = false
                })
            }
        },
        watch: {},
        transition: 'fadeoutfast'
    }

</script>

<style scoped>


</style>
