<template>
  <v-container grid-list-xl>
    <h2 class="pl-4">
      <span>Games</span>
      <span class="red--text">Portfolio</span>
    </h2>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="game.dialog"
        lazy
        max-width="800"
        v-for="game in project"
        :key="game.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-card hover flat color="transparent">
              <v-img
                :src="game.poster"
                aspect-ratio="1.7778"
                :alt="game.title"
                lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              ></v-img>
              <v-card-title primary-title class="cardTitle">{{game.title}}</v-card-title>
            </v-card>
          </v-flex>
        </template>
        <v-card v-if="game.dialog">
          <v-card-title class="cardTitle">
            {{game.title}}
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
              <p>{{game.description}}</p>
          </v-card-text>
          <v-card-text>
            <h3>Demo</h3>
          </v-card-text>
          <v-card-media v-if="game.demo">
            <div class="iframe-wrapper">
                <iframe :src="game.href" allowfullscreen allowtransparency allow="autoplay" ></iframe>
            </div>
          </v-card-media>
          <v-card-media v-if="!game.demo">
            <v-img contain max-height="500px" :src="game.demo_image"></v-img>
          </v-card-media>
          <v-card-text>
              <h3 class="headline mb-0">
                <span>Technology</span>
                <span class="right" >Role</span>
              </h3>
            <span :key="tech" v-for="tech in game.tech">
              <v-chip color="blue" text-color="white">{{tech}}</v-chip>
            </span>
              <v-chip class="right" color="blue" text-color="white">{{game.role}}</v-chip>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  metaInfo: {
    title: 'Games Portfolio ',
    titleTemplate: "%s ← Axel's Space",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          'Axel Courmont games portfolio'
      },
      { charset: 'utf-8' },
      { property: 'og:title', content: "Axel's Space" },
      { property: 'og:site_name', content: "Axel's Space" },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://portfolio-axel.herokuapp.com' },
      {
        property: 'og:description',
        content:
          'Axel Courmont games portfolio'
      }
    ]
  },

  data () {
    return {
      dialog: false,
      project: [
        {
          dialog: false,
          title: 'The Fireflies Express',
          poster: 'https://i.imgur.com/pqxqFIL.png',
          demo: true,
          href: 'https://youtube.com/embed/KYu0GYQfNEE',
          description: 'Face the dangers of an eerie train with the help of an angel and a demon, and try to reach the exit ! Game made during the Global Game Jam 2022 by a team of 6. 2 graphic designer, 3 developers and 1 game designer',
          link: 'https://globalgamejam.org/2022/games/fireflies-express-1',
          role: 'Unity Developper',
          tech: [
            'UNITY',
            '2D'
          ]
        },
        {
          dialog: false,
          title: 'The Christmas carnage',
          poster: 'https://i.imgur.com/GvZujJF.png',
          demo: true,
          href: 'https://youtube.com/embed/9H2mbBLPEwA',
          description: 'If your dream is to destroy every snowman you see, this game is for you. This project was for a video game course with 2 other developer.',
          link: 'https://github.com/Alshkor/Projet-DJV',
          role: 'Unity Developper',
          tech: [
            'UNITY',
            '3D'
          ]
        },
        {
          dialog: false,
          title: 'The Christmas carnage VR',
          poster: 'https://i.imgur.com/BADMyQB.png',
          demo: true,
          href: 'https://youtube.com/embed/O10XBLTC3tc',
          description: 'As an addition to my course, I\'ve followed an online course on basics of virtual reality. As a project to test my abilities, I made The christmas carnage playable in VR with Oculus Quest 2.',
          no_link: true,
          link: 'https://github.com/Alshkor/Projet-DJV',
          role: 'Unity Developper',
          tech: [
            'UNITY',
            '3D'
          ]
        },
        {
          dialog: false,
          title: 'Brocantes et coeurs brisés',
          poster: 'https://imgur.com/j0YF0WK.png',
          demo: false,
          demo_image: 'https://imgur.com/4Poy5y5.png',
          href: '',
          description: 'Sell your goods to clients and talk with them to discover their stories. You may want to be the most popular or the richest antique collector. I made this game during a gamejam (Unijam) in October 2021 with 1 other developer, 2 game designer and 2 graphic designers.',
          link: 'https://biscuitprime.itch.io/brocante-coeurs-brises',
          role: 'Unity Developper',
          tech: [
            'UNITY',
            '2D'
          ]
        },
        {
          dialog: false,
          title: 'Magia',
          poster: 'https://imgur.com/nX6Nlnt.png',
          demo: true,
          href: 'https://youtube.com/embed/xdFi7ld--m8',
          description: 'A 3D-exploration game which offers a lot of liberty to the player to explore the world, with only one goal : reach the end of the world ! This game was made during a summer school where, with 2 other students, we were experiencing entrepreneurship for 2 months and we simulating our video game studio.',
          link: 'https://magiasunheat.itch.io/aux-confins-du-monde',
          role: 'Unity Developper',
          tech: [
            'UNITY',
            '3D'
          ]
        },
        {
          dialog: false,
          title: 'Envoronment line',
          poster: 'https://i.imgur.com/AhuS5LF.jpg',
          demo: false,
          demo_image: 'https://i.imgur.com/rt2Eozx.png',
          href: '',
          description: 'For my first project in school, I created a small board game (playable on terminal or in an interface) in C with 3 other students.',
          no_link: true,
          link: '',
          role: 'Unity Developper',
          tech: [
            'C',
            'GTK'
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
  color: #0080ff;
  font-size: x-large;
  justify-content: center;
}

.iframe-wrapper {
  position: relative;
  height: 0;
  padding-top: 56.25%;
  overflow: hidden;
  margin: 3%;
}

.iframe-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
