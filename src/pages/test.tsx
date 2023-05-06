import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
export interface IProps {}
import type { HeadFC, PageProps } from "gatsby";
import { cachedDataVersionTag } from "v8";
const AboutPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      slidesPerView: "auto",
      centeredSlides: true,
      loop: true,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
  
      // And if we need scrollbar
      // scrollbar: {
      //   el: ".swiper-scrollbar",
      // },
      modules: [Pagination],
    });

  }, []);
  return (
    <><div className="swiper">
    <div className="swiper-wrapper">
      <div className="swiper-slide">
        <a href="/our-space/0J7A2911.jpg" className="image">
          <StaticImage
            src="../../static/our-space/0J7A2911.jpg"
            alt="Caladrius Therapy Office"
            width={420}
          />
        </a>
      </div>
      <div className="swiper-slide">
        <a href="/our-space/0J7A2919.jpg" className="image">
          <StaticImage
            src="../../static/our-space/0J7A2919.jpg"
            alt="Caladrius Therapy Office"
            height={630}
          />
        </a>
      </div>
      <div className="swiper-slide">
        <a href="/our-space/0J7A2974.jpg" className="image">
          <StaticImage
            src="../../static/our-space/0J7A2974.jpg"
            alt="Caladrius Therapy Office"
            width={420}
          />
        </a>
      </div>

      <div className="swiper-slide">
        <a href="/our-space/0J7A3022.jpg" className="image">
          <StaticImage
            src="../../static/our-space/0J7A3022.jpg"
            alt="Caladrius Therapy Office"
            height={630}
          />
        </a>{" "}
      </div>

      <div className="swiper-slide">
        {" "}
        <a href="/our-space/0J7A3048.jpg" className="image">
          <StaticImage
            src="../../static/our-space/0J7A3048.jpg"
            alt="Caladrius Therapy Office"
            height={630}
          />
        </a>
      </div>

      <div className="swiper-slide">
        {" "}
        <a href="/our-space/0J7A3085.jpg" className="image">
          <StaticImage
            src="../../static/our-space/0J7A3085.jpg"
            alt="Caladrius Therapy Office"
            height={630}
          />
        </a>{" "}
      </div>

      <div className="swiper-slide">
        {" "}
        <a href="/our-space/0J7A3242.jpg" className="image">
          <StaticImage
            src="../../static/our-space/0J7A3242.jpg"
            alt="Caladrius Therapy Office"
            width={420}
          />
        </a>{" "}
      </div>

      <div className="swiper-slide">
        {" "}
        <a href="/our-space/0J7A3277.jpg" className="image">
          <StaticImage
            src="../../static/our-space/0J7A3277.jpg"
            alt="Caladrius Therapy Office"
            height={630}
          />
        </a>{" "}
      </div>
      <div className="swiper-slide">
        <a href="/our-space/0J7A3289.jpg" className="image">
          <StaticImage
            src="../../static/our-space/0J7A3289.jpg"
            alt="Caladrius Therapy Office"
            height={630}
          />
        </a>
      </div>
      <div className="swiper-slide">
        <a href="/our-space/0J7A3360.jpg" className="image">
          <StaticImage
            src="../../static/our-space/0J7A3360.jpg"
            alt="Caladrius Therapy Office"
            height={630}
          />
        </a>
      </div>
    </div>
    <div className="swiper-pagination"></div>
    {/* <div className="swiper-button-prev"></div>
    <div className="swiper-button-next"></div>
    <div className="swiper-scrollbar"></div> */}
  </div>
      <section className="wrapper style1 align-center">
        <div className="inner">
          <h2>See Our Space</h2>
        </div>
        
      </section>
      {/* <section className="wrapper style1 align-center">
        <div className="inner">
          <h2>See Our Space</h2>
        </div>
        <div className="gallery style2 small lightbox">
          
        </div> */}
      {/* <div className="gallery style2 small lightbox">
          <div className="modal" tabindex="-1">
            <div className="inner">
              <img src="" />
            </div>
          </div>
          <div className="forward"></div>
          <div className="backward"></div>
          <div className="inner" style={{ overflow: "hidden" }}>
            <article>
                <a href="/our-space/0J7A2911.jpg" className="image">
                  <StaticImage
                    src="../../static/our-space/0J7A2911.jpg"
                    alt="Caladrius Therapy Office"
                    width={420}
                  />
                </a>
                </article>
                <article>
                <a href="/our-space/0J7A2919.jpg" className="image">
                  <StaticImage
                    src="../../static/our-space/0J7A2919.jpg"
                    alt="Caladrius Therapy Office"
                    height={630}
                  />
                </a>
                </article>
                <article>
                <a href="/our-space/0J7A2974.jpg" className="image">
                  <StaticImage
                    src="../../static/our-space/0J7A2974.jpg"
                    alt="Caladrius Therapy Office"
                    width={420}
                  />
                </a>                </article>
                <article>
                <a href="/our-space/0J7A3022.jpg" className="image">
                  <StaticImage
                    src="../../static/our-space/0J7A3022.jpg"
                    alt="Caladrius Therapy Office"
                    height={630}
                  />
                </a>                </article>
                <article>
                <a href="/our-space/0J7A3048.jpg" className="image">
                  <StaticImage
                    src="../../static/our-space/0J7A3048.jpg"
                    alt="Caladrius Therapy Office"
                    height={630}
                  />
                </a>                </article>
                <article>
                <a href="/our-space/0J7A3085.jpg" className="image">
                  <StaticImage
                    src="../../static/our-space/0J7A3085.jpg"
                    alt="Caladrius Therapy Office"
                    height={630}
                  />
                </a>                </article>
                <article>
                <a href="/our-space/0J7A3242.jpg" className="image">
                  <StaticImage
                    src="../../static/our-space/0J7A3242.jpg"
                    alt="Caladrius Therapy Office"
                    width={420}
                  />
                </a>                </article>
                <article>
                <a href="/our-space/0J7A3277.jpg" className="image">
                  <StaticImage
                    src="../../static/our-space/0J7A3277.jpg"
                    alt="Caladrius Therapy Office"
                    height={630}
                  />
                </a>                </article>
                <article>
                <a href="/our-space/0J7A3289.jpg" className="image">
                  <StaticImage
                    src="../../static/our-space/0J7A3289.jpg"
                    alt="Caladrius Therapy Office"
                    height={630}
                  />
                </a>                </article>
                <article>
                <a href="/our-space/0J7A3360.jpg" className="image">
                  <StaticImage
                    src="../../static/our-space/0J7A3360.jpg"
                    alt="Caladrius Therapy Office"
                    height={630}
                  />
                </a></article>
          </div>
        </div> */}
      {/* </section> */}
    </>
  );
};

export default AboutPage;
