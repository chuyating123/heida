<template>
  <div class="calculator">
    <div class="result" style="grid-area:result">{{this.result}}</div>
    <button style="grid-area:ac" @click="clear">AC</button>
    <button style="grid-area:percent" @click="Percentage">%</button>
    <button style="grid-area:back" @click="back">←</button>
    <button style="grid-area:reciprocal" @click="reciprocal">1/x</button>
    <button style="grid-area:evolution" @click="extraction">√x</button>
    <button style="grid-area:square" @click="square">x²</button>
    <button style="grid-area:plus-minus" @click="Toggle">+/-</button>
    <button style="grid-area:add" @click="append('+')">+</button>
    <button style="grid-area:subtract" @click="append('-')">-</button>
    <button style="grid-area:multipy" @click="append('×')">×</button>
    <button style="grid-area:divide" @click="append('÷')">÷</button>
    <button style="grid-area:equal" @click="Equals">=</button>

    <button style="grid-area:number-1" @click="append(1)">1</button>
    <button style="grid-area:number-2" @click="append(2)">2</button>
    <button style="grid-area:number-3" @click="append(3)">3</button>
    <button style="grid-area:number-4" @click="append(4)">4</button>
    <button style="grid-area:number-5" @click="append(5)">5</button>
    <button style="grid-area:number-6" @click="append(6)">6</button>
    <button style="grid-area:number-7" @click="append(7)">7</button>
    <button style="grid-area:number-8" @click="append(8)">8</button>
    <button style="grid-area:number-9" @click="append(9)">9</button>
    <button style="grid-area:number-0" @click="append(0)">0</button>
    <button style="grid-area:number-dot" @click="append('.')">.</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: "0",
      isDecimalAdd: false, //小数点,用来防止数字中间放超过一个小数点
      isOperatorAdd: false, //是否点击运算符，用来防止输入超过一个运算符
      isNumber: false //判断是否开始输入数字
    };
  },
  methods: {
    //判断是否加减乘除
    isOperator(character) {
      return ["+", "-", "×", "÷"].indexOf(character) > -1;
    },
    //点击加减乘除或者小数位
    append(character) {
      if (this.result === "0" && !this.isOperator(character)) {
        if (character === ".") {
          this.result += "" + character;
          this.isDecimalAdd = true;
        } else {
          this.result = "" + character;
        }
        this.isNumber = true;
        return;
      }
      if (!this.isOperator(character)) {
        //输入的是数字
        if (character === "." && this.isDecimalAdd) {
          return;
        }
        if (character === ".") {
          this.isDecimalAdd = true;
          this.isOperatorAdd = true;
        } else {
          this.isOperatorAdd = false;
        }
        this.result += "" + character; //印好的作业是变成字符串
      }
      if (this.isOperator(character) && !this.isOperatorAdd) {
        this.result += "" + character;
        this.isDecimalAdd = false;
        this.isOperatorAdd = true;
      }
    },
    //点击等于符号时
    Equals() {
      let calculate = this.result
        .replace(new RegExp("×", "g"), "*")
        .replace(new RegExp("÷", "g"), "/");
      this.result = parseFloat(eval(calculate).toFixed(9)).toString();
      this.isDecimalAdd = false;
      this.isOperatorAdd = false;
      var date=new Date()
      var hour = date.getHours();
      var min=date.getMinutes();
      var sec=date.getSeconds();
      var time=hour+":"+min+":"+sec
      console.log(time)
      var comment = this.result;
      console.log(comment)
      this.$http
        .post(
          'http://localhost:3000/api/Stu/addStu',
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
    },
    //点击正负号时
    Toggle() {
      if (this.isOperatorAdd || !this.isNumber) {
        return;
      }
      this.result = this.result + "*-1";
      this.Equals();
    },
    //点击百分比时
    Percentage() {
      if (this.isOperatorAdd || !this.isNumber) {
        return;
      }
      this.result = this.result + "*0.01";
      this.Equals();
    },
    reciprocal() {
      if (this.isOperatorAdd || !this.isNumber) {
        return;
      }
      this.result = 1 / this.result + "";
      this.Equals();
    },
    extraction() {
      if (this.isOperatorAdd || !this.isNumber) {
        return;
      }
      this.result = Math.sqrt(this.result) + "";
      this.Equals();
    },
    square() {
      if (this.isOperatorAdd || !this.isNumber) {
        return;
      }
      this.result = this.result * this.result + "";
      this.Equals();
    },
    clear() {
      (this.result = "0"),
        (this.isDecimalAdd = false),
        (this.isOperatorAdd = false),
        (this.isNumber = false);
    },
    back() {
      this.result = this.result.substring(0, this.result.length - 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.calculator {
  position: fixed;
  bottom: 0;
  --button-width: 1.6rem;
  --button-height: 1.2rem;
  display: grid;
  grid-template-areas:
    "result result result result"
    "ac percent back back"
    "reciprocal evolution square divide"
    "number-7 number-8 number-9 multipy"
    "number-4 number-5 number-6 subtract"
    "number-1 number-2 number-3 add"
    "plus-minus number-0 number-dot equal";
  grid-template-columns: repeat(4, var(--button-width));
  grid-template-rows: repeat(7, var(--button-height));
  font-size: 0.4rem;
  font-weight: 700;
}
.calculator button:active {
  background: #ffffff;
}
.result {
  text-align: right;
  line-height: var(--button-height);
  font-size: 0.7rem;
  padding: 0 0.4rem;
}
</style>