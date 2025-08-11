const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
  },

  {
    path: '/Dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    meta: { requiresAuth: true, title: 'Dashboard' },
    children: [
      {
        path: '',
        name: 'DashboardHome',
        meta: { requiresAuth: true, title: 'DashboardHome' },
        component: () => import('pages/Dashboard.vue'),
      },
      {
        path: 'user-form',
        name: 'UserForm',
        meta: { requiresAuth: true, title: 'User Form' },
        component: () => import('pages/UserFormPage.vue'),
      },
      {
        path: 'user-details',
        name: 'UserDetails',
        meta: { requiresAuth: true, title: 'User Details' },
        component: () => import('pages/SelectedUSerDetails.vue'),
      },
    ],
  },

  {
    path: '/Login',
    component: () => import('pages/LoginPage.vue'),
  },

  {
    path: '/SignUp',
    component: () => import('pages/SignUpPage.vue'),
  },
  {
    path: '/Details',
    component: () => import('pages/DetailsFinder.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
]

export default routes
