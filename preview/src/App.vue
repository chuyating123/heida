<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view>

      </router-view>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  components:{
    Header,
    Footer,
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
  margin-bottom: 1rem;
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
