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
      { path: 'Medication', component: () => import('pages/Medication.vue') },
      { path: 'Activities', component: () => import('pages/Activities.vue') },
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
