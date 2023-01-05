import { Router } from '@/core/Router';
import routes from '@/router/routes';
const router = new Router({
  selector: '.content',
  routes,
});

export default router;
