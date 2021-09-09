import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

const AppComponent = require('@/App.vue').default;

const router = new VueRouter({
  routes: [
    {path: '/Foo', component: {template: '<div><h1>Test</h1></div>'}},
    {path: '/Bar', component: {template: '<div>bar</div>'}}
  ],
  mode: 'history'
});

Vue.use(VueRouter);

const app = new Vue({
  el: '#app',
  router,
  components: {
    AppComponent
  }
});
