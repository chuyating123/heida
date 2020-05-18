<template>
  <footer :style="{background:$store.state.color}">
    <router-link v-for="(obj,index) in menu" :key="index" :to="obj.path"  @click.native="$store.commit('change',obj)">{{obj.name}}</router-link>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          path: "/Movie",
          name: "电影",
          color: "red"
        },
        {
          path: "/Music",
          name: "音乐",
          color: "pink"
        },
        {
          path: "/Book",
          name: "图书",
          color: "yellow"
        },
        {
          path: "/Photo",
          name: "图片",
          color: "green"
        }
      ]
    };
  },
  created(){
    this.menu.forEach((obj, index) => {
      if (this.$route.path.includes(obj.path)) {
        this.$store.commit("change", obj);
      }
    })
  }
};
</script>

<style lang="scss" scoped>
footer {
  height: 1rem;
  background: red;
  line-height: 1rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  text-align: center;
  display: flex;
  a {
    line-height: 1rem;
    text-align: center;
    font-size: 14px;
    text-decoration: none;
    color: #000000;
    flex: 1;
  }
  .router-link-active {
    color: #ffffff;
    text-decoration: none;
  }
}
</style>