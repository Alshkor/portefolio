<template >
  <div>
    <canvas id="presentation" class="position-relative">
    </canvas>
    <canvas id="text">

    </canvas>
  </div>
</template>

<script>
let canvasText;

let canvasTextSecondaire;

let width = 0;
let length = 0;
let isWriting = false;
let stopWriting = false;

export default {
  name: "Acceuil",
  mounted() {
      width = 0;
      length = 50;
      isWriting = false;
      stopWriting = false;
      canvasText = document.getElementById("presentation");
      //Bon l'accueil est devenue un sacré bordel mais en gros writeInAsynchronus écrit les lettres
      //les unes apres les autres, setStyleCanvas calcul la hauteur qu'il faut pour le canvas
      //Ensuite dès qu'on a écrit se que l'on voulait, on ferme le canvas et on en rouvre un avec un style
      //différent par exemple.
      canvasText.width = document.documentElement.clientWidth - 50;
      setStyleCanvas(canvasText,'50px', "#99b7c2","sans serif", this.Title);

      writeInAsynchronus(this.Title, canvasText);

      canvasTextSecondaire = document.getElementById("text");
      canvasTextSecondaire.width = document.documentElement.clientWidth;
      closeCanvas(canvasTextSecondaire, "75px", "#797760", "sans serif",this.Description);
      writeInAsynchronus(this.Description,canvasTextSecondaire);
      stopWriting = false;
  },
  destroyed() {
      isWriting = false;
      stopWriting = true;
  },
  props: {
    Title: {
      default: "Accueil e la nouves , FAKER\nVous êtes sur la pne blague évidemment)"
    },
    Description: {
      default: "On test le changement de font et de taille\nCe ne serais pas drole sans quelques phrases de plus donc les voici",
    }
  },
  data: function() {
    return {
      title: this.Title,
      description: this.Description,
    }
  }
}

async function writeInAsynchronus(sentence, canvas) {
  while(isWriting) {
    await new Promise(resolve => {
      setTimeout(function () {resolve('1')}, 500);
    });
  }
  isWriting = true;
  let lengthSentence = sentence.length;
  for(let i = 0; i < lengthSentence ; i++) {
    console.log("ctx : " + canvas.getContext("2d").font);
    if(width + canvas.getContext("2d").measureText(sentence[i]).width >= canvas.width) {
      width = 0;
      length += 60;
    }
      await writeLetters(sentence[i], 50,canvas.getContext("2d"));
      width += canvas.getContext("2d").measureText(sentence[i]).width;
  }
  isWriting = false;
}

function calculLength(sentence, canvas) {
  let tempWidth = 0;
  let returnLength = 50;
  for(let i = 0; i < sentence.length ; i++) {
    console.log("ctx : " + canvas.getContext("2d").font);
    if(tempWidth + canvas.getContext("2d").measureText(sentence[i]).width >= canvas.width) {
      tempWidth = 0;
      returnLength += 60;
    }
    tempWidth += canvas.getContext("2d").measureText(sentence[i]).width;
  }
  return returnLength;
}


function writeLetters(letter,seconds, ctx) {
  if(stopWriting) {
    return;
  }
  return new Promise(resolve => {
    setTimeout(function() {
      ctx.fillText(letter, width, length);
      resolve("Print");
    }, seconds)
  });
}


async function closeCanvas(canvas2,fontSize, fontColor, font, sentence) {
  while(isWriting) {
    await new Promise(resolve => {
      setTimeout(function () {resolve('1')}, 10);
    });
  }
  console.log("Hauteur du canvas que l'on ferme : " + length);
  console.log("On set le style du canvas");
  setStyleCanvas(canvas2, fontSize, fontColor, font, sentence);
  canvas2.style.top = length;
  width = 0;
  length = 50;
}

function setStyleCanvas(canvas, fontSize, fontColor, font, sentence) {
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = fontColor;
  ctx.font = fontSize + " " + font;
  canvas.height = length + calculLength(sentence, canvas);
  ctx.fillStyle = fontColor;
  ctx.font = fontSize + " " + font;
}



</script>

<style scoped>

</style>