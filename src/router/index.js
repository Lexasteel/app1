import {createRouter, createWebHistory} from 'vue-router'
import ApeView from '@/views/ApeView'
import RouView from '@/views/RouView'
import KenView from '@/views/KenView'
import PenView from '@/views/PenView'
import ShbmView from '@/views/ShbmView'
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
]

const router = createRouter({
  history: createWebHistory(),

  routes,
})

export default router
