<template>
  <v-container grid-list-xl>
    <h2 class="pl-4">
      <span>AI</span>
      <span class="green--text">Portfolio</span>
    </h2>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="project.dialog"
        lazy
        max-width="800"
        v-for="project in AI"
        :key="project.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-card hover flat color="transparent">
              <v-img
                :src="project.poster"
                aspect-ratio="1.7778"
                contain
                :alt="project.title"
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
          <v-card-media v-if="project.demo">
            <div class="iframe-wrapper">
              <iframe :src="project.href" allowfullscreen allowtransparency allow="autoplay" ></iframe>
            </div>
          </v-card-media>
          <v-card-media v-if="!project.demo">
            <v-img contain max-height="500px" :src="project.demo_image"></v-img>
          </v-card-media>
          <v-card-text>
            <h3 class="headline mb-0">
              <span>Technology</span>
              <span class="right" >Role</span>
            </h3>
            <v-chip color="green" text-color="white">{{project.tech.tech1}}</v-chip>
            <v-chip color="green" text-color="white">{{project.tech.tech2}}</v-chip>
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
    title: 'AI Portfolio',
    titleTemplate: "%s ← Gael's Space",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          "Gael Courmont's AI portfolio"
      },
      { charset: 'utf-8' },
      { property: 'og:title', content: "Gael' Space" },
      { property: 'og:site_name', content: "Gael' Space" },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://Gael.space' },
      {
        property: 'og:description',
        content: "Gael Courmont's AI portfolio"
      }
    ]
  },
  data () {
    return {
      dialog: false,
      AI: [
        {
          dialog: false,
          title: 'Traffic counting',
          poster: 'https://i.imgur.com/1MhuQLW.png?1',
          demo: true,
          href: 'https://youtube.com/embed/jEsRzpme1XA',
          description: 'This project have been made for the computer vision course at ISEN.\n' +
            '\n' +
            'The project is to make a traffic count model in order to count the number of cars,bus etc passing througha line on a road.\n' +
            '\n' +
            'In order to achieve that we will mainly use a pretrained yolo model and a sort algorithm to track cars.',
          link: 'https://colab.research.google.com/drive/1igAgpQZQFP0EHjm2hxBEQx4OrUyqupHz?usp=sharing',
          role: 'Alone project',
          tech: {
            tech1: 'YOLOv5',
            tech2: 'Pytorch'
          }
        },
        {
          dialog: false,
          title: 'Cats and dogs recognition',
          poster: 'https://i.imgur.com/MMRovwB.jpg',
          demo: false,
          demo_image: 'https://i.imgur.com/p72XuJu.png',
          href: '',
          description: 'Cats and dog recognition model made by 3 student at isen during 2021-2022 first semester. the goal was to make a poc and research about the best algorithm and technique of image classification available',
          link: 'https://github.com/gael-courmont/Cats_and_dogs_recognition',
          role: 'Developper',
          tech: {
            tech1: 'Pytorch',
            tech2: 'Resnet'
          }
        },
        {
          dialog: false,
          title: 'Falling detection',
          poster: 'https://i.imgur.com/isbVJv8.png',
          demo: false,
          demo_image: 'https://i.imgur.com/6GvNoG2.gif',
          href: '',
          description: 'A 6 week project made by a team of 4 ISEN student.' +
            ' The goal here was to do a poc of an AI capable of recognizing dangerous comportement.' +
            ' Moreover hidden goal was to test training an ai onto "virtual data". in that purpose we used unity to make data and train our AI onto it. ' +
            'We focused on falling person detection since our model was destined to an homecare assistant.',
          link: 'https://github.com/gael-courmont/Falling_detection/tree/main',
          role: 'Python/Unity Developper',
          tech: {
            tech1: 'UNITY',
            tech2: 'Python',
            tech3: 'Pytorch'
          }
        }
      ]
    }
  }
}
</script>

<style  scoped>
@import "../../../node_modules/vue-plyr/dist/vue-plyr.css";
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
