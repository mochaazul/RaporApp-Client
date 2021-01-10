import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../configs/axios'
import { getField, updateField } from 'vuex-map-fields'
import EventBus from '../configs/EventBus'

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
      enableDownload: false,
      previewModal: true,
      paginateElementsByHeight: 1100,
      manualPagination: false,
      filename: 'Hee Hee',
      pdfQuality: 2,
      pdfFormat: 'legal',
      pdfOrientation: 'portrait',
      pdfContentWidth: '800px'
    },
    successMsg: ""
  },
  mutations: {
    updateField,
    SET_SUCCESS_MSG(state, payload) {
      state.successMsg = payload
    },
    CLEAR_SUCCESS_MSG(state, payload) {
      state.successMsg = null
    },
    SET_SISWAS(state, payload) {
      state.siswas = payload,
        EventBus.$emit('SISWAS_UPDATED')
    },
    SET_TESTING(state, payload) {
      state.testing = payload
    }
  },
  actions: {

    async fetchSiswas({ commit }) {
      try {
        const { data: siswas } = await axios.get("/siswa")
        commit("SET_SISWAS", siswas)
      } catch (error) {
        console.log(error);
      }
    },
    async TESTING({ commit }) {
      try {
        const { data } = await axios.get('/testing')
        commit("SET_TESTING", data)
      } catch (error) {
        console.log(error);
      }
    },

    // JUST API CALL
    async uploadFile({ commit, dispatch }, { file }) {
      try {
        const formData = new FormData();
        formData.append('siswa_excel', file)
        const { data } = await axios.post('/import/siswa', formData)
        dispatch('fetchSiswas')
        commit('SET_SUCCESS_MSG',"Import Berhasil")
        this.$awn.success("asd")
      } catch (error) {
        EventBus.$emit("IMPORT_ERROR", error);
      }
    }
  },
  getters: {
    getField,
    successMsg: state => {
      return state.successMsg
    }
  }
})
