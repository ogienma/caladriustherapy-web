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
          <h2>Family Therapy</h2>
        <p>Families often struggle with communication, emotional expression, working together, and problem solving.
            Family therapy is there to focus on the entire family unit and to help it work more effectively together. In
            family therapy, the therapist does not focus on one member of the family, rather, they help the entire
            family system address issues and concerns and improve communication and support in order to help everyone
            function better and increase family connectedness.</p>
        <p>Common concerns that family therapy can help with include:</p>
        <ul>
            <li>Family conflict</li>
            <li>Family disconnect</li>
            <li>Uniting differing parenting styles </li>
            <li>Problems with communication</li>
            <li>Problems with emotional support</li>
            <li>Navigating conflict between adults, their adult siblings, and their parents </li>
            <li>Navigating conflict between in-laws and partners</li>
            <li>Navigating conflict between extended family and family unit</li>
            <li>Helping families recover from trauma, grief, or large changes</li>
            <li>Coping with family illness, addictions, or behavioral problems </li>
        </ul>
        <p>Our therapists are trained in family therapy and utilize evidence based practices to help your family focus on
        relationship building and strengthening the family unit in order to better resolve conflicts, provide love and
        support, and open communication. We can provide a free 15 minute consult to explore if family therapy is a good
        fit for your family!</p>
          </div>
          <div className="image">
            <img src={"/banners/liv-bruce-odIhQypCuUk-unsplash.jpg"} alt="Caladrius Therapy Charlotte NC" />
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
