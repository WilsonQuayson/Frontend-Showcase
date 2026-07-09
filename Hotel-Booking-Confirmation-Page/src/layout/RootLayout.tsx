import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function RootLayout() {
  return (
    <div className="h-screen w-screen bg-sun-50">
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}