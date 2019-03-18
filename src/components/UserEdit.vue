<template>
    <div>
        <h4 class="subtitle is-4">User Edit</h4>

        <p>User Id: {{ user.id }}</p>
        <p>User Name: {{ user.name }}</p>

        Detail: <input class="input" type="text" v-model="detailValue">

        <button class="button is-success" v-on:click="setUserDetail(detailValue)">Save changes</button>
        <button class="button is-danger" v-on:click="cancel">Cancel</button>

        <br><br><br>
        <p>Locale: {{ this.$route.query.locale }}</p>
    </div>
</template>

<script>
    export default {
        name: "UserEdit",
        props:['id'],

        data: function(){
            return{
                detailValue: ""
            }
        },

        computed: {
            user() {
                return this.$store.getters.user(this.id);
            }
        },

        methods:{
            setUserDetail(){
                this.$store.dispatch('setUserDetail', { id: this.id, value: this.detailValue});
                this.$router.push('/user/' + this.id);
            },

            cancel(){
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