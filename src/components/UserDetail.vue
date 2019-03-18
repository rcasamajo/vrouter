<template>
    <div>
        <h4 class="subtitle is-4">User Detail</h4>

        <p>User Id: {{ user.id }}</p>
        <p>User Name: {{ user.name }}</p>
        <p>User Detail: {{ user.detail }}</p>

        <button class="button is-warning" v-on:click="edit">Edit</button>
    </div>
</template>

<script>
    export default {
        name: "UserDetail",
        props:['id'],

        computed: {
            user() {
                return this.$store.getters.user(this.id);
            }
        },

        methods:{
            edit(){
                this.$router.push('/user/' + this.id + '/edit/?locale=es');
                //this.$router.push('/user/' + this.$route.params.id + '/edit/?locale=es');
                // Tb es pot fer usant el nom de la ruta:
                // this.$router.push({name: 'userEdit', params: this.$route.params.id, query: {locale: 'es'}});
            }
        }
    }
</script>

<style scoped>

</style>