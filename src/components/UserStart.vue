<template>
    <div>
        <h4 class="subtitle is-4">User Start</h4>

        <ul v-for="usr in userList" v-bind:key="usr.id">
            <router-link v-bind:to="'user/' + usr.id" tag="li" active-class="is-active"><a>{{usr.name }}</a></router-link>
        </ul>
    </div>
</template>

<script>
    import { store } from "../store/store.js"

    export default {
        name: "UserStart",

        data: function(){
            return{
                userList: store.getUserList()
            }
        }
    }
</script>

<style scoped>

</style>