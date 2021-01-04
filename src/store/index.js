import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'ax'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    siswas:[],
    walikelases:[],
    pengumumans:[],
    users:[],
  },
  mutations: {
  },
  actions: {
    fetchSiswas({commit}){
      axios
    }
  }
})
