import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import { routes } from './routes';
import store from './store/store';

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = 'https://vue-http-1ea3a.firebaseio.com/'; // DB Address from Firebase

Vue.filter('currency', (value) => {
    return '$' + value.toLocaleString();
});

const router = new VueRouter({
    mode: 'hash',
    base: '/', // Base URL 
    routes
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})