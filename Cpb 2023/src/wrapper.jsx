import React, { useRef, useEffect, useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import capybara_welcome from "./img/capybara_welcome.png";
import { useLocomotiveScroll } from "react-locomotive-scroll";
gsap.registerPlugin(ScrollTrigger);

const Wrapper = () => {
  const capybara_welcomeRef = useRef(null);
  const capybara_welcome_block = useRef(null);
  const capybara_welcome_block_opacity = useRef(null);
  const { scroll } = useLocomotiveScroll();

  useLayoutEffect(() => {
    if (scroll) {
      let t1 = gsap.timeline();

      // const scroller = new LocomotiveScroll({
      //   el: document.querySelector("[data-scroll-container]"),
      //   smooth: true,
      //   smartphone: {
      //     smooth: true,
      //   },
      // });

      let pinWrapWidth = 2160;
      // window.innerWidth >= 1080
      //   ? capybara_welcomeRef.scrollWidth - window.innerWidth / 2
      //   : capybara_welcomeRef.scrollWidth + 500;
      setTimeout(() => {
        t1.to(capybara_welcomeRef.current, {
          scrollTrigger: {
            trigger: capybara_welcomeRef.current,
            start: `top top`,
            end: `bottom+=2000 bottom`,
            scroller: ".main-cont",
            pin: true,
            markers: true,
            scrub: true,
            // pinSpacing: true,
          },
        });

        t1.to(capybara_welcome_block_opacity.current, {
          scrollTrigger: {
            trigger: capybara_welcome_block_opacity.current,
            start: `top+=400 top`,
            end: `bottom+=2000 bottom`,
            scroller: ".main-cont",
            pin: false,
            markers: true,
            scrub: true,
          },
          opacity: 0,
          // ease: "linear",
        });

        t1.to(capybara_welcome_block.current, {
          scrollTrigger: {
            trigger: capybara_welcome_block.current,
            start: `top+=100 top`,
            end: `bottom+=2000 bottom`,
            scroller: ".main-cont",
            pin: false,
            markers: true,
            scrub: true,
          },
          // opacity: 0,
          filter: "blur(120px)",
          // ease: "linear",
        });
        ScrollTrigger.refresh();
      }, 1000);
      ScrollTrigger.refresh();

      return () => {
        t1.kill();
      };
    }
    //   t1.to(capybara_welcomeRef.current, {
    //     opacity: 0,
    //     ease: "easeInOut",
    //     scrollTrigger: {
    //       trigger: capybara_welcomeRef.current,
    //       start: `top top`,
    //       end: `200vh bottom`,
    //       scroller: ".main-cont",
    //       scrub: true,
    //     },
    //   });
    // }
  }, [scroll]);

  return (
    <div
      className="boxFirst"
      id="boxFirst"
      key="boxFirst"
      // data-scroll
      // data-scroll-speed="-4"
      // data-scroll-position="top"
      ref={capybara_welcomeRef}
      style={{ opacity: 1, filter: "blur(0px)" }}
    >
      <div className="boxFirst__block" ref={capybara_welcome_block}>
        <div className="boxFirst__block-opacity" ref={capybara_welcome_block_opacity}>
          <div className="capybara_welcome_block" id="capybara_welcome_block">
            <img src={capybara_welcome} className="capybara_welcome" alt="capybara_welcome.png" />
            <div className="MintNow">MINT NOW</div>
          </div>
          <h1 className="title_welcome">
            COPYBARAS
            <br />
            CHILL CLUB
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
