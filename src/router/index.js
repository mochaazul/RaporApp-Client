import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../Layouts/AdminLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: '/admin',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../pages/Dashboard.vue')
      },
      {
        path: '/admin/datasiswa',
        name: 'Data Siswa',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../pages/DataSiswa.vue')
      },
      {
        path: '/admin/walikelas',
        name: 'Wali Kelas',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../pages/Walikelas.vue')
      },
      {
        path: '/admin/ketidak-hadiran',
        name: 'Kehadiran',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../pages/KetidakHadiran.vue')
      },
      {
        path: '/admin/catatan-akademik',
        name: 'Catatan Akademik',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../pages/CatatanAkademik.vue')
      },
      {
        path: '/admin/tempat-pkl',
        name: 'Tempat Pkl',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../pages/TempatPkl.vue')
      },
      {
        path: '/admin/pengumuman',
        name: 'Pengumuman',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../pages/Pengumuman.vue')
      },
      {
        path: '/admin/users',
        name: 'User Accounts',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../pages/UserAccounts.vue')
      },
      {
        path: '/admin/template',
        name: 'Template Settings',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../pages/SettingsTemplate.vue')
      },
      {
        path: '/admin/ui-settings',
        name: 'UISettings',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../pages/SettingsApp.vue')
      },
      {
        path: "/admin/*",
        component: () => import('../pages/errorPages/404.vue')
      }

    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
