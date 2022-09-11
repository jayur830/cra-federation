import { createElement, lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

// refs = https://reactrouter.com/docs/en/v6/getting-started/concepts#index-routes
const routes: RouteObject[] = [
  {
    path: '/',
    element: createElement(lazy(() => import('@src/pages/Layout'))),
    children: [
      {
        index: true,
        element: createElement(Navigate, { to: '/app1' }),
      },
      {
        path: '/app1/*',
        element: createElement(lazy(() => import('app1/App'))),
      },
      {
        path: '/app2/*',
        element: createElement(lazy(() => import('app2/App'))),
      },
    ],
  },
];

export { routes };
