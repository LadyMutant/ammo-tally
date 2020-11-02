// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './state/state'
//import VueFilterDateFormat from 'vue-filter-date-format';
 
//Vue.use(VueFilterDateFormat);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  beforeCreate() {
    this.$store.commit('initializeStore')
  },
  components: { App },
  template: '<App/>'
})