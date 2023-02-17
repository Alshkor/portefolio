<template>
  <v-layout row justify-center align-center wrap class="mt-4 pt-2">
    <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
      <h2 class="mb-4 pl-4 pt-2">Education</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="blue" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">SETP 2022 -</div>
                <div class="caption font-weight-bold blue--text">PRÉSENT</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Maitrise informatique spécialité jeux vidéo</strong>
                <div class="caption mb-2">Université du Québec à Chicoutimi</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="blue" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">SEPT 2020 -</div>
                <div class="caption font-weight-bold blue--text">PRÉSENT</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Diplôme d'ingénieur en jeux vidéo et intéractions numériques</strong>
                <div class="caption mb-2">ENSIIE Évry-Courcouronnes</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="blue" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">SEP 2018 -</div>
                <div class="caption font-weight-bold blue--text">JUIN 2020</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>École préparatoire spécialité mathématique</strong>
                <div class="caption mb-2">Lycée Faidherbe à Lille</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="blue" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">SEP 2015 -</div>
                <div class="caption font-weight-bold blue--text">JUIN 2018</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Baccalauréat scientifique</strong>
                <div class="caption mb-2">Lycée Robespierre à Arras</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-flex xs12 sm12 md4 lg6 xl6 class="mt-4 pt-2">
      <h2 class="mb-4 pl-4">Experience</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="blue" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">MAI 2022</div>
                <div class="caption font-weight-bold blue--text">AOUT 2022</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Recherche du processus de génération de maillages 3D de vêtements.</strong>
                <div class="caption mb-2">ModaLive</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="blue" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">JUIN 2021</div>
                <div class="caption font-weight-bold blue--text">SEPTEMBRE 2021</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Création d'une startup dans le jeux vidéo</strong>
                <div class="caption mb-2">Magia</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="blue" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold blue--text">JUILLET 2020</div>
                <div class="caption font-weight-bold blue--text">SEPTEMBRE 2020</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Gestion d'inventaire</strong>
                <div class="caption mb-2">Pharmacie aubignoise</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Software</span>

          <span class="red--text">Skills</span>
        </h2>
        <br>
        <strong>Unity</strong>
        <v-progress-linear v-model="buffer1" :buffer-value="bufferValue" color="blue" height="16"></v-progress-linear>
        <strong>Unity XR</strong>
        <v-progress-linear v-model="buffer3" :buffer-value="bufferValue" color="blue" height="16"></v-progress-linear>
        <strong>UnrealEngine</strong>
        <v-progress-linear v-model="buffer4" :buffer-value="bufferValue" color="blue" height="16"></v-progress-linear>
      </v-flex>
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Coding</span>
          <span class="red--text">Skills</span>
        </h2>
        <br>
        <strong>C++/C#/JAVA</strong>
        <v-progress-linear v-model="buffer5" :buffer-value="bufferValue" color="blue" height="16"></v-progress-linear>
        <strong>Ocaml/Prolog</strong>
        <v-progress-linear v-model="buffer6" :buffer-value="bufferValue" color="blue" height="16"></v-progress-linear>
        <strong>HTML/css/js</strong>
        <v-progress-linear v-model="buffer7" :buffer-value="bufferValue" color="blue" height="16"></v-progress-linear>
      </v-flex>
      <div class="mt-4 pt-2">
        <v-btn
          href="https://drive.google.com/drive/folders/1kfUaCuaXP4YQjwJxY7gxEh9UYHm4SNKH?usp=sharing"
          target="_blank"
          color="blue"
          dark
          large
        >
          Télécharger le CV
          <v-icon right dark>fas fa-file-download</v-icon>
        </v-btn>
      </div>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Resume',
    titleTemplate: "%s ← Axel's Space",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
            'Unity Python Java C# Pytorch keras Vue'
      },
      { charset: 'utf-8' },
      { property: 'og:title', content: "Axel' Space" },
      { property: 'og:site_name', content: "Axel' Space" },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://portfolio-axel.herokuapp.com' },
      {
        property: 'og:description',
        content:
          'Unity Python Java C# Pytorch keras Vue'
      }
    ]
  },
  data () {
    return {
      value: 0,
      buffer1: 0,
      buffer2: 0,
      buffer3: 0,
      buffer4: 0,
      buffer5: 0,
      buffer6: 0,
      buffer7: 0,
      bufferValue: 100,
      interval: 0
    }
  },
  mounted () {
    this.startBuffer()
  },

  beforeDestroy () {
    clearInterval(this.interval)
  },

  methods: {
    startBuffer () {
      this.interval = setInterval(() => {
        this.buffer1 = 90
        this.buffer2 = 75
        this.buffer3 = 90
        this.buffer4 = 60
        this.buffer5 = 80
        this.buffer6 = 70
        this.buffer7 = 60
      }, 800)
    }
  }
}
</script>
<style >
</style>
