<template>
    <div class="music-list">
     <img v-for="obj in musicList" :key="obj.id" :src="obj.bg" @click="$router.push({path:'/MusicDetail',query:{id:obj.id}})" alt=""/>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                musicList:[]
            }
        },
        created(){
            axios.get('data/musiclist.json')
            .then((res)=>{
                console.log(res.data.albums)
                this.musicList=res.data.albums
            }).catch((err)=>{
                console.log(err)
            })
    }
    }
</script>

<style lang="scss" scoped>
.music-list{
    padding:0.1rem;
    img{
        margin-right: 0.1rem;
    }
}
</style>