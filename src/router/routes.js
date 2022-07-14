const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'ProgressPage',
        component: () => import('pages/ProgressPage.vue'),
      },
      {
        path: 'MedicationPage',
        component: () => import('pages/MedicationPage.vue'),
      },
      {
        path: 'ActivitiesPage',
        component: () => import('pages/ActivitiesPage.vue'),
      },
      { path: 'Tests', component: () => import('pages/Tests.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
