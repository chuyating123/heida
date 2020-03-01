<template>
  <div>
    <ul class="list">
      <li class="movie-list" v-for="obj in movielist" :key="obj.id" @click="goDetail(obj.id)">
        <img :src="obj.images.medium" alt />
        <div class="desc">
          <h3>{{obj.original_title}}</h3>
          <span v-for="cast in obj.casts" :key="cast.id">{{cast.name}}  </span>
          <br>
          <span v-for="genre in obj.genres" :key="genre">{{genre}}  </span>
          <br>
          <span>2019</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axio from "axios";
export default {
  data() {
    return {
      movielist: []
    }
  },
  created() {
    axio.get("https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10")
      .then((res) => {
        this.movielist = res.data.subjects;
      })
      .catch((res)=> {
        console.log(res);
      });
  },
  methods:{
      goDetail(id){
          this.$router.push({path:'/MovieDetail',query:{id}})

      }
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
  height: 2.5rem;
  margin-right: 0.2rem;
}
.desc {
  flex: 1;
}
.list {
  padding: 0.2rem;
}
</style>