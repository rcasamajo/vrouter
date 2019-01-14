import Vue from 'vue'
import VRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes.js'

Vue.use(VRouter);
Vue.config.productionTip = false;

const router = new VRouter({
    routes,
    mode: 'history'
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
