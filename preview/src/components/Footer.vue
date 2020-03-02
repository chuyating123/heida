<template>
    <footer :style="{background:$store.state.color}">
            <router-link v-for="(obj,index) in menu" :key="index" :to="obj.path" @click.native="$store.commit('change',obj)">{{obj.name}}
           </router-link>
    </footer>
    
</template>

<script>
    export default {
        data(){
            return{
                menu:[
                    {
                        path:"/Movie",
                        name:"电影",
                        color:"purple"
                    },
                     {
                        path:"/Music",
                        name:"音乐",
                        color:"pink"
                    },
                     {
                        path:"/Book",
                        name:"图书",
                        color:"blue"
                    },
                     {
                        path:"/Photo",
                        name:"图片",
                        color:"green"
                    },
                ]
            }
        },
        created(){
            this.menu.forEach((obj)=>{
             if(this.$route.path==obj.path){
                 this.$store.commit('change',obj);
             }
            })
        }
        
    }
</script>

<style lang="scss" scoped>
footer{
    background: red;
    width: 100%;
    height: 1rem;
    position: fixed;
    bottom: 0;
    text-align: center;
    line-height: 1rem;
     display: flex;
     a{
            flex:1;
            text-align: center;
            color:#000;
            font-size: 14px;
            cursor: pointer;
        }
        .router-link-active{
            color:#fff;
            text-decoration: none;
            cursor: pointer;
        }
}
</style>