<template>
  <v-container grid-list-xl>
    <h2 class="pl-4">
      <span>Development</span>
      <span class="red--text">Portfolio</span>
    </h2>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="project.dialog"
        lazy
        max-width="1000"
        v-for="project in projects"
        :key="project.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-card hover flat color="transparent">
              <v-img
                :src="project.poster"
                :alt="project.title"
                aspect-ratio="1.7778"
                lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              ></v-img>
              <v-card-title primary-title class="cardTitle">{{project.title}}</v-card-title>
            </v-card>
          </v-flex>
        </template>
        <v-card v-if="project.dialog">
          <v-card-title class="cardTitle">
            {{project.title}}
          </v-card-title>
          <v-card-text v-if="!project.no_link">
            <h3>Link</h3>
          </v-card-text>
          <v-card-text v-if="!project.no_link">
            <a :href="project.link">{{project.link}}</a>
          </v-card-text>
          <v-card-text>
            <h3>Description</h3>
          </v-card-text>
          <v-card-text>
            <p>{{project.description}}</p>
          </v-card-text>
          <v-card-text>
            <h3>Demo</h3>
          </v-card-text>
          <v-card-media>
            <v-img contain max-height="500px" :src="project.demo_image"></v-img>
          </v-card-media>
          <v-card-text>
            <h3 class="headline mb-0">
              <span>Technology</span>
              <span class="right" >Role</span>
            </h3>
            <span :key="tech" v-for="tech in project.tech">
              <v-chip color="blue" text-color="white">{{tech}}</v-chip>
            </span>
            <v-chip class="right" color="blue" text-color="white">{{project.role}}</v-chip>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: 'Development Portfolio',
    titleTemplate: "%s ← Eldin's Space",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          'Gael courmont Development portefolio'
      },
      { charset: 'utf-8' },
      { property: 'og:title', content: "Eldin' Space" },
      { property: 'og:site_name', content: "Eldin' Space" },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://eldin.space' },
      {
        property: 'og:description',
        content:
          'Gael courmont Development portfolio'
      }
    ]
  },
  data () {
    return {
      dialog: false,
      projects: [
        {
          dialog: false,
          title: 'This Website',
          poster: 'https://i.imgur.com/gjq1yyQ.png',
          demo: false,
          demo_image: 'https://i.imgur.com/gjq1yyQ.png',
          href: '',
          description: 'This website was made by my brother and i  in order to show our work and especially video game production.',
          link: 'https://github.com/Alshkor/portfolio',
          role: 'Vue developer',
          tech: [
            'Vue',
            'Web design',
            'JS',
            'CSS'
          ]
        },
        {
          dialog: false,
          title: '3D engine',
          poster: 'https://i.imgur.com/1Mf9MVa.png',
          demo: false,
          demo_image: 'https://i.imgur.com/1Mf9MVa.png',
          href: '',
          description: 'We create a 3d engine in C++ using only the SDL library.',
          no_link: true,
          link: 'https://github.com/Alshkor/portefolioduq',
          role: 'C++ developer',
          tech: [
            'C++',
            'SDL'
          ]
        },
        {
          dialog: false,
          title: 'Quiz on League of legends',
          poster: 'https://i.imgur.com/RIeflcv.png',
          demo: false,
          demo_image: 'https://i.imgur.com/r7kgqXS.png',
          href: '',
          description: 'We made a website about the game League of Legends were you can test your knowledge about the lore of the game, the game itself or the esport history.',
          no_link: true,
          link: '',
          role: 'Web developer',
          tech: [
            'HTML',
            'PHP',
            'CSS',
            'Bootstrap',
            'PgSQL'
          ]
        }
      ]
    }
  }
}
</script>

<style  scoped>
.cardTitle{
  text-align: center;
  color: #0080ff ;
  font-size: x-large;
  justify-content: center;
}
.vid{
  text-align: center;
}
</style>
