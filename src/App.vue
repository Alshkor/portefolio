<template>
  <div id="app">
    <Head/>
  </div>
</template>

<script>

import Head from "@/components/Head/Head.vue";

export default {
  name: 'App',
  components: {
    Head,
  }
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
