<template>
    <div >
   <img v-for="obj in Musiclist" :key="obj.id" :src="obj.bg" alt="" @click="$router.push({path:'/MusicDetail',query:{id:obj.id}})">
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                Musiclist:[]
            }
        },
        created(){
            axios.get('data/musiclist.json')
        .then((res)=>{
            this.Musiclist=res.data.albums
        }).catch((res)=>{
            console.log(res)
        })
        }
    }
</script>

<style lang="scss" scoped>
img{
    width: 50%;
    float: left;
}
</style>