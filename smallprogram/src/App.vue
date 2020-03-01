<template>
  <div id="app">
    <comment-header ></comment-header>
    <div class="container">
      <router-view></router-view>
    </div>
    <comment-footer></comment-footer>
  </div>
</template>
<script>
  import CommentHeader from './components/CommentHeader';
  import CommentFooter from './components/CommentFooter';

export default {

    components:{
      CommentHeader,
      CommentFooter
    }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container{
  margin-bottom: 1rem;
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
