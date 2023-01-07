import { Home } from '@/views/Home';
import { Signin } from '@/views/Signin';
import { Signup } from '@/views/Signup';
import { Write } from '@/views/Write';
import { Board } from '@/views/Board';

const routes = {
  '/': Home,
  '/signup': Signup,
  '/signin': Signin,
  '/write': Write,
  '/board': Board,
};

export default routes;
