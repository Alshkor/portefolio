<template>
  <v-layout column justify-center align-center class="mt-4 pt-2">
    <VueCompareImage
      class="hidden-md-and-down"
      hover
      :style="{ maxWidth: '1000px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage"
      :rightImage="rightImage"
      :sliderPositionPercentage="sliderPosition"
    />
    <VueCompareImage
      class="hidden-lg-and-up"
      hover
      :style="{ maxWidth: '400px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage2"
      :rightImage="rightImage2"
      :sliderPositionPercentage="sliderPosition"
    />

    <br>

    <vue-typer class="headline" :repeat="0" text="Axel Courmont"></vue-typer>
    <vue-typer
      :text="text1"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="erasing"
      :pre-type-delay="70"
      :type-delay="70"
      :pre-erase-delay="1980"
      :erase-delay="150"
      erase-style="select-back"
      :erase-on-complete="false"
      caret-animation="smooth"
    ></vue-typer>
    <br>
    <v-flex xs12 sm6 md4 lg4 xl4>
      <v-card flat color="transparent" max-width="500">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">
              <span>About</span>
              <span class="red--text">Me</span>
            </h3>
            <div>
              <p>
                Hello! I’m Axel Courmont. I'm a Engineering student who
                is passionate about
                <span
                  class="red--text font-weight-bold"
                >Video Games</span> and
                <span
                  class="red--text font-weight-bold"
                >AI</span>, building great gaming experience,
                fighting for simplicity over complexity and constantly learning.
                When I'm not coding, you'll find me listening to music or travelling through europe.
              </p>
            </div>
          </div>
        </v-card-title>

        <v-card-actions class="hidden-sm-and-down">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            fab
            dark
            outline
            color="fc3e40"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-actions class="hidden-md-and-up justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            small
            fab
            dark
            outline
            color="fc3e40"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { VueTyper } from 'vue-typer'
import VueCompareImage from 'vue-compare-image'

export default {
  metaInfo: {
    title: 'Home',
    titleTemplate: "%s ← Axel's Space",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Axel Courmont\'s Portfolio' },
      { charset: 'utf-8' },
      { property: 'og:title', content: 'Axel\' Space' },
      { property: 'og:site_name', content: 'Axel\' Space' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://axel.space' },
      {
        property: 'og:image',
        content: 'https://i.imgur.com/Dcz2PGx.jpg'
      },
      { property: 'og:description', content: 'Axel Courmont\'s Portfolio' }
    ]
  },
  components: {
    'vue-typer': VueTyper,
    VueCompareImage
  },
  data () {
    return {
      icons: [
        { href: 'https://github.com/Alshkor', icon: 'fab fa-github' },
        {
          href: 'https://www.linkedin.com/in/axel-courmont-2803a21b7/',
          icon: 'fab fa-linkedin-in'
        }
      ],
      text1: ['AI', 'Game Development', 'Programmer'],
      leftImage: 'https://wallpaperaccess.com/full/279979.jpg',
      rightImage: 'https://www.wallpapertip.com/wmimgs/35-356026_artificial-intelligence-logo-design.jpg',
      leftImage2: 'https://wallpaperaccess.com/full/279979.jpg',
      rightImage2: 'https://www.wallpapertip.com/wmimgs/35-356026_artificial-intelligence-logo-design.jpg',
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 0.5
    }
  }
}
</script>
<style>
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }

  50% {
    transform: rotateZ(10deg);
  }
}

.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: #fc3e40;
}
.vue-typer .custom.char.selected {
  color: #251ee9;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: #fc3e40;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #251ee9;
}
</style>
