// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* material-
import VueMaterial from '@/../node_modules/vue-material'
import '@/../node_modules/vue-material/dist/vue-material.min.css'
import '@/../node_modules/vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
*/

// vuetify
import Vuetify from '@/../node_modules/vuetify'
import '@/../node_modules/vuetify/dist/vuetify.min.css'
import '@/../node_modules/material-design-icons-iconfont/dist/material-design-icons.css'

// Vue social sharing
import SocialSharing from 'vue-social-sharing'

Vue.use(Vuetify)
Vue.use(SocialSharing)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
