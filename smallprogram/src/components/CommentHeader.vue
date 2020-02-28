<template>
<header :style="{background:$store.state.color}">{{$store.state.name}}</header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
header{
    height: 1rem;
    width: 100%;
    background: red;
    line-height: 1rem;
    text-align: center;
    position: fixed;
    top: 0px;
}
</style>