import React from "react";
import TeamData from "../../content/team.yaml";
import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";

interface HeadshotProps {
  member: any;
}

const Headshot = ({ member }: HeadshotProps) => {
  return (
    <GridItem>
      <div className="image headshot">
        <a href={`/about#${member.id}`}> 
          <img
            src={member.image}
            alt={member.name}
          />
        </a>
      </div>
    </GridItem>
  );
};

export interface IProps {}

const OurTeamPanel: React.FC<IProps> = () => {
  return (
    <>
      <section className="wrapper style1 align-center">
        <div className="inner" style={{ padding: "1rem" }}>
          <a href="/about">
            <h2>Our Team</h2>
          </a>
        </div>
        <div style={{ clear: "both" }}>
          <section className="spotlight style2" style={{ padding: "0rem" }}>
            <Box as={Container} mb={14} p={0}>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                }}
                gap={{ base: "4", sm: "6", md: "8" }}
              >
                {TeamData.members.reverse().map((member: any, index: any) => {
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
