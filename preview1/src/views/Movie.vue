<template>
  <div>
  <ul>
      <li class="list" v-for="obj in movie" :key="obj.id" @click="$router.push({path:'/MovieDetail',query:{id:obj.id}})">
       <img :src="obj.images.medium" alt="">
       <div class="right">
           <h2>{{obj.original_title}}</h2>
           <span v-for="cast in obj.casts" :key="cast.id">{{cast.name}}  </span>
           <br>
           <span v-for="genre in obj.genres" :key="genre.id">{{genre}}</span>
           <br>
           <span>{{obj.collect_count}}人观看</span>
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
        movie:[]
    };
  },
  created() {
    axios
      .get(
        "https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10"
      )
      .then(res => {
        this.movie=res.data.subjects;
      })
      .catch(res => {
        console.log(res);
      });
  }
};
</script>

<style lang="scss" scoped>
.list{
    width: 100%;
    height: 2rem;
    display: flex;
    padding: 0.1rem;
    img{
        width: 2rem;
        height: 100%;
        margin-right: 0.1rem;
    }
}
</style>