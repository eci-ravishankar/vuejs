import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

const app = createApp(App)

app.directive("changestyle",{
    beforeMount(e1:any) {
       console.log(e1);
       e1.style.color = "green";
       e1.style.fontSize = "30px";
    }
 });

 app.use(store).use(router).mount('#app')
