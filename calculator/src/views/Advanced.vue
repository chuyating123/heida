<template>
  <div>
    <ul class="advanced">
      <li @click="cloth_cover">
        <a href="#" class="iconfont icon-mi mi"></a>
        <p>幂运算</p>
      </li>
      <li @click="triangle">
        <a href="#" class="iconfont icon-sanjiaohanshu sanjiao"></a>
        <p>三角函数运算</p>
      </li>
      <li @click="unit">
        <a href="#" class="iconfont icon-danwei danwei"></a>
        <p>单位换算</p>
      </li>
      <li @click="area">
        <a href="#" class="iconfont icon-mianji mianji"></a>
        <p>面积计算</p>
      </li>
      <li @click="volume">
        <a href="#" class="iconfont icon-tiji tiji"></a>
        <p>体积计算</p>
      </li>
      <li @click="pressure">
        <a href="#" class="iconfont icon-yaqiang yaqiang"></a>
        <p>压强计算</p>
      </li>
    </ul>
    <ul>
      <li v-if="ismi">幂运算</li>
      <li v-if="issanjiao">三角函数运算</li>
      <li v-if="isdanwei">单位换算</li>
      <li v-if="ismianji">面积计算</li>
      <li v-if="istiji">体积计算</li>
      <li v-if="isyaqiang">压强计算</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        ismi:false,
        issanjiao:false,
        isdanwei:false,
        ismianji:false,
        istiji:false,
        isyaqiang:false
    };
  },
  methods:{
      cloth_cover(){
        this.ismi=true,
        this.issanjiao=false,
        this.isdanwei=false,
        this.ismianji=false,
        this.istiji=false,
        this.isyaqiang=false
      },
       triangle(){
        this.ismi=false,
        this.issanjiao=true,
        this.isdanwei=false,
        this.ismianji=false,
        this.istiji=false,
        this.isyaqiang=false
      },
      unit(){
        this.ismi=false,
        this.issanjiao=false,
        this.isdanwei=true,
        this.ismianji=false,
        this.istiji=false,
        this.isyaqiang=false
      },
       area(){
        this.ismi=false,
        this.issanjiao=false,
        this.isdanwei=false,
        this.ismianji=true,
        this.istiji=false,
        this.isyaqiang=false
      },
      volume(){
        this.ismi=false,
        this.issanjiao=false,
        this.isdanwei=false,
        this.ismianji=false,
        this.istiji=true,
        this.isyaqiang=false
      },
      pressure(){
      this.ismi=false,
      this.issanjiao=false,
      this.isdanwei=false,
      this.ismianji=false,
      this.istiji=false,
      this.isyaqiang=true
      }
  }
};
</script>

<style lang="scss" scoped>
.advanced {
  width: 6.4rem;
  height: 3.3rem;
  background: #ffffff;
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  border-bottom: 1px solid #ddd8ce;
}
.advanced li {
  width: 33%;
  text-align: center;
  height: 1.62rem;
  padding: 0.2rem 0;
  box-sizing: border-box;
}
.advanced a {
  display: block;
  margin: auto;
  margin-bottom: 0.14rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 10rem;
  text-align: center;
  line-height: 0.8rem;
  font-size: 0.5rem;
  text-decoration: none;
  color: #fff;
}
.mi {
  background: #00ff0f;
}
.sanjiao {
  background: #fd9d21;
}
.danwei {
  background: #ff6767;
}
.mianji {
  background: #ff89f7;
}
.tiji {
  background: #00ffff;
}
.yaqiang {
  background: #0f4567;
}
</style>