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


let width = 0;
let length = 0;
let isWriting = false;
let stopWriting = false;

export default {
  name: "Acceuil",
  mounted() {
      canvasText = document.getElementById("presentation");
      width = 0;
      length = 120;
      isWriting = false;
      stopWriting = false;
      //Bon l'accueil est devenue un sacré bordel mais en gros writeInAsynchronus écrit les lettres
      //les unes apres les autres, setStyleCanvas calcul la hauteur qu'il faut pour le canvas
      //Ensuite dès qu'on a écrit se que l'on voulait, on ferme le canvas et on en rouvre un avec un style
      //différent par exemple.
      canvasText.width = document.documentElement.clientWidth - 50;
      //Noir et blanc : #070b0f #7e8595
      //Marron et rouge : #191512 #781a25
      //Bleu fonce et bleu : #102542 #b4f8fb
      //Violet et pas violet : #351f67 #eacff8
      setStyleCanvas(canvasText,'50px', "#b4f8fb","sans serif", 14);
      writeText();
  },
  destroyed() {
      isWriting = false;
      stopWriting = true;
  },
}


function writeText() {
  writeCenter("Bonjour", canvasText);
  passLine();
  writeInAsynchronus("Bienvenue sur mon site internet, je me présente, Axel, j'adore créé des jeux vidéos et réaliser différents projets informatiques. N'hésitez pas à me contacter au travers des différents liens inscrits sur le site.", canvasText);
  stopWriting = false;
}


function getMot(sentence) {
  let mot = "",
      new_sentence = "";
  if(sentence[0] === " ") {
    mot = " ";
    new_sentence = sentence.slice(1);
    return {
      mot,
    new_sentence
    };
  }
  for(let i = 0; i < sentence.length; i++) {
    if(sentence[i] === " ") {
        new_sentence = sentence.slice(i);
        return {
          mot,
          new_sentence
        };
      }
      else {
        mot = mot + sentence[i];
      }
  }
  return {
    mot,
    new_sentence
  };
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
    let mot = getMot(sentence);
    if(width + canvas.getContext("2d").measureText(mot.mot).width >= canvas.width) {
      width = 0;
      length += 60;
    }
    for(let j = 0; j < mot.mot.length ; j++) {
      await writeLetters(mot.mot[j], 50, canvas.getContext("2d"));
      width += canvas.getContext("2d").measureText(mot.mot[j]).width;
    }
      sentence = mot.new_sentence;
  }
  isWriting = false;
}

async function passLine() {
  while(isWriting) {
    await new Promise(resolve => {
      setTimeout(function () {resolve('1')}, 500);
    });
  }
  length += 60;
}

async function writeCenter(sentence, canvas) {
  while(isWriting) {
    await new Promise(resolve => {
      setTimeout(function () {resolve('1')}, 500);
    });
  }
  isWriting = true;
  let lengthSentence = sentence.length;
  width = (canvas.width - canvas.getContext("2d").measureText(sentence).width) / 2;
  length += 60;
  for(let i = 0; i < lengthSentence ; i++) {
    if(width + canvas.getContext("2d").measureText(sentence[i]).width >= canvas.width) {
      width = 0;
      length += 60;
    }
    await writeLetters(sentence[i], 50,canvas.getContext("2d"));
    width += canvas.getContext("2d").measureText(sentence[i]).width;
  }
  length += 60;
  width = 0;
  isWriting = false;
}
/*
function calculLength(sentence, canvas) {
  let tempWidth = 0;
  let returnLength = 50;
  for(let i = 0; i < sentence.length ; i++) {
    if(tempWidth + canvas.getContext("2d").measureText(sentence[i]).width >= canvas.width) {
      tempWidth = 0;
      returnLength += 60;
    }
    tempWidth += canvas.getContext("2d").measureText(sentence[i]).width;
  }
  return returnLength;
}
*/

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

/*
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
}*/


//Nb_lines correspond au nombre de ligne que l'on va ecrire dans le canvas
function setStyleCanvas(canvas, fontSize, fontColor, font, nb_lines) {
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = fontColor;
  ctx.font = fontSize + " " + font;
  canvas.height = length + nb_lines*60;
  ctx.fillStyle = fontColor;
  ctx.font = fontSize + " " + font;
}



</script>

<style scoped>

</style>