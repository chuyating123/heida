<template>
    <div>
     我是子页
     <button @click="$store.commit('fn')">add</button>
     {{$store.state.count}}
     <div>
     <button @click="$store.commit('addAction')">add1</button>
     {{$store.state.count}}
    </div>
    <div>
    {{$store.state.xx}}
    </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>

</style>