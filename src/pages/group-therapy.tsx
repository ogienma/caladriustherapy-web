import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { SEO } from "../components/SEO";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Text } from "@chakra-ui/react";

interface Group {
  title: string;
  description: string;
  audience: string;
  logistics?: string;
  isCurrent?: boolean;
}

const groups: Group[] = [
  {
    title: "DBT Skills Group",
    description:
      "This group is a supportive place to learn tools for calming big emotions, coping with stress, and building stronger connections. We'll practice Dialectical Behavior Therapy (DBT) skills together in a gentle, step-by-step way that helps you be less reactive and more in control of your life.",
    audience:
      "Adults who feel emotions deeply, have been impacted by trauma, or struggle to manage distress. No DBT experience needed.",
    isCurrent: true,
  },
  {
    title: "A Place for All Parts",
    description:
      "A Place for All Parts is an experiential therapy group grounded in the Internal Family Systems (IFS) model. This group offers a supportive space to explore the different \"parts\" of yourself, such as the inner critic, perfectionist, people pleaser, avoider, or controller, with curiosity rather than judgment. Through guided experiential exercises, reflection, and group process, participants build greater self-awareness, emotional regulation, and self-compassion while developing practical skills they can use in everyday life. The group is structured, trauma-informed, and designed to support both personal insight and meaningful connection with others.",
    audience: "",
    logistics:
      "This group is held in person on Monday evenings and while it is rolling admission, it requires a 4 week commitment to support continuity and depth of work. 8-12 weeks recommended. Insurance or self-pay accepted.",
    isCurrent: true,
  },
  {
    title: "Self-Compassion Group",
    description:
      "Do you find it easier to be kind to others than to yourself? In this group, we'll explore practical skills for quieting your inner critic, improving your sense of self, and building confidence. Through guided practices, discussion, and support, you'll learn how self-compassion can reduce stress, improve mood, and strengthen resilience.",
    audience:
      "Adults who want to let go of self-judgment and develop a kinder relationship with themselves.",
  },
  {
    title: "Healing Together: An IFS Group for Parents",
    description:
      "This group is a safe and supportive space for parents who grew up with childhood trauma or attachment wounds. Together, we'll use Internal Family Systems (IFS) to gently get to know the parts of us that carry old hurts and the parts that try to protect us. Our goal is to heal, grow, and find new ways to show up for ourselves and our children with more compassion, connection, and care.",
    audience:
      "Parents who want to break cycles of pain from their own childhood, build healthier patterns, and create more nurturing relationships with their children. No prior experience with IFS is needed, just a willingness to explore and grow in a supportive group.",
  },
  {
    title: "Neurodivergent Support Group",
    description:
      "Come as you are to a welcoming space created for neurodivergent folks to share and support one another. Together we'll celebrate strengths, talk through challenges, and explore strategies for navigating life in a way that honors who we are while recovering from the traumatic invalidation of being in an Allistic world.",
    audience:
      "Autistic, ADHD, and other neurodivergent adults looking for understanding, community, and a safe place to normalize their experiences.",
  },
  {
    title: "Unmasking: Support for Those Late Diagnosed with Autism and/or ADHD",
    description:
      "Finding out you're autistic or ADHD later in life can bring relief, new understanding, and also big questions. This group is a supportive space to explore your story, unlearn old messages, and connect with others who \"get it.\" Together, we'll celebrate strengths, share struggles, and practice showing up as our authentic selves without the mask.",
    audience:
      "Adults who received an autism and/or ADHD diagnosis later in life (or who strongly identify with these experiences) and want a safe, affirming community for reflection, support, and connection.",
  },
  {
    title: "Bibliotherapy: Non-Monogamy Relationship Support",
    description:
      "Through books and shared readings, this group creates space to reflect on the unique joys, needs, and challenges of non-monogamous relationships. Together, we'll learn relationship skills, share insights, and support one another in building connection and resilience in alternative relationships.",
    audience:
      "Adults curious about or practicing non-monogamy who want to grow in self-understanding, strengthening relationships, and connecting with others walking a similar path.",
  },
  {
    title: "Perinatal Support Group: Pregnancy & Postpartum",
    description:
      "This group is a gentle, supportive space for moms from pregnancy through baby's first year. Together, we'll talk openly about the joys and challenges of motherhood: shifts in identity, postpartum mood and anxiety, changes in relationships, self-care struggles, and the ups and downs of adjusting to life with a new little one. Babies are welcome, and you'll find connection with other moms who truly understand this tender season.",
    audience:
      "Expecting moms and moms in the first year after birth who want a safe place to share their experiences, care for their mental health, and build community while navigating the transitions of early motherhood.",
  },
  {
    title: "Social Group for Neurodivergent Teens",
    description:
      "A safe and welcoming space for neurodivergent teens to connect, have fun, and build friendships in ways that feel authentic and comfortable. Through games, activities, and shared experiences, we'll celebrate neurodivergent strengths and create a community where everyone can show up as themselves.",
    audience:
      "Neurodivergent teens looking for friendship, connection, and a place where they are understood and accepted just as they are.",
  },
  {
    title: "Social Group for Kids (Ages 5-7 & 8-10)",
    description:
      "A fun and supportive space where kids can connect, play, and make friends in ways that feel natural to them. After the challenges of COVID, many children are looking for opportunities to practice social connection and build confidence. Through games, creative activities, and shared experiences, kids will explore their interests, strengthen friendships, and enjoy being part of a community that celebrates who they are.",
    audience:
      "Children ages 5-7 and 8-10 who want to reconnect with peers, build friendships, overcome social anxiety, and grow their social confidence in a supportive, playful environment.",
  },
  {
    title: "Support Group for Parents of Highly Sensitive Kids",
    description:
      "Parenting a highly sensitive child can be both rewarding and challenging. This group offers understanding, strategies, and support from other parents who get it. Together, we'll share experiences, learn tools for support, and find encouragement for the parenting journey.",
    audience:
      "Parents of highly sensitive/strongly emotional kids who want community, practical strategies, and a safe space to share the ups and downs of parenting.",
  },
  {
    title: "Foster & Adopted Teens Group",
    description:
      "Being fostered or adopted comes with its own stories, challenges, and questions about family and identity. This group is a relaxed space to talk, share, and connect with others who get it. We'll explore what family means to us, how our stories shape who we are, and find support while building real connections.",
    audience:
      "Foster and adopted teens who want a safe place to be themselves, share their experiences, and connect with others on a similar journey.",
  },
  {
    title: "Grief Work for Complicated Bereavement",
    description:
      "Grief can be messy, heavy, and so much more complicated than people expect. This group is a tender space to share your story, sit with others who understand, and gently explore the many layers of loss. Together, we'll honor your loved one, your grief, and your own path forward at a pace that feels right for you.",
    audience:
      "Adults carrying grief that feels complicated, ongoing, or hard to share with others and who long for comfort, understanding, and connection in their healing journey.",
  },
  {
    title: "Finding Freedom: An Adolescent Trauma Support Group",
    description:
      "This group is for adolescents age 13-21 who have experienced trauma through abuse, sexual assault, foster care, etc. who wish to connect with others around their age to gain support, understanding, and coping skills. This group is not designed as a substitute for trauma based therapy. Group members need to have either a letter from a current or past therapist stating they are appropriate for the group or have an interview at Caladrius to determine that the group is a good fit.",
    audience: "",
  },
];

const RatesPage: React.FC<PageProps> = () => {
  const currentGroups = groups.filter((group) => group.isCurrent);
  const groupsForming = groups.filter((group) => !group.isCurrent);

  return (
    <>
      <Layout>
        <section className="spotlight style1 orient-left content-align-left image-position-center">
          <div className="content">
            <h2>Group Therapy</h2>
            <p>
              Group therapy is well-suited for helping several people work
              through similar issues together. It may take the form of a
              flexible "drop-in" group or a structured, scheduled program that
              brings the same participants from start to finish. Groups can be a
              highly effective way to support both therapeutic and life goals.
            </p>
            <p>
              Ready to start your journey in a supportive group?{" "}
              <a href="https://forms.gle/TDuipi2jV8Mg926e9">
                Join a therapy group today by filling out our interest form!
              </a>
              .
            </p>
            <h3>Current Groups</h3>
            <Box mt={4} mb={6}>
              {currentGroups.map((group, index) => (
                <Box key={index} mb={6}>
                  <h4 style={{ marginBottom: "1rem" }}>{group.title}</h4>
                  <Text mb={3}>{group.description}</Text>
                  {group.audience && (
                    <Text mb={3}>
                      <em>Who's it for?</em> {group.audience}
                    </Text>
                  )}
                  {group.logistics && (
                    <Text mt={3} pt={3} borderTop="1px solid" borderColor="gray.200">
                      <em>{group.logistics}</em>
                    </Text>
                  )}
                </Box>
              ))}
            </Box>
            <h3>Groups Forming</h3>
            <Text mb={4}>
              These groups are not currently running. Client interest helps guide which groups we offer in the future. If one of these groups feels relevant to you, we invite you to share your interest so we can better understand community needs and reach out if the group becomes available.
            </Text>
            <Box mt={4} mb={4}>
              {groupsForming.map((group, index) => (
                <Box key={index} mb={6}>
                  <h4 style={{ marginBottom: "1rem" }}>{group.title}</h4>
                  <Text mb={3}>{group.description}</Text>
                  {group.audience && (
                    <Text mb={3}>
                      <em>Who's it for?</em> {group.audience}
                    </Text>
                  )}
                  {group.logistics && (
                    <Text mt={3} pt={3} borderTop="1px solid" borderColor="gray.200">
                      <em>{group.logistics}</em>
                    </Text>
                  )}
                </Box>
              ))}
            </Box>
            <p>
              Insurance often covers group therapy. Reach out to us with any
              billing questions!
            </p>
          </div>
          <div className="image">
            <img src={"/heroes/hudson-hintze-vpxeE7s-my4-unsplash.jpg"} alt="Caladrius Therapy Charlotte NC" />
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
