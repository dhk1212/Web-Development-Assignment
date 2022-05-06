import { createRouter, createWebHashHistory } from 'vue-router'

const beforeEnter = (to, from, next) => {
  if (!localStorage.isAuthenticatedStaff && !localStorage.isAuthenticatedAdmin) {
    next({ name: 'login' })
    return
  }
  next()
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    beforeEnter
  },
  {
    path: '/student',
    name: 'student',
    component: () => import('../views/StudentView.vue'),
    beforeEnter
  },
  {
    path: '/staff',
    name: 'staff',
    component: () => import('../views/StaffView.vue'),
    beforeEnter
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    beforeEnter
  },
  {
    path: '/course',
    name: 'course',
    component: () => import('../views/CourseView.vue'),
    beforeEnter
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    beforeEnter: (to, from, next) => {
      console.log(localStorage.isAuthenticated)
      if (localStorage.isAuthenticatedAdmin) {
        next({ name: 'admin' })
        return
      }
      if (localStorage.isAuthenticatedStaff) {
        next({ name: 'course' })
        return
      }
      next()
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
