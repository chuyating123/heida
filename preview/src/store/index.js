import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color:"purple",
    name:"电影",
    photo:[]
  },
  mutations: {
    change(state,obj){
      state.color=obj.color;
      state.name=obj.name;
    },
    addphoto(state,arr){
      state.photo=arr;
    }
  },
  actions: {
  },
  modules: {
  }
})
