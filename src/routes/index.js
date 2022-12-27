import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

const Loadable = Component => props => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
);

const Main = Loadable(lazy(() => import('pages/Main')));
const Team = Loadable(lazy(() => import('pages/Team')));
const Score = Loadable(lazy(() => import('pages/Score')));

const Router = () => useRoutes([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: '/team',
    element: <Team/>
  },
  {
    path: '/score',
    element: <Score/>
  }
]);

export default Router;
