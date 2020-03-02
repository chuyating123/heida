<template>
  <div>
    <transition-group tag="ul" name="fade" class="book-box">
      <li v-for="(img,index) in imgs" :key="index" class="book-list" v-show="index==num">
        <img :src="img" alt />
      </li>
    </transition-group>
    <ul class="btn-box">
      <li :class="{btn:true,active:index==num}" v-for="(img,index) in imgs" :key="index"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
    };
  },
   props:["imgs"],
  created() {
    setInterval(() => {
      this.num++;
      if (this.num == this.imgs.length) {
        this.num = 0;
      }
    }, 2000);
  }
};
</script>

<style lang="scss" scoped>
.book-box
{
  position: relative;
  height: 6rem;
.book-list {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 6rem;
  img {
    width: 100%;
    height: 6rem;
  }
}
}
.btn-box {
  display: flex;
  justify-content: center;
  .btn {
    width: 0.2rem;
    height: 0.2rem;
    background: #cccccc;
    border-radius: 50%;
  }
  .active {
    background: red;
  }
}
.fade-enter {
    transform: translate(-100%);
  }
  .fade-enter-active {
    transition: transform 1s linear;
  }
  .fade-enter-to {
    transform: translate(0%);
  }
  .fade-leave {
    transform: translate(0%);
  }
  .fade-leave-active {
    transition: transform 1s linear;
  }
  .fade-leave-to {
    transform: translate(100%);
  }
</style>