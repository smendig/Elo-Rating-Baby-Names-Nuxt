<template>
    <v-container grid-list-md>
        <h1>Añadir nombre</h1>
        <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field label="Nombre a añadir" v-model="nombre" :rules="nameRules" :counter="20" required></v-text-field>
            <v-btn @click="aniadirNombre" :disabled="!valid">Añadir</v-btn>
        </v-form>
        <v-alert type="success" :value="addedShow" transition="scale-transition">Nombre añadido</v-alert>
        <v-alert type="info" :value="existsShow" transition="scale-transition">Ya existe el nombre</v-alert>
    </v-container>
</template>

<script>
    import axios from '~/plugins/axios'
    export default {
        components: {},
        data() {
            return {
                valid: true,
                nombre: '',
                nameRules: [
                    v => (v && v.length > 2) || 'El nombre es demasiado corto',
                    v => (v && v.length <= 20) || 'El nombre es demasiado largo'
                ],
                waitingServerResponse: false,
                addedShow: false,
                existsShow: false
            }
        },
        computed: {
            nameList() { return this.$store.state.nameList }
        },
        created() {},
        methods: {
            aniadirNombre() {
                if (this.waitingServerResponse) { return }
                this.existsShow = false
                this.addedShow = false
                this.waitingServerResponse = true
                axios.post('/api/addname', { name: this.nombre }).then((d) => {
                    this.$store.commit('setNamelist', d.data)
                    this.addedShow = true
                    this.waitingServerResponse = false
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
        watch: {}
    }

</script>

<style scoped>


</style>
