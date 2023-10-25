import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function Nav() {
  const nav = useRef<HTMLElement | any>();
  const ham = useRef<HTMLElement | any>();

  useLayoutEffect(() => {
    gsap.to(nav.current, {
      opacity: 1,

      duration: 1,
    });

    gsap.from(ham.current, {
      x: 100,

      delay: 1.3,
    });
  }, []);

  return (
    <nav
      className="flex justify-between w-full absolute pr-16 mt-4 opacity-0"
      ref={nav}
    >
      <div className="flex">
        <img src="logo.png" width={140} className="" />
        <h1 className="mt-10 text-2xl ml-7 tracking-wider">
          AANM & VVRSR POLYTECHNIC
        </h1>
      </div>

      <p className="mt-9" ref={ham} onClick={() => alert("")}>
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
    </nav>
  );
}
