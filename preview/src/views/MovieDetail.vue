<template>
  <div>
    <div v-if="!isloading"> 
      <div class="detail-box">
        <img :src="detail.images.medium" alt />
        <div id="detail-right">
          <h3>{{detail.original_title}}</h3>
          <span>{{detail.pubdate}}</span>
          <br />
          <span>{{detail.durations[0]}}</span>
        </div>
      </div>
      <div class="detail-bottum">{{detail.summary}}</div>
    </div>
    <img class="loading" src="../assets/images/loading.gif" v-if="isloading" alt />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      detail: {},
      isloading: true
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
        this.isloading = false;
      })
      .catch(res => {
        console.log(res);
      });
  }
};
</script>

<style lang="scss" scoped>
.detail-box {
  display: flex;
  padding: 0.2rem;
  img {
    width: 2.4rem;
    height: 3rem;
    margin-right: 0.2rem;
  }
}
.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1rem;
}
</style>