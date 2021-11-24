<template>
<div>
  <div class="d-flex flex-row bd-highlight mb-3 justify-content-center flex-wrap">
    <div  v-for="project in Cards" :key="project.Title" class="align-self-center p-5">
      <div v-if="project.img_bool === true">
        <CardWithImg
            v-bind:title="project.title"
            v-bind:description="project.description"
            v-bind:link="project.link"
            v-bind:img_link="project.img_link">
        </CardWithImg>
      </div>
      <div v-else class="col">
        <CardWithoutImg
            v-bind:title="project.title"
            v-bind:description="project.description"
            v-bind:link="project.link">
        </CardWithoutImg>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import * as projet_data from "./Cards/Cards.json";
import CardWithoutImg from "@/components/CardProject/Cards/CardWithoutImg";
import CardWithImg from "@/components/CardProject/Cards/CardWithImg";
//const parsed_project_data = JSON.parse(projet_data);
export default {
  name: "CardContainer",
  components: { CardWithoutImg, CardWithImg },
  data: function () {
    return {
      Cards: projet_data[0],
    }
  },
}
</script>

<style scoped>
</style>