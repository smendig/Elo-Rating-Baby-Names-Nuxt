<template>
  <div class="container">
    <h1>Que nombre te gusta mas</h1>
    <NameChoose v-if="showNameSelector" />
    <div v-else class="progress">
      <div class="indeterminate"></div>
    </div>
  </div>
</template>

<script>
    import NameChoose from '@/components/NameChoose'
    export default {
        components: { NameChoose },
        data() {
            return {}
        },
        computed: {
            nameList() { return this.$store.state.nameList },
            showNameSelector() { return this.nameList.length >= 2 }
        }
    }

</script>

<style scoped>
    .container {
        text-align: center;
    }

    h1 {
        font-size: 32px;
    }

    @media screen and (max-width: 800px) {
        h1 {
            font-size: 28px;
        }
    }

</style>
