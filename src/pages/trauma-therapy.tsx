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
          <h2>Trauma</h2>
        <p><em>"I am not what happened to me. I am what I choose to become."</em> - Carl Jung</p>
        <p>Many people have had scary or terrible things happen to them: trauma isn't just what happens to you - it's
            how you experience it.</p>
        <p>Those who experience trauma may be experiencing anxiety, depression, intrusive thoughts or memories of what
            happened to you, trouble in relationships, or negative thoughts about yourself, others, or the world. </p>
        <p>Our providers are experienced with and comfortable treating a range of traumatic experiences:</p>
        <ul>
            <li>Child abuse or neglect</li>
            <li>Emotional abuse or neglect</li>
            <li>Domestic violence</li>
            <li>Sexual abuse or assault</li>
            <li>Rape</li>
            <li>Veterans' and police officers' issues</li>
            <li>Birth trauma</li>
            <li>Medical trauma </li>
            <li>Trauma by service providers</li>
            <li>Witnessing violence</li>
            <li>Complex or long term trauma</li>
        </ul>
        <p>Not every approach works for every person. We have evidence-based options including <a
                href="/tf-cbt">TF-CBT</a>, <a href="/emdr">EMDR</a>, and <a href="/sandtray-therapy">Sandtray Therapy</a>.</p>
        <p> Going to therapy to get help with your trauma can be incredibly scary and difficult! Unfortunately, many
            still feel it is stigmatized to ask for help, but we do not see you as weak or helpless. We believe you are
            strong and capable of healing with a client-centered approach to evidence-based treatments for trauma.
            Trauma affects the brain on a neurological level and that has real effects on your thoughts, feelings, and
            experiences. We want to support you in your path to healing. Avoidance, a common symptom of trauma, makes it
            hard for many to think about or even try to think about what has happened to them. You will not have to
            recount graphic details of your trauma at your first visit. We will ask you questions about what is
            impacting your life and what you are struggling with currently and discuss options to help you feel whole,
            calm, and in control.
        </p>          </div>
          <div className="image">
            <img src={"/heroes/photo-1564121211835-e88c852648ab.jpg"} alt="Caladrius Therapy Charlotte NC" />
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
