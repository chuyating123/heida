<template>
    <div>
     我是测试页
     {{$route.query.id}}
      {{$route.query.name}}
      {{$store.state.count}}
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>