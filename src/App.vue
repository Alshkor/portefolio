<template>
  <div id="app">
    <Heads/>

    <CardContainer v-if="page === 'Projets'"/>
    <Accueil v-if="page === 'Accueil'"/>
    <Liens v-if="page === 'Liens'"/>



  </div>
</template>

<script>
import Heads from "@/components/Head/Head.vue";
import CardContainer from  "@/components/CardProject/CardContainer.vue";
import Accueil from "@/components/Accueil/Acceuil.vue"
import Liens from "@/components/Liens/Liens.vue"

export default {
  name: 'App',
  components: {
    Heads,
    CardContainer,
    Accueil,
    Liens
  },
  data() {
    return {
        page: "Accueil",
    }
  },
  methods: {
    changePage(newPage) {
      this.page = newPage;
    }
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
