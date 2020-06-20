<template>
    <div>
     <ul class="record_choose">
         <li @click="common">
                 普通计算
         </li>
         <li @click="advanced">
                高级计算 
         </li>
         <li @click="finance">
                财务计算
         </li>
     </ul>
     <ul>
         <li v-if="iscommon">普通</li>
         <li v-if="isadvanced">高级</li>
         <li v-if="isfinance">财务</li>
     </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                iscommon:false,
                isadvanced:false,
                isfinance:false
            };
        },
        methods:{
            common(){
                this.iscommon=true,
                this.isadvanced=false,
                this.isfinance=false
            },
            advanced(){
                this.iscommon=false,
                this.isadvanced=true,
                this.isfinance=false
            },
            finance(){
                this.iscommon=false,
                this.isadvanced=false,
                this.isfinance=true
            }
        }
    }
</script>

<style lang="scss" scoped>
.record_choose{
    background: #eeeeee;
    width: 2rem;
    height: 10.5rem;
    float: left;
}
.record_choose li{
    width: 100%;
    height: 0.8rem;
    text-align: center;
    padding-top:0.3rem;
    text-decoration: none;
    color: #000000;
    font-size: 0.3rem;
}
</style>