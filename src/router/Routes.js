import { Home } from '@/views/Home';
import { Signin } from '@/views/Signin';
import { Signup } from '@/views/Signup';
import { Write } from '@/views/Write';
import { Board } from '@/views/Board';
import { Boardview } from '@/views/Boardview';
import { boardedit } from '@/views/boardedit';

const routes = {
  '/': Home,
  '/signup': Signup,
  '/signin': Signin,
  '/write': Write,
  '/board': Board,
  '/view/': Boardview,
  '/edit/': boardedit,
};

export default routes;
