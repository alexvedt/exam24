import { useState } from "react";
import { Outlet } from "@tanstack/react-router";
import Navigation from "../components/navbar";

function App() {
  const [isLoggedIn, setLoggedIn] = useState();

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <>
      <header>
        <Navigation
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
      </header>

      <main className="w-full px-8 py-12 items-center gap-8 max-w-6xl mx-auto">
        <Outlet />
      </main>
    </>
  );
}

export default App;
