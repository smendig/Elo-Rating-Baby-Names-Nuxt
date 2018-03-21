<template>
  <div class="cNameChoose center-align">
      <transition appear name="fade" mode="out-in">
        <div v-if="!processing" class="row">
            <div class="col s12 m5 offset-m1">
                <div v-on:click.stop="clickName(1)" class="card-panel pink lighten-2" v-bind:class="{ processing: processing }">
                    <ChooseItem v-if="n1cache" :item="n1cache" />
                </div>
            </div>
            <div class="col s12 m5">
                <div v-on:click.stop="clickName(2)" class="card-panel pink lighten-2" v-bind:class="{ processing: processing }">
                    <ChooseItem v-if="n2cache" :item="n2cache" />
                </div>
            </div>
        </div>
      </transition>
  </div>
</template>

<script>
    import ChooseItem from '@/components/ChooseItem'
    export default {
        components: { ChooseItem },
        data() {
            return {
                processing: false,
                n1cache: null,
                n2cache: null

            }
        },
        computed: {
            nameList() { return this.$store.state.nameList },
            n1() { return this.$store.state.n1 },
            n2() { return this.$store.state.n2 }
        },
        created() {
            this.n1cache = this.$store.state.n1
            this.n2cache = this.$store.state.n2
        },
        methods: {
            clickName(v) {
                if (this.processing) { return }
                this.processing = true
                let new1 = { i: this.n1.i + 1 }
                let new2 = { i: this.n2.i + 1 }
                if (v === 1) {
                    new1.rating = this.getNewRating(this.n1.rating, this.n2.rating, 1)
                    new2.rating = this.getNewRating(this.n2.rating, this.n1.rating, 0)
                } else {
                    new1.rating = this.getNewRating(this.n1.rating, this.n2.rating, 0)
                    new2.rating = this.getNewRating(this.n2.rating, this.n1.rating, 1)
                }

                // GUardar nuevos ratings
                this.$store.dispatch('resetNames')
            },
            getRatingDelta(myRating, opponentRating, myGameResult) {
                if ([0, 0.5, 1].indexOf(myGameResult) === -1) {
                    return null
                }

                var myChanceToWin = 1 / (1 + Math.pow(10, (opponentRating - myRating) / 400))

                return Math.round(32 * (myGameResult - myChanceToWin))
            },
            getNewRating(myRating, opponentRating, myGameResult) {
                return myRating + this.getRatingDelta(myRating, opponentRating, myGameResult)
            }
        },
        watch: {
            processing(v) {
                if (!v) {
                    this.n1cache = this.$store.state.n1
                    this.n2cache = this.$store.state.n2
                }
            }
        }
    }

</script>

<style scoped>
    .card-panel {
        cursor: pointer;
        height: 300px;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #4db6ac;
        color: #fff;
        transition: background-color 0.3s;
    }

    .card-panel:hover {
        background-color: #057b70;
    }

    @media screen and (max-width: 800px) {
        .card-panel {
            height: 170px;
            font-size: 25px;
        }
    }

</style>
