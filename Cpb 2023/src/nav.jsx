import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef, useLayoutEffect, useEffect } from "react";
import Logo from "./img/Logo.png";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Navbar = () => {
  const { scroll } = useLocomotiveScroll();
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    if (scroll) {
      let element = ref.current;
      let t1 = gsap.timeline();

      setTimeout(() => {
        t1.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "top",
            end: 99999,
            scroller: ".main-cont",
            scrub: 0,
            pin: true,
            pinSpacing: false,
          },
          height: "",
          ease: "none",
        });
        ScrollTrigger.refresh();
      }, 0);
      ScrollTrigger.refresh();
      return () => {
        t1.kill();
        // ScrollTrigger.kill();
      };
    }
  }, [scroll]);

  return (
    <nav ref={ref}>
      <a href="#">
        <img src={Logo} className="imageLogo" title="navLogo" id="imageLogo" />
      </a>
      <a href="#gallery">
        <div id="Move_gallery" className="nav_element">
          gallery
        </div>
      </a>
      <a href="#team">
        <div id="Move_team" className="nav_element">
          team
        </div>
      </a>
      <a href="#roadmap">
        <div id="Move_roadmap" className="nav_element">
          roadmap
        </div>
      </a>
      <a href="#faq">
        <div id="Move_questions" className="nav_element">
          questions
        </div>
      </a>
      <a href="#social">
        <div id="Move_social" className="nav_element">
          social
        </div>
      </a>
    </nav>
  );
};

export default Navbar;
