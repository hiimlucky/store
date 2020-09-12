import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexWrap from '@/components/IndexWrap.vue'
import searchPage from '@/components/searchPage.vue'
import cateList from '@/components/cateList.vue'
import goods_detail from '@/components/goods_detail.vue'
import login from '@/components/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IndexWrap',
    component: IndexWrap
  },
  {
    path: '/searchPage',
    name: 'searchPage',
    component: searchPage
  },
  {
    path: '/cateList',
    name: 'cateList',
    component: cateList
  },
  {
    path: '/goods_detail',
    name: 'goods_detail',
    component: goods_detail
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

