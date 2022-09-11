import { ReactElement, Suspense } from 'react';
import { Route, RouteObject, Routes } from 'react-router-dom';

import { routes } from './router';

function getRoute(route: RouteObject): ReactElement {
  if (route.children) {
    return (
      <Route
        key={Math.random()}
        {...route}
        element={<Suspense fallback={<span>&nbsp;</span>}>{route.element}</Suspense>}
      >
        {route.children.map(getRoute)}
      </Route>
    );
  }

  const { children, ...rest } = route;
  return (
    <Route
      key={Math.random()}
      {...rest}
      element={<Suspense fallback={<span>&nbsp;</span>}>{route.element}</Suspense>}
    />
  );
}

export default function App() {
  return <Routes>{routes.map(getRoute)}</Routes>;
}
