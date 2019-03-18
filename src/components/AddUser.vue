<template>
    <div>
        <h4 class="subtitle is-4">Add User</h4>

        <p>Add new user</p>

        Id: <input class="input" type="text" v-model="id">
        Name: <input class="input" type="text" v-model="name">
        Detail: <input class="input" type="text" v-model="detail">

        <button class="button is-success" v-on:click="addUser(detailValue)">Add user</button>
        <button class="button is-danger" v-on:click="cancel">Cancel</button>
    </div>
</template>

<script>
    export default {
        name: "AddUser",

        data: function(){
            return{
                id: "",
                name: "",
                detail: ""
            }
        },

        methods:{
            addUser(){
                this.$store.dispatch('addUser', { id: this.id,
                                                    name: this.name,
                                                    detail: this.detail});
                this.$router.push('/user');
            },

            cancel(){
                this.$router.push('/user');
            }
        }
    }
</script>

<style scoped>

</style>