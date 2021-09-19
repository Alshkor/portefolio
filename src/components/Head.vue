<template>
  <div>
    <CardContainer />
  </div>
</template>


<script>


import CardContainer from "@/components/CardProject/CardContainer.vue";


export default {
  name: "Head",
  components: {CardContainer},
  data: function () {
    return {
      date: new Date().toLocaleTimeString(),
    };
}
};

</script>

<style scoped>

</style>