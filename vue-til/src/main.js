import Vue from 'vue';
import App from './App.vue';
import router from '@/route/index';
import store from '@/store/index';
import { formatDate } from '@/utils/filters';

Vue.config.productionTip = false;

// filter를 전역으로 선언
Vue.filter('formatData', formatDate);
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
