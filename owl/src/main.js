import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueKinesis from 'vue-kinesis';
import SequentialEntrance from 'vue-sequential-entrance';
import 'vue-sequential-entrance/vue-sequential-entrance.css';
import {KinesisContainer,KinesisElement} from 'vue-kinesis';
import Vuelidate from 'vuelidate';
import moment from 'moment';
// import 'moment/locale/'
Vue.component('kinesis-container',KinesisContainer);
Vue.component('kinesis-element',KinesisElement);

// moment.locale('np')

Vue.use(SequentialEntrance);
Vue.use(VueKinesis);
Vue.use(Vuelidate)

Vue.filter('filterDate',function(date){
    return moment(date).format("ll");
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
