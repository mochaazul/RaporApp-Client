import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueAWN from 'vue-awesome-notifications';
const AWNOptions = {

}
Vue.use(VueAWN, AWNOptions)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
