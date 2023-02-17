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
          <v-card-text>
            <h3>Description</h3>
          </v-card-text>
          <v-card-text>
            <p>{{game.description}}</p>
          </v-card-text>
          <v-card-text  v-if="game.has_link">
            <h3>Link</h3>
          </v-card-text>
          <v-card-text  v-if="game.has_link">
            <p>{{game.descr_link}}</p><a :href="game.link">{{game.link}}</a>
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

          <v-card-text  v-if="game.team.length > 0">
            <h3>Team</h3>
          </v-card-text>

          <v-card-text>
          <v-flex v-for="teammate in game.team" :key="teammate.name">

              <a :href="teammate.link">{{teammate.name}}</a> <h> | {{teammate.role}}</h>

          </v-flex>
          </v-card-text>

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
          title: 'Le dernier exode',
          poster: 'https://i.imgur.com/AB4QcIk.png',
          demo: true,
          href: 'https://www.youtube.com/embed/x-r3R1TWStU',
          description: 'Jeu réalisé pendant mon double diplôme à l\'UQAC pour le cours de Développement et conception de Jeux vidéo.\n\n' +
            'Synopsis : Nous sommes en l’an 54210 et la Terre se meurt. Heureusement les derniers survivants ont trouvé\n' +
            'un vaisseau légendaire et mystérieux avant de s’envoler vers les étoiles. Perdus dans l’infinité de\n' +
            'l’univers, ils vont devoir reconstruire leur nouveau foyer dans ce vaisseau et faire face aux divers dangers de l’espace pour espérer survivre.\n' +
            'Le monde de cette époque est plein de dangers et l\'équipage de la dernière exode va devoir trouver les moyens pour survivre et prospérer.',
          has_link: true,
          descr_link: 'Build téléchargeable : ',
          link: 'https://fromiel.itch.io/le-dernier-exode',
          role: 'Développeur Unity',
          team: [
            {
              name: 'Mathieu Baesen "Mathxxl"',
              link: 'https://mathxxl.itch.io/',
              role: 'Développeur Unity'
            },
            {
              name: 'Quentin Morel "Im-Rises"',
              link: 'https://im-rises.github.io/',
              role: 'Développeur Unity'
            },
            {
              name: 'Alexis Roville "Fromiel"',
              link: 'https://fromiel.itch.io/',
              role: 'Développeur Unity'
            }
          ],
          tech: [
            'UNITY',
            '2D'
          ]
        },
        {
          dialog: false,
          title: 'Roots of Ceres',
          poster: 'https://i.imgur.com/h5oeeC9.png',
          demo: true,
          href: 'https://www.youtube.com/embed/_SrKwK87QSE',
          description: 'Jeu réalisé pendant la Global Game Jam 2023. C\'est un petit jeu de gestion calme et rapide.\n\n' +
            'Synopsis : Gérer les racines d\'un arbre pour vous développer au maximum. Attention de ne pas vous étendre trop rapidement' +
            ' ou les maladies et les conditions climatiques pourraient avoir raison de vous !',
          has_link: true,
          descr_link: 'Jouable par navigateur : ',
          link: 'https://mathxxl.itch.io/roots-of-ceres',
          role: 'Développeur Unity',
          team: [
            {
              name: 'Mathieu Baesen "Mathxxl"',
              link: 'https://mathxxl.itch.io/',
              role: 'Développeur Unity'
            }
          ],
          tech: [
            'UNITY',
            '2D'
          ]
        },
        {
          dialog: false,
          title: 'Étiole\'s Traveler',
          poster: 'https://i.imgur.com/EGpOIzk.jpg',
          demo: true,
          href: 'https://www.youtube.com/embed/gC-6ci2O8os',
          description: 'Jeu réalisé pendant une game jam organisée par l\'ENSIIE dans le cadre des 50 ans de fouilles ' +
            'archéologiques sur le site d\'Étiolles. Nous étions en contact avec des archéologues et historiens ' +
            'spécialistes des Magdaléniens (aire du paléolithique).\n\n' +
            'Synopsis : Vous êtes un archéologue catapulté au paléolithique qui lutte pour survivre contre le froid ' +
            'et les bètes sauvages aux côté d\'une tribu de magdaléniens.',
          has_link: true,
          descr_link: 'Jouable par navigateur : ',
          link: 'https://mathxxl.itch.io/etiolless-traveler',
          role: 'Développeur Unity',
          team: [
            {
              name: 'Mathieu Baesen "Mathxxl"',
              link: 'https://mathxxl.itch.io/',
              role: 'Développeur Unity'
            },
            {
              name: 'Alexis Roville "Fromiel"',
              link: 'https://fromiel.itch.io/',
              role: 'Développeur Unity'
            },
            {
              name: 'Gaël Courmont',
              link: 'https://www.linkedin.com/in/gael-courmont-8a7906167/',
              role: 'Développeur Unity'
            },
            {
              name: 'Gabriel Reboul',
              link: 'https://spiryti.itch.io/',
              role: 'Développeur Unity'
            },
            {
              name: 'Éléa Gadéa',
              link: 'https://www.linkedin.com/in/eleag/?locale=en_US',
              role: 'Développeur Unity'
            },
            {
              name: 'Jules Linard "Midejyst"',
              link: 'https://midejyst.itch.io/',
              role: 'Développeur Unity'
            }
          ],
          tech: [
            'UNITY',
            '2D'
          ]
        },
        {
          dialog: false,
          title: 'Trader Runner',
          poster: 'https://i.imgur.com/GsQmBGO.png',
          demo: true,
          href: 'https://www.youtube.com/embed/ZT6KAELQvwk',
          description: 'Jeu réalisé pendant une game jam (Unijam 2022) avec une équipe constitué d\'étudiants en double diplôme à l\'UQAC.\n' +
            'Il s\'agit d\'un runner (dans le même style que Geometry dash, Subway surfer ou Jetpack Joyride) où le joueur doit collecter ' +
            'divers matériaux et les revendre aux bons endroits pour gagner le maximum de points.',
          has_link: true,
          descr_link: 'Jouable par navigateur : ',
          link: 'https://mathxxl.itch.io/trader-runner',
          role: 'Développeur Unity',
          team: [
            {
              name: 'Mathieu Baesen "Mathxxl"',
              link: 'https://mathxxl.itch.io/',
              role: 'Développeur Unity'
            },
            {
              name: 'Gabriel Reboul',
              link: 'https://spiryti.itch.io/',
              role: 'Développeur Unity'
            },
            {
              name: 'Alexis Roville "Fromiel"',
              link: 'https://fromiel.itch.io/',
              role: 'Développeur Unity'
            },
            {
              name: 'Jules Linard "Midejyst"',
              link: 'https://midejyst.itch.io/',
              role: 'Développeur Unity'
            }
          ],
          tech: [
            'UNITY',
            '2D'
          ]
        },
        {
          dialog: false,
          title: 'Higashikata',
          poster: 'https://i.imgur.com/Wzvk3P6.png',
          demo: true,
          href: 'https://www.youtube.com/embed/8YeNXyrNjO8',
          description: 'Jeu réalisé pendant le second semestre de ma deuxième année d\'école d\'ingénieur comme projet pour' +
            ' le cours de Développement de Jeux vidéo 2. Il s\'agit d\'un shoot\'em up bullet hell inspiré de Touhou',
          has_link: true,
          descr_link: 'Jouable par navigateur : ',
          link: 'https://mathxxl.itch.io/higashikata',
          role: 'Développeur Unity',
          team: [
            {
              name: 'Mathieu Baesen "Mathxxl"',
              link: 'https://mathxxl.itch.io/',
              role: 'Développeur Unity'
            },
            {
              name: 'Jules Linard "Midejyst"',
              link: 'https://midejyst.itch.io/',
              role: 'Développeur Unity'
            }
          ],
          tech: [
            'UNITY',
            '2D'
          ]
        },
        {
          dialog: false,
          title: 'The Fireflies Express',
          poster: 'https://i.imgur.com/pqxqFIL.png',
          demo: true,
          href: 'https://youtube.com/embed/KYu0GYQfNEE',
          description: 'Jeu réalisé en Game jam (Global gam jam 2022).\n\n' +
            'Synopsis : Fait face aux dangers d\'un train féérique avec l\'aide d\'un ange et d\'un démon et ' +
            'essaie d\'atteindre la sortie !',
          has_link: true,
          descr_link: 'Build téléchargeable : ',
          link: 'https://globalgamejam.org/2022/games/fireflies-express-1',
          role: 'Développeur Unity',
          team: [
            {
              name: 'Mathieu Baesen',
              link: 'https://mathxxl.itch.io/',
              role: 'Développeur Unity'
            },
            {
              name: 'Gaël Courmont',
              link: 'https://www.linkedin.com/in/gael-courmont-8a7906167/',
              role: 'Développeur Unity'
            },
            {
              name: 'Jules Linard "Midejyst"',
              link: 'https://midejyst.itch.io/',
              role: 'Développeur Unity'
            },
            {
              name: 'Gato Bryan Amegnido"',
              link: 'https://www.linkedin.com/in/gato-bryan-amegnido-56a91a1b6/?originalSubdomain=fr',
              role: 'Graphiste 2D'
            },
            {
              name: '"Momo Neutral""',
              link: 'https://www.instagram.com/neutral.momo/',
              role: 'Graphiste 2D'
            }
          ],
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
          description: 'Jeu réalisé comme projet de fin de semestre pour le cours de Développement de Jeux vidéo. C\'est un tower defense' +
            ' où nous devons nous défendre contre des créatures de noël.',
          has_link: false,
          descr_link: 'Build téléchargeable : ',
          link: 'https://github.com/Alshkor/Projet-DJV',
          role: 'Développeur Unity',
          team: [
            {
              name: 'Mathieu Baesen "Mathxxl"',
              link: 'https://mathxxl.itch.io/',
              role: 'Développeur Unity'
            },
            {
              name: 'Jules Linard "Midejyst"',
              link: 'https://midejyst.itch.io/',
              role: 'Développeur Unity'
            }
          ],
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
          description: 'Projet réalisé en parallèle de mes cours pour tester mes compétences après la réalisation d\'un ' +
            'MOOC (massive open online course) en réalité virtuelle et augmentée. Le projet vise a rendre jouable "Christmas Carnage", que ' +
            'j\'ai développé précédemment, avec un casque de réalité virtuelle.',
          has_link: false,
          descr_link: 'Build téléchargeable : ',
          link: 'https://github.com/Alshkor/Projet-DJV',
          role: 'Développeur Unity',
          team: [],
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
          description: 'Jeu réalisé pendant une game jam (Unijam 2021). C\'était ma première expérience en game jam.\n\n' +
            'Synopsis : Vous êtes un brocanteur au fin fond de l’Alsace-Lorraine. Hélas, si la vie n’était pas trop ' +
            'dur avec votre femme et vos deux enfants, votre père vient de tomber très malade. Vous êtes dans une course ' +
            'contre la montre pour gagner suffisamment d’argent pour le sauver.\n' +
            'Vendez vos objets aux passants de ce village perdu mais prenez garde : votre réputation de brocanteur pourrait ' +
            'pâtir de vos actions.',
          has_link: true,
          descr_link: 'Build téléchargeable : ',
          link: 'https://biscuitprime.itch.io/brocante-coeurs-brises',
          role: 'Développeur Unity',
          team: [
            {
              name: 'Mathieu Baesen "Mathxxl"',
              link: 'https://mathxxl.itch.io/',
              role: 'Développeur Unity'
            },
            {
              name: 'Henri Nomico "Biscuit Prime"',
              link: 'https://biscuitprime.itch.io/',
              role: 'Développeur Unity'
            },
            {
              name: 'Sulray',
              link: 'https://sulray.itch.io/',
              role: 'Développeur Unity'
            },
            {
              name: 'Alexandre "Flegmatik"',
              link: 'https://flegmatik-surf.itch.io/',
              role: 'Développeur Unity'
            },
            {
              name: 'Prométhée Toneatti "Akasunaa"',
              link: 'https://akasunaa.github.io/',
              role: 'Développeur Unity'
            }
          ],

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
          description: 'Un jeu d\'exploration réalisé pendant l\'été de ma première année en école d\'ingénieur. ' +
            'Le jeu a été réalisé dans le cadre d\'une expérience entreprenatiale où, avec 2 autres étudiants, ' +
            'Mathieu Baesen et Harry Hung, nous avons simulé la naissance d\'un studio de jeu vidéo en auto-entrepreneur.' +
            '\n\n Ce jeu est mon premier gros projet sur Unity, bien que j\'ai réalisé quelques petits projets ' +
            'personnels pour essayer le moteur de jeu et découvrir ses fonctionnalités',
          has_link: true,
          descr_link: 'Build téléchargeable : ',
          link: 'https://magiasunheat.itch.io/aux-confins-du-monde',
          role: 'Développeur Unity',
          team: [
            {
              name: 'Mathieu Baesen "Mathxxl"',
              link: 'https://mathxxl.itch.io/',
              role: 'Développeur Unity'
            },
            {
              name: 'Harry Hung "Raydhox"',
              link: '',
              role: 'Graphiste 3D'
            }
          ],
          tech: [
            'UNITY',
            '3D'
          ]
        },
        {
          dialog: false,
          title: 'Environment line',
          poster: 'https://i.imgur.com/AhuS5LF.jpg',
          demo: false,
          demo_image: 'https://i.imgur.com/rt2Eozx.png',
          href: '',
          description: 'Premier projet universitaire réalisé avec 4 autres étudiants. Il s\'agit d\'un jeu de plateau réalisé en C avec une interface graphique.',
          has_link: false,
          descr_link: '',
          link: '',
          role: 'Développeur Unity',
          team: [
            {
              name: 'Maximilien Schollaert',
              link: 'https://github.com/Rivainzo',
              role: 'Développeur C'
            },
            {
              name: 'Jules Linard "Midejyst"',
              link: 'https://midejyst.itch.io/',
              role: 'Développeur C'
            },
            {
              name: 'Thomas Idziejczak',
              link: 'https://github.com/Wickdhub',
              role: 'Développeur C'
            }
          ],
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
