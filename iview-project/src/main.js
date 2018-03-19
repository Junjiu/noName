// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from 'axios';
import VueI18n from 'vue-i18n'

Vue.prototype.$ajax = axios
Vue.use(iView);
Vue.use(VueI18n);
axios.defaults.withCredentials=true;  
Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
