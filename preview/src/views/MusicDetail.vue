<template>
  <div>
    <aplayer :music="{
    title: '平凡之路',
    artist: '朴树',
    src: 'http://m10.music.126.net/20200301000351/2ef2bc30fd678345e9159b5c8a4b9f36/ymusic/fc6d/0a5c/db75/2b16355237283456b93e133c2d8ad6ef.mp3',
    pic: 'http://p2.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg',
    lrc: 'http://localhost:8081/lrc/我要你.lrc'
    }"
    :list="musiclist"
    />
  </div>
</template>

<script>
import axios from "axios";
import Aplayer from "vue-aplayer";
export default {
    components:{
            Aplayer
        },
        data(){
            return{
                musiclist:[]
            }
        },
        created(){
            axios.get('data/musicdata.json')
            .then((res)=>{
                this.musiclist=res.data.musicData
            })
            .catch((res)=>{
                console.log(res)
            })
        }
};
</script>

<style lang="scss" scoped>
</style>