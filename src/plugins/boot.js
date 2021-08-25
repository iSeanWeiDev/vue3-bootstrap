import router from '@router';
import store from '@store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@assets/scss/index.scss';

export default {
  install(Vue) {
    Vue.use(router);
    Vue.use(store);
  }
};
