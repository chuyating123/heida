<template>
  <div class="movie-box">
    <ul class="movie-list">
      <li v-for="obj in movieList" :key="obj.id" @click="gotoDetail(obj.id)">
        <img :src="obj.images.medium" alt />
        <div class="movie-info">
          <h3>{{obj.title}}</h3>演员:
          <span v-for="cast in obj.casts" :key="cast.id">{{cast.name}}</span>
          <br />剧情:
          <span v-for="genre in obj.genres" :key="genre">{{genre}}</span>
          <br />年份:
          <span>2019</span>
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
      movieList: []
    };
  },
  created() {
    axios
      .get(
        "https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10"
      )
      .then(res => {
        console.log(res);
        this.movieList = res.data.subjects;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    gotoDetail(id) {
      this.$router.push({ path: "/MovieDetail", query: { id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.movie-list {
  margin-top: 1.2rem;
}
.movie-list li {
  display: flex;
  margin-left: 0.2rem;
  margin-bottom: 0.2rem;
  img {
    height: 2.2rem;
    width: 2.2rem;
    margin-right: 0.2rem;
  }
}
.movie-info {
  flex: 1;
}
</style>