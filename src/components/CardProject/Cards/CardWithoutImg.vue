<template>
  <div>
    <b-card
        v-bind:title=title
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
    >
      <b-card-text>
        {{ description }}
      </b-card-text>

      <b-button v-bind:href=link variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>

export default {
  name: "CardWithoutImg",
  props: {
    title: String,
    description: String,
    link: String
  }
}

</script>

<style scoped>

</style>