<template>
    <div v-on:load="drawCanvas"  >
      <canvas class="fullPage" id="canvas" v-on:mousemove="draw" v-on:mouseleave="clear">Bla

      </canvas>
    </div>

</template>

<script>
let canvas;
let rect;
let ctx;

export default {
  name: "test_background",
  methods: {
    draw(event) {       //Fonction pour dessiner, event représente l'event avec lequel on déclenche (je crois) donc ici c 'est un truc de souris
                        //donc event.pageX nous donne l'emplacement de la souris sur l'élément
      if(canvas == null) {
        this.drawCanvas();
      }
      ctx.fillStyle = 'green';  //On remplie en vert dégueulasse

      var x = event.pageX * canvas.width / (rect.left + rect.right);  //Faut replacer les coordonées dans le canvas donc j'ai piffé jusqu'a avoir ca
      var y = (event.pageY - rect.y) * canvas.height / (rect.bottom - rect.top);
      ctx.fillRect(x, y, 10, 10);   //On dessine le rectangle
      setTimeout(function() {      //Au bout de 1000 millisecondes, on clear le rectangle sur lequel on a dessiner
        ctx.fillStyle = 'white';
        ctx.clearRect(x-2, y-2, 15, 15);
      }, 1000);
      },
    clear() {   //J enleverai surement cette fonction jsp
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    },
    drawCanvas() {    //On initialise le canvas au chargement de la page pour eviter les calcul relou dans draw
      console.log("on load playing");
      canvas = document.getElementById("canvas");
      canvas.height = 400;
      canvas.width = 1500;
      rect = canvas.getBoundingClientRect();
      ctx = canvas.getContext("2d");
    }
  }
};



</script>

<style scoped>
.fullPage {
  position: sticky;
  margin: 0;
  height: 100%;
  width: 100%;
}



</style>