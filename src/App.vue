<template>
  <div id="app">
    <h1 class="title is-1 has-text-centered">Routing</h1>
    <appMenu></appMenu>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';

export default {
    name: 'app',
    components: {
        appMenu: Menu
    }
}
</script>

<style>
  #app {
    margin-top: 50px;
    margin-bottom: 50px;
    margin-right: 150px;
    margin-left: 150px;
  };
</style>
