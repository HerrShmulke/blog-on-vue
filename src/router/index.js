import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';
import middlewarePipeline from '@/router/middlewarePipeline';
import { collectMatchedMiddleware } from '@/utils/router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Route guards
router.beforeEach((to, from, next) => {
  const middleware = collectMatchedMiddleware(to.matched);

  const firstMiddleware = middleware[0];
  if (!firstMiddleware) {
    next();
    return;
  }

  const context = { to, from, next, store };
  middlewarePipeline(context, middleware)();
});

export default router;
