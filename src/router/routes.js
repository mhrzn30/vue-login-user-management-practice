const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
  },

  {
    path: '/Dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      {
        path: '',
        name: 'DashboardHome',
        component: () => import('pages/Dashboard.vue'),
      },
      {
        path: 'user-form',
        name: 'UserForm',
        component: () => import('pages/UserFormPage.vue'),
      },
      {
        path: 'user-details',
        name: 'UserDetails',
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
