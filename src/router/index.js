import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/header'
import Footer from '@/components/footer'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    components: {
      default: HelloWorld,
      header: Header,
      footer: Footer
    }
  }]
})
