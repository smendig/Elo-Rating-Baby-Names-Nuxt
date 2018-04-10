<template>
    <v-app>
                <nuxt/>
    </v-app>
</template>

<script>
    export default {
        components: {},
        data() {
            return {}
        },
        created() {
            this.$vuetify.theme.primary = '#9FA8DA'
            this.$vuetify.theme.secondary = '#F06292'
            this.$vuetify.theme.accent = '#9c27b0'
            this.$vuetify.theme.error = '#f44336'
            this.$vuetify.theme.warning = '#ffeb3b'
            this.$vuetify.theme.info = '#2196f3'
            this.$vuetify.theme.success = '#4caf50'
        }
    }

</script>

<style>


</style>
