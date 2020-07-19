import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { BootstrapVue, IconsPlugin , BIconTrash} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import TopNav from './components/TopNav';
import Aside  from './components/Aside';
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use('BIconTrash', BIconTrash)
Vue.config.productionTip = false
Vue.component('TopNav', TopNav)
Vue.component('Aside', Aside)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
