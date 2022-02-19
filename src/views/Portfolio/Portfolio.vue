<template>
  <v-container grid-list-xl>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex v-for="portfolio in portfolios" :key="portfolio.src" xs12 sm12 md4 lg4 xl4>
        <v-card
          :to="'/portfolio/'+(portfolio.title).toLowerCase()"
          hover
          flat
          color="transparent"
          height="230"
        >
          <v-card-title></v-card-title>
          <v-img :src="portfolio.src" aspect-ratio="2.75" height="130" contain></v-img>
          <v-card-title primary-title class="justify-center">
            <v-flex text-xs-center subheading font-weight-bold>{{portfolio.title}}</v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: 'Portfolio',
    titleTemplate: "%s ← Gael's Space",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          "Gael Courmont's Portfolio Web Development Video game development Data Science"
      },
      { charset: 'utf-8' },
      { property: 'og:title', content: "Axel' Space" },
      { property: 'og:site_name', content: "Axel' Space" },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://Axel.space' },
      {
        property: 'og:description',
        content:
          "Axel Courmont's Portfolio Web Development Video game development"
      }
    ]
  },
  data () {
    return {
      portfolios: [
        {
          src: 'https://as1.ftcdn.net/v2/jpg/01/71/29/48/1000_F_171294824_FDLwEWTzlfVr8iE0qojO0mmai44fdbIj.jpg',
          title: 'Games'
        },
        {
          src: 'https://i.imgur.com/GvTt5GG.png',
          title: 'Development'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
