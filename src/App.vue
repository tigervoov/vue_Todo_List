<template>
  <div id="app">
    <!-- <ToDoMvc></ToDoMvc> -->
    <router-view></router-view>

  </div>
</template>

<script>

import ToDoMvc from "./components/Todomvc";

export default {
  name: 'app',
  components: {
    ToDoMvc,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
