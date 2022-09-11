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
        element: createElement(Navigate, { to: 'page1' }),
      },
      {
        path: 'page1',
        element: createElement(lazy(() => import('@src/pages/Page1'))),
      },
      {
        path: 'page2',
        element: createElement(lazy(() => import('@src/pages/Page2'))),
      },
    ],
  },
];

export { routes };
