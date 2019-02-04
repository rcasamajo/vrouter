<template>
    <div>
        <h4 class="subtitle is-4">User Edit</h4>
        <p>User Id: {{ this.$route.params.id }}</p>
        <p>Locale: {{ this.$route.query.locale }}</p>
    </div>
</template>

<script>
    export default {
        name: "UserEdit"
    }
</script>

<style scoped>

</style>