<template>
    <div>
        <h4 class="subtitle is-4">User Start</h4>

        <ul v-for="usr in userList" v-bind:key="usr.id">
            <router-link v-bind:to="'user/' + usr.id" tag="li" active-class="is-active"><a>{{usr.name }}</a></router-link>
        </ul>

        <button class="button is-warning" v-on:click="add">Add user</button>
    </div>
</template>

<script>
    export default {
        name: "UserStart",

        computed: {
            userList() {
                return this.$store.getters.userList;
            }
        },

        methods:{
            add(){
                this.$router.push('/user/add');
            }
        }
    }
</script>

<style scoped>

</style>