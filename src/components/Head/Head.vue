<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="dark" align="right">
      <b-navbar-brand>{{ page_actuel }}</b-navbar-brand>

      <b-navbar-nav class="position-relative position-left">
        <b-nav-item v-on:click="changePage('Liens')">Lien du q</b-nav-item>
        <b-nav-item v-on:click="changePage('Projets')">Les projets</b-nav-item>

      </b-navbar-nav>
      <b-navbar-nav class="position-absolute position-right">
        <b-nav-item v-on:click="changePage('Accueil')" >Accueil</b-nav-item>

      </b-navbar-nav>

    </b-navbar>
  </header>
</template>

<script>
export default {
  name: "Heads",
  props: {
    page_actuel: String
  },
  methods: {
    changePage(newPage) {
        this.$parent.changePage(newPage);
    }
  }
};



</script>

<style scoped>

.position-left {
  left: 10px
}

.position-right {
  right: 10px
}


</style>