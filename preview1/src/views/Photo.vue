<template>
    <div>
         <img :src="obj.src" v-for="(obj,index) in photo" :key="index" alt="">
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                photo:[]
            }
        },
        created(){
            axios.get('data/photodata.json')
            .then(res=>{
                this.photo=res.data.photoData
            })
            .catch(res=>{
                console.log(res)
            })
        }
       
    }
</script>

<style lang="scss" scoped>
.photo-list{
    img{
        width: 50%;
        float: left;
    }
}
</style>