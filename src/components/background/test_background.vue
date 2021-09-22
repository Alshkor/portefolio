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
    draw(e) {
      if(canvas == null) {
        this.drawCanvas();
      }

      ctx.fillStyle = 'green';
      ctx.fillRect(e.pageX * canvas.width / (rect.left + rect.right), (e.pageY - rect.y) * canvas.height / (rect.bottom - rect.top), 10, 10);
    },
    clear() {
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    },
    drawCanvas() {
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