<template>
    <div>
        <h4 class="subtitle is-4">User Start</h4>

        <ul v-for="usr in userList" v-bind:key="usr.id">

            <div class="tile is-ancestor">
                <div class="tile notification is-2">
                    <router-link v-bind:to="'user/' + usr.id" tag="li" active-class="is-active"><a>{{usr.name }}</a></router-link>
                </div>
                <div class="tile notification is-2">
                    <a class="button is-small" v-on:click="add(usr)">Add to favs</a>
                </div>
            </div>

            <br>
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
            add(usr){
                this.$store.dispatch('addFav', { id: usr.id,
                    name: usr.name,
                    detail: usr.detail});

                this.$router.push('/favs');
            }
        }
    }
</script>

<style scoped>

</style>