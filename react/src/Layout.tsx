import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/page2">Page2</Link>
      <div>
        <Outlet />
      </div>
    </>
  );
}
