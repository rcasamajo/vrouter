<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-menu">
            <router-link to="/" class="navbar-item" active-class="is-active" exact>Home</router-link>
            <router-link to="/user" class="navbar-item" active-class="is-active">User</router-link>
            <router-link to="/favs" class="navbar-item" active-class="is-active">Favs</router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>

</style>