import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueKinesis from 'vue-kinesis';
import SequentialEntrance from 'vue-sequential-entrance';
import 'vue-sequential-entrance/vue-sequential-entrance.css';
import {KinesisContainer,KinesisElement} from 'vue-kinesis';

Vue.component('kinesis-container',KinesisContainer);
Vue.component('kinesis-element',KinesisElement);


Vue.use(SequentialEntrance);
Vue.use(VueKinesis);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
