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
      <li @click="factorail">
        <a href="#" class="iconfont icon-jiecheng jiecheng"></a>
        <p>阶乘计算</p>
      </li>
    </ul>
    <ul class="detail">
      <li v-if="ismi" class="one">
        <p>幂运算</p>底数
        <input type="number" v-model="base_number" />
        <br />指数
        <input type="number" v-model="index_number" />
        <br />
        <button @click="exponentiation">计算</button>
        <br />结果
        <span>{{this.exponentiation_result}}</span>
      </li>
      <li v-if="issanjiao" class="two">
        <p>三角函数运算</p>
        <select v-model="triangle_symbol">
          <option value="sin">sin</option>
          <option value="cos">cos</option>
          <option value="tan">tan</option>
          <option value="cot">cot</option>
        </select>
        <input type="number" v-model="triangle_number" />°
        <br />
        <button @click="get_triangle">计算</button>
        <br />结果
        <span>{{this.triangle_result}}</span>
      </li>
      <li v-if="isdanwei" class="three">
        <p>单位换算</p>
        <div class="choose">
          <input type="radio" name="unit" value="length" @click="length_change" />长度
          <input type="radio" name="unit" value="area" @click="area_change" />面积
          <input type="radio" name="unit" value="volume" @click="volume_change" checked />体积
          <input type="radio" name="unit" value="weight" @click="weight_change" />重量
        </div>
        <ul class="length-detail">
          <li v-if="islength">
            <input type="number" v-model="length_number" />
            <select v-model="length_left">
              <option value="mm">mm</option>
              <option value="cm">cm</option>
              <option value="dm">dm</option>
              <option value="m">m</option>
              <option value="km">km</option>
            </select>
            <span>=</span>
            <span>{{this.length_result}}</span>
            <select v-model="length_right">
              <option value="mm">mm</option>
              <option value="cm">cm</option>
              <option value="dm">dm</option>
              <option value="m">m</option>
              <option value="km">km</option>
            </select>
            <br />
            <button @click="exchange_length">换算</button>
          </li>
          <li v-if="isarea">
            <input type="number" v-model="area_number" />
            <select v-model="area_left">
              <option value="mm²">mm²</option>
              <option value="cm²">cm²</option>
              <option value="dm²">dm²</option>
              <option value="m²">m²</option>
              <option value="km²">km²</option>
            </select>
            <span>=</span>
            <span>{{this.area_result}}</span>
            <select v-model="area_right">
              <option value="mm²">mm²</option>
              <option value="cm²">cm²</option>
              <option value="dm²">dm²</option>
              <option value="m²">m²</option>
              <option value="km²">km²</option>
            </select>
            <br />
            <button @click="exchange_area">换算</button>
          </li>
          <li v-if="isvolume">
            <input type="number" v-model="volume_number" />
            <select v-model="volume_left">
              <option value="mm³">mm³</option>
              <option value="cm³">cm³</option>
              <option value="dm³">dm³</option>
              <option value="m³">m³</option>
              <option value="km³">km³</option>
            </select>
            <span>=</span>
            <span>{{this.volume_result}}</span>
            <select v-model="volume_right">
              <option value="mm³">mm³</option>
              <option value="cm³">cm³</option>
              <option value="dm³">dm³</option>
              <option value="m³">m³</option>
              <option value="km³">km³</option>
            </select>
            <br />
            <button @click="exchange_volume">换算</button>
          </li>
          <li v-if="isweight">
            <input type="number" v-model="weight_number" />
            <select v-model="weight_left">
              <option value="mg">mg</option>
              <option value="g">g</option>
              <option value="kg">kg</option>
            </select>
            <span>=</span>
            <span>{{this.weight_result}}</span>
            <select v-model="weight_right">
              <option value="mg">mg</option>
              <option value="g">g</option>
              <option value="kg">kg</option>
            </select>
            <br />
            <button @click="exchange_weight">换算</button>
          </li>
        </ul>
      </li>
      <li v-if="ismianji" class="four">
        <p>面积计算</p>
        <input type="radio" name="area" value="rectangle" @click="rectangle_change" />长方形
        <input type="radio" name="area" value="circle" @click="circle_change" />圆形
        <input type="radio" name="area" value="trapezoid" @click="trapezoid_change" />梯形
        <ul class="area-detail">
          <li v-if="isrectangle">
            长
            <input type="number" v-model="rectangle_length" />
            <br />宽
            <input type="number" v-model="rectangle_width" />
            <br />
            <button @click="rectangle_area">计算</button>
            <br />结果
            <span>{{this.rectangle_result}}</span>
          </li>
          <li v-if="iscircle">
            半径
            <input type="number" v-model="circle_number" />
            <br />
            <button @click="circle_area">计算</button>
            <br />结果
            <span>{{this.circle_result}}</span>
          </li>
          <li v-if="istrapezoid">
            上底
            <input type="number" v-model="trapezoid_top" />
            下底
            <input type="number" v-model="trapezoid_bottom" />
            高
            <input type="number" v-model="trapezoid_tall" />
            <br />
            <button @click="trapezoid_area">计算</button>
            <br />结果
            <span>{{this.trapezoid_result}}</span>
          </li>
        </ul>
      </li>
      <li v-if="istiji" class="five">
        <p>体积计算</p>
        <input type="radio" name="unit" value="cuboid" @click="cuboid_change" />长方体
        <input type="radio" name="unit" value="bool" @click="bool_change" />球体
        <ul class="volume-detail">
          <li v-if="iscuboid">
            长
            <input type="number" v-model="cuboid_length" />
            <br />宽
            <input type="number" v-model="cuboid_width" />
            <br />高
            <input type="number" v-model="cuboid_tall" />
            <br />
            <button @click="cuboid_area">计算</button>
            <br />结果
            <span>{{this.cuboid_result}}</span>
          </li>
          <li v-if="isbool">
            半径
            <input type="number" v-model="bool_number" />
            <br />
            <button @click="bool_area">计算</button>
            <br />结果
            <span>{{this.bool_result}}</span>
          </li>
        </ul>
      </li>
      <li v-if="isjiecheng" class="six">
        <p>阶乘计算</p>
        <input type="number" v-model="factorial_number" />的阶乘
        <br />
        <button @click="get_factorial">计算</button>
        <br />结果
        <span>{{this.factorial_result}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";
import { Message } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
export default {
  data() {
    return {
      ismi: false,
      issanjiao: false,
      isdanwei: false,
      ismianji: false,
      istiji: false,
      isjiecheng: false,
      islength: false,
      isarea: false,
      isvolume: false,
      isweight: false,
      isrectangle: false,
      iscircle: false,
      istrapezoid: false,
      iscuboid: false,
      isbool: false,
      base_number: " ",
      index_number: " ",
      exponentiation_result: " ",
      triangle_symbol: " ",
      triangle_number: " ",
      triangle_result: " ",
      length_left: " ",
      length_right: " ",
      length_number: " ",
      length_result: " ",
      area_number: " ",
      area_left: " ",
      area_right: " ",
      area_result: " ",
      volume_left: " ",
      volume_right: " ",
      volume_number: " ",
      volume_result: " ",
      weight_left: " ",
      weight_right: " ",
      weight_result: " ",
      weight_number: " ",
      rectangle_length: " ",
      rectangle_width: " ",
      rectangle_result: " ",
      circle_number: " ",
      circle_result: " ",
      trapezoid_top: " ",
      trapezoid_bottom: " ",
      trapezoid_tall: " ",
      trapezoid_number: " ",
      trapezoid_result: " ",
      cuboid_length: " ",
      cuboid_width: " ",
      cuboid_tall: " ",
      cuboid_result: " ",
      bool_number: " ",
      bool_result: " ",
      factorial_number: " ",
      factorial_result: " "
    };
  },
  methods: {
    cloth_cover() {
      (this.ismi = true),
        (this.issanjiao = false),
        (this.isdanwei = false),
        (this.ismianji = false),
        (this.istiji = false),
        (this.isjiecheng = false);
    },
    triangle() {
      (this.ismi = false),
        (this.issanjiao = true),
        (this.isdanwei = false),
        (this.ismianji = false),
        (this.istiji = false),
        (this.isjiecheng = false);
    },
    unit() {
      (this.ismi = false),
        (this.issanjiao = false),
        (this.isdanwei = true),
        (this.ismianji = false),
        (this.istiji = false),
        (this.isjiecheng = false);
    },
    area() {
      (this.ismi = false),
        (this.issanjiao = false),
        (this.isdanwei = false),
        (this.ismianji = true),
        (this.istiji = false),
        (this.isjiecheng = false);
    },
    volume() {
      (this.ismi = false),
        (this.issanjiao = false),
        (this.isdanwei = false),
        (this.ismianji = false),
        (this.istiji = true),
        (this.isjiecheng = false);
    },
    factorail() {
      (this.ismi = false),
        (this.issanjiao = false),
        (this.isdanwei = false),
        (this.ismianji = false),
        (this.istiji = false),
        (this.isjiecheng = true);
    },
    length_change() {
      (this.islength = true),
        (this.isarea = false),
        (this.isvolume = false),
        (this.isweight = false);
    },
    area_change() {
      (this.isarea = true),
        (this.islength = false),
        (this.isvolume = false),
        (this.isweight = false);
    },
    volume_change() {
      (this.islength = false),
        (this.isarea = false),
        (this.isvolume = true),
        (this.isweight = false);
    },
    weight_change() {
      (this.islength = false),
        (this.isarea = false),
        (this.isvolume = false),
        (this.isweight = true);
    },
    rectangle_change() {
      (this.isrectangle = true),
        (this.iscircle = false),
        (this.istrapezoid = false);
    },
    circle_change() {
      (this.isrectangle = false),
        (this.iscircle = true),
        (this.istrapezoid = false);
    },
    trapezoid_change() {
      (this.isrectangle = false),
        (this.iscircle = false),
        (this.istrapezoid = true);
    },
    cuboid_change() {
      (this.iscuboid = true), (this.isbool = false);
    },
    bool_change() {
      (this.iscuboid = false), (this.isbool = true);
    },
    exponentiation() {
      if (this.base_number == 0) {
        Message({ message: "底数不能为0", center: true });
      } else {
        this.exponentiation_result = Math.pow(
          this.base_number,
          this.index_number
        );
        var date = new Date();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var time = hour + ":" + min + ":" + sec;
        console.log(time);
        var comment = this.exponentiation_result;
        console.log(comment);
        this.$http
          .post(
            "http://localhost:3000/api/Stu/addStu1",
            {
              record_time: time,
              record_comment: comment
            },
            {}
          )
          .then(response => {
            console.log(response);
          })
          .catch(e => {
            console.log("失败");
          });
      }
    },
    get_triangle() {
      if (this.triangle_symbol == "sin") {
        this.triangle_result = Math.sin(
          (this.triangle_number * Math.PI) / 180
        ).toFixed(6);
      } else if (this.triangle_symbol == "cos") {
        this.triangle_result = Math.cos(
          (this.triangle_number * Math.PI) / 180
        ).toFixed(6);
      } else if (this.triangle_symbol == "tan") {
        this.triangle_result = Math.tan(
          (this.triangle_number * Math.PI) / 180
        ).toFixed(6);
      } else {
        this.triangle_result =
          1 / Math.tan((this.triangle_number * Math.PI) / 180).toFixed(6);
      }
      var date = new Date();
      var hour = date.getHours();
      var min = date.getMinutes();
      var sec = date.getSeconds();
      var time = hour + ":" + min + ":" + sec;
      console.log(time);
      var comment = this.triangle_number;
      console.log(comment);
      this.$http
        .post(
          "http://localhost:3000/api/Stu/addStu1",
          {
            record_time: time,
            record_comment: comment
          },
          {}
        )
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          console.log("失败");
        });
    },
    exchange_length() {
      if (this.length_left == "mm") {
        if (this.length_right == "mm") {
          this.length_result = this.length_number;
        } else if (this.length_right == "cm") {
          this.length_result = this.length_number / 10;
        } else if (this.length_right == "dm") {
          this.length_result = this.length_number / 100;
        } else if (this.length_right == "m") {
          this.length_result = this.length_number / 1000;
        } else {
          this.length_result = this.length_number / 10000;
        }
      }
      if (this.length_left == "cm") {
        if (this.length_right == "mm") {
          this.length_result = this.length_number * 10;
        } else if (this.length_right == "cm") {
          this.length_result = this.length_number;
        } else if (this.length_right == "dm") {
          this.length_result = this.length_number / 10;
        } else if (this.length_right == "m") {
          this.length_result = this.length_number / 100;
        } else {
          this.length_result = this.length_number / 1000;
        }
      }
      if (this.length_left == "dm") {
        if (this.length_right == "mm") {
          this.length_result = this.length_number * 100;
        } else if (this.length_right == "cm") {
          this.length_result = this.length_number * 10;
        } else if (this.length_right == "dm") {
          this.length_result = this.length_number;
        } else if (this.length_right == "m") {
          this.length_result = this.length_number / 10;
        } else {
          this.length_result = this.length_number / 100;
        }
      }
      if (this.length_left == "m") {
        if (this.length_right == "mm") {
          this.length_result = this.length_number * 1000;
        } else if (this.length_right == "cm") {
          this.length_result = this.length_number * 100;
        } else if (this.length_right == "dm") {
          this.length_result = this.length_number * 10;
        } else if (this.length_right == "m") {
          this.length_result = this.length_number;
        } else {
          this.length_result = this.length_number / 10;
        }
      }
      if (this.length_left == "km") {
        if (this.length_right == "mm") {
          this.length_result = this.length_number * 10000;
        } else if (this.length_right == "cm") {
          this.length_result = this.length_number * 1000;
        } else if (this.length_right == "dm") {
          this.length_result = this.length_number * 100;
        } else if (this.length_right == "m") {
          this.length_result = this.length_number * 10;
        } else {
          this.length_result = this.length_number;
        }
      }
      var date = new Date();
      var hour = date.getHours();
      var min = date.getMinutes();
      var sec = date.getSeconds();
      var time = hour + ":" + min + ":" + sec;
      console.log(time);
      var comment = this.length_result;
      console.log(comment);
      this.$http
        .post(
          "http://localhost:3000/api/Stu/addStu1",
          {
            record_time: time,
            record_comment: comment
          },
          {}
        )
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          console.log("失败");
        });
    },
    exchange_area() {
      if (this.area_left == "mm²") {
        if (this.area_right == "mm²") {
          this.area_result = this.area_number;
        } else if (this.area_right == "cm²") {
          this.area_result = this.area_number / 100;
        } else if (this.area_right == "dm²") {
          this.area_result = this.area_number / 10000;
        } else if (this.area_right == "m²") {
          this.area_result = this.area_number / 1000000;
        } else {
          this.area_result = this.area_number / 100000000;
        }
      }
      if (this.area_left == "cm²") {
        if (this.area_right == "mm²") {
          this.area_result = this.area_number * 100;
        } else if (this.area_right == "cm²") {
          this.area_result = this.area_number;
        } else if (this.area_right == "dm²") {
          this.area_result = this.area_number / 100;
        } else if (this.length_right == "m²") {
          this.area_result = this.area_number / 10000;
        } else {
          this.area_result = this.area_number / 1000000;
        }
      }
      if (this.area_left == "dm²") {
        if (this.area_right == "mm²") {
          this.area_result = this.area_number * 10000;
        } else if (this.area_right == "cm²") {
          this.area_result = this.area_number * 100;
        } else if (this.area_right == "dm²") {
          this.area_result = this.area_number;
        } else if (this.area_right == "m²") {
          this.area_result = this.area_number / 100;
        } else {
          this.area_result = this.area_number / 10000;
        }
      }
      if (this.area_left == "m²") {
        if (this.area_right == "mm²") {
          this.area_result = this.area_number * 1000000;
        } else if (this.area_right == "cm²") {
          this.area_result = this.area_number * 10000;
        } else if (this.area_right == "dm²") {
          this.area_result = this.area_number * 100;
        } else if (this.area_right == "m²") {
          this.area_result = this.area_number;
        } else {
          this.area_result = this.area_number / 100;
        }
      }
      if (this.area_left == "km²") {
        if (this.area_right == "mm²") {
          this.area_result = this.area_number * 100000000;
        } else if (this.area_right == "cm²") {
          this.area_result = this.area_number * 1000000;
        } else if (this.area_right == "dm²") {
          this.area_result = this.area_number * 10000;
        } else if (this.area_right == "m²") {
          this.area_result = this.area_number * 100;
        } else {
          this.area_result = this.area_number;
        }
      }
      var date = new Date();
      var hour = date.getHours();
      var min = date.getMinutes();
      var sec = date.getSeconds();
      var time = hour + ":" + min + ":" + sec;
      console.log(time);
      var comment = this.area_result;
      console.log(comment);
      this.$http
        .post(
          "http://localhost:3000/api/Stu/addStu1",
          {
            record_time: time,
            record_comment: comment
          },
          {}
        )
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          console.log("失败");
        });
    },
    exchange_volume() {
      if (this.volume_left == "mm³") {
        if (this.volume_right == "mm³") {
          this.volume_result = this.volume_number;
        } else if (this.volume_right == "cm³") {
          this.volume_result = this.volume_number / 1000;
        } else if (this.volume_right == "dm³") {
          this.volume_result = this.volume_number / 1000000;
        } else if (this.volume_right == "m³") {
          this.volume_result = this.volume_number / 1000000000;
        } else {
          this.volume_result = this.volume_number / 1000000000000;
        }
      }
      if (this.volume_left == "cm³") {
        if (this.volume_right == "mm³") {
          this.volume_result = this.volume_number * 1000;
        } else if (this.volume_right == "cm³") {
          this.volume_result = this.volume_number;
        } else if (this.volume_right == "dm³") {
          this.volume_result = this.volume_number / 1000;
        } else if (this.length_right == "m³") {
          this.volume_result = this.volume_number / 1000000;
        } else {
          this.volume_result = this.volume_number / 1000000000;
        }
      }
      if (this.volume_left == "dm³") {
        if (this.volume_right == "mm³") {
          this.volume_result = this.volume_number * 1000000;
        } else if (this.volume_right == "cm³") {
          this.volume_result = this.volume_number * 1000;
        } else if (this.length_right == "dm³") {
          this.volume_result = this.volume_number;
        } else if (this.length_right == "m³") {
          this.volume_result = this.volume_number / 1000;
        } else {
          this.volume_result = this.volume_number / 1000000;
        }
      }
      if (this.volume_left == "m³") {
        if (this.volume_right == "mm³") {
          this.volume_result = this.volume_number * 1000000000;
        } else if (this.length_right == "cm³") {
          this.volume_result = this.volume_number * 1000000;
        } else if (this.length_right == "dm³") {
          this.volume_result = this.volume_number * 1000;
        } else if (this.length_right == "m³") {
          this.volume_result = this.volume_number;
        } else {
          this.volume_result = this.volume_number / 1000;
        }
      }
      if (this.volume_left == "km³") {
        if (this.volume_right == "mm³") {
          this.volume_result = this.volume_number * 1000000000000;
        } else if (this.volume_right == "cm³") {
          this.volume_result = this.volume_number * 1000000000;
        } else if (this.volume_right == "dm³") {
          this.volume_result = this.volume_number * 1000000;
        } else if (this.volume_right == "m³") {
          this.volume_result = this.volume_number * 1000;
        } else {
          this.volume_result = this.volume_number;
        }
      }
      var date = new Date();
      var hour = date.getHours();
      var min = date.getMinutes();
      var sec = date.getSeconds();
      var time = hour + ":" + min + ":" + sec;
      console.log(time);
      var comment = this.volume_result;
      console.log(comment);
      this.$http
        .post(
          "http://localhost:3000/api/Stu/addStu1",
          {
            record_time: time,
            record_comment: comment
          },
          {}
        )
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          console.log("失败");
        });
    },
    exchange_weight() {
      if (this.weight_left == "mg") {
        if (this.weight_right == "mg") {
          this.weight_result = this.weight_number;
        } else if (this.weight_right == "g") {
          this.weight_result = this.weight_number / 1000;
        } else {
          this.weight_result = this.weight_number / 1000000;
        }
      }
      if (this.weight_left == "g") {
        if (this.weight_right == "mg") {
          this.weight_result = this.weight_number * 1000;
        } else if (this.weight_right == "g") {
          this.weight_result = this.weight_number;
        } else {
          this.weight_result = this.weight_number / 1000;
        }
      }
      if (this.weight_left == "kg") {
        if (this.weight_right == "mg") {
          this.weight_result = this.weight_number * 1000000;
        } else if (this.weight_right == "g") {
          this.weight_result = this.weight_number * 1000;
        } else {
          this.weight_result = this.weight_number;
        }
      }
      var date = new Date();
      var hour = date.getHours();
      var min = date.getMinutes();
      var sec = date.getSeconds();
      var time = hour + ":" + min + ":" + sec;
      console.log(time);
      var comment = this.weight_result;
      console.log(comment);
      this.$http
        .post(
          "http://localhost:3000/api/Stu/addStu1",
          {
            record_time: time,
            record_comment: comment
          },
          {}
        )
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          console.log("失败");
        });
    },
    rectangle_area() {
      if (this.rectangle_length < 0 || this.rectangle_width < 0) {
        Message({ message: "长度或宽度不能小于0", center: true });
      } else {
        this.rectangle_result = this.rectangle_length * this.rectangle_width;
        var date = new Date();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var time = hour + ":" + min + ":" + sec;
        console.log(time);
        var comment = this.rectangle_result;
        console.log(comment);
        this.$http
          .post(
            "http://localhost:3000/api/Stu/addStu1",
            {
              record_time: time,
              record_comment: comment
            },
            {}
          )
          .then(response => {
            console.log(response);
          })
          .catch(e => {
            console.log("失败");
          });
      }
    },
    circle_area() {
      if (this.circle_number < 0) {
        Message({ message: "半径不能小于0", center: true });
      } else {
        this.circle_result = (
          Math.PI *
          this.circle_number *
          this.circle_number
        ).toFixed(6);
        var date = new Date();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var time = hour + ":" + min + ":" + sec;
        console.log(time);
        var comment = this.circle_result;
        console.log(comment);
        this.$http
          .post(
            "http://localhost:3000/api/Stu/addStu1",
            {
              record_time: time,
              record_comment: comment
            },
            {}
          )
          .then(response => {
            console.log(response);
          })
          .catch(e => {
            console.log("失败");
          });
      }
    },
    trapezoid_area() {
      if (
        this.trapezoid_top < 0 ||
        this.trapezoid_bottom < 0 ||
        this.trapezoid_tall < 0
      ) {
        Message({ message: "上底、下底或高不能小于0", center: true });
      } else {
        this.trapezoid_result =
          (1 / 2) *
          (parseInt(this.trapezoid_top) + parseInt(this.trapezoid_bottom)) *
          this.trapezoid_tall;
        var date = new Date();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var time = hour + ":" + min + ":" + sec;
        console.log(time);
        var comment = this.trapezoid_result;
        console.log(comment);
        this.$http
          .post(
            "http://localhost:3000/api/Stu/addStu1",
            {
              record_time: time,
              record_comment: comment
            },
            {}
          )
          .then(response => {
            console.log(response);
          })
          .catch(e => {
            console.log("失败");
          });
      }
    },
    cuboid_area() {
      if (
        this.cuboid_width < 0 ||
        this.cuboid_tall < 0 ||
        this.cuboid_length < 0
      ) {
        Message({ message: "长、宽或高不能小于0", center: true });
      } else {
        this.cuboid_result =
          this.cuboid_length * this.cuboid_width * this.cuboid_tall;
        var date = new Date();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var time = hour + ":" + min + ":" + sec;
        console.log(time);
        var comment = this.cuboid_result;
        console.log(comment);
        this.$http
          .post(
            "http://localhost:3000/api/Stu/addStu1",
            {
              record_time: time,
              record_comment: comment
            },
            {}
          )
          .then(response => {
            console.log(response);
          })
          .catch(e => {
            console.log("失败");
          });
      }
    },
    bool_area() {
      if (this.bool_number < 0) {
        Message({ message: "半径不能小于0", center: true });
      } else {
        this.bool_result = (
          (4 / 3) *
          Math.PI *
          this.bool_number *
          this.bool_number *
          this.bool_number
        ).toFixed(6);
        var date = new Date();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var time = hour + ":" + min + ":" + sec;
        console.log(time);
        var comment = this.bool_result;
        console.log(comment);
        this.$http
          .post(
            "http://localhost:3000/api/Stu/addStu1",
            {
              record_time: time,
              record_comment: comment
            },
            {}
          )
          .then(response => {
            console.log(response);
          })
          .catch(e => {
            console.log("失败");
          });
      }
    },
    get_factorial() {
      if (this.factorial_number < 0) {
        Message({ message: "该数不能计算阶乘", center: true });
      } else {
        var j = 1;
        for (var i = 1; i <= this.factorial_number; i++) {
          j *= i;
        }
        this.factorial_result = j;
        var date = new Date();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var time = hour + ":" + min + ":" + sec;
        console.log(time);
        var comment = this.factorial_result;
        console.log(comment);
        this.$http
          .post(
            "http://localhost:3000/api/Stu/addStu1",
            {
              record_time: time,
              record_comment: comment
            },
            {}
          )
          .then(response => {
            console.log(response);
          })
          .catch(e => {
            console.log("失败");
          });
      }
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
.jiecheng {
  background: #0f4567;
}
.detail {
  text-align: center;
  margin-top: 0.6rem;
  font-size: 0.3rem;
}
.detail p {
  font-size: 0.5rem;
  margin-bottom: 0.4rem;
}
.detail input {
  margin-bottom: 0.2rem;
  width: 1.2rem;
}
.detail button {
  width: 1.4rem;
  margin-bottom: 0.2rem;
  text-align: center;
}
.one p {
  color: #00ff0f;
}
.two p {
  color: #fd9d21;
}
.three p {
  color: #ff6767;
}
.four p {
  color: #ff89f7;
}
.five p {
  color: #00ffff;
}
.six p {
  color: #0f4567;
}
.choose {
  font-size: 0.3rem;
  input {
    width: 0.6rem;
  }
}
.length-detail {
  margin-top: 0.4rem;
}
.area-detail {
  margin-top: 0.4rem;
}
.volume-detail {
  margin-top: 0.4rem;
}
</style>