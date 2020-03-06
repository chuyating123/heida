<template>
    <div>
        <transition-group tag="ul" name="fade" class="img-box">
         <li class="img-list" v-for="(img,index) in imgs" :key="index" v-show="inow==index">
             <img :src="img" alt="">
         </li>
        </transition-group>
     <ul class="btns">
         <li :class="{btn:true,active:inow==index}" v-for="(img,index) in imgs" :key="index">
         </li>
     </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                imgs:[
                    "https://img3.doubanio.com/lpic/s24468373.jpg",
                    "https://img3.doubanio.com/lpic/s27102925.jpg",
                    "https://img3.doubanio.com/lpic/s6989253.jpg"
                ],
                inow:0
            }
        },
        created(){
            setInterval(()=>{
                this.inow++;
                if(this.inow==this.imgs.length){
                    this.inow=0;
                }
            },2000)
        }
    }
</script>

<style lang="scss" scoped>
.img-box{
    position: relative;
.img-list{
    width: 100%;
    position:absolute;
    top: 0;
    left: 0;
    img{
        width: 100%;
        height: 6rem;
    }
}
}
.btns{
    display: flex;
    justify-content: center;
.btn{
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background: #cccccc;
    margin-right: 0.1rem;
    margin-top: 6rem;

}
.active{
    background: #000000;
}
}
.fade-enter{
    transform: translate(-100%)
}
.fade-enter-active{
    transition: transform 1s linear;
}
.fade-enter-to{
    transform: translate(0)
}
.fade-leave{
    transform: translate(0)
}
.fade-leave-active{
    transition: transform 1s linear;
}
.fade-leave-to{
    transform: translate(100%)
}
</style>