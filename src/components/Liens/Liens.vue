<template>
  <div>
    <h1>Liens vers mes sites : </h1>
    <b-list-group class="w-25 position-absolute top-50 start-50 translate-middle">
      <b-list-group-item href="#some-link" class="mb-5">Linkedin</b-list-group-item>
      <b-list-group-item href="#" class="mb-5">Facebook</b-list-group-item>
      <b-list-group-item href="#" class="mb-5">Discord</b-list-group-item>
      <b-list-group-item href="#foobar" class="mb-5">Tweeter</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import * as project_data from "../CardProject/Cards/Cards.json";


export default {
  name: "Liens",
  data() {
    return {
      Card: project_data[0]
    }
  },
  mounted() {
      for(var obj in this.Card)  {
        console.log("les objets ins chammag " + obj)
      }
  }
}
</script>

<style scoped>
b-list-group-item {
  width: 30%;
}



</style>