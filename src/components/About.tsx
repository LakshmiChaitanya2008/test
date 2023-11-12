import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function About() {
  const aboutRef = useRef<HTMLElement | any>();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Define the animation for the "About" section
    gsap.from(aboutRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top center",
        toggleActions: "play none none none",
      },
    });
  }, []);
  return (
    <div className="about  mx-3" ref={aboutRef}>
      <h4 className="mb-0 text-sm uppercase">
        About Us
        <p className="w-full h-[1px] bg-black mt-1"></p>
      </h4>
      <p className=" mt-2">
        A.A.N.M & V.V.R.S.R Polytechnic was established in 1981 by Adsumilli
        Aswardha Narayana Murthy and Valluripalli Venkata Rama Seshadri Rao
        Educational Society. In affilication to AP State Board of Technical
        Education and Training, Hyderabad., The Polytechnic was approved by
        AICTE. The Polytechnic was the Second Self Financing institution in the
        state of Andhra Pradesh and the first of its kind in Krishna district.,
        This is the first Polytechnic in the country to have diplomated two
        blind students in technical students in technical courses.Our
        polytechnic envisions to be an ideal polytechnic in the state, moulding
        the students to be potential professionals with all skills of a true
        diploma engineer in their respective branches, stimulating their
        inherent spirits of innovation, creativity and research with values to
        become competent contributors to the Nation’s wealth and advancements in
        engineering world.
      </p>
      <div className="flex justify-around flex-wrap">
        <div className="max-w-[200px]  border border-gray-200 rounded-lg mt-5">
          <a href="#">
            <img
              className="rounded-t-lg h-[200px] mx-auto"
              src="/AANM.jpg"
              alt=""
            />
          </a>
          <div className="p-5 text-center">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Sri. Adsumilli Aswardha Narayana Murthy
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 ">(1906-1988)</p>
          </div>
        </div>
        <div className="max-w-xs  border border-gray-200 rounded-lg mt-5">
          <a href="#">
            <img
              className="rounded-t-lg h-[200px] w-auto mx-auto"
              src="/Placements.png"
              alt=""
            />
          </a>
          <div className="p-5 text-center">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Placements
              </h5>
            </a>
            <p className="mb-3 text-justify font-normal text-gray-700 ">
              {" "}
              The employment opportunities for the Diploma pass outs from our
              college are very high. Best job opportunities with higher salary
            </p>
          </div>
        </div>
        <div className="max-w-xs  border border-gray-200 rounded-lg mt-5">
          <a href="#">
            <img
              className="rounded-t-lg h-[200px] w-1/2 mx-auto"
              src="/Rankers.png"
              alt=""
            />
          </a>
          <div className="p-5 text-center">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                State Rankers
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 text-justify">
              The polytechnic students achieved 14 state ranks till 2017 since
              2009, 7 state first ranks, 1 state rank (Private poly), 6 state
              second ranks (Private poly).
            </p>
          </div>
        </div>
        <div className="max-w-xs  border border-gray-200 rounded-lg mt-5">
          <a href="#">
            <img
              className="rounded-t-lg h-[200px] w-1/2 mx-auto"
              src="/VVRSR.jpg"
              alt=""
            />
          </a>
          <div className="p-5 text-center">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Sri. Valluripalli Venkata Rama Seshadri Rao
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 ">(1932-2008) </p>
          </div>
        </div>
      </div>
    </div>
  );
}
