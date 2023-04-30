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
          <h2>Community Partners</h2>
        <ul>
            <li><strong><a href="https://www.mindbodybabync.org/">Mind Body Baby</a></strong> is a community of
                perinatal specialists in different fields providing resources and support for mothers, fathers, and
                couples in the perinatal period. They offer groups, breastfeeding support, and more. We are thrilled to
                be part of their collaborative. Caladrius Therapy is an approved practice, Jessie Ogienko, LCSW is an
                approved provider. You can visit the Mind Body Baby main website to learn more as well as check out our listing:
                https://www.mindbodybabync.org/listing/Jessie-Ogienko.
            </li>
        </ul>
        <ul>
            <li><strong><a href="https://cthcg.org/">The Charlotte Transgender Healthcare Group (CTHCG)</a></strong> is
                a group of healthcare professionals dedicated to providing resources, access to care, and informed care
                to the transgender community of Charlotte. Caladrius Therapy, PLLC is a member and committed to
                providing transgender informed care to its clients as well as connecting with specialists as
                appropriate.
            </li>
        </ul>
        <ul>
            <li><strong><a href="https://www.patsplacecac.org/">Pat's Place</a></strong> is the only child advocacy
                center in Charlotte, NC. They coordinate
                investigation, persecution, and treatment for child abuse cases. Caladrius Therapy is a member of Pat's
                Place
                CHAT collaborative, providing evidence based services for affected children. Pat's Place also works to
                provide
                funding for bilingual families to receive therapy.
            </li>
        </ul>
        <ul>
            <li><strong><a href="https://www.nccadv.org/">North Carolina Coalition Against Domestic Violence (NCCADV)</a></strong> works with survivors of domestic violence and also provides education,
                advocacy, and collaboration to increase education and end domestic violence.
            </li>
        </ul>
        
                <ul>
            <li><strong><a href="https://www.missingkids.org/home">Family Advocacy Outreach Network (FAON)</a></strong> is a program of the National Center for Missing and Exploited Children. We are a participating member and stay connected to recieve updates and helpful information of the latest developments and trends in the field of at-risk children, missing children, and sexual exploitation. 
            </li>
        </ul>
          </div>
          <div className="image">
            <img src={"/heroes/shane-rounce-DNkoNXQti3c-unsplash.jpg"} alt="Caladrius Therapy Charlotte NC" />
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
