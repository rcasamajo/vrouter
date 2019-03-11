<template>
    <div>
        <h4 class="subtitle is-4">User Edit</h4>

        <p>User Id: {{ user.id }}</p>
        <p>User Name: {{ user.name }}</p>

        Detail: <input class="input" type="text" v-model="detailValue">

        <button class="button is-danger" v-on:click="setUserDetail(detailValue)">Save changes</button>

        <br><br><br>
        <p>Locale: {{ this.$route.query.locale }}</p>
    </div>
</template>

<script>
    import { store } from "../store/store.js"

    export default {
        name: "UserEdit",
        props:['id'],

        data: function(){
            return{
                user: store.getUser(this.id),
                detailValue: ""
            }
        },

        methods:{
            setUserDetail(){
                store.setUserDetail(this.id, this.detailValue);
                this.$router.push('/user/' + this.id);
            }
        },

        created: function(){
            this.detailValue = this.user.detail;
        }
    }
</script>

<style scoped>

</style>