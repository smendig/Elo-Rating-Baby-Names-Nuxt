<template>
    <div id="intro">
        <div class="container">
            <transition appear name="fade">
            <v-progress-circular v-if="showLoading" :size="400" :width="15" :rotate="90" :value="circleValue" color="teal">
                <img class="introImg" src="@/static/boy.svg">
            </v-progress-circular>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                showLoading: true,
                circleValue: 0
            }
        },
        computed: {
            nameList() { return this.$store.state.nameList }
        },
        created() {
            setTimeout(() => { this.circleValue = 10 }, 700)
            setTimeout(() => { this.circleValue = 30 }, 900)
            setTimeout(() => { this.circleValue = 60 }, 1100)
            setTimeout(() => { this.circleValue = 90 }, 1400)
            setTimeout(() => {
                this.circleValue = 100
                setTimeout(() => { this.showLoading = false }, 600)
            }, 1600)
        },
        methods: {},
        watch: {}
    }

</script>

<style scoped>
    #intro {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #aaa;
        z-index: 3000;
        width: 100%;
        height: 100%;
        display: flex;
    }

    .introImg {
        width: 100%;
        height: auto;
    }

</style>
