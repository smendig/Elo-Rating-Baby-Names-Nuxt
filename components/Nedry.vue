<template>
    <v-container class="c" grid-list-md>
        <img src="/nedry.gif">
    </v-container>
</template>

<script>
    export default {
        components: {},
        data() {
            return {}
        },
        computed: {
            nameList() { return this.$store.state.nameList }
        },
        created() {},
        methods: {},
        watch: {}
    }

</script>

<style scoped>
    .c {
        background-color: #fff;
        text-align: center;
    }

</style>
