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
    width: 100%;
    height: 1rem;
    background: red;
    color: #ffffff;
    text-align: center;
    line-height: 1rem;
}
</style>