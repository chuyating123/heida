<template>
  <div>
  <img v-for="obj in music" :key="obj.id" :src="obj.bg" alt="">
  </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
        music:[]
        }
    },
  created() {
    axios.get("data/musiclist.json")
    .then(res=>{
       this.music=res.data.albums
    })
    .catch(res=>{
        console.log(res)
    })
  }
};
</script>

<style lang="scss" scoped>
img{
    width: 50%;
    float: left;
}
</style>