import DefaultLayout from '@/layouts/Default.vue';
import * as routeNames from '@/constants/routes.js';

/**
 * @type {import('vue-router').RouteRecordRaw[]}
 */
const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: routeNames.DEFAULT_ROUTE_NAME,
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
];

export default routes;
