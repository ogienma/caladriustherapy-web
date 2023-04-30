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
            <h2>EMDR</h2>
            <p>EMDR (Eye Movement Desensitization and Reprocessing) is a type of therapy that uses eye movements or other bilateral brain stimulation to aide the brain in processing traumatic memories or thought processes contributing to grief, anxiety, depression, or panic attacks.</p><p>EMDR therapy allows the brain to heal itself with less interference in a way that is considered more gentle and less intrusive than traditional Trauma-Focused Cognitive Behavioral Therapy (TF-CBT). EMDR requires much less talking directly about the traumatic events and tends to be more efficient. EMDR is not a fit for everyone. If you are interested, you can schedule a free 15 minute consultation with an approved EMDR therapist to ask any questions you may have. Both EMDR and TF-CBT are World Health Organization approved treatments for trauma and PTSD and we offer both.</p>
        <p>For more information about EMDR, <a href="https://youtu.be/Pkfln-ZtWeY">this video</a> is a great introduction. </p>

          </div>
          <div className="image">
            <img src={"/heroes/soroush-karimi-ZcczBXrkXgA-unsplash.jpg"} alt="Caladrius Therapy Charlotte NC" />
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
