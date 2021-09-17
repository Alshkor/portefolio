<template>
  <div>
    <CardContainer />
  </div>
</template>


<script>


import Page from "./Navigation_bar/Navigation_object/Page.js";
import CardContainer from "@/components/CardProject/CardContainer.vue";


export default {
  name: "Head",
  components: {CardContainer},
  data: function () {
    return {
      date: new Date().toLocaleTimeString(),
      pages: Page
    };
}
};

</script>

<style scoped>

</style>