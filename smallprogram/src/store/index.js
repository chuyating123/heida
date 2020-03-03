import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:"电影",
    color:"red",
    photo:[]
  },
  mutations: {
    change(state,obj){
      state.name=obj.name;
      state.color=obj.color;    
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
