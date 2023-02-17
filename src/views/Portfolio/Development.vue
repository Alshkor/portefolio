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
          title: 'Moteur physique en C++',
          poster: 'https://i.imgur.com/d60gGYP.png',
          demo: false,
          demo_image: 'https://i.imgur.com/d60gGYP.png',
          href: '',
          description: 'Nous avons créé un moteur physique en C++ dans le cadre du cours de Mathématiques et Physiques dans le jeux vidéo ' +
            'à l\'UQAC pendant ma dernière année d\'école d\'ingénieur.',
          has_link: false,
          descr_link: 'Template du portfolio : ',
          link: 'https://github.com/Alshkor/Projet_mathematiques_physiques',
          role: 'C++ Developer',
          team: [
            {
              name: 'Deryne Four',
              link: 'https://github.com/Deryne',
              role: 'C++ Developper'
            },
            {
              name: 'Pierre Fourré',
              link: 'https://github.com/Fourrep',
              role: 'C++ Developper'
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
          title: 'Ce site',
          poster: 'https://i.imgur.com/gjq1yyQ.png',
          demo: false,
          demo_image: 'https://i.imgur.com/gjq1yyQ.png',
          href: '',
          description: 'Ce site a été réalisé grâce au template de Eldin Zaimovic pour montrer mon travail en développement de jeux vidéo.',
          has_link: true,
          descr_link: 'Template du portfolio : ',
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
          description: 'Nous avons créé un moteur graphique en utilisant uniquement la bibliothèque graphique 2D SDL et le principe de ' +
            'rasterisation.',
          has_link: false,
          link: 'https://github.com/Alshkor/portefolioduq',
          descr_link: 'Template du portfolio : ',
          role: 'Développeur C++',
          team: [
            {
              name: 'Mathieu Baesen "Mathxxl"',
              link: 'https://mathxxl.itch.io/',
              role: 'C++ Developper'
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
          description: 'Nous avons faits un site de quizz sur le jeu vidéo League of legend où vous pouvez tester vos connaissance' +
            ' sur ce jeu (que ce soit l\'histoire, l\'esport ou le jeu en lui-même).',
          has_link: false,
          descr_link: 'Template du portfolio : ',
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
