<template>
  <div id="app">
    <Heads :page_actuel="page"/>

    <div class="body">
      <CardContainer v-if="page === 'Projets'"/>
      <Accueil v-if="page === 'Accueil'"/>
      <Liens v-if="page === 'Liens'"/>
      <ProjectDetail v-if="page === 'ProjectDetail'" :Project="Project"/>
    </div>
  </div>
</template>

<script>
import ProjectDetail from '@/components/ProjectDetail/ProjectDetail.vue';
import Heads from "@/components/Head/Head.vue";
import CardContainer from  "@/components/CardProject/CardContainer.vue";
import Accueil from "@/components/Accueil/Acceuil.vue"
import Liens from "@/components/Liens/Liens.vue"
//import test_background from "@/components/background/test_background";

export default {
  name: 'App',
  components: {
    ProjectDetail,
    Heads,
    CardContainer,
    Accueil,
    Liens,
    //test_background
  },
  data() {
    return {
        page: "Accueil",
        Project: "0"
    }
  },
  methods: {
    changePage(newPage) {
      this.page = newPage;
    },
    infoProject(title){
      this.page = 'ProjectDetail';
      this.Project = title;
    }
  }
}




</script>

<style>
#app {
  max-height: available;
  max-width: available;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #283440;
}

.background, .body {
  max-height: available;
  max-width: available;
}



.background {
  z-index: 10;

}


</style>
