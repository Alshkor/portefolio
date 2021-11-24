<template>
  <div>
    <b-card
        :title=title
        :img-src=img_link
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
    >
      <b-card-text>
        {{ description }} Description du projet;; Lien de l'image : {{ img_link }}
      </b-card-text>
      <b-button v-on:click="changePage(title)" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>

export default {
  name: "Card",
  props: {
    title: String,
    description: String,
    link: String,
    img_link: String
  },
  data() {
    let image = new Image();
    image.src = this.img_link;
    return {
      image
    }
  },
  methods: {
    changePage(title) {
      this.$parent.$parent.infoProject(title);

    }
  }
}
</script>

<style scoped>

</style>