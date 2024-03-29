import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App.vue'

import login from '@/pages/auth/login.vue'
import register from '@/pages/auth/register.vue'

import dashboard from '@/pages/dashboard.vue'
import diet from '@/pages/diet.vue'
import progress from '@/pages/progress.vue'
import contact from '@/pages/contact.vue'
import recipe from '@/pages/recipe.vue'
import recipeById from '@/pages/recipeById.vue'
import admin from '@/pages/admin.vue'
import adminGuard from '@/middleware/adminGuard'
import accountRecovery from '@/pages/auth/accountRecovery.vue'
import shoppingList from '@/pages/shoppingList.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    linkActiveClass: 'nav-active',
    scrollBehavior(to) {
      if (to.hash) {
        return {
          selector: to.hash,
          behavior: 'smooth'
        };
      }
    },
    routes: [
      {
        path: '/login',
        component: login,
        name: 'login'
      },
      {
        path: '/register',
        component: register,
        name: 'register'
      },
      {
        path: '/recovery',
        component: accountRecovery,
        name: 'accountRecovery'
      },
      {
        path: '',
        component: App,
        children: [
          {
            path: '',
            component: dashboard,
            name: 'dashboard'
          },
          {
            path: '/diet',
            component: diet,
            name: 'diet'
          },
          {
            path: '/shoppingList',
            component: shoppingList,
            name: 'shoppingList'
          },
          {
            path: '/progress',
            component: progress,
            name: 'progress'
          },
          {
            path: '/recipes',
            component: recipe,
            name: 'recipes'
          },
          {
            path: '/recipe/:id',
            component: recipeById,
            props: true,
            name: 'recipeById'
          },
          {
            path: '/contact',
            component: contact,
            name: 'contact'
          },
          {
            path: '/admin',
            component: admin,
            name: 'admin',
            middleware: adminGuard
          }
        ]
      }
    ],
  })
}





