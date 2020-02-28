<template>
  <div>
    <ul class="list">
      <li class="movie-list" v-for="obj in movielist" :key="obj.id"> 
        <img :src="obj.images.medium" alt />
        <div class="desc">
          <h3>{{obj.original_title}}</h3>
          <p>{{obj.casts}}</p>
          <p>207147已观看</p>
          <p>年份：2019</p>
          <p>剧情</p>
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
    }
  },
  created() {
      axios.get('https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10')
      .then((res)=>{
        this.movielist=res.data.subjects;
        console.log(res)
      }).catch((res)=>{
          console.log(res)
      })
  }
};
</script>

<style lang="scss" scoped>
.movie-list {
  color: #000000;
  display: flex;
  margin-bottom: 0.2rem;
}
.movie-list img {
  width: 1.8rem;
  height: 2.46rem;
  margin-right: 0.2rem;
}
.list {
  padding: 0.2rem;
}
.desc {
  flex: 1;
}
</style>