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
    <ul class="detail">
      <li v-if="iscunkuan" class="one">
        <p>存款计算</p>
        本金<input type="number" v-model="deposit_principal">
        <br>
        存款周期<input type="number" v-model="deposit_time">
        <br>
        利率<input type="number" v-model="deposit_rate">%
        <br>
        <button @click="get_deposit">计算</button>
        <br>
        结果<span>{{deposit_result}}</span>
      </li>
      <li v-if="isdaikuan" class="two">
        <p>贷款计算</p>
        贷款金额<input type="number" v-model="loans_principal">
        <br>
        贷款周期<input type="number" v-model="loans_time">
        <br>
        利率<input type="number" v-model="loans_rate">%
        <br>
        <button @click="get_loans">计算</button>
        <br>
        结果<span>{{loans_result}}</span>
      </li>
      <li v-if="ishuobi" class="three">
        <p>货币换算</p>
        <div class="change_money">
        <input type="number" v-model="cyrrency_number"/>
            <select v-model="cyrrency_left">
              <option value="美元">美元</option>
              <option value="人民币">人民币</option>
              <option value="日元">日元</option>
              <option value="韩元">韩元</option>
              <option value="英镑">英镑</option>
            </select>
            <span>=</span>
            <span>{{this.cyrrency_result}}</span>
            <select v-model="cyrrency_right">
              <option value="美元">美元</option>
              <option value="人民币">人民币</option>
              <option value="日元">日元</option>
              <option value="韩元">韩元</option>
              <option value="英镑">英镑</option>
            </select>
            <br>
            <button @click="get_cyrrency">换算</button>
             </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Message } from 'element-ui';
export default {
  data() {
    return {
      iscunkuan: false,
      isdaikuan: false,
      ishuobi: false,
      deposit_principal:" ",
      deposit_time:" ",
      deposit_result:" ",
      deposit_rate:" ",
      loans_principal:" ",
      loans_time:" ",
      loans_rate:" ",
      loans_result:" ",
      cyrrency_left:" ",
      cyrrency_right:" ",
      cyrrency_result:" ",
      cyrrency_number:" "
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
    },
    get_deposit(){
      if(this.deposit_principal<0||this.deposit_time<0||this.deposit_rate<0){
        Message({message:'本金、周期或利率不能小于0',center:true})
      }
      else{
      this.deposit_result=(this.deposit_principal*this.deposit_time*this.deposit_rate*0.01).toFixed(6)
       var date=new Date()
      var hour = date.getHours();
      var min=date.getMinutes();
      var sec=date.getSeconds();
      var time=hour+":"+min+":"+sec
      console.log(time)
      var comment = this.deposit_result;
      console.log(comment)
      this.$http
        .post(
          'http://localhost:3000/api/Stu/addStu2',
          {
            record_time: time,
            record_comment: comment
          },
          {}
        )
        .then(response => {
          console.log(response);
        }).catch((e)=>{
          console.log("失败")
        });
      }
    },
    get_loans(){
      if(this.loans_principal<0||this.loans_time<0||this.loans_rate<0){
        Message({message:'本金、周期或利率不能小于0',center:true})
      }
      else{
      this.loans_result=(this.loans_principal*this.loans_time*this.loans_rate*0.01).toFixed(6)
        var date=new Date()
      var hour = date.getHours();
      var min=date.getMinutes();
      var sec=date.getSeconds();
      var time=hour+":"+min+":"+sec
      console.log(time)
      var comment = this.loans_result;
      console.log(comment)
      this.$http
        .post(
          'http://localhost:3000/api/Stu/addStu2',
          {
            record_time: time,
            record_comment: comment
          },
          {}
        )
        .then(response => {
          console.log(response);
        }).catch((e)=>{
          console.log("失败")
        });
      }
    },
    get_cyrrency(){
      if(this.cyrrency_left=="美元"){
        if(this.cyrrency_right=="人民币"){
          this.cyrrency_result=(this.cyrrency_number*7.081).toFixed(6)
        }
        else if(this.cyrrency_right=="美元"){
          this.cyrrency_result=this.cyrrency_number
        }
        else if(this.cyrrency_right=="日元"){
          this.cyrrency_result=(this.cyrrency_number*107.53).toFixed(6)
        }
        else if(this.cyrrency_right=="韩元"){
          this.cyrrency_result=(this.cyrrency_number*1210).toFixed(6)
        }
        else{
          this.cyrrency_result=(this.cyrrency_number*0.7927).toFixed(6)
        }
      }
      if(this.cyrrency_left=="人民币"){
        if(this.cyrrency_right=="人民币"){
          this.cyrrency_result=this.cyrrency_number
        }
        else if(this.cyrrency_right=="美元"){
          this.cyrrency_result=(this.cyrrency_number*0.1412).toFixed(6)
        }
        else if(this.cyrrency_right=="日元"){
          this.cyrrency_result=(this.cyrrency_number*15.1857).toFixed(6)
        }
        else if(this.cyrrency_right=="韩元"){
          this.cyrrency_result=(this.cyrrency_number*170.8798).toFixed(6)
        }
        else{
          this.cyrrency_result=(this.cyrrency_number*0.1119).toFixed(6)
        }
      }
      if(this.cyrrency_left=="日元"){
        if(this.cyrrency_right=="人民币"){
          this.cyrrency_result=(this.cyrrency_number*0.06616).toFixed(6)
        }
        else if(this.cyrrency_right=="美元"){
          this.cyrrency_result=(this.cyrrency_number*0.009357).toFixed(6)
        }
        else if(this.cyrrency_right=="日元"){
          this.cyrrency_result=this.cyrrency_number
        }
        else if(this.cyrrency_right=="韩元"){
          this.cyrrency_result=(this.cyrrency_number*11.3393).toFixed(6)
        }
        else{
          this.cyrrency_result=(this.cyrrency_number*0.007573).toFixed(6)
        }
    }
     if(this.cyrrency_left=="韩元"){
        if(this.cyrrency_right=="人民币"){
          this.cyrrency_result=(this.cyrrency_number*0.005835).toFixed(6)
        }
        else if(this.cyrrency_right=="美元"){
          this.cyrrency_result=(this.cyrrency_number*0.0008252).toFixed(6)
        }
        else if(this.cyrrency_right=="日元"){
          this.cyrrency_result=(this.cyrrency_number*0.08819).toFixed(6)
        }
        else if(this.cyrrency_right=="韩元"){
          this.cyrrency_result=this.cyrrency_number
        }
        else{
          this.cyrrency_result=(this.cyrrency_number*0.0006679).toFixed(6)
        }
    }
     if(this.cyrrency_left=="英镑"){
        if(this.cyrrency_right=="人民币"){
          this.cyrrency_result=(this.cyrrency_number*8.7366).toFixed(6)
        }
        else if(this.cyrrency_right=="美元"){
          this.cyrrency_result=(this.cyrrency_number*1.2356).toFixed(6)
        }
        else if(this.cyrrency_right=="日元"){
          this.cyrrency_result=(this.cyrrency_number*132.0486).toFixed(6)
        }
        else if(this.cyrrency_right=="韩元"){
          this.cyrrency_result=this.cyrrency_number
        }
        else{
          this.cyrrency_result=(this.cyrrency_number*1497.3371).toFixed(6)
        }
     }
      var date=new Date()
      var hour = date.getHours();
      var min=date.getMinutes();
      var sec=date.getSeconds();
      var time=hour+":"+min+":"+sec
      console.log(time)
      var comment = this.cyrrency_result;
      console.log(comment)
      this.$http
        .post(
          'http://localhost:3000/api/Stu/addStu2',
          {
            record_time: time,
            record_comment: comment
          },
          {}
        )
        .then(response => {
          console.log(response);
        }).catch((e)=>{
          console.log("失败")
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.finance {
  width: 6.4rem;
  height: 2rem;
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
.detail{
  margin-top: 0.4rem;
  font-size: 0.3rem;
  text-align: center;
}
.detail input{
  width: 2rem;
  margin-bottom: 0.2rem;
}
.detail button{
  width: 1.5rem;
  margin-bottom: 0.2rem;
}
.detail p{
  font-size: 0.4rem;
  margin-bottom: 0.3rem;
}
.one p{
  color: #ffe70f;
}
.two p{
  color:#fd5f21 ;
}
.three p{
  color: #078bf7;
}
.change_money input{
   width: 1.2rem;
}
</style>