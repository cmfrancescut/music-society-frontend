import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import { createPinia } from "pinia";
import './style.css'
import App from './App.vue'
import routes from "./routes.js";

//Components
import Badge from "./components/BadgeComponent/Badge.vue";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent.vue";
import CheckboxComponent from "./components/CheckboxComponent/Checkbox.vue"
import TextInput from "./components/TextInputComponent/TextInput.vue";

const router = createRouter({
    history: createWebHistory(),
    routes
})

const pinia = createPinia()
const app = createApp(App)

app.component('ButtonComponent', ButtonComponent)
    .component('Checkbox', CheckboxComponent)
    .component('TextInput', TextInput)
    .component('Badge', Badge)

app.use(router)
    .use(pinia)
app.mount('#app')
