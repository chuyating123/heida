<template>
  <header>
    <router-link v-for="(obj,index) in menu" :key="index" :to="obj.path">{{obj.name}}</router-link>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          path: "/Home",
          name: "普通计算"
        },
        {
          path: "/Advanced",
          name: "高级计算"
        },
        {
          path: "/Finance",
          name: "财务计算"
        },
        {
          path: "/Record",
          name: "历史记录"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
header {
  height: 1rem;
  width: 100%;
  line-height: 1rem;
  text-align: center;
  text-decoration: none;
  position: fixed;
  top: 0px;
  display: flex;
  background: #eeeeee;
  a {
    text-align: center;
    line-height: 1rem;
    flex: 1;
    color: #000000;
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
  }
  .router-link-active {
    color:red;
    text-decoration: none;
  }
}
</style>