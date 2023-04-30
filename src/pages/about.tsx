import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { SEO } from "../components/SEO";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
{/*         
<!-- Spotlight: Madalyn Twist --> */}
<section
  className="spotlight style2 orient-right content-align-left image-position-center"
  id="madalyn-twist"
>
  <div className="content">
    <p>
      My name is
      <strong
        ><a
          href="#"
          >Madalyn</a></strong> (she/her) and I am here to facilitate your healing and growth as an
      individual.
    </p>
    <p>
      <em>
        "The most important thing we can do for the healing of the world is to hear inside ourselves" - Thich Nhat Hanh
      </em>
    </p>
    <p>
      Therapy is a transformative journey. It is one in which we begin to take off the masks that we are afraid of living without but know we cannot live within. Together, we will gently remove old and new masks, allowing for the opportunity to get to know our truest, inner selves. From witnessing how personal challenges - past and present - can impact individuals in distinct ways, I have grown increasingly passionate about helping individuals to reconnect with life through self-discovery. I use a person-centered, trauma informed approach that recognizes and respects you, in all of your glorious uniqueness. I believe you are the expert in your lived experiences and I work to create a space where you can share your journey, challenges, and hopes for the future.
      </p>
      <p>
        With over five years of experience working with youth experiencing foster care, I have a special interest in helping children (and families) navigate the various emotions that arise due to the circumstances they are faced with. I help children understand and express their emotions constructively through play, their most effective language. With adolescents, I focus on establishing trust and connection while addressing challenging behaviors and developing valuable skills within, such as self regulation and self compassion. When working with adults, I focus on wellness and stability, while guiding you through your healing journey and equipping you with resources and tools to use both inside and outside of sessions. I draw heavily from CBT, responsive parenting, attachment theory, and other trauma-informed practices to meet your specific needs and desires. I also enjoy incorporating mindfulness, meditation, and body focused practices to connect the mind, body, and spirit, into sessions.
      </p>
    <p>
      <em>        
        Madalyn Twist, MSW, LCSW-A graduated from The University of North Carolina at Charlotte with her Master's of Social Work degree. She received her Bachelor's of Social Work degree from The University of North Carolina at Wilmington. Madalyn specializes in working with children and adolescent's experiencing foster care as well as youth and adult adoptees. She has experience with a variety of mental health diagnoses and the impacts of trauma within both children and adults. Madalyn has a special interest in Internal Family Systems Model. She is passionate about creating a safe and affirming space for LGBTQIA+ populations.
      </em>
    </p>
  </div>
  <div className="image">
    <img src="headshots/headshot-madalyn-twist-500.jpg" alt="Madalyn Twist" />
  </div>
  <ul className="icons" style={{padding: "8px"}}>
    <li style={{display: "block", padding: "8px"}}>
      <a
        href="mailto:madalyn.twist@caladriustherapy.com"
        className="icon style2 solid fa-envelope"
        ><span className="label">Email</span></a
      >
    </li>
    {/* <!--
    <li style={{display: "block", padding: "8px"}}>
      <a
        href="https://www.linkedin.com/in/hannah-wagers-606140183/"
        className="icon style2 brands fa-linkedin"
        ><span className="label">LinkedIn</span></a
      >
    </li>--> */}
  </ul>
</section>


      </Layout>
    </>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <SEO />;
