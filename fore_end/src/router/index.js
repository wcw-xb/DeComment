import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import isMetaMaskLoggedIn from '../js/metamask';


const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexView,
    children: [
      {
        path: "",
        name: "home2",
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

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const isLoggedIn = await isMetaMaskLoggedIn();
    if (!isLoggedIn) {
      next({ name: 'login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
