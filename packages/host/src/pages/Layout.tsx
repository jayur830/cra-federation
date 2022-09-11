import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <h1>Host</h1>
      <Link to="/app1">app1</Link>
      <Link to="/app2">app2</Link>
      <Outlet />
    </div>
  );
}
