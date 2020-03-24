import Vue from 'vue'
import Router from 'vue-router'
import resume from '@/components/resume'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume
    }
  ],
  mode:'history'
})
