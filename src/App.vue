<template>
  <div id="app">
    <Heads :page_actuel="page"/>
    <test_background></test_background>


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
import test_background from "@/components/background/test_background";

export default {
  name: 'App',
  components: {
    Heads,
    CardContainer,
    Accueil,
    Liens,
    test_background
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
