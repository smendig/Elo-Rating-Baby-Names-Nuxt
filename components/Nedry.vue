<template>
    <v-dialog v-model="nedryDialog" max-width="500px">
        <div class="c">
        <video ref="nedry" id="nedvideo" preload="auto" loop>
            <source src="@/static/nedry.mp4" type="video/mp4">
        </video>
        </div>
    </v-dialog>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                nedryDialog: false
            }
        },
        computed: { nedry() { return this.$store.state.nedry } },
        created() {},
        methods: {},
        watch: {
            nedry(v) {
                this.nedryDialog = this.nedry
                if (v) { this.$refs.nedry.play() } else { this.$refs.nedry.pause() }
            },
            nedryDialog(v) {
                if (!v) {
                    this.$store.commit('setNedry', false)
                }
            }
        }
    }

</script>

<style scoped>
    .c {
        background-color: #fff;
        text-align: center;
    }

</style>
