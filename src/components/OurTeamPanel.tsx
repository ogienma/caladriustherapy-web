import React from "react";
import teamData from "../../content/team.yaml";
import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Tooltip,
  Grid,
  GridItem,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
// import Img from "gatsby-image"

interface HeadshotProps {
  member: any;
}

const Headshot = ({ member }: HeadshotProps) => {
  return (
    <GridItem>
      <div className="image headshot">
      <Tooltip label={<em>{member.name}</em>}>
        <a href={`/about#${member.id}`}> 
          <img
            src={member.image}
            alt={member.name}
          />
          {/* <Img src={member.image} /> */}
        </a>
        </Tooltip>
      </div>
    </GridItem>
  );
};

export interface IProps {}

const OurTeamPanel: React.FC<IProps> = () => {
  // const members: any = React.useMemo(() => Array.from(teamData.members).reverse(), [teamData.members]);
  const members: any = Array.from(teamData.members).reverse()
  return (
    <>
      <section className="wrapper style1 align-center">
        <div className="inner" style={{ padding: "1rem" }}>
            <h2>Our Team</h2>
        </div>
        <div style={{ clear: "both" }}>
          <section className="spotlight style2" style={{ padding: "0rem" }}>
            <Box as={Container} mb={14} mt={4} p={0}>
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                }}
                gap={{ base: "8", sm: "12", md: "16" }}
              >
                {members.map((member: any, index: any) => {
                  return <Headshot member={member} />;
                })}
              </Grid>
            </Box>
          </section>
        </div>
      </section>
    </>
  );
};

export default OurTeamPanel;
