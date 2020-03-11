<template>
  <div>
    <div class="detail-list">
      <img :src="detail.images.medium" alt />
      <div class="right">
        <h2>{{detail.original_title}}</h2>
        <span>{{detail.durations[0]}}</span>
      </div>
    </div>
      <div class="bottum">{{detail.summary}}</div>
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
        this.detail = res.data;
      })
      .catch(res => {
        console.log(res);
      });
  }
};
</script>

<style lang="scss" scoped>
.detail-list {
  display: flex;
  img {
    width: 50%;
    height: 5rem;
    margin-right: 0.1rem;
  }
}
</style>