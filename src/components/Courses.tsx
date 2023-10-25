import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Courses() {
  const courseList = ["EEE", "CIVIL", "MECHANICAL"];
  const courseList2 = ["ECE", "CME", "AIML"];

  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const firstRowContainer = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef1.current,
        start: "top center",
        once: true,
        end: "center center",
        scrub: false,
      },
    });

    firstRowContainer.fromTo(
      containerRef1.current,
      { x: "-100%", once: true },
      { x: "0%", duration: 1.5, opacity: 1, delay: 0.5, once: true },
      "-=0.5"
    );

    const secondRowContainer = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef2.current,
        start: "top center",
        end: "center center",
        once: true,
        scrub: false,
      },
    });

    secondRowContainer.fromTo(
      containerRef2.current,
      { x: "100%", once: true },

      { x: "0%", duration: 1.5, opacity: 1, delay: 0.5, once: true },
      "-=0.5"
    );
  }, []);
  return (
    <div className="mt-[6vw]">
      <h4 className="mb-0 mx-3 text-sm uppercase">
        Courses Offered
        <p className="w-full h-[1px] bg-black mt-1"></p>
      </h4>

      <div className="courses" ref={containerRef1}>
        {courseList.map((course, index) => (
          <div key={index} className="c">
            <span className="c-name">{course}</span>
          </div>
        ))}
      </div>
      <div className="courses2" ref={containerRef2}>
        {courseList2.map((course, index) => (
          <div key={index} className="c2">
            <span className="c-name">{course}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
