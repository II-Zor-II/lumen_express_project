import Vue from 'vue';
import VueRouter from 'vue-router';

const routes = require('@/routers/router.ts');

const router = new VueRouter(routes);

const app = new Vue(
  router
).$mount('#app');
