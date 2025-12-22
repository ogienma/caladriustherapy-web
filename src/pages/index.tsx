import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import OurTeamPanel from "../components/OurTeamPanel";
import teamData from "../../content/team.yaml";
import Gallery from "../components/Gallery";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        {/* // <!-- Banner --> */}
        <section className="banner style1 orient-left content-align-left image-position-right fullscreen">
          <div className="content">
            <h1>your first step to inner calm</h1>
            <p className="major">
              <strong>Caladrius Therapy</strong> in{" "}
              <strong>Charlotte, NC</strong>.
            </p>
            <p>
              Everyone deserves to be seen and to share their story with someone
              who is empathetic, caring, and helpful.
            </p>
            <p>
              <strong>
              <span
                  style={{
                    backgroundColor: "#ff6b6b",
                    color: "white",
                    fontSize: "0.7em",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    marginLeft: "8px",
                    fontWeight: "bold",
                    textTransform: "uppercase"
                  }}
                >
                  NEW
                </span>{" "}
                <a href="https://caladriustherapy-next.netlify.app/match">
                  Take our quiz
                </a>
                {" "}
                to match with a therapist!
              </strong>
            </p>
            <ul className="actions">
              <li>
                <a href="#form" className="button primary large wide mr-3">
                  Get In Touch
                </a>
              </li>
              <li>
                <a
                  href="https://caladrius.clientsecure.me"
                  className="spwidget-button button primary large wide mr-3"
                  data-spwidget-scope-id="9ea36f87-56fd-4ef3-8641-a0a82839a987"
                  data-spwidget-scope-uri="caladrius"
                  data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
                  data-spwidget-scope-global
                  data-spwidget-autobind
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>
          <div className="image">
            <img
              src="/heroes/pexels-stijn-dijkstra-1306815-18709770-2160p.jpg"
              style={{ filter: "brightness(50%)" }}
              alt=""
            />
            <div className="content birddiv">
              <img
                src="/bird-white.svg"
                alt=""
                style={{ position: "relative" }}
              />
            </div>
          </div>
        </section>
        {/* <!-- Spotlight --> */}
        <section
          className="spotlight style1 orient-right content-align-left image-position-center"
          id="first"
        >
          <div className="content">
            <h2>Our Approach</h2>
            <p>
              <em>
                The caladrius is a white bird from Roman mythology that was said
                to gaze on those in pain and share it with them. The bird could
                then heal both itself and the injured, dispersing the pain as it
                flew towards the sun.
              </em>
            </p>
            <p>
              We believe empathy is essential to a beneficial therapeutic
              relationship. Empathy is feeling with someone; it is different
              from sympathy, which is feeling bad for someone. We believe
              everyone has the capacity to be strong, to know what they need,
              and to guide their own treatment goals. We believe in being honest
              and transparent. You are the expert on you.
            </p>
          </div>
          <div className="image">
            <img src="/heroes/stephen-walker-572414-unsplash.jpg" alt="" />
          </div>
        </section>
        {/* <!-- Team --> */}
        <OurTeamPanel />
        {/* <!-- Spotlight: Services --> */}
        <section
          className="spotlight style1 orient-left content-align-left image-position-center"
          id="services"
        >
          <div className="content">
            <h2>Services</h2>
            <ul>
              <li>
                <a href="/couples-therapy#couples-therapy-body">
                  Couples Therapy
                </a>
              </li>
              <li>
                <a href="/group-therapy#group-therapy-body">Group Therapy</a>
              </li>
              <li>
                <a href="/family-therapy">Family Therapy</a>
              </li>
              <li>
                <a href="/emdr">
                  Eye Movement Desensitization and Reprocessing (EMDR) Therapy
                </a>
              </li>
              <li>
                <a href="/dbt">Dialectical Behavior Therapy (DBT)</a>
              </li>
              <li>
                <a href="/tf-cbt">
                  Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)
                </a>
              </li>
              <li>
                <a href="/sandtray-therapy#sandtray-therapy-body">
                  Sandtray Therapy
                </a>
              </li>
              <li>
                <a href="/life-transitions-therapy#life-transitions-therapy-body">
                  Life Transitions
                </a>
              </li>
              <li>Comprehensive Clinical Assessment (CCA)</li>
              {/* <!-- <li>Global Appraisal of Individual Needs (GAIN) Assessment</li> --> */}
              <li>
                Children, Adolescents, Adult, and Family Outpatient Therapy
              </li>
              <li>
                Parent Training for Disruptive Behavior (The RUBI Autism
                Network)
              </li>
              <li>Parent Coaching</li>
            </ul>
          </div>
          <div className="image">
            <img src="/heroes/nicole-honeywill-704489-unsplash.jpg" alt="" />
          </div>
        </section>
        <Gallery />
        <section className="wrapper style2 align-center">
          <div className="inner">
            <div className="index align-left">
              {/* <!-- Contact Form --> */}
              <section id="form">
                <header>
                  <h3>Get In Touch</h3>
                </header>
                <div className="content">
                  <form name="contact" method="POST" data-netlify="true" netlify-honeypot="phone">
                    <input type="hidden" name="form-name" value="contact" />
                    <p style={{ display: "none" }}>
                      <label>
                        <input name="bot-field" type="text" />
                      </label>
                    </p>
                    <div className="fields">
                      <div className="field half">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                      </div>
                      <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                      </div>
                      <div className="hidden">
                        <input name="phone" type="text" />
                      </div>
                      <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name="message"
                          id="message"
                          rows={5}
                        ></textarea>
                      </div>
                    </div>
                    <ul className="actions">
                      <li>
                        <button
                          type="submit"
                          className="primary"
                          name="submit"
                          id="submit"
                        >
                          Send Message
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
              </section>

              {/* <!-- Contact Details --> */}
              <div className="items style1 medium">
                <section>
                  <div className="inner">
                    <a href="tel:7049803082">
                      <span className="icon style2 major solid fa-phone-alt"></span>
                    </a>
                    <a href="tel:7049803082">
                      <h4 style={{ textAlign: "center" }}>(704) 980-3082</h4>
                    </a>
                    <p style={{ textAlign: "center", color: "#9ba3ae" }}>
                      Fax: (704) 709-1344
                    </p>
                  </div>
                </section>
                <section>
                  <div className="inner" style={{ textAlign: "center" }}>
                    <a href="mailto:hello@caladriustherapy.com">
                      <span className="icon style2 major solid fa-envelope"></span>
                    </a>

                    <div className="inner" style={{ textAlign: "center" }}>
                      <a href="mailto:hello@caladriustherapy.com">
                        <strong>General Inquiries</strong>
                      </a>
                    </div>
                    {" • "}
                    {teamData.members
                      .reverse()
                      .map((member: any, index: any) => {
                        return (
                          <span>
                            <a href={`mailto:${member.email}`}>
                              {`${member.name.split(" ")[0]} ${
                                member.name.split(" ")[1][0]
                              }.`}
                            </a>
                            {" • "}
                          </span>
                        );
                      })}
                  </div>
                </section>
                <section>
                  <div className="inner">
                    <a href="https://g.page/caladrius-therapy?share">
                      <span className="icon style2 major solid fa-map-pin"></span>
                    </a>
                    <div className="inner" style={{ textAlign: "center" }}>
                      <strong>Elizabeth</strong>
                    </div>
                    <a href="https://g.page/caladrius-therapy?share">
                      <h4 style={{ textAlign: "center" }}>
                        200 Queens Road, Suite 300
                        <br />
                        Charlotte NC 28204
                      </h4>
                    </a>
                  </div>
                </section>
              </div>

              {/* <!-- Map --> */}
              <section style={{ paddingTop: "16px" }}>
                <div className="content">
                  <div className="iframe-rwd">
                    {/* <!-- Caladrius Therapy: ChIJOZghlXCfVogRkp499dzCZao -->
            <!--<iframe id ="1" width="600" height="450" frameborder="0" style="border:0"
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJOZghlXCfVogRkp499dzCZao&key=MY_KEY_HERE" visit https://console.cloud.google.com/apis/credentials/key/25e0c3ca-fdcc-4da5-825e-17be62395978?project=caldrius-220122
              allowfullscreen></iframe>-->
            <!-- REST Charlotte:    ChIJ_1JFIXahVogRkSmoiwEc8I8 -->
            <!-- <iframe id="2" width="600" height="450" frameborder="0" style="border:0"
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ_1JFIXahVogRkSmoiwEc8I8&key=MY_KEY_HERE" visit https://console.cloud.google.com/apis/credentials/key/25e0c3ca-fdcc-4da5-825e-17be62395978?project=caldrius-220122
              allowfullscreen></iframe>--> */}
                    <iframe
                      src="https://www.google.com/maps/d/embed?mid=1-Sia_16IEGSduBjEI5NMb-O93DZhGE9A&ehbc=2E312F"
                      width="100%"
                      height="480"
                    ></iframe>
                  </div>
                </div>
              </section>
              {/* <!-- Referrals --> */}
              <section>
                <header>
                  <h3>Referrals</h3>
                </header>
                <div className="content">
                  Are you a provider looking to refer someone to Caladrius
                  Therapy? If so, please complete{" "}
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScGrVjx8T30DoF_smDZKS7pOtIQeZxXmVgoazgARc189aJ4Zg/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link">
                    our referral form
                  </a>
                  .
                </div>
              </section>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
