import { home } from '@/views/home';
import { signIn } from '@/views/signIn';
import { signUp } from '@/views/signUp';
import { write } from '@/views/write';
import { board } from '@/views/board';
import { boardView } from '@/views/boardView';
import { boardEdit } from '@/views/boardEdit';

const routes = {
  '/': home,
  '/signup': signUp,
  '/signin': signIn,
  '/write': write,
  '/board': board,
  '/view/': boardView,
  '/edit/': boardEdit,
};

export default routes;
