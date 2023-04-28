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
          <h2>TF-CBT</h2>
        <p>TF-CBT (Trauma Focused Cognitive Behavioral Therapy) is an evidence based treatment model that utilizes traditional CBT techniques applied specifically to trauma in children, adolescents, and adults. The model was specifically developed to work well with children, adolescents, and families to create a relational treatment that allows the parents or primary support person to support the client through treatment. Therapy includes client only, support person only, and joint sessions to create a robust treatment that includes coping skills, supporting the care person in supporting the client outside of session, relaxation, psycho education, mindfulness, and gradual exposure to the traumatic memories.  TF-CBT can also be adapted to work with an individual only.</p>
        <p>Our care providers are certified through the <a href="https://nccollaborative.org/">North Carolina Child Treatment Collaborative</a> with <a href="https://ipmh.duke.edu/content/duke-child-and-family-trauma">Duke University</a> and are able to provide both TF-CBT and Trauma-Informed Comprehensive Clinical Assessments.</p>
          </div>
          <div className="image">
            <img src={"/banners/artem-maltsev-sVFcKZDzBDg-unsplash.jpg"} alt="Caladrius Therapy Charlotte NC" />
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
