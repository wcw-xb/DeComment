import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'

const routes = [
  {
    path: '/',
    name: '',
    component: IndexView,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../views/HomeView.vue"),
      },
      {
        path: "post/:id",
        name: "post",
        component: () => import("../components/PostDetailView.vue")
      },
      {
        path: "notice",
        name: "notice",
        component: () => import("../views/NoticeView.vue")
      },
      {
        path: "collaborator",
        name: "collaborator",
        component: () => import("../views/CollaboratorView.vue")
      },
      {
        path: "ranking",
        name: "ranking",
        component: () => import("../views/RankingView.vue")
      },
      {
        path: "user",
        name: "user",
        component: () => import("../views/UserView.vue")
      }
    ],
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
