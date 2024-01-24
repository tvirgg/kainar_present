import React from "react";
import { useEffect } from "react";
import Logo from "./img/Logo.png";
import capybara_welcome from "./img/capybara_welcome.png";
import scroll from "./img/scroll.png";
import filter_gallery from "./img/filter_gallery.png";
import CCC_RM from "./img/CCC_RM.png";

function MainCont() {
  useEffect(() => {
    // let t1 = gsap.timeline();

    // const scroller = new LocomotiveScroll({
    //   el: document.querySelector("[data-scroll-container]"),
    //   smooth: true,
    //   smartphone: {
    //     smooth: true,
    //   },
    // });

    // let pinWrapWidth =
    //   window.innerWidth >= 1080
    //     ? capybara_welcomeRef.scrollWidth - window.innerWidth / 2
    //     : capybara_welcomeRef.scrollWidth + 500;

    // t1.to(capybara_welcomeRef.current, {
    //   scrollTrigger: {
    //     trigger: capybara_welcomeRef.current,
    //     start: `${pinWrapWidth - 100} bottom`,
    //     end: `${pinWrapWidth + 500} bottom`,
    //     scroller: ".main-cont",
    //     pin: true,
    //     markers: true,
    //     scrub: true,
    //   },
    //   opacity: 1,
    // });

    window.onload = function () {
      document.body.classList.add("loaded_hiding");
      window.setTimeout(function () {
        document.body.classList.add("loaded");
        document.body.classList.remove("loaded_hiding");
      }, 500);
    };

    let block_number_0 = document.querySelectorAll(".block_number_conteiner_block_number")[0];
    let block_number_1 = document.querySelectorAll(".block_number_conteiner_block_number")[1];
    let block_number_2 = document.querySelectorAll(".block_number_conteiner_block_number")[2];

    let block_number_0_textNum = document.querySelectorAll(".numBlockNm")[0];
    let block_number_1_textNum = document.querySelectorAll(".numBlockNm")[1];
    let block_number_2_textNum = document.querySelectorAll(".numBlockNm")[2];

    let textBlockNumber_0 = document.querySelectorAll(".textBlockNumber")[0];
    let textBlockNumber_1 = document.querySelectorAll(".textBlockNumber")[1];
    let textBlockNumber_2 = document.querySelectorAll(".textBlockNumber")[2];

    let block_text = document.querySelector(".TheChillClubRules_block_text");

    block_number_0.addEventListener("mouseover", (e) => {
      block_text.classList.remove("active");
      textBlockNumber_0.style.opacity = "1";

      textBlockNumber_0.style.zIndex = "10";

      const screenWidth = window.screen.width;

      if (screenWidth >= 1510) {
        block_number_0.style.width = "100%";
        block_number_1.style.width = "169px";
        block_number_2.style.width = "169px";
      } else if (screenWidth >= 1034) {
        block_number_0.style.width = "100%";
        block_number_1.style.width = "129px";
        block_number_2.style.width = "129px";
      } else if (screenWidth >= 734) {
        block_number_0.style.width = "100%";
        block_number_1.style.width = "89px";
        block_number_2.style.width = "89px";
      }
    });
    block_number_0.addEventListener("mouseout", (e) => {
      const screenWidth = window.screen.width;

      if (screenWidth >= 1510) {
        block_number_0.style.width = "169px";
        block_number_1.style.width = "169px";
        block_number_2.style.width = "169px";
        block_number_0.style.minWidth = "169px";
        block_number_1.style.minWidth = "169px";
        block_number_2.style.minWidth = "169px";
      } else if (screenWidth >= 1034) {
        block_number_0.style.width = "129px";
        block_number_1.style.width = "129px";
        block_number_2.style.width = "129px";
        block_number_0.style.minWidth = "129px";
        block_number_1.style.minWidth = "129px";
        block_number_2.style.minWidth = "129px";
      } else if (screenWidth >= 734) {
        block_number_0.style.width = "89px";
        block_number_1.style.width = "89px";
        block_number_2.style.width = "89px";
        block_number_0.style.minWidth = "89px";
        block_number_1.style.minWidth = "89px";
        block_number_2.style.minWidth = "89px";
      }

      block_text.classList.add("active");
      textBlockNumber_0.style.opacity = "0";
      textBlockNumber_0.style.zIndex = "-1";
    });

    block_number_1.addEventListener("mouseover", (e) => {
      const screenWidth = window.screen.width;

      block_text.classList.remove("active");
      textBlockNumber_1.style.opacity = "1";
      textBlockNumber_1.style.zIndex = "10";

      if (screenWidth >= 1510) {
        block_number_0.style.width = "0px";
        block_number_1.style.width = "100%";
        block_number_2.style.width = "169px";
        block_number_2.style.minWidth = "169px";
      } else if (screenWidth >= 1034) {
        block_number_0.style.width = "0px";
        block_number_1.style.width = "100%";
        block_number_2.style.width = "129px";
        block_number_2.style.minWidth = "129px";
      } else if (screenWidth >= 734) {
        block_number_0.style.width = "0px";
        block_number_1.style.width = "100%";
        block_number_2.style.width = "89px";
        block_number_2.style.minWidth = "89px";
      }

      block_number_0_textNum.style.opacity = "0";

      block_number_0.style.minWidth = "0px";
    });
    block_number_1.addEventListener("mouseout", (e) => {
      const screenWidth = window.screen.width;

      if (screenWidth >= 1510) {
        block_number_0.style.width = "169px";
        block_number_1.style.width = "169px";
        block_number_2.style.width = "169px";
        block_number_0.style.minWidth = "169px";
        block_number_1.style.minWidth = "169px";
        block_number_2.style.minWidth = "169px";
      } else if (screenWidth >= 1034) {
        block_number_0.style.width = "129px";
        block_number_1.style.width = "129px";
        block_number_2.style.width = "129px";
        block_number_0.style.minWidth = "129px";
        block_number_1.style.minWidth = "129px";
        block_number_2.style.minWidth = "129px";
      } else if (screenWidth >= 734) {
        block_number_0.style.width = "89px";
        block_number_1.style.width = "89px";
        block_number_2.style.width = "89px";
        block_number_0.style.minWidth = "89px";
        block_number_1.style.minWidth = "89px";
        block_number_2.style.minWidth = "89px";
      }

      block_text.classList.add("active");

      textBlockNumber_1.style.opacity = "0";
      textBlockNumber_1.style.zIndex = "-1";

      block_number_0_textNum.style.opacity = "1";
    });

    block_number_2.addEventListener("mouseover", (e) => {
      const screenWidth = window.screen.width;

      block_text.classList.remove("active");

      block_number_0.style.opacity = "0";
      block_number_1.style.opacity = "0";

      block_number_0.style.minWidth = "0px";
      block_number_1.style.minWidth = "0px";

      textBlockNumber_2.style.opacity = "1";

      textBlockNumber_2.style.zIndex = "10";

      block_number_1_textNum.style.opacity = "0";
      block_number_0_textNum.style.opacity = "0";

      if (screenWidth >= 1510) {
        block_number_0.style.width = "0px";
        block_number_1.style.width = "0px";
        block_number_2.style.width = "100%";
      } else if (screenWidth >= 1034) {
        block_number_0.style.width = "0px";
        block_number_1.style.width = "0px";
        block_number_2.style.width = "100%";
      } else if (screenWidth >= 734) {
        block_number_0.style.width = "0px";
        block_number_1.style.width = "0px";
        block_number_2.style.width = "100%";
      }
    });
    block_number_2.addEventListener("mouseout", (e) => {
      const screenWidth = window.screen.width;

      block_text.classList.add("active");

      block_number_0.style.opacity = "1";
      block_number_1.style.opacity = "1";

      if (screenWidth >= 1510) {
        block_number_0.style.width = "169px";
        block_number_1.style.width = "169px";
        block_number_2.style.width = "169px";
        block_number_2.style.minWidth = "169px";
        block_number_1.style.minWidth = "169px";
        block_number_0.style.minWidth = "169px";
      } else if (screenWidth >= 1034) {
        block_number_0.style.width = "129px";
        block_number_1.style.width = "129px";
        block_number_2.style.width = "129px";
        block_number_2.style.minWidth = "129px";
        block_number_1.style.minWidth = "129px";
        block_number_0.style.minWidth = "129px";
      } else if (screenWidth >= 734) {
        block_number_0.style.width = "89px";
        block_number_1.style.width = "89px";
        block_number_2.style.width = "89px";
        block_number_0.style.minWidth = "89px";
        block_number_1.style.minWidth = "89px";
        block_number_2.style.minWidth = "89px";
      }

      textBlockNumber_2.style.opacity = "0";
      textBlockNumber_2.style.zIndex = "-1";

      block_number_1_textNum.style.opacity = "1";
      block_number_0_textNum.style.opacity = "1";
    });

    const capybara_none = document.querySelectorAll(".capybara_none");
    const filterimage = document.querySelectorAll(".filterimage");
    const rectOparcity = document.querySelectorAll(".rectOparcity");

    for (let i = 0; i <= 7; i++) {
      capybara_none[i].addEventListener("mouseenter", (e) => {
        const filter_gallery = document.querySelectorAll(".filter_gallery");
        filterimage[i].style.transition = "0.5s";
        rectOparcity[i].style.opacity = "0";

        filterimage[i].classList.add("noneFilter");

        filter_gallery[i].style.transition = "1s";
        filter_gallery[i].style.opacity = "0";
      });
      capybara_none[i].addEventListener("mouseleave", (e) => {
        const filter_gallery = document.querySelectorAll(".filter_gallery");

        filterimage[i].style.transition = "8s";
        rectOparcity[i].style.opacity = "1";

        filterimage[i].classList.remove("noneFilter");

        filter_gallery[i].style.transition = "6s";
        filter_gallery[i].style.opacity = "1";
      });
    }
  }, []);

  return (
    <div className="boxALL" key="boxALL">
      <div className="container">
        <div className="block-bacground">
          <div className="welcome-block block-scroll block-scroll-mobile" data-section-name="welcome-block" id="section1">
            <div className="welcome-block-content" id="welcome-block-content-id">
              <div className="welcome-block-title">
                <div className="welcome-block-title__title">
                  <div>Welcome to</div>
                  <img src={Logo} className="logoWelcome" alt="" />
                </div>
                <div className="welcome-block-title__text">
                  The Unique Mix Of Fashion, Art, Culture And Good Vibes. Cut The Stress, <br />
                  Welcome To The Club!
                </div>
                <div className="CapybaraLenta_block">
                  <div className="CapybaraLenta"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="TheChillClubRules_block" id="TheChillClubRules_block">
            <div className="TheChillClubRules_block_title">
              <h1 className="TheChillClubRules_block_title_h1">
                The <br />
                Chill <br />
                Club
                <br />
                Rules
              </h1>
              <a name="MOBILE_zero_textBlockNumber" href="#MOBILE_zero_textBlockNumber">
                <img src={scroll} alt="" className="scrollICON" id="hash_scrollICON_1" />
              </a>
            </div>
            <div className="TheChillClubRules_block_text active">
              <div className="TheChillClubRules_block_text_text">
                This is a set of rules you have to follow if you'd like to join the movement.
              </div>
              <div className="textBlockNumber first_textBlockNumber">
                <div className="topTextBlockNumber">
                  <div className="boldFontWeight">
                    Talk about the Club
                    <br />
                  </div>
                  Social media presence is the most crucial part. Share your thoughts, shill the project and don't forget to
                  @ us!
                </div>
              </div>
              <div className="textBlockNumber second_textBlockNumber">
                <div className="topTextBlockNumber">
                  <div className="boldFontWeight">
                    Vibe
                    <br />
                  </div>
                  Vibe with us. Feel the vibe. Become the vibe.
                </div>
              </div>
              <div className="textBlockNumber third_textBlockNumber">
                <div className="topTextBlockNumber">
                  <div className="boldFontWeight">
                    Be chill
                    <br />
                  </div>
                  Become the better version of yourself. Pretend that you're high af and you don't care about your problems
                </div>
              </div>
            </div>
            <div className="MOBILE_TheChillClubRules_block_text">
              <div className="MOBILE_textBlockNumber MOBILE_zero_textBlockNumber" id="MOBILE_zero_textBlockNumber">
                <div className="MOBILE_topTextBlockNumber">
                  This is a set of rules you have to follow if you'd like to join the movement.
                </div>
                <a name="MOBILE_first_textBlockNumber" href="#MOBILE_first_textBlockNumber">
                  <img src={scroll} alt="" className="scrollICON_scroll" id="hash_scrollICON_2" />
                </a>
              </div>
              <div className="MOBILE_textBlockNumber MOBILE_first_textBlockNumber" id="MOBILE_first_textBlockNumber">
                <div className="MOBILE_topTextBlockNumber">
                  <div className="boldFontWeight">
                    Talk about the Club
                    <br />
                  </div>
                  Social media presence is the most crucial part. Share your thoughts, shill the project and don't forget to
                  @ us!
                </div>
                <a name="MOBILE_second_textBlockNumber" href="#MOBILE_second_textBlockNumber">
                  <img src={scroll} alt="" className="scrollICON_scroll" id="hash_scrollICON_3" />
                </a>
              </div>
              <div className="MOBILE_textBlockNumber MOBILE_second_textBlockNumber" id="MOBILE_second_textBlockNumber">
                <div className="MOBILE_topTextBlockNumber">
                  <div className="boldFontWeight">
                    Vibe
                    <br />
                  </div>
                  Vibe with us. Feel the vibe. Become the vibe.
                </div>
                <a name="MOBILE_third_textBlockNumber" href="#MOBILE_third_textBlockNumber">
                  <img src={scroll} alt="" className="scrollICON_scroll" id="hash_scrollICON_4" />
                </a>
              </div>
              <div className="MOBILE_textBlockNumber MOBILE_third_textBlockNumber" id="MOBILE_third_textBlockNumber">
                <div className="MOBILE_topTextBlockNumber">
                  <div className="boldFontWeight">
                    Be chill
                    <br />
                  </div>
                  Become the better version of yourself. Pretend that you're high af and you don't care about your problems
                </div>
                <a name="gallery" href="#gallery">
                  <img src={scroll} alt="" className="scrollICON_scroll" id="hash_scrollICON_5" />
                </a>
              </div>
            </div>
            <div className="block_number_conteiner_block_number first">
              <div className="numBlockNm">1</div>
            </div>
            <div className="block_number_conteiner_block_number second">
              <div className="numBlockNm">2</div>
            </div>
            <div className="block_number_conteiner_block_number third">
              <div className="numBlockNm">3</div>
            </div>
          </div>
          <div className="gallery" id="gallery">
            <div className="gallery_Block">
              <div className="capybara_none first_capybara_gallery">
                <div className="filterimage">
                  <img
                    className="filter_gallery"
                    style={{ transition: "1s", opacity: 1 }}
                    src={filter_gallery}
                    id="filter_gallery"
                    alt=""
                  />
                </div>
                <div className="def rectOparcity"></div>
              </div>
              <div className="capybara_none second_capybara_gallery">
                <div className="filterimage">
                  <img
                    className="filter_gallery"
                    style={{ transition: "1s", opacity: 1 }}
                    src={filter_gallery}
                    id="filter_gallery"
                    alt=""
                  />
                </div>
                <div className="def rectOparcity"></div>
              </div>
              <div className="capybara_none third_capybara_gallery">
                <div className="filterimage">
                  <img
                    className="filter_gallery"
                    style={{ transition: "1s", opacity: 1 }}
                    src={filter_gallery}
                    id="filter_gallery"
                    alt=""
                  />
                </div>
                <div className="def rectOparcity"></div>
              </div>
              <div className="capybara_none fourth_capybara_gallery">
                <div className="filterimage">
                  <img
                    className="filter_gallery"
                    style={{ transition: "1s", opacity: 1 }}
                    src={filter_gallery}
                    id="filter_gallery"
                    alt=""
                  />
                </div>
                <div className="def rectOparcity"></div>
              </div>
              <div className="capybara_none fifth_capybara_gallery">
                <div className="filterimage">
                  <img
                    className="filter_gallery"
                    style={{ transition: "1s", opacity: 1 }}
                    src={filter_gallery}
                    id="filter_gallery"
                    alt=""
                  />
                </div>
                <div className="def rectOparcity"></div>
              </div>
              <div className="capybara_none sixth_capybara_gallery">
                <div className="filterimage">
                  <img
                    className="filter_gallery"
                    style={{ transition: "1s", opacity: 1 }}
                    src={filter_gallery}
                    id="filter_gallery"
                    alt=""
                  />
                </div>
                <div className="def rectOparcity"></div>
              </div>
              <div className="capybara_none seventh_capybara_gallery">
                <div className="filterimage">
                  <img
                    className="filter_gallery"
                    style={{ transition: "1s", opacity: 1 }}
                    src={filter_gallery}
                    id="filter_gallery"
                    alt=""
                  />
                </div>
                <div className="def rectOparcity"></div>
              </div>
              <div className="capybara_none eighth_capybara_gallery">
                <div className="filterimage">
                  <img
                    className="filter_gallery"
                    style={{ transition: "1s", opacity: 1 }}
                    src={filter_gallery}
                    id="filter_gallery"
                    alt=""
                  />
                </div>
                <div className="def rectOparcity"></div>
              </div>
            </div>
          </div>
          <div className="roadmap" id="roadmap">
            {/* <!-- <div className="TBA">TBA</div> --> */}
            <div className="roadmap_block">
              <div className="rect_CCC_RM" alt=""></div>
              <img src={CCC_RM} className="roadmap_block_noise" alt="" />
            </div>
          </div>
          <div className="team" id="team">
            <div className="team-container">
              <div className="team__title">
                The team of <img src={Logo} className="logoWelcome" />
              </div>
              <div className="team-all activeTeam" id="team-all_Web">
                <div className="team-all-one_block" id="team_img_1">
                  <div className="teamtextblock">
                    <div className="team-all-one_block__name">Mary</div>
                    <div className="team-all-one_block__name_text">graphic designer</div>
                  </div>
                  <div className="team-all-one_block__img">
                    <img src={capybara_welcome} alt="" />
                  </div>
                </div>
                <div className="team-all-one_block" id="team_img_2">
                  <div className="teamtextblock">
                    <div className="team-all-one_block__name">Mary</div>
                    <div className="team-all-one_block__name_text">graphic designer</div>
                  </div>
                  <div className="team-all-one_block__img">
                    <img src={capybara_welcome} alt="" />
                  </div>
                </div>
                <div className="team-all-one_block" id="team_img_3">
                  <div className="teamtextblock">
                    <div className="team-all-one_block__name">Mary</div>
                    <div className="team-all-one_block__name_text">graphic designer</div>
                  </div>
                  <div className="team-all-one_block__img">
                    <img src={capybara_welcome} alt="" />
                  </div>
                </div>
                <div className="team-all-one_block" id="team_img_4">
                  <div className="teamtextblock">
                    <div className="team-all-one_block__name">Mary</div>
                    <div className="team-all-one_block__name_text">graphic designer</div>
                  </div>
                  <div className="team-all-one_block__img">
                    <img src={capybara_welcome} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq" id="faq">
            <div className="faq-block">
              <div className="faq-full">
                <details>
                  <summary>Each droid is not just an awesome</summary>
                  <div className="faq-details-bottom">Details will be announced on Twitter and Discord</div>
                </details>
              </div>
              <div className="faq-full">
                <details>
                  <summary>profile picture. It's your pass in</summary>
                  <div className="faq-details-bottom">
                    As we're limited by 6 factions, the supply is 6666. This number will not change.
                  </div>
                </details>
              </div>
              <div className="faq-full">
                <details>
                  <summary>the future of crypto community</summary>
                  <div className="faq-details-bottom">
                    We're already working on the first drop, 6666 custom hoodies. Next drops will feature collabs with
                    streetwear brands, collectible items and more.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer" id="social">
          <div className="footer-container">
            <div className="footer-left">
              <div className="footer-container-left">
                <img src={Logo} alt="" height="42.8px" />
                <div className="footer-left__title">Copybaras Chill Club</div>
                <div className="footer-left__rights">
                  ©2022 CCC
                  <br />
                  All rights reserved
                </div>
              </div>
            </div>
            <div className="footer-right">
              <div className="footer-container-right">
                <div className="footer-right-socials">
                  <ul>
                    <li>
                      <a href="https://discord.com/" className="social_icons__discord" target="_blank">
                        <svg
                          style={{ color: "rgb(255, 255, 255)" }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="45"
                          height="45"
                          className="bi bi-discord"
                          viewBox="0 0 16 16"
                          fill="#ffffff"
                        >
                          <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" className="social_icons__twitter" target="_blank">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          className="social_icon__twitter"
                          width="45"
                          height="45"
                          viewBox="0 0 24 24"
                          fill="#ffffff"
                        >
                          <path d="M 24 4.300781 C 23.101563 4.699219 22.199219 5 21.199219 5.101563 C 22.199219 4.5 23 3.5 23.398438 2.398438 C 22.398438 3 21.398438 3.398438 20.300781 3.601563 C 19.300781 2.601563 18 2 16.601563 2 C 13.898438 2 11.699219 4.199219 11.699219 6.898438 C 11.699219 7.300781 11.699219 7.699219 11.800781 8 C 7.699219 7.800781 4.101563 5.898438 1.699219 2.898438 C 1.199219 3.601563 1 4.5 1 5.398438 C 1 7.101563 1.898438 8.601563 3.199219 9.5 C 2.398438 9.398438 1.601563 9.199219 1 8.898438 C 1 8.898438 1 8.898438 1 9 C 1 11.398438 2.699219 13.398438 4.898438 13.800781 C 4.5 13.898438 4.101563 14 3.601563 14 C 3.300781 14 3 14 2.699219 13.898438 C 3.300781 15.898438 5.101563 17.300781 7.300781 17.300781 C 5.601563 18.601563 3.5 19.398438 1.199219 19.398438 C 0.800781 19.398438 0.398438 19.398438 0 19.300781 C 2.199219 20.699219 4.800781 21.5 7.5 21.5 C 16.601563 21.5 21.5 14 21.5 7.5 C 21.5 7.300781 21.5 7.101563 21.5 6.898438 C 22.5 6.199219 23.300781 5.300781 24 4.300781"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-right-links">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default MainCont;
