import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function RootLayout() {
  return (
    <div className="min-h-screen w-screen bg-sun-50">
      <Nav />
      <main className="relative z-0">
        <Outlet />
      </main>
    </div>
  );
}