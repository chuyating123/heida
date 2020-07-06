<template>
  <div>
    <ul class="record_choose">
      <li @click="common">普通计算</li>
      <li @click="advanced">高级计算</li>
      <li @click="finance">财务计算</li>
      <li @click="clear_record">删除记录</li>
    </ul>
    <ul class="record_container">
      <li v-if="iscommon">
        <div class="common_record" v-for="(obj,index) in this.common_data" :key="index">
          <span class="common_left">{{obj.record_comment}}</span>
          <span class="common_right">{{obj.record_time}}</span>
        </div>
      </li>
      <li v-if="isadvanced">
        <div class="advanced_record" v-for="(obj,index) in this.advanced_data" :key="index">
          <span class="advanced_left">{{obj.record_comment}}</span>
          <span class="advanced_right">{{obj.record_time}}</span>
        </div>
      </li>
      <li v-if="isfinance">
        <div class="finance_record" v-for="(obj,index) in this.finance_data" :key="index">
          <span class="finance_left">{{obj.record_comment}}</span>
          <span class="finance_right">{{obj.record_time}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iscommon: true,
      isadvanced: false,
      isfinance: false,
      common_data: [],
      advanced_data: [],
      finance_data: []
    };
  },
  created() {
    (this.iscommon = true),
      (this.isadvanced = false),
      (this.isfinance = false),
      this.$http
        .get(
          "http://localhost:3000/api/Stu/showStu",
          {
            //   record_time:this.common_time,
            //   record_comment:this.common_comment
          },
          {}
        )
        .then(response => {
          console.log(response);
          this.common_data = response.body;
        })
        .catch(e => {
          console.log("失败");
        });
  },
  methods: {
    common() {
      (this.iscommon = true),
        (this.isadvanced = false),
        (this.isfinance = false),
        this.$http
          .get(
            "http://localhost:3000/api/Stu/showStu",
            {
              //   record_time:this.common_time,
              //   record_comment:this.common_comment
            },
            {}
          )
          .then(response => {
            console.log(response);
            this.common_data = response.body;
          })
          .catch(e => {
            console.log("失败");
          });
    },
    advanced() {
      (this.iscommon = false),
        (this.isadvanced = true),
        (this.isfinance = false);
      this.$http
        .get(
          "http://localhost:3000/api/Stu/showStu1",
          {
            //   record_time:this.common_time,
            //   record_comment:this.common_comment
          },
          {}
        )
        .then(response => {
          console.log(response);
          this.advanced_data = response.body;
        })
        .catch(e => {
          console.log("失败");
        });
    },
    finance() {
      (this.iscommon = false),
        (this.isadvanced = false),
        (this.isfinance = true);
      this.$http
        .get(
          "http://localhost:3000/api/Stu/showStu2",
          {
            //   record_time:this.common_time,
            //   record_comment:this.common_comment
          },
          {}
        )
        .then(response => {
          console.log(response);
          this.finance_data = response.body;
        })
        .catch(e => {
          console.log("失败");
        });
    },
    clear_record() {
      if (this.iscommon) {
        this.$http
          .post("http://localhost:3000/api/Stu/delStu", {}, {})
          .then(response => {
            this.common_data = [];
          })
          .catch(e => {
            console.log("失败");
          });
      } else if (this.isadvanced) {
        this.$http
          .post("http://localhost:3000/api/Stu/delStu1", {}, {})
          .then(response => {
            this.advanced_data = [];
          })
          .catch(e => {
            console.log("失败");
          });
      } else {
        this.$http
          .post("http://localhost:3000/api/Stu/delStu2", {}, {})
          .then(response => {
            this.finance_data = [];
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
.record_choose {
  background: #eeeeee;
  width: 2rem;
  height: 14rem;
  float: left;
}
.record_choose li {
  width: 100%;
  height: 0.8rem;
  text-align: center;
  padding-top: 0.3rem;
  text-decoration: none;
  color: #000000;
  font-size: 0.3rem;
}
.common_record {
  margin-top: 0.4rem;
  font-size: 0.3rem;
  position: relative;
}
.common_left {
  margin-left: 0.2rem;
  font-weight: 700;
}
.common_right {
  position: absolute;
  right: 0.2rem;
}
.advanced_record {
  margin-top: 0.4rem;
  font-size: 0.3rem;
  position: relative;
}
.advanced_left {
  margin-left: 0.2rem;
  font-weight: 700;
}
.advanced_right {
  position: absolute;
  right: 0.2rem;
}
.finance_record {
  margin-top: 0.4rem;
  font-size: 0.3rem;
  position: relative;
}
.finance_left {
  margin-left: 0.2rem;
  font-weight: 700;
}
.finance_right {
  position: absolute;
  right: 0.2rem;
}
</style>