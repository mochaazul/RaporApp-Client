import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../configs/axios'
import { getField, updateField } from 'vuex-map-fields'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    siswas: [],
    walikelases: [],
    pengumumans: [],
    users: [],
    testing: "",
    controlValue: {
      showLayout: false,
      floatLayout: true,
      enableDownload: true,
      previewModal: true,
      paginateElementsByHeight: 1100,
      manualPagination: false,
      filename: 'Hee Hee',
      pdfQuality: 2,
      pdfFormat: 'a4',
      pdfOrientation: 'portrait',
      pdfContentWidth: '800px'
    }
  },
  mutations: {
    updateField,
    SET_SISWAS(state, payload) {
      state.siswas = payload
    },
    SET_TESTING(state, payload) {
      state.testing = payload
    }
  },
  actions: {

    async fetchSiswas({ commit }) {
      const { data: siswas } = await axios.get("/siswa")
      commit("SET_SISWAS", siswas)
    },
    async TESTING({ commit }) {
      const { data } = await axios.get('/testing')
      commit("SET_TESTING", data)
    }
  },
  getters: {
    getField
  }
})
