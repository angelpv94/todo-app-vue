import Vue from 'vue';
import App from './App.vue';
import '@/assets/css/tailwind.css';

import Card from './components/Card.vue';
import Button from './components/Button.vue';
import Input from './components/Input.vue';


Vue.config.productionTip = false;

Vue.component('todo-card', Card);
Vue.component('todo-button', Button);
Vue.component('todo-input', Input)

new Vue({
  render: h => h(App),
}).$mount('#app');
