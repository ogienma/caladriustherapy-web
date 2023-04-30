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
          <h2>Couples Therapy</h2>
        <p>All couples encounter struggles - whether you are a brand new couple, moving in together for the first time,
            having your first child, or working through something new after years of marriage. Couples therapy is for
            any couple who wants to increase communication, improve feelings of togetherness, or simply work through
            some of the normal conflicts of everyday life.</p>
        <p>Couples therapy is helpful for a range of struggles in relationships!</p>
        <ul>
            <li><strong>Premarital Counseling</strong> is for those thinking about getting engaged or newly engaged who
                want to start their marriage off great! Premarital counseling helps couples think through potential
                conflict in the future and prevent it from happening. Your therapist will explore common areas of
                marital conflict and help you resolve them before your marriage. They will also help you see where you
                can improve your general communication and emotional responsiveness with each other!</li>
            <li><strong>Conflict Over Finances</strong> can make you feel trapped, not cared for, distrusted, or
                helpless. Your therapist will help you both explore different methods of sharing finances or financial
                responsibilities in a home and work through the emotional underpinnings of transitioning to a team
                approach to managing financial stressors.</li>
            <li><strong>Conflict Over Children</strong> is a leading cause of divorce and dissatisfaction in couples.
                Parenting approaches, discipline, cultural differences, and extended family involvement are all areas
                where it is easy for couples to disagree or have conflict. We can help you explore how you each wish to
                parent or how you each see yourself as a parent and help you both create a situation you are happy with.
                We are not here to tell you how to parent, but will help you utilize your own individual beliefs and
                values with your partner to parent in the ways that work for you.</li>
            <li><strong>Lack of Healthy Communication</strong> can lead to conflicts that have added up over time to
                create resentment, disrespect, or lack of emotional intimacy. Communication problems leads to feeling
                unappreciated, frequent arguments, and lack of trust. We will help you improve your communication
                skills, work through past hurt, and find a path forward.</li>
            <li><strong>Unsatisfying Sexual Intimacy</strong> is often an indication of problems in a couple. A
                therapist can help uncover what is leading to struggles with physical intimacy and coach a couple on
                ways to rekindle a sexual relationship. </li>
        </ul>
        <p>Caladrius Therapy is LGBTQ+ Friendly. If you love each other we will be happy to help you love each other
            better.</p>
          </div>
          <div className="image">
            <img src={"/heroes/d-ng-h-u-CCjgYjUudxE-unsplash.jpg"} alt="Caladrius Therapy Charlotte NC" />
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
