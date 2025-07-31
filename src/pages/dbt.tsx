import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { SEO } from "../components/SEO";
import Layout from "../components/Layout";
import { useState } from "react";

const DBTPage: React.FC<PageProps> = () => {
  const [isProviderReferral, setIsProviderReferral] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Layout>
        <section className="spotlight style1 orient-left content-align-left image-position-center">
          <div className="content">
            <h2>Dialectical Behavior Therapy (DBT)</h2>
            <p>Dialectical Behavior Therapy (DBT) is an evidence-based, cognitive-behavioral treatment designed to help individuals who experience intense emotions, impulsive behaviors, and challenges in relationships and may also exhibit moderate to high-risk behaviors such as suicidality, self-harm, and addiction.</p>
            <p>DBT focuses on building skills in four key areas:</p>
            <ul>
              <li>Mindfulness</li>
              <li>Emotion Regulation</li>
              <li>Distress Tolerance</li>
              <li>Interpersonal Effectiveness</li>
            </ul>
            <p>Led by a DBT-Linehan Board Certified Clinician, the DBT Full Program at Caladrius Therapy is a comprehensive, manualized treatment that includes:</p>
            <ul>
              <li>Weekly individual therapy</li>
              <li>Weekly group therapy</li>
              <li>Phone/email coaching between sessions to generalize skills</li>
            </ul>
            <p>Group sessions are available to adults of all ages and genders, with remote and onsite options. Treatment length is 6 months to 1 year based on client need.</p>
            <h3>Getting Started with DBT</h3>
            <p>To begin your journey with DBT, please select how you'd like to proceed:</p>
            <ul>
              <li>
            <a href="https://form.jotform.com/251196339441156">I am interested in DBT for myself</a>
                </li>
              <li>
            <a href="https://form.jotform.com/251195172346154">I am a provider referring a client</a>
            </li>  
            </ul>
          </div>
          <div className="image">
            <img src={"/heroes/photo-1564121211835-e88c852648ab.jpg"} alt="Caladrius Therapy DBT" />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default DBTPage;

export const Head: HeadFC = () => <SEO title="DBT | Caladrius Therapy" />; 
