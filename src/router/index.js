import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Detail from '@/components/Detail'
import Create from '@/components/Create'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: List},
    {path: '/detail/:id', component: Detail},
    {path: '/create', component: Create}
  ]
})
