import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user.store'
import HomeView from '../views/HomeView.vue'
import loginView from '../views/LoginView.vue'
import UserView from '../views/UserView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
          component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: loginView
    },
    {
      path: '/user',
      name: 'user',
      component: UserView
    },
  ]
})
router.beforeEach((to, from) => {
  // console.log("TO : " + to.fullPath)
  // console.log("From : " + from.fullPath)
  const userStore = useUserStore()
  if(to.name === 'user' && !userStore.isLoggedIn) {
    return '/login'
  }
})

export default router
