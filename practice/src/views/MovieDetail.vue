<template>
  <div>
    <div v-if="!isloading">
      <div class="detail-top">
        <img :src="movie.images.medium" alt />
        <div id="detail-right">
          <h4>{{movie.original_title}}</h4>
          <span>{{movie.mainland_pubdate}}</span>
          <br />
          <span>{{movie.durations[0]}}</span>
        </div>
      </div>
      <div id="detail-bottum">{{movie.summary}}</div>
      <div class="loading" v-if="isloading">
        <img src="../assets/images/loading.gif" alt />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movie: {},
      isloading:true
    }
  },
  created() {
    axios
      .get(
        "https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/subject/" +
          this.$route.query.id
      )
      .then((res)=> {
        this.movie = res.data;
        this.isloading=false
      })
      .catch((res) => {
        console.log(res);
      });
  }
};
</script>

<style lang="scss" scoped>
.detail-top {
  display: flex;
}
.detail-top img {
  width: 3rem;
}
.detail-right {
  flex: 1;
}
.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1rem;
}
</style>