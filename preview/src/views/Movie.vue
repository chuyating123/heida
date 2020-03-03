<template>
  <div>
    <ul class="movie-box">
      <li class="movie-list" v-for="(obj,index) in movielist" :key="index" @click="$router.push({path:'/MovieDetail',query:{id:obj.id}})">
          <img :src="obj.images.medium" alt="">
          <div id="movie-right">
              <h3>{{obj.original_title}}</h3>
              <span v-for="cast in obj.casts" :key="cast.id">{{cast.name}}  </span>
              <br>
              <span v-for="(genre,index) in obj.genres" :key="index">{{genre}}  </span>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movielist: []
    };
  },
  created() {
    axios
      .get(
        "https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10"
      )
      .then((res) => {
        this.movielist=res.data.subjects;
      })
      .catch((res) => {
        console.log(res);
      });
  }
};
</script>
<style lang="scss" scoped>
.movie-list{
    display: flex;
    padding: 0.2rem;
    img{
        width: 1.8rem;
        height: 2.4rem;
        margin-right: 0.2rem;
    }
}
</style>