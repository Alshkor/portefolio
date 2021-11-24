import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdb-vue-ui-kit/css/mdb.min.css';
import VueYoutube from 'vue-youtube'


Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueYoutube);

new Vue({
  render: h => h(App),
}).$mount('#app')
