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
      return { [member.id]: false };
    })
  );
  return (
    <>
      <Layout>
        <section className="wrapper style1 align-center">
          <div className="inner" style={{padding: "6rem 2.5rem 2.5rem 2.5rem"}}>
            <h1>our team</h1>
          </div>
        </section>
        {TeamData.members.map((member: any, index: any) => {
          return (
            <section
              className="spotlight style2 orient-right content-align-left image-position-center about-member-section"
              id={member.id}
            >
              <div className="content">
                <h2>{member.name}</h2>
                <ul className="actions">
                  {member.email && (
                    <li>
                      <a
                        href={`mailto:${member.email}`}
                        className="button small solid icon fa-envelope"
                      >
                        Email
                      </a>
                    </li>
                  )}
                  {member.linkedin && (
                    <li>
                      <a
                        href={member.linkedin}
                        className="button small solid icon brands fa-linkedin"
                      >
                        LinkedIn
                      </a>
                    </li>
                  )}
                  {member.psychologytoday && (
                    <li>
                      <a
                        href={member.psychologytoday}
                        className="button small solid icon fa-external-link-alt"
                      >
                        PsychologyToday
                      </a>
                    </li>
                  )}
                </ul>
                <p>{member.tagline}</p>
                <Text noOfLines={showBio[member.id] ? 0 : 5}>
                  <div dangerouslySetInnerHTML={{ __html: member.bio }} />
                </Text>
                <ul className="actions stacked">
                  <li>
                    <a
                      className={
                        showBio[member.id]
                          ? "button icon solid fa-chevron-up"
                          : "button icon solid fa-chevron-down"
                      }
                      onClick={() =>
                        setShowBio({
                          ...showBio,
                          [member.id]: !showBio[member.id],
                        })
                      }
                    >
                      {showBio[member.id] ? "Collapse" : "Learn More"}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="image">
                <img src={member.image} alt={member.name} />
              </div>
            </section>
          );
        })}
      </Layout>
    </>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <SEO />;
