<template>
  <footer :style="{background:$store.state.color}">
    <router-link
      v-for="(obj,index) in menu"
      :key="index"
      :to="obj.path"
      @click.native="$store.commit('change',obj)"
    >
    {{obj.name}}
    </router-link>
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
          color: 'red'
        },
        {
          path: "/Music",
          name: "音乐",
          color: 'green'
        },
        {
          path: "/Book",
          name: "图书",
          color: 'blue'
        },
        {
          path: "/Image",
          name: "图片",
          color: 'pink'
        }
      ]
    }
  },
    created(){
        this.menu.forEach((obj,index)=> {
            if(this.$route.path.includes(obj.path)){
     this.$store.commit('change',obj);
            }
    // console.log(this.$route.path)
    // console.log(obj.path)
      })
    }
};
</script>

<style lang="scss" scoped>
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
</style>