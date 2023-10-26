// OverlayNav.tsx
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function OverlayNav({
  isOpen,
  onClose,
  setOverlayOpen,
}: {
  isOpen: boolean;
  onClose: () => void;
  setOverlayOpen: (value: boolean) => void;
}) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        duration: 0.5,
        pointerEvents: "auto",
        opacity: 1,
      });
    } else {
      gsap.to(overlayRef.current, {
        duration: 0.5,
        pointerEvents: "none",
        opacity: 0,
        onComplete: onClose,
      });
    }
  }, [isOpen, onClose]);

  return (
    <div
      ref={overlayRef}
      className="pointer-events-none flex flex-col space-y-2 justify-center items-center opacity-0 bg-gradient-to-r from-[#9ec474]  to-[#78accf] text-white left-0 top-0 overflow-hidden fixed z-10 h-full w-full"
    >
      <div
        className="absolute top-6 right-10"
        onClick={() => setOverlayOpen(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-red-500 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <p className="overlay-nav_item">Home</p>
      <p className="overlay-nav_item">Courses</p>
      <p className="overlay-nav_item">Facilities</p>
      <p className="overlay-nav_item">Placements</p>
      <p className="overlay-nav_item">Gallery</p>
      <p className="overlay-nav_item">Acheivements</p>
      <p className="overlay-nav_item">Alumini</p>
      <p className="overlay-nav_item">Others</p>
    </div>
  );
}
