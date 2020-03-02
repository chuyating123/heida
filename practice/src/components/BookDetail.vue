<template>
  <div>
      <transition-group tag="ul" name="fade" class="img-box">
      <li class="img-list" v-for="(img,index) in imgs" :key="index" v-show="inow==index">
        <img :src="img" alt />
      </li>
    </transition-group>
    <ul class="btns">
        <li v-for="(img,index) in imgs" :key="index" :class="{btn:true,active:index==inow}"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        "https://img3.doubanio.com/lpic/s24468373.jpg",
        "https://img3.doubanio.com/lpic/s27102925.jpg",
        "https://img3.doubanio.com/lpic/s6989253.jpg"
      ],
      inow:0,
    };
  },
   created(){
          setInterval(()=>{
          this.inow++;
          if(this.inow==this.imgs.length){
              this.inow=0;
          }
          },2000)
      }
};
</script>

<style lang="scss" scoped>
.img-box{
    position: relative;
    height: 6rem;
.img-list{
    display: flex;
    width: 100%;
    height: 6rem;
    position: absolute;
    left: 0;
    top: 0;
 img{
    width: 100%;
    height: 6rem;
}
}
}
.btns{
    justify-content: center;
    display: flex;
    .btn{
        width: 0.2rem;
        height: 0.2rem;
        background: #cccccc;
        border-radius:50%;
        margin: 0.1rem
    }
    .active{
        background: #000000
    }
}
.fade-enter{
    transform: translate(-100%)
}
.fade-enter-active{
    transition: transform 1s linear
}
.fade-enter-to{
    transform: translate(0%)
}
.fade-leave{
    transform: translate(0%)
}
.fade-leave-active{
    transition: transform 1s linear
}
.fade-leave-to{
    transform: translate(100%)
}

</style>