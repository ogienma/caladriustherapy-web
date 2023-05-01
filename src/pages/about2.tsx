import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { SEO } from "../components/SEO";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Text, Button } from "@chakra-ui/react";
import TeamData from "../../content/team.yaml";
import { cachedDataVersionTag } from "v8";
const AboutPage: React.FC<PageProps> = () => {
  // set showbio to false for all members to start - it's a dict with team member name as the key
  const [showBio, setShowBio] = React.useState(
    TeamData.members.map((member: any, index: any) => {
      return { [member.name]: false };
    })
  );
  return (
    <>
      <Layout>
        {TeamData.members.map((member: any, index: any) => {
          return (
            <section
              className="spotlight style2 orient-right content-align-left image-position-center"
              style={{ alignItems: "start" }}
            >
              <div className="content">
                <h2>{member.name}</h2>
                <ul className="icons">
												<li> <a href="mailto:madalyn.twist@caladriustherapy.com" className="icon style2 solid fa-envelope"><span className="label">Email</span></a></li>
                        <li><a href="#" className="icon brands style2 fa-twitter"><span className="label">Twitter</span></a></li>
											</ul>
                <p>{member.tagline}</p>
                <Text noOfLines={showBio[member.name] ? 0 : 5}>
                  <div dangerouslySetInnerHTML={{ __html: member.bio }} />
                </Text>
                <ul className="actions stacked">
                  <li>
                    <a
                      href="#"
                      className="button"
                      onClick={() =>
                        setShowBio({ ...showBio, [member.name]: !showBio[member.name] })
                      }
                    >
                      Learn More
                    </a>
                  </li>
                </ul>
              </div>
              <div className="image">
                <img src={member.image} alt="" />
              </div>
              {/* <div className="content">
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
              </div> */}
            </section>

            //             <section
            //               className="spotlight style2 orient-right content-align-left image-position-center"
            //               id="madalyn-twist"
            //             >
            //               <div className="content">
            //                 <p>
            //                   <strong>{data.name}</strong>
            //                 </p>
            //               </div>
            //               <div className="image">
            //                 <img
            //                   src="/headshots/headshot-madalyn-twist-500.jpg"
            //                   alt="Madalyn Twist"
            //                 />
            //               </div>
            //               <ul className="icons" style={{ padding: "8px" }}>
            //                 <li style={{ display: "block", padding: "8px" }}>
            //                   <a
            //                     href="mailto:madalyn.twist@caladriustherapy.com"
            //                     className="icon style2 solid fa-envelope"
            //                   >
            //                     <span className="label">Email</span>
            //                   </a>
            //                 </li>
            //                 {/* <!--
            // <li style={{display: "block", padding: "8px"}}>
            //   <a
            //     href="https://www.linkedin.com/in/hannah-wagers-606140183/"
            //     className="icon style2 brands fa-linkedin"
            //     ><span className="label">LinkedIn</span></a
            //   >
            // </li>--> */}
            //               </ul>
            //             </section>
          );
        })}
      </Layout>
    </>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <SEO />;
