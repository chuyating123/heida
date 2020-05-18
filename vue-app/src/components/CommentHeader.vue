<template>
  <header :style="{background:$store.state.color}">{{$store.state.name}}</header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  height: 1rem;
  background: red;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
  line-height: 1rem;
  font-size: 14px;
}
</style>