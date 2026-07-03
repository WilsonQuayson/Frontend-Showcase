import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
    // nav here
      <main>
        <Outlet />
      </main>
    </div>
  );
}