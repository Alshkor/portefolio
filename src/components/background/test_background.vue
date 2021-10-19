<template>
    <div>
      <canvas class="fullPage" id="canvas" v-on:mouseenter="positionPath" v-on:mousemove="draw" v-on:mouseleave="clear">Bla
      </canvas>
    </div>
</template>

<script>
let canvas;
let rect;
let ctx;
let point_precedent;
let point_precedent_efface;


export default {
  methods: {
    draw(event) {       //Fonction pour dessiner, event représente l'event avec lequel on déclenche (je crois) donc ici c 'est un truc de souris
      //donc event.pageX nous donne l'emplacement de la souris sur l'élément
      if(canvas == null) {
        this.drawCanvas();
      }
      ctx.lineWidth = 1;


      if(event.buttons === 0) {
        ctx.fillStyle = 'green';  //On remplie en vert dégueulasse
        ctx.strokeStyle = 'green';  //On remplie en vert dégueulasse
      }
      else if(event.buttons === 1) {
        ctx.fillStyle = 'red';  //On remplie en rouche dégueulasse
        ctx.strokeStyle = 'red';  //On remplie en rouche dégueulasse
      }
      else if (event.buttons === 2) {
        ctx.fillStyle = 'yellow';
        ctx.strokeStyle = 'yellow';
      }
      else if (event.buttons === 3){
        ctx.fillStyle = 'blue';
        ctx.strokeStyle = 'blue';
      }
      else {
        ctx.fillStyle = `rgb(
            ${Math.random() * 255},
            ${Math.random() * 255},
            ${Math.random() * 255}
        )`;
        ctx.strokeStyle = `rgb(
            ${Math.random() * 255},
            ${Math.random() * 255},
            ${Math.random() * 255}
        )`;
      }
      var x = event.pageX * canvas.width / (rect.left + rect.right);  //Faut replacer les coordonées dans le canvas donc j'ai piffé jusqu'a avoir ca
      var y = (event.pageY - rect.y) * canvas.height / (rect.bottom - rect.top);
      //ctx.fillRect(x, y, 10, 10);   //On dessine le rectangle
      ctx.beginPath();
      ctx.moveTo(point_precedent[0],point_precedent[1]);
      ctx.lineTo(x,y);
      ctx.closePath();
      ctx.stroke();

      point_precedent = [x, y];
      setTimeout(function() {      //Au bout de 1000 millisecondes, on clear le rectangle sur lequel on a dessiner
        ctx.fillStyle = 'white';
        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;

        ctx.beginPath();
        ctx.moveTo(point_precedent_efface[0],point_precedent_efface[1]);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
        point_precedent_efface = [x, y];

      }, 1000);


    },
        clear() {   //J enleverai surement cette fonction jsp
      //ctx.closePath();
      //ctx.stroke();
      //ctx.clearRect(0, 0, canvas.width, canvas.height);
    },
    positionPath(event) {
      console.log("On positionne le trait");
      point_precedent = [event.pageX * canvas.width / (rect.left + rect.right), (event.pageY - rect.y) * canvas.height / (rect.bottom - rect.top)];
      point_precedent_efface = [event.pageX * canvas.width / (rect.left + rect.right), (event.pageY - rect.y) * canvas.height / (rect.bottom - rect.top)];
      ctx.moveTo(event.pageX * canvas.width / (rect.left + rect.right),(event.pageY - rect.y) * canvas.height / (rect.bottom - rect.top));
    }
  },
  name: "test_background",
  mounted() {//On initialise le canvas au chargement de la page pour eviter les calcul relou dans draw
    console.log("Load Canvas");
    canvas = document.getElementById("canvas");
    canvas.height = 400;
    canvas.width = 1500;
    rect = canvas.getBoundingClientRect();
    ctx = canvas.getContext("2d");
  }
};



</script>

<style scoped>
.fullPage {
  position: relative;
  margin: 0;
  height: 100%;
  width: 100%;
}



</style>