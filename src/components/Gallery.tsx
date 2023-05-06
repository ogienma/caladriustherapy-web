import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import "swiper/css/navigation";
import "swiper/css/pagination";
export interface IProps {}

const Gallery: React.FC<IProps> = () => {
  const ourSpaceImages = [
    {
      src: "/our-space/0J7A2911.jpg",
      alt: "Caladrius Therapy Charlotte NC",
      caption: "Caladrius Therapy Charlotte NC",
    },
    {
      src: "/our-space/0J7A2919.jpg",
      alt: "Caladrius Therapy Charlotte NC",
      caption: "Caladrius Therapy Charlotte NC",
    },
    {
      src: "/our-space/0J7A2974.jpg",
      alt: "Caladrius Therapy Charlotte NC",
      caption: "Caladrius Therapy Charlotte NC",
    },
    {
      src: "/our-space/0J7A3022.jpg",
      alt: "Caladrius Therapy Charlotte NC",
      caption: "Caladrius Therapy Charlotte NC",
    },
    {
      src: "/our-space/0J7A3048.jpg",
      alt: "Caladrius Therapy Charlotte NC",
      caption: "Caladrius Therapy Charlotte NC",
    },
    {
      src: "/our-space/0J7A3085.jpg",
      alt: "Caladrius Therapy Charlotte NC",
      caption: "Caladrius Therapy Charlotte NC",
    },
    {
      src: "/our-space/0J7A3242.jpg",
      alt: "Caladrius Therapy Charlotte NC",
      caption: "Caladrius Therapy Charlotte NC",
    },
    {
      src: "/our-space/0J7A3277.jpg",
      alt: "Caladrius Therapy Charlotte NC",
      caption: "Caladrius Therapy Charlotte NC",
    },
    {
      src: "/our-space/0J7A3289.jpg",
      alt: "Caladrius Therapy Charlotte NC",
      caption: "Caladrius Therapy Charlotte NC",
    },
    {
      src: "/our-space/0J7A3360.jpg",
      staticSrc: "../../static/our-space/0J7A3360.jpg",
      alt: "Caladrius Therapy Charlotte NC",
      caption: "Caladrius Therapy Charlotte NC",
    },
  ];

  return (
    <>
      <section className="wrapper style1 align-center">
        <div className="inner">
          <h2>See Our Space</h2>
        </div>
        <div className="gallery style2 small lightbox"></div>
        <Swiper
          spaceBetween={0}
          slidesPerView={"auto"}
          modules={[Navigation, Pagination, Scrollbar]}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide style={{ width: "420px", height: "630px"}}>
            <article>
              <a href="/our-space/0J7A2911.jpg" className="image">
                <StaticImage
                  src="../../static/our-space/0J7A2911.jpg"
                  alt="Caladrius Therapy Office"
                  width={420}
                  height={630}
                />
              </a>
            </article></SwiperSlide>
            <SwiperSlide style={{ width: "945px", height: "630px"}}>
            <article>
              <a href="/our-space/0J7A3048.jpg" className="image">
                <StaticImage
                  src="../../static/our-space/0J7A3048.jpg"
                  alt="Caladrius Therapy Office"
                  width={945}
                  height={630}
                />
              </a>{" "}
            </article></SwiperSlide>
          {/* 
            <SwiperSlide style={{ width: "945px", height: "630px" }}>
            <article>
              <a href="/our-space/0J7A3277.jpg" className="image">
                <StaticImage
                  src="../../static/our-space/0J7A3277.jpg"
                  alt="Caladrius Therapy Office"
                  width={945}
                  height={630}
                />
              </a>{" "}
            </article>
          </SwiperSlide> */}
          <SwiperSlide style={{ width: "420px", height: "630px"}}> {/* 'everyone is respected' sign */}
            <article>
              <a href="/our-space/0J7A3248.jpg" className="image">
                <StaticImage
                  src="../../static/our-space/0J7A3248.jpg"
                  alt="Caladrius Therapy Office"
                  width={420}
                  height={630}
                />
              </a>
            </article></SwiperSlide>
            {/* <SwiperSlide style={{ width: "945px", height: "630px"}}>
            {" "}
            <article>
              <a href="/our-space/0J7A2919.jpg" className="image">
                <StaticImage
                  src="../../static/our-space/0J7A2919.jpg"
                  alt="Caladrius Therapy Office"
                  width={945}
                  height={630}
                />
              </a>
            </article>
          </SwiperSlide> */}
          <SwiperSlide style={{ width: "420px", height: "630px"}}>
            {" "}
            <article>
              <a href="/our-space/0J7A2925.jpg" className="image">
                <StaticImage
                  src="../../static/our-space/0J7A2925.jpg"
                  alt="Caladrius Therapy Office"
                  width={420}
                  height={630}
                />
              </a>
            </article>
          </SwiperSlide>
          <SwiperSlide style={{ width: "945px", height: "630px" }}>
            <article>
              <a href="/our-space/0J7A3289.jpg" className="image">
                <StaticImage
                  src="../../static/our-space/0J7A3289.jpg"
                  alt="Caladrius Therapy Office"
                  width={945}
                  height={630}
                />
              </a>{" "}
            </article>
          </SwiperSlide>
          <SwiperSlide style={{ width: "420px", height: "630px"}}> {/* 'you belong here' book */}
            <article>
              <a href="/our-space/0J7A3258.jpg" className="image">
                <StaticImage
                  src="../../static/our-space/0J7A3258.jpg"
                  alt="Caladrius Therapy Office"
                  width={420}
                  height={630}
                />
              </a>
            </article></SwiperSlide>
          <SwiperSlide style={{ width: "420px", height: "630px" }}>
            {" "}
            <article>
              <a href="/our-space/0J7A2974.jpg" className="image">
                <StaticImage
                  src="../../static/our-space/0J7A2974.jpg"
                  alt="Caladrius Therapy Office"
                  width={420}
                  height={630}
                />
              </a>{" "}
            </article>
          </SwiperSlide>
          <SwiperSlide style={{ width: "945px", height: "630px"}}>
            <article>
              <a href="/our-space/0J7A3022.jpg" className="image">
                <StaticImage
                  src="../../static/our-space/0J7A3022.jpg"
                  alt="Caladrius Therapy Office"
                  width={945}
                  height={630}
                />
              </a>{" "}
            </article>
          </SwiperSlide>


          <SwiperSlide style={{ width: "630px", height: "630px"}}>
            <article>
              <a href="/our-space/0J7A3085.jpg" className="image">
                <StaticImage
                  src="../../static/our-space/0J7A3085_square.jpg.jpg"
                  alt="Caladrius Therapy Office"
                  width={630}
                  height={630}
                />
              </a>{" "}
            </article>


          </SwiperSlide>
                    <SwiperSlide style={{ width: "420px", height: "630px" }}>
            <article>
              <a href="/our-space/0J7A3242.jpg" className="image">
                <StaticImage
                  src="../../static/our-space/0J7A3242.jpg"
                  alt="Caladrius Therapy Office"
                  width={420}
                  height={630}
                />
              </a>{" "}
            </article>
          </SwiperSlide>
          <SwiperSlide style={{ width: "630px", height: "630px" }}>
            <article>
              <a href="/our-space/0J7A3360.jpg" className="image">
                <StaticImage
                  src="../../static/our-space/0J7A3360_square.jpg"
                  alt="Caladrius Therapy Office"
                  width={630}
                  height={630}
                />
              </a>{" "}
            </article>
          </SwiperSlide>
        </Swiper>
        {/* <div className="gallery style2 small lightbox">
           *<div className="modal" tabindex="-1">
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
      </section>
    </>
  );
};

export default Gallery;
