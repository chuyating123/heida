<template>
  <footer :style="{background:$store.state.color}">
    <router-link v-for="(obj,index) in menu" :key="index" :to="obj.path" @click.native="$store.commit('change',obj)">{{obj.name}}</router-link>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          path: "/movie",
          name: "电影",
          color: "red"
        },
        {
          path: "/music",
          name: "音乐",
          color: "orange"
        },
        {
          path: "/book",
          name: "图书",
          color: "green"
        },
        {
          path: "/photo",
          name: "图片",
          color: "pink"
        }
      ]
    };
  },
  created() {
    this.menu.forEach((obj, index) => {
      if (this.$route.path == obj.path) {
        this.$store.commit("change", obj);
      }
    });
  }
};
</script>

<style lang="scss" scoped>
// footer {
  // width: 100%;
  // height: 1rem;
  // background: red;
  // position: fixed;
  // bottom: 0px;
  // text-align: center;
  // line-height: 1rem;
  // display: flex;
  // a {
  //   flex: 1;
  //   text-align: center;
  //   font-size: 0.3rem;
  // }
  // .router-link-active {
  //   color: #ffffff;
  //   text-decoration: none;
  // }
  footer {
  height: 1rem;
  width: 100%;
  background: red;
  line-height: 1rem;
  text-align: center;
  position: fixed;
  bottom: 0px;
  display: flex;
  a {
    text-align: center;
    flex: 1;
    color: #000000;
    font-size: 14px;
  }
  .router-link-active {
    color: #ffffff;
    text-decoration: none;
  }
}
// }
</style>