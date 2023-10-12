import React from "react";
import { ThemeSwitcher } from ".";

export default function NavBar() {
  return (
    <header className="flex justify-between py-3 container  md:mx-auto  ">
      <div className="flex items-center px-2">
        <h1 className="text-base font-bold">Saleh.dev</h1>
      </div>

      <div className="px-2">
        <ThemeSwitcher />
      </div>
    </header>
  );
}
