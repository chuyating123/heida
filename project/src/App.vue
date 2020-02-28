<template>
  <div id="app">
     <!-- <router-link to="/home">首页</router-link> |  -->
     <router-link to="/">首页</router-link> | 
     <router-link to="/home">首页</router-link> |
      <!-- <router-link to="/detail">详情页</router-link> |  -->
      <router-link :to="{path:'/Detail',query:{id:20,name:'xx'}}">详情页</router-link> | 
      <!-- <router-link to="/test">测试页</router-link> | -->
      <router-link :to="{path:'/Test',query:{id:15,name:'xx'}}">测试页</router-link> |
       <!-- <router-link to="/abc">abc</router-link> -->
       <button @click="fn">click</button>
      <!--占位  -->
      <transition name="fade">
      <router-view/>
      </transition>
  </div>
</template>
<script>
export default {
  methods:{
    fn(){
      // this.$router.push('/Home');
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fade-enter{
  transform: translate(100%);
}
.fade-enter-active{
  transition:transform 1s ease; 
}
.fade-enter-to{
  transform:translate(0)
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition:opacity 1s linear;
}
.fade-leave-to{
  opacity: 0;
}
</style>
