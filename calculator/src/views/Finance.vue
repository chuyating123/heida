<template>
  <div>
    <ul class="finance">
      <li @click="deposit">
        <a href="#" class="iconfont icon-cunkuan cunkuan"></a>
        <p>存款计算</p>
      </li>
      <li @click="loans">
        <a href="#" class="iconfont icon-daikuan daikuan"></a>
        <p>贷款计算</p>
      </li>
      <li @click="currency">
        <a href="#" class="iconfont icon-huobi huobi"></a>
        <p>货币换算</p>
      </li>
    </ul>
    <ul>
      <li v-if="iscunkuan">存款计算</li>
      <li v-if="isdaikuan">贷款计算</li>
      <li v-if="ishuobi">货币换算</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iscunkuan: false,
      isdaikuan: false,
      ishuobi: false
    };
  },
  methods:{
    deposit(){
      this.iscunkuan=true,
      this.isdaikuan=false,
      this.ishuobi=false
    },
     loans(){
      this.iscunkuan=false,
      this.isdaikuan=true,
      this.ishuobi=false
    },
    currency(){
      this.iscunkuan=false,
      this.isdaikuan=false,
      this.ishuobi=true
    }
  }
};
</script>

<style lang="scss" scoped>
.finance {
  width: 6.4rem;
  height: 3.3rem;
  background: #ffffff;
  display: flex;
  list-style: none;
  flex-wrap: wrap;
}
.finance li {
  width: 33%;
  text-align: center;
  height: 1.62rem;
  padding: 0.2rem 0;
  box-sizing: border-box;
}
.finance a {
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
.cunkuan {
  background: #ffe70f;
}
.daikuan {
  background: #fd5f21;
}
.huobi {
  background: #078bf7;
}
</style>