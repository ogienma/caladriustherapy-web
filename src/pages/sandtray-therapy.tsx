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
          <h2>Sandtray Therapy</h2>
        <p>Sandtray works by allowing one to process situations, experiences, or thoughts through the use of miniatures and a tray of sand!</p>
        <p>Using miniatures, a person can recreate past experiences in a way that distances from the actual feelings associated with that experience. For small children or for people with complex trauma, traditional “talk therapy” may not be as effective as expressive therapies that allow deeper exploration of a person’s trauma or difficult experiences by bypassing the levels of awareness that may block one from exploring those experiences consciously or verbally. Sandtray allows one to bring forward what may be buried deep within a person’s mind, in order to address those concerns with more awareness.</p>
        <p>Expressive therapies can be just as therapeutic as talk therapy as they allow a person to process experiences in a different way that may be more fitting depending on the circumstances. Through this process, the client may be able to create their own meaning from their Sandtray, miniatures, or story, allowing them to process more readily and feel more control over the situation they allow to play out. With young children this often looks like “moving pictures” or play, but with adolescents and adults, this may be more of a physical representation of memories, thoughts, or feelings using abstract and concrete symbolism. This helps people to better understand their thoughts, feelings, and the reasons behind their actions. Sandtray can also be a helpful adjunct to traditional talk therapy or CBT in order to increase expression and processing.</p> <p>Sandtray is appropriate for all ages! We often notice adults peeking with interest at our miniature collection (or you know, “toys” as they call them), but once they try Sandtray they are astounded at how effective it can be. Don’t be shy and ask us to check out the “Sandtray room” at your visit.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/y_24MzxFkYY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kbuDKNGu1x8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
          <div className="image">
            <img src={"/banners/matheo-jbt-b1RETndiD4Q-unsplash.jpg"} alt="Caladrius Therapy Charlotte NC" />
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
