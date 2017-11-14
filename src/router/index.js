import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Articles from '@/views/articles'
import Weekly from '@/views/weekly'
import Recommend from '@/views/recommend'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    components: {
      default: Index,
      header: Header,
      footer: Footer
    }
  },
  {
    path: '/article',
    name: 'Article',
    components: {
      default: Articles,
      header: Header,
      footer: Footer
    }
  },
  {
    path: '/weekly',
    name: 'Weekly',
    components: {
      default: Weekly,
      header: Header,
      footer: Footer
    }
  },
  {
    path: '/recommend',
    name: 'Recommend',
    components: {
      default: Recommend,
      header: Header,
      footer: Footer
    }
  }]
})
