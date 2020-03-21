<template>
  <div v-if="!isloading">
    <div class="detail-list">
      <img :src="moviedetail.images.medium" alt />
      <div class="right">
        <h2>{{moviedetail.original_title}}</h2>
        <span>{{moviedetail.durations[0]}}</span>
      </div>
    </div>
    <div class="bottum">{{moviedetail.summary}}</div>
    <div class="loading" v-if="isloading">
      <img src="./../assets/images/loading.gif" alt />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      moviedetail: {},
      isloading:true
    };
  },
  created() {
    axios
      .get(
        "https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/subject/" +
          this.$route.query.id
      )
      .then(res => {
        this.moviedetail = res.data;
        this.isloading=false
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
    flex: 1;
    height: 5rem;
    margin-right: 0.1rem;
  }
  .right {
    flex: 1;
  }
}
.loading{
    position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1rem;
}
</style>