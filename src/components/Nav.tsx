// Nav.tsx
import { useState } from "react";
import OverlayNav from "./OverlayNav";

export default function Nav() {
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  return (
    <nav className="flex justify-between w-full pr-16 mt-4">
      <div className="flex">
        <img src="logo.png" width={140} alt="Logo" className="" />
        <h1 className="mt-10 text-2xl ml-7 tracking-wider">
          AANM & VVRSR POLYTECHNIC
        </h1>
      </div>

      <p className="mt-9 cursor-pointer" onClick={() => setOverlayOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </p>

      <OverlayNav
        isOpen={isOverlayOpen}
        onClose={() => setOverlayOpen(false)}
        setOverlayOpen={setOverlayOpen}
      />
    </nav>
  );
}
