import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import MyPage from "../components/page/MyPage.vue";
import { useAuthStore } from "../stores/auth";
import Layout from "../components/Layout.vue";
import DashboardCRM from "../components/page/DashboardCRM.vue";
import Test from "../components/page/Test.vue";
import Settings from "../components/settings/Settings.vue";

const routes = [
  {
    path: '/',
    component: Layout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'my-page',
        name: 'MyPage',
        component: MyPage,
      },
      {
        path: 'crm-dashboard',
        name: 'DashboardCRM',
        component: DashboardCRM,
      },
      {
        path: 'test',
        name: 'Test',
        component: Test,
      },
      {
        path: 'settings',
        name: 'Settings',
        component: Settings,
      },
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../components/Register.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../components/ForgotPassword.vue"),
  },
  {
    path: "/password-reset/:token",
    name: "ResetPassword",
    component: () => import("../components/ResetPassword.vue"),
  },
  //{
  //  path: "/contact/create",
  //  name: "AddContact",
  //  component: () => import("../components/contact/AddContact.vue"),
  //  meta: { requiresAuth: true },
  //},
  //{
  //  path: "/contact/list",
  //  name: "ContactList",
  //  component: () => import("../components/contact/ContactList.vue"),
  //   meta: { requiresAuth: true },
  //},
  //{
  //  path: "/contact/edit/:id?",
  //  name: "EditContact",
  //  component: () => import("../components/contact/EditContact.vue"),
  //  meta: { requiresAuth: true },
  //},
  {

  },
  {
      path: '/:catchAll(.*)', 
      name: 'NotFound', 
      component: () => import('../components/PageNotFound.vue') 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authStore.authUser) {
      alert('Not authenticated. Redirecting to login.')
      console.log('Not authenticated. Redirecting to login.');
      next('/login'); 
    } else {
      next();
    }
  } else {
    if (to.name === 'Login' || to.name === 'Register') {
      if (authStore.authUser) {
        alert('Already authenticated. Redirecting to home.');
        console.log('Already authenticated. Redirecting to home.');
        next('/'); // Redirect to home if already authenticated
      } else {
        next(); 
      }
    } else {
      next(); 
    }
  }
});

export default router;
