import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  console.log('App1 Layout');

  return (
    <div>
      <h1>App1</h1>
      <Link to="page1">Go to Page1</Link>&nbsp;
      <Link to="page2">Go to Page2</Link>
      <Outlet />
    </div>
  );
}
