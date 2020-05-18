<template>
  <div>
    <div class="detail-box">
      <img :src="detail.images.small" alt />
      <div class="detail-info">
        <h3>{{detail.title}}</h3>时长:
        <span>{{detail.durations[0]}}</span>
        导演:
        <span>{{detail.directors[0].name}}</span>
      </div>
    </div>
    <div class="detail-container">{{detail.summary}}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      detail: {}
    };
  },
  created() {
    axios
      .get(
        "https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/subject/" +
          this.$route.query.id
      )
      .then(res => {
        console.log(res);
        this.detail = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
.detail-box {
  display: flex;
}
.detail-box img {
  margin-right: 0.2rem;
  width: 2.5rem;
  height: 3rem;
}
.detail-info {
  flex: 1;
}
</style>