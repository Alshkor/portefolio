<template>
        <youtube :video-id="Cards['IDvideo']" :player-vars="playerVars" @playing="playing"></youtube>
</template>



<script>
import * as projet_data from "../CardProject/Cards/Cards.json";
export default {
  name: "Liens",
  props: {
    Project: String
  },
  data: function () {
    return {
      Cards: projet_data[0],
      playerVars: {
        autoplay: 1
      }
    }
  },
  mounted(){
    console.log(this.Project)
    for(var key in this.Cards){
        if(this.Cards[key]['title']===this.Project){
            this.Cards=this.Cards[key];
            break
        }
    }},
methods: {
    playing() {
      console.log(' we are watching!!!')
    }
  }
}
</script>
