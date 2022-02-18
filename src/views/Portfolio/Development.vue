<template>
  <v-container grid-list-xl>
    <h2 class="pl-4">
      <span>Development</span>
      <span class="green--text">Portfolio</span>
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
          <v-card-text>
            <h3>Link</h3>
          </v-card-text>
          <v-card-text>
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
            <v-chip color="green" text-color="white">{{project.tech.tech1}}</v-chip>
            <v-chip color="green" text-color="white">{{project.tech.tech2}}</v-chip>
            <v-chip color="green" text-color="white">{{project.tech.tech3}}</v-chip>
            <v-chip color="green" text-color="white">{{project.tech.tech4}}</v-chip>
            <v-chip class="right" color="green" text-color="white">{{project.role}}</v-chip>
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
          link: 'https://github.com/Alshkor/portefolioduq',
          role: 'Vue developer',
          tech: {
            tech1: 'Vue',
            tech2: 'Web design',
            tech3: 'JS',
            tech4: 'CSS'
          }
        },
        {
          dialog: false,
          title: 'League of legend analytics',
          poster: 'https://www.riotgames.com/darkroom/800/f7453a510d40f50026f37cbf628113d0:a007a835c9b06c51c4256f1d396f35e2/riot-pairedlogo-red-white-rgb.png',
          demo: false,
          demo_image: 'https://i.imgur.com/muwRayM.png',
          href: '',
          description: 'Consulting website for league of legend player made in 2020 at ISEN by 5 student. We are using riot games api to fetch data about a player and give him advice according to his data analysis',
          link: 'https://github.com/gael-courmont/LoremIpsum',
          role: 'Front end Developer',
          tech: {
            tech1: 'React',
            tech2: 'JS',
            tech3: 'Mongodb',
            tech4: 'Express'
          }
        },
        {
          dialog: false,
          title: 'MLOPS',
          poster: 'https://i.imgur.com/5CMHmxm.png',
          demo: false,
          demo_image: 'https://i.imgur.com/5CMHmxm.png',
          href: '',
          description: 'During a 2 month internship,' +
            ' I had the task to build an MLOPS architecture on my own. ' +
            'The startup needed to enforce the link between the production and the data research. ' +
            'I built a MLOPS template using Docker, Jenkins and gitlab CI. ' +
            'At the end of my Internship the template was leading ' +
            'the user from a jupyter notebook model to a python flask API docker image capable of running on demand prediction. ',
          link: 'https://github.com/gael-courmont/Diskyver_MLops',
          role: 'Data engineer',
          tech: {
            tech1: 'Flask api',
            tech2: 'Kubernetes',
            tech3: 'Jenkins',
            tech4: 'Docker'
          }
        }
      ]
    }
  }
}
</script>

<style  scoped>
.cardTitle{
  text-align: center;
  color: green ;
  font-size: x-large;
  justify-content: center;
}
.vid{
  text-align: center;
}
</style>
