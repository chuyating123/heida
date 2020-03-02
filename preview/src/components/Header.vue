<template>
    <header :style="{background:$store.state.color}">
        {{$store.state.name}}
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
header{
   background: red;
    width: 100%;
    height: 1rem;
    position: fixed;
    top: 0; 
    text-align: center;
    line-height: 1rem;
}
</style>