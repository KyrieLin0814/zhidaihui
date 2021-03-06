import Vue from 'vue'
import App from './App'
import tools from '@/utils/tools.js'
import http from '@/utils/http.js';
import global from '@/utils/global.js'
import './static/css/common.css'

Vue.prototype.$tools = tools
Vue.prototype.$http = http.httpRequest
Vue.prototype.global = global

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
