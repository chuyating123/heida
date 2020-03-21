<template>
  <div>
  <ul class="box" v-if="!isloading">
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
        movie:[],
        isloading:true
    };
  },
  created() {
    axios
      .get(
        "https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10"
      )
      .then(res => {
        this.movie=res.data.subjects;
        this.isloading=false
      })
      .catch(res => {
        console.log(res);
      });
  }
};
</script>

<style lang="scss" scoped>
.box{
  padding: 0.1rem;
  .list{
   color: #000000;
    display: flex;
    padding: 0.1rem;
    img{
        width: 2rem;
        height: 1.6rem;
        margin-right: 0.1rem;
    }
    .right{
      flex: 1;
    }
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