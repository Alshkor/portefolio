<template>
  <v-container grid-list-xl>
    <h2 class="pl-4">
      <span>Games</span>
      <span class="red--text"> Portfolio</span>
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
          title: 'Fortress Siege WIP',
          poster: 'https://i.imgur.com/yKEyklj.jpg',
          demo: true,
          href: 'https://www.youtube.com/embed/P2y_fUtwg_Q',
          description: 'For my last project in school, I want to make a game that was on my mind since some times and use' +
            ' what I have learned during previous course. This project is made using Unreal engine in multiplayer.' +
            '\n' +
            'This game is inspired by Dwarf Heim on a tower defense basis where one player is playing the tower defense by ' +
            'placing towers and upgrading them and the other player is playing a strategy game where the player must manage ' +
            'the ressource generation.\n' +
            'The following trailer was made after 2 months of development and does not represent the complete project we want to achieve, but it already gives a good idea of the game\'s aesthetics.',
          has_link: false,
          descr_link: ' ',
          link: '',
          role: 'Unreal Developer',
          team: [
            {
              name: 'Quentin Morel "Im-Rises"',
              link: 'https://im-rises.github.io/',
              role: 'Unreal developer'
            }
          ],
          tech: [
            'Unreal engine',
            'Online'
          ]
        },
        {
          dialog: false,
          title: 'Infiltrate AI',
          poster: 'https://i.imgur.com/8CmJs8c.png',
          demo: true,
          href: 'https://www.youtube.com/embed/CW93WIYNiDU',
          description: 'This game was made as part of the serious games course with the theme "Demystifying AI". In ' +
            'this game, we wanted to demystify one of the categories of AI: Behaviour Trees. It is an infiltration ' +
            'game where the player must outsmart the AIs by changing their behavior tree.',
          has_link: false,
          descr_link: '',
          link: '',
          role: 'Unreal Developer',
          team: [
            {
              name: 'Jules Linard "Midejyst"',
              link: 'https://midejyst.itch.io/',
              role: 'Unreal developer'
            },
            {
              name: 'Alexis Roville "Fromiel"',
              link: 'https://fromiel.itch.io/',
              role: 'Unreal Developer'
            },
            {
              name: 'Léane Hauteville',
              role: 'Unreal Developer'
            },
            {
              name: 'Clémence Clavel',
              role: 'Unreal Developer'
            },
            {
              name: 'Hugo Da Maïa',
              role: 'Unreal Developer'
            }
          ],
          tech: [
            'Unreal',
            'AI'
          ]
        },
        {
          dialog: false,
          title: 'Pocket Maths',
          poster: 'https://i.imgur.com/84VRxzC.png',
          demo: true,
          href: 'https://www.youtube.com/embed/WyBaDUyJZxI',
          description: 'This project aims to be a serious game that teaches children mathematics. The game is based on ' +
            'Pokemon, with entities specific to the game universe that can be captured and trained (called "Numbersters").' +
            ' However, unlike battles in Pokemon, the Numbersters\' attacks are mathematical operations that the player must ' +
            'successfully complete to inflict damage on their opponent.',
          has_link: false,
          descr_link: ' ',
          link: '',
          role: 'Unity Developer',
          team: [
            {
              name: 'Pierre Fourré',
              role: 'Unity developer'
            },
            {
              name: 'Louise Benharira',
              role: 'Unity developer'
            },
            {
              name: 'Noémie Lempereur',
              role: 'Unity developer'
            },
            {
              name: 'Lora Poupart',
              role: 'Unity Developer'
            }
          ],
          tech: [
            'UNITY',
            '2D'
          ]
        },
        {
          dialog: false,
          title: 'Academic Apocalypse',
          poster: 'https://i.imgur.com/qQAMEtn.png',
          demo: true,
          href: 'https://www.youtube.com/embed/d-1Fsqw9no8',
          description: 'This project was made during our network course. This game is a zombie like where you can pick up weapons' +
            'and shoot at zombies with your friends.',
          has_link: false,
          descr_link: ' ',
          link: '',
          role: 'Unreal Developer',
          team: [
            {
              name: 'Jules Linard "Midejyst"',
              link: 'https://midejyst.itch.io/',
              role: 'Unreal developer'
            },
            {
              name: 'Gabriel Reboul',
              link: 'https://spiryti.itch.io/',
              role: 'Unreal developer'
            },
            {
              name: 'Quentin Morel "Im-Rises"',
              link: 'https://im-rises.github.io/',
              role: 'Unreal developer'
            },
            {
              name: 'Alexis Roville "Fromiel"',
              link: 'https://fromiel.itch.io/',
              role: 'Unreal Developer'
            }
          ],
          tech: [
            'Unreal',
            'Network'
          ]
        },
        {
          dialog: false,
          title: 'The Last Exodus',
          poster: 'https://i.imgur.com/AB4QcIk.png',
          demo: true,
          href: 'https://www.youtube.com/embed/x-r3R1TWStU',
          description: 'Game created during my dual degree at UQAC for the course of Video Game Development and Design.\n\n' +
          'Synopsis: It is the year 54210, and Earth is dying. Fortunately, the last survivors have found a legendary ' +
            'and mysterious spaceship before flying off into the stars. Lost in the infinity of the universe, they will ' +
            'have to rebuild their new home in this spaceship and face the various dangers of space to hope to survive. ' +
            'The world of this era is full of dangers, and the crew of the Last Exodus will have to find ways to survive and thrive.',
          has_link: true,
          descr_link: 'Downloadable build : ',
          link: 'https://fromiel.itch.io/le-dernier-exode',
          role: 'Unity Developer',
          team: [
            {
              name: 'Mathieu Baesen "Mathxxl"',
              link: 'https://mathxxl.itch.io/',
              role: 'Unity Developer'
            },
            {
              name: 'Quentin Morel "Im-Rises"',
              link: 'https://im-rises.github.io/',
              role: 'Unity Developer'
            },
            {
              name: 'Alexis Roville "Fromiel"',
              link: 'https://fromiel.itch.io/',
              role: 'Unity Developer'
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
          description: 'Game created during the Global Game Jam 2023. It\'s a small, calm, and fast-paced management game.\n\n' +
              'Synopsis: Manage the roots of a tree to grow as much as possible. Be careful not to spread too quickly, ' +
            'or diseases and weather conditions may get the best of you!',
          has_link: true,
          descr_link: 'Playable in browser : ',
          link: 'https://mathxxl.itch.io/roots-of-ceres',
          role: 'Unity Developer',
          team: [
            {
              name: 'Mathieu Baesen "Mathxxl"',
              link: 'https://mathxxl.itch.io/',
              role: 'Unity Developer'
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
          description: 'Game created during a game jam organized by ENSIIE as part of the 50th anniversary of archaeological ' +
            'excavations on the site of Étiolles. We were in contact with archaeologists and historians specializing in ' +
            'the Magdalenian culture (a period of the Paleolithic era).\n\n' +
          'Synopsis: You are an archaeologist catapulted back to the Paleolithic era, struggling to survive against the ' +
            'cold and wild beasts alongside a tribe of Magdalenians.',
          has_link: true,
          descr_link: 'Playable in browser : ',
          link: 'https://mathxxl.itch.io/etiolless-traveler',
          role: 'Unity Developer',
          team: [
            {
              name: 'Mathieu Baesen "Mathxxl"',
              link: 'https://mathxxl.itch.io/',
              role: 'Unity Developer'
            },
            {
              name: 'Alexis Roville "Fromiel"',
              link: 'https://fromiel.itch.io/',
              role: 'Unity Developer'
            },
            {
              name: 'Gaël Courmont',
              link: 'https://www.linkedin.com/in/gael-courmont-8a7906167/',
              role: 'Unity Developer'
            },
            {
              name: 'Gabriel Reboul',
              link: 'https://spiryti.itch.io/',
              role: 'Unity Developer'
            },
            {
              name: 'Éléa Gadéa',
              link: 'https://www.linkedin.com/in/eleag/?locale=en_US',
              role: 'Unity Developer'
            },
            {
              name: 'Jules Linard "Midejyst"',
              link: 'https://midejyst.itch.io/',
              role: 'Unity Developer'
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
          description: 'Game created during a game jam (Unijam 2022) with a team made up of students in a double degree ' +
            'program at UQAC. It\'s a runner game (in the same style as Geometry Dash, Subway Surfer, or Jetpack Joyride) ' +
            'where the player must collect various materials and sell them at the right places to earn the maximum number of points.',
          has_link: true,
          descr_link: 'Playable in browser : ',
          link: 'https://mathxxl.itch.io/trader-runner',
          role: 'Unity Developer',
          team: [
            {
              name: 'Mathieu Baesen "Mathxxl"',
              link: 'https://mathxxl.itch.io/',
              role: 'Unity Developer'
            },
            {
              name: 'Gabriel Reboul',
              link: 'https://spiryti.itch.io/',
              role: 'Unity Developer'
            },
            {
              name: 'Alexis Roville "Fromiel"',
              link: 'https://fromiel.itch.io/',
              role: 'Unity Developer'
            },
            {
              name: 'Jules Linard "Midejyst"',
              link: 'https://midejyst.itch.io/',
              role: 'Unity Developer'
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
          description: 'Game developed during the second semester of my second year of engineering school as a project ' +
            'for the Game Development 2 course. It is a Touhou-inspired bullet hell shoot\'em up game.',
          has_link: true,
          descr_link: 'Playable in browser : ',
          link: 'https://mathxxl.itch.io/higashikata',
          role: 'Unity Developer',
          team: [
            {
              name: 'Mathieu Baesen "Mathxxl"',
              link: 'https://mathxxl.itch.io/',
              role: 'Unity Developer'
            },
            {
              name: 'Jules Linard "Midejyst"',
              link: 'https://midejyst.itch.io/',
              role: 'Unity Developer'
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
          description: 'Game made during a Global Game Jam 2022.\n\n' +
          'Synopsis: Face the dangers of a fairy train with the help of an angel and a demon and try to reach the exit!',
          has_link: true,
          descr_link: 'Downloadable build : ',
          link: 'https://globalgamejam.org/2022/games/fireflies-express-1',
          role: 'Unity Developer',
          team: [
            {
              name: 'Mathieu Baesen',
              link: 'https://mathxxl.itch.io/',
              role: 'Unity Developer'
            },
            {
              name: 'Gaël Courmont',
              link: 'https://www.linkedin.com/in/gael-courmont-8a7906167/',
              role: 'Unity Developer'
            },
            {
              name: 'Jules Linard "Midejyst"',
              link: 'https://midejyst.itch.io/',
              role: 'Unity Developer'
            },
            {
              name: 'Gato Bryan Amegnido"',
              link: 'https://www.linkedin.com/in/gato-bryan-amegnido-56a91a1b6/?originalSubdomain=fr',
              role: '2D artist'
            },
            {
              name: '"Momo Neutral""',
              link: 'https://www.instagram.com/neutral.momo/',
              role: '2D artist'
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
          description: 'Game created as a end-of-semester project for the course of Game Development. It\'s a tower ' +
            'defense game where we have to defend ourselves against Christmas creatures.',
          has_link: false,
          descr_link: 'Downloadable build : ',
          link: 'https://github.com/Alshkor/Projet-DJV',
          role: 'Unity Developer',
          team: [
            {
              name: 'Mathieu Baesen "Mathxxl"',
              link: 'https://mathxxl.itch.io/',
              role: 'Unity Developer'
            },
            {
              name: 'Jules Linard "Midejyst"',
              link: 'https://midejyst.itch.io/',
              role: 'Unity Developer'
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
          description: 'Project undertaken parallel to my coursework to test my skills after completing a massive open ' +
            'online course (MOOC) in virtual and augmented reality. The project aims to make "Christmas Carnage," which ' +
            'I previously developed, playable with a virtual reality headset.',
          has_link: false,
          descr_link: 'Downloadable build : ',
          link: 'https://github.com/Alshkor/Projet-DJV',
          role: 'Unity Developer',
          team: [],
          tech: [
            'UNITY',
            '3D'
          ]
        },
        {
          dialog: false,
          title: 'Market and broken hearts',
          poster: 'https://imgur.com/j0YF0WK.png',
          demo: false,
          demo_image: 'https://imgur.com/4Poy5y5.png',
          href: '',
          description: 'Game developed during a game jam (Unijam 2021). It was my first experience in a game jam.\n\n' +
          'Synopsis: You are a junk dealer in the depths of Alsace-Lorraine. Unfortunately, while life was not too hard ' +
            'on your wife and two children, your father has just fallen seriously ill. You are in a race against time to ' +
            'earn enough money to save him. Sell your items to passers-by in this lost village, but be careful: your ' +
            'reputation as a junk dealer could suffer from your actions.',
          has_link: true,
          descr_link: 'Downloadable build :  ',
          link: 'https://biscuitprime.itch.io/brocante-coeurs-brises',
          role: 'Unity Developer',
          team: [
            {
              name: 'Mathieu Baesen "Mathxxl"',
              link: 'https://mathxxl.itch.io/',
              role: 'Unity Developer'
            },
            {
              name: 'Henri Nomico "Biscuit Prime"',
              link: 'https://biscuitprime.itch.io/',
              role: 'Unity Developer'
            },
            {
              name: 'Sulray',
              link: 'https://sulray.itch.io/',
              role: 'Unity Developer'
            },
            {
              name: 'Alexandre "Flegmatik"',
              link: 'https://flegmatik-surf.itch.io/',
              role: 'Unity Developer'
            },
            {
              name: 'Prométhée Toneatti "Akasunaa"',
              link: 'https://akasunaa.github.io/',
              role: 'Unity Developer'
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
          description: 'An exploration game made during the summer of my first year in engineering school. The game was' +
            ' created as part of an entrepreneurial experiment where, with two other students, Mathieu Baesen and Harry' +
            ' Hung, we simulated the birth of a video game studio as a self-employed individual.\n\n' +
          'This game is my first big project on Unity, although I have created a few small personal projects to try out the game engine and discover its features.',
          has_link: true,
          descr_link: 'Downloadable build : ',
          link: 'https://magiasunheat.itch.io/aux-confins-du-monde',
          role: 'Unity Developer',
          team: [
            {
              name: 'Mathieu Baesen "Mathxxl"',
              link: 'https://mathxxl.itch.io/',
              role: 'Unity Developer'
            },
            {
              name: 'Harry Hung "Raydhox"',
              link: '',
              role: '3D artist'
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
          description: 'First university project carried out with 4 other students. It is a board game made in C with ' +
            'a graphical interface.',
          has_link: false,
          descr_link: '',
          link: '',
          role: 'C Developer',
          team: [
            {
              name: 'Maximilien Schollaert',
              link: 'https://github.com/Rivainzo',
              role: 'C Developer'
            },
            {
              name: 'Jules Linard "Midejyst"',
              link: 'https://midejyst.itch.io/',
              role: 'C Developer'
            },
            {
              name: 'Thomas Idziejczak',
              link: 'https://github.com/Wickdhub',
              role: 'C Developer'
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
