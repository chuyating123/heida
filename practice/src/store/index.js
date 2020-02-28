import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color:"",
    name:""
  },
  mutations: {
    change(state,{color,name}){
      state.color=color;
      state.name=name;
    }
  },
  actions: {
  },
  modules: {
  }
})
