<template>
  <div id="app">
    <div class="container">
    <router-view/>
    </div>
    <comment-header></comment-header>
  </div>
</template>
<script>
 import CommentHeader from './components/CommentHeader';
export default {
  components:{
    CommentHeader
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container{
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
