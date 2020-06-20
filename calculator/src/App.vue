<template>
  <div id="app">
    <comment-header></comment-header>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import Element from 'element-ui'
import CommentHeader from "./components/CommentHeader";
import Vue from 'vue'
Vue.use(Element)
export default {
  components: {
    CommentHeader
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align-items: center;
  justify-content: center;
}
.container {
  margin-top: 1rem;
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
</style>
