<template>
  <v-container grid-list-xl>
    <h2 class="pl-4">
      <span>Graphic</span>
      <span class="green--text">Portfolio</span>
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
          <v-card-text>
            <h3>Link</h3>
          </v-card-text>
          <v-card-text>
            <a :href="game.link">{{game.link}}</a>
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
            <v-img contain max-height="500px" :src="game.poster"></v-img>
          </v-card-media>
          <v-card-text>
              <h3 class="headline mb-0">
                <span>Technology</span>
                <span class="right" >Role</span>
              </h3>
              <v-chip color="green" text-color="white">{{game.tech.tech1}}</v-chip>
              <v-chip color="green" text-color="white">{{game.tech.tech2}}</v-chip>
              <v-chip class="right" color="green" text-color="white">{{game.role}}</v-chip>
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
    titleTemplate: "%s ← Gael's Space",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          'Gael Courmont games portfolio'
      },
      { charset: 'utf-8' },
      { property: 'og:title', content: "Gael' Space" },
      { property: 'og:site_name', content: "Gael' Space" },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://gael.space' },
      {
        property: 'og:description',
        content:
          'Gael Courmont games portfolio'
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
          tech: {
            tech1: 'UNITY',
            tech2: '2D'
          }
        },
        {
          dialog: false,
          title: 'Pool game',
          poster: 'https://i.imgur.com/Yo3nFht.jpg',
          demo: true,
          href: 'https://youtube.com/embed/imet3Kkd9sQ',
          description: 'This project is a small and simple pool game made by myself and 2 other student at ISEN during an end of course project. The goal was to use every aspect of unity 3D development we learnt during that session',
          link: 'https://github.com/gael-courmont/Unity_module',
          role: 'Unity Developer',
          tech: {
            tech1: 'UNITY',
            tech2: '3D'
          }
        },
        {
          dialog: false,
          title: 'Chicken shooter VR',
          poster: 'https://i.imgur.com/isbVJv8.png',
          demo: true,
          href: 'https://youtube.com/embed/aicG3RF1kxE',
          description: 'A bunch of chicken is invading the far west. Pick up your colt and shoot them before they peck all your wheat. This game was made in unity VR by myself and 2 other students during an end of course project.',
          link: 'https://github.com/gael-courmont/vr_fps',
          role: 'Unity Developper',
          tech: {
            tech1: 'UNITY',
            tech2: 'VR'
          }
        },
        {
          dialog: false,
          title: 'Gurdil',
          poster: 'https://i.imgur.com/wv2v2bv.jpg',
          demo: false,
          href: '',
          description: 'As a personal project i am developping a hack an slash type of game since it is one of my favorite type of game. I started devellopping it in early 2022.',
          link: 'https://github.com/gael-courmont/Gurdil',
          role: 'Unity Developper',
          tech: {
            tech1: 'UNITY',
            tech2: '3D'
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
