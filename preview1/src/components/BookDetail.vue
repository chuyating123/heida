
<template>
  <div>
    <transition-group tag="ul" class="book-box" name="fade">
      <li class="book-list" v-for="(img,index) in imgs" :key="index" v-show="index==num">
        <img :src="img" alt />
      </li>
    </transition-group>
    <ul class="btns">
      <li :class="{btn:true,active:index==num}" v-for="(img,index) in imgs" :key="index"></li>
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
      num: 0
    };
  },
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
.book-box {
  height: 6rem;
  position: relative;
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
.btns {
  display: flex;
  justify-content: center;
  .btn {
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background: #cccccc;
    margin-right: 0.1rem;
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