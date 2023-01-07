import { Home } from '@/views/Home';
import { Signin } from '@/views/Signin';
import { Signup } from '@/views/Signup';
import { Write } from '@/views/Write';

const routes = {
  '/': Home,
  '/signup': Signup,
  '/signin': Signin,
  '/write': Write,
};

export default routes;
