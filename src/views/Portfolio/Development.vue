<template>
  <v-container grid-list-xl>
    <h2 class="pl-4">
      <span>Development</span>
      <span class="red--text"> Portfolio</span>
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
            <h3>Description</h3>
          </v-card-text>
          <v-card-text>
            <p>{{project.description}}</p>
          </v-card-text>
          <v-card-text v-if="project.has_link">
            <h3>Link</h3>
          </v-card-text>
          <v-card-text v-if="project.has_link">
            <p>{{project.descr_link}}</p><a :href="project.link">{{project.link}}</a>
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

          <v-card-text  v-if="project.team.length > 0">
            <h3>Team</h3>
          </v-card-text>

          <v-card-text>
            <v-flex v-for="teammate in project.team" :key="teammate.name">

              <a :href="teammate.link">{{teammate.name}}</a> <h> | {{teammate.role}}</h>

            </v-flex>
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
    titleTemplate: "%s ← Axel's Space",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          'Axel Courmont Development portefolio'
      },
      { charset: 'utf-8' },
      { property: 'og:title', content: "Axel' Space" },
      { property: 'og:site_name', content: "Axel' Space" },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://portfolio-axel.herokuapp.com' },
      {
        property: 'og:description',
        content:
          'Axel courmont Development portfolio'
      }
    ]
  },
  data () {
    return {
      dialog: false,
      projects: [
        {
          dialog: false,
          title: 'N-Body simulation using Docker WIP',
          poster: 'https://i.imgur.com/Ps5zAcs.png',
          demo: false,
          demo_image: '',
          href: '',
          description: 'As a first application using containerization, we made a n-body simulation system to try to ' +
            'render as many particles as we can.',
          has_link: false,
          descr_link: '',
          link: '',
          role: 'Developer',
          team: [
            {
              name: 'Quentin Morel "Im-Rises"',
              link: 'https://im-rises.github.io/',
              role: 'Unity developer'
            },
            {
              name: 'Alexis Roville "Fromiel"',
              link: 'https://fromiel.itch.io/',
              role: 'Unreal Developer'
            }
          ],
          tech: [
            'C++',
            'OpenGL',
            'Docker'
          ]
        },
        {
          dialog: false,
          title: 'Physics engine in C++',
          poster: 'https://i.imgur.com/d60gGYP.png',
          demo: false,
          demo_image: 'https://i.imgur.com/d60gGYP.png',
          href: '',
          description: 'We created a physics engine in C++ as part of the Mathematics and Physics course for video games ' +
            'at UQAC during my last year of engineering school.',
          has_link: false,
          descr_link: '',
          link: 'https://github.com/Alshkor/Projet_mathematiques_physiques',
          role: 'C++ Developer',
          team: [
            {
              name: 'Deryne Four',
              link: 'https://github.com/Deryne',
              role: 'C++ Developer'
            },
            {
              name: 'Pierre Fourré',
              link: 'https://github.com/Fourrep',
              role: 'C++ Developer'
            }
          ],
          tech: [
            'C++',
            'OpenGL',
            'GLFW'
          ]
        },
        {
          dialog: false,
          title: 'This website',
          poster: 'https://i.imgur.com/gjq1yyQ.png',
          demo: false,
          demo_image: 'https://i.imgur.com/gjq1yyQ.png',
          href: '',
          description: 'This website was created using Eldin Zaimovic\'s template to showcase my work in video game development.',
          has_link: true,
          descr_link: 'Portfolio template : ',
          link: 'https://eldin.space/',
          role: 'Vue developer',
          team: [],
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
          description: 'We created a graphics engine using only the 2D graphics library SDL and the principle of rasterization.',
          has_link: false,
          link: '',
          descr_link: '',
          role: 'C++ Developer',
          team: [
            {
              name: 'Mathieu Baesen "Mathxxl"',
              link: 'https://mathxxl.itch.io/',
              role: 'C++ Developer'
            }
          ],
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
          description: 'We made a quiz website about the video game League of Legends where you can test your knowledge ' +
            'of the game (whether it\'s about the story, esports, or the gameplay itself).',
          has_link: false,
          descr_link: '',
          link: '',
          role: 'Web developer',
          team: [],
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
