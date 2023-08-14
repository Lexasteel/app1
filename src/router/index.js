import {createRouter, createWebHistory} from 'vue-router'
import ApeView from '@/views/ApeView'
import RouView from '@/views/RouView'
import KenView from '@/views/KenView'
import PenView from '@/views/PenView'
import ShbmView from '@/views/ShbmView'
import LoginView from '@/views/LoginView'
import FileUploadView from '@/views/FileUploadView'
const routes = [
  {
    path: '/pudps/ape',
    name: 'ape',
    component: ApeView,
  },
  {
    path: '/pudps/ken',
    name: 'ken',
    component: KenView,
  },
  {
    path: '/pudps/pen',
    name: 'pen',
    component: PenView,
  },
  {
    path: '/pudps/rou',
    name: 'rou',
    component: RouView,
  },
  {
    path: '/pudps/shbm',
    name: 'shbm',
    component: ShbmView,
  },
  {
    path: '/pudps/upload',
    name: 'upload',
    component: FileUploadView,
  },
  {
    path: '/pudps/login',
    name: 'login',
    component: LoginView,
  },
]

const router = createRouter({
  history: createWebHistory(),

  routes,
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/pudps/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')
  if (!loggedIn && authRequired) next({name: 'login'})
  else next()
})

export default router
