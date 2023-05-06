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
            {/* <!--<ul className="actions stacked">
      <li>
        <a href="#form" className="button primary large wide mr-3">Get In Touch</a>
        <a href="https://caladrius.clientsecure.me" className="button primary large wide mr-3"
        data-spwidget-scope-id="9ea36f87-56fd-4ef3-8641-a0a82839a987" data-spwidget-scope-uri="caladrius"
        data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
        data-spwidget-scope-global data-spwidget-autobind>Book Appointment</a>
      </li>
    </ul>--> */}
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
              src="/heroes/banner-dominik-lange-35224-unsplash.jpg"
              style={{ filter: "brightness(50%)" }}
              alt=""
            />
            <div className="content birddiv">
              <img src="/bird.png" alt="" style={{ position: "relative" }} />
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
        {/* 
<!-- Spotlight: About Trauma -->
<!--
<section className="spotlight style1 orient-left content-align-left image-position-center" id="second">
  <div className="content">
    <h2>About Trauma</h2>
    <p><em>"I am not what happened to me. I am what I choose to become." - Carl Jung</em></p>
    <p>Many people have had scary or terrible things happen to them: trauma isn't just what happens to you - it's how
      you experience it.</p>
    <p>Maybe - as is the case with many others - you haven’t told anyone. Maybe you <em>have</em> told people what
      happened and their response was confusing, hurtful, or dismissive. Maybe you feel like you just want it to be
      over or you should have gotten past it already. You might have reminders of what happened impacting your life
      through nightmares, flashbacks, or trying to avoid any mention or reminder of the events. You might feel numb.
      Maybe you are a parent and are completely lost on how to help your child recover. </p>
    <p>You have the capacity to be a survivor and not feel like a victim. You have the ability to move forward.</p>
  </div>
  <div className="image">
    <img src="images/hand-elijah-o-donnell-715864-unsplash.jpg" alt="" />
  </div>
</section>
--> */}

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
                <a href="/trauma">Trauma-Informed CCA (TICCA)</a>
              </li>
              <li>
                <a href="/emdr">
                  Eye Movement Desensitization and Reprocessing (EMDR) Therapy
                </a>
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
<Gallery/>
        <section className="wrapper style2 align-center">
          <div className="inner">
            <div className="index align-left">
              {/* <!-- Contact Form --> */}
              <section id="form">
                <header>
                  <h3>Get In Touch</h3>
                </header>

                <div className="content">
                  <form name="contact" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="fields">
                      <div className="field half">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                      </div>
                      <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
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
                    <p style={{ textAlign: "center" }}>
                      Fax and SMS messages accepted.
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
                      <strong>Dilworth</strong>
                    </div>
                    <a href="https://g.page/caladrius-therapy?share">
                      <h4 style={{ textAlign: "center" }}>
                        700 East Blvd, Suites 1 & 3<br />
                        Charlotte NC 28203
                      </h4>
                    </a>
                    <div className="inner" style={{ textAlign: "center" }}>
                      <strong>South Park</strong>
                    </div>
                    <a href="https://www.google.com/maps/place/2901+Coltsgate+Rd,+Charlotte,+NC+28211/@35.149032,-80.8284798,17z/data=!3m1!4b1!4m5!3m4!1s0x88569e144ed8681b:0x13e0f1a5429c504!8m2!3d35.149032!4d-80.8284798">
                      <h4 style={{ textAlign: "center" }}>
                        2901 Coltsgate Rd, Suite 202
                        <br />
                        Charlotte NC 28211
                      </h4>
                    </a>
                  </div>
                </section>
              </div>

              {/* <!-- Map --> */}
              <section>
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
                      width="640"
                      height="480"
                    ></iframe>
                  </div>
                </div>
              </section>
              {/* <!-- See Our Space --> */}
              {/* <section>
                <header>
                  <h3>See Our Space</h3>
                </header>
                <div className="content">
                  <div className="gallery style1 medium lightbox">
                    <article>
                      <a
                        href="office/full/caladriustherapy-6943-sm.jpg"
                        className="image"
                      >
                        <img
                          src="office/full/caladriustherapy-6943-sm.jpg"
                          alt="Caladrius Therapy Office"
                        />
                      </a>
                      <div className="caption"></div>
                    </article>
                    <article>
                      <a
                        href="office/full/caladriustherapy-6941-sm.jpg"
                        className="image"
                      >
                        <img
                          src="office/full/caladriustherapy-6941-sm.jpg"
                          alt="Caladrius Therapy Office"
                        />
                      </a>
                      <div className="caption"></div>
                    </article>
                    <article>
                      <a
                        href="office/full/caladriustherapy-6856-sm.jpg"
                        className="image"
                      >
                        <img
                          src="office/full/caladriustherapy-6856-sm.jpg"
                          alt="Caladrius Therapy Office"
                        />
                      </a>
                      <div className="caption"></div>
                    </article>
                    <article>
                      <a
                        href="office/full/caladriustherapy-6820-sm.jpg"
                        className="image"
                      >
                        <img
                          src="office/full/caladriustherapy-6820-sm.jpg"
                          alt="Caladrius Therapy Office"
                        />
                      </a>
                      <div className="caption"></div>
                    </article>
                  </div>
                </div>
              </section> */}
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
