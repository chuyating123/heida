<template>
    <div>
    <header :style="{background:$store.state.color}">
        {{$store.state.name}}
    </header>
    </div>
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
    text-align: center;
    line-height: 1rem;
    position: absolute;
    top:0;
}
</style>