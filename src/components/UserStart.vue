<template>
    <div>
        <h4 class="subtitle is-4">User Start</h4>

        <ul>
            <router-link to="/user/1" tag="li" active-class="is-active"><a>User 1</a></router-link>
            <router-link to="/user/2" tag="li" active-class="is-active"><a>User 2</a></router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "UserStart"
    }
</script>

<style scoped>

</style>