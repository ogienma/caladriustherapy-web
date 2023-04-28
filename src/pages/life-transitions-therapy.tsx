import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { SEO } from "../components/SEO";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const RatesPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        <section className="spotlight style1 orient-left content-align-left image-position-center">
          <div className="content">
          <h2>Life Transitions</h2>
        <p>One thing you can definitely count on in life is that things will change. Life is full of transitions- a new job, a
            new relationship, a difficult life circumstance, a new baby, or an upcoming difficult decision. It is normal
            in these times to feel stuck, overwhelmed, anxious, or burned out.</p>

        <p>A therapist can help you process your feelings with an unbiased individual who is not part of your everyday
            life, and as such, allows you to work through your own feelings, opinions, and concerns in order to proceed
            feeling empowered, in control, and prepared for the next steps.</p>

        <p>Therapy is not always long term. Many individuals utilize only a handful of sessions to work through
            something important to their life and then only utilize therapy as needed or wanted. We want to help remove
            the stigma of therapy as something people become dependent on and we want to normalize therapy as a
            preventative service that can help everyone.</p>

        <p>Let's let go of the old-fashioned idea that therapy is always a long term commitment. Let's start imagining
            what just a handful of sessions might help us accomplish. </p>
          </div>
          <div className="image">
            <img src={"/banners/ross-parmly-rf6ywHVkrlY-unsplash.jpg"} alt="Caladrius Therapy Charlotte NC" />
            {/* <StaticImage src="../images/nathan-dumlao-I_394sxx0ec-unsplash.jpg" alt="Caladrius Therapy Rates" objectFit={"cover"}/> */}
            {/* <img width="1920" height="1280" data-main-image="" style="object-fit: cover; opacity: 1;" sizes="(min-width: 1920px) 1920px, 100vw" decoding="async" loading="lazy" src="/static/da873e31ace8e0e352a7ee4c817045d5/5267c/nathan-dumlao-I_394sxx0ec-unsplash.jpg" srcset="/static/da873e31ace8e0e352a7ee4c817045d5/fa695/nathan-dumlao-I_394sxx0ec-unsplash.jpg 480w,
/static/da873e31ace8e0e352a7ee4c817045d5/a0d3e/nathan-dumlao-I_394sxx0ec-unsplash.jpg 960w,
/static/da873e31ace8e0e352a7ee4c817045d5/5267c/nathan-dumlao-I_394sxx0ec-unsplash.jpg 1920w" alt="Caladrius Therapy Rates"></img> */}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default RatesPage;

export const Head: HeadFC = () => <SEO />;
