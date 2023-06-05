import { createRouter, createWebHistory}  from "vue-router"
import HomeView from "../views/HomeView.vue"
import Page1View from "../views/Page1View.vue"
import ProjectView from "../views/ProjectView.vue"
import ContactComponents from "../views/ContactComponents.vue"
import BlogView from "../views/BlogView.vue"
import ArticleView from "../views/ArticleView.vue"
import BoutiqueView from "../views/BoutiqueView.vue"
import ProduitView from "../views/ProduitView.vue"


const routes = [
      {
            path:"/",
            component: HomeView,
      },
      {
            path: "/page1",
            component: Page1View,
      },
      {
            path: "/project",
            component: ProjectView,
      },
      {
            path: "/contact",
            component: ContactComponents,
      },

      { path: "/blog",
            component: BlogView,
      },
      {
            path: '/article',
            component:ArticleView,
      },
      {
            path: "/boutique",
            component: BoutiqueView,
      },
      {
            path: "/produit",
            component: ProduitView,
      },
      
     
]
export const router = createRouter({
      history: createWebHistory(),
      routes,
})