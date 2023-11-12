import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function Hero() {
  const h22 = useRef<HTMLHeadingElement | any>();
  const h11 = useRef<HTMLHeadingElement | any>();
  const h33 = useRef<HTMLHeadingElement | any>();

  useLayoutEffect(() => {
    gsap.from(h11.current, {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });

    gsap.from(h22.current, {
      y: 100,
      opacity: 0,
      delay: 0.8,
      duration: 0.9,
      stagger: 0.3,
    });

    gsap.from(h33.current, {
      y: 100,
      opacity: 0,
      delay: 0.9,
      duration: 0.9,
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="hero md:leading-[14vw] md:pt-[20vh] pt-[10vh] min-h-screen relative md:tracking-[-8px] h-full w-full">
      <h1 ref={h11}>BUILD</h1>
      <h1 ref={h22}>YOUR CAREER.</h1>
      <h1 ref={h33} className="md:hidden">
        WITH US.
      </h1>
    </div>
  );
}
