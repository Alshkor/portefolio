<template >
  <div>
    <canvas id="textAccueil">
    </canvas>
  </div>
</template>

<script>
let canvasText;
let ctx;

export default {
  name: "Acceuil",
  mounted() {
      console.log("Load Accueil");
      canvasText = document.getElementById("textAccueil");
      canvasText.height = 100;
      canvasText.width = 1000;
      ctx = canvasText.getContext("2d");
      ctx.fillStyle = "blue";
      //ctx.fillRect(10,10,100,100);
      ctx.font = '50px serif';
      ctx.fillText("Accueil",50,50);
  }
}
</script>

<style scoped>

</style>