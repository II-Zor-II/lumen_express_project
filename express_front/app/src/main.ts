import Vue from 'vue';
import VueRouter from 'vue-router';
import router from '@/routers/router.ts';

Vue.config.productionTip = false;

// Register VueRouter Config
Vue.use(VueRouter);

// Create Vue Instance
const app = new Vue({
  el: '#app',
  router
});
