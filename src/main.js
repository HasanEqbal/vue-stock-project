/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-template */
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store/index';

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-874bc.firebaseio.com/';

Vue.filter('currency', (value) => '$' + value.toLocaleString());
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
