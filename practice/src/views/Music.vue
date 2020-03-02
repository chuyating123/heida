<template>
    <div>
    <img v-for="obj in musiclist" :key="obj.id" :src="obj.bg" alt="">
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                musiclist:[]
            }
        },
        created(){
            axios.get('data/musiclist.json')
            .then((res)=>{
            this.musiclist=res.data.albums
            })
            .catch((res)=>{
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