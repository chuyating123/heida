<template>
    <div>
    <footer :style="{background:$store.state.color}">
        <router-link v-for="(obj,index) in menu" :key="index" :to="obj.path" @click.native="$store.commit('change',obj)">
       {{obj.name}}
        </router-link>
    </footer>
    </div>
</template>

<script>
    export default {
        data(){
            return{
            menu:[
                {
                    path:"/movie",
                    name:"电影",
                    color:"orange"
                },
                 {
                    path:"/music",
                    name:"音乐",
                    color:"pink"
                },
                 {
                    path:"/Photo",
                    name:"图片",
                    color:"blue"
                },
                 {
                    path:"/book",
                    name:"图书",
                    color:"yellow"
                }
            ]
            }
        },
            created(){
                this.menu.forEach((obj,index) => {
                    if(this.$route.path==obj.path){
                    this.$store.commit('change',obj);
                    }
                });

        }
        
    }
</script>

<style lang="scss" scoped>
footer{
    width: 100%;
    height: 1rem;
    background: red;
    text-align: center;
    line-height: 1rem;
    position: fixed;
    bottom:0;
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