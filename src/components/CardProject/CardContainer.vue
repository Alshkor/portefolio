<template>
  <div>
    <div v-for="project in Cards" :key="project.Title">

      <div v-if="project.img_bool === true">
        <CardWithImg
            v-bind:title="project.title"
            v-bind:description="project.description"
            v-bind:link="project.link"
            v-bind:img_link="project.img_link">
        </CardWithImg>
      </div>

      <div v-else>
        <CardWithoutImg
            v-bind:title="project.title"
            v-bind:description="project.description"
            v-bind:link="project.link">
        </CardWithoutImg>
      </div>

    </div>
  </div>
</template>

<script>
import * as projet_data from "./Cards/Cards.json";
import CardWithoutImg from "@/components/CardProject/Cards/CardWithoutImg";
import CardWithImg from "@/components/CardProject/Cards/CardWithImg";


//const parsed_project_data = JSON.parse(projet_data);


console.log(projet_data[0].Title);

export default {
  name: "CardContainer",
  components: { CardWithoutImg, CardWithImg },
  data: function () {
    return {
      Cards: projet_data[0]
    }
  }
}



</script>

<style scoped>

</style>