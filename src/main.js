// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/fonts/web-icons/web-icons.css"
import "./assets/themes/classic/global/css/bootstrap.css"
import "./assets/themes/classic/base/css/site.css"
import "./assets/vendor/animsition/animsition.css"
import "./assets/vendor/formvalidation/formValidation.css"
import "./assets/vendor/jquery/jquery.min"
import "./assets/vendor/bootstrap/bootstrap.min.js"
import "./assets/vendor/formvalidation/formValidation.min.js"
import "./assets/vendor/formvalidation/framework/bootstrap.min.js"
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})