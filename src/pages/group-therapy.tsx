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
          <h2>Group Therapy</h2>
        <p>Group therapy is a good fit for to help several people address issues together that are similar in nature.
            Group therapy can take the form of a “drop-in” group or it can be a structured and scheduled group that
            takes the same group of people from start to finish. Groups can be a highly effective way to support
            therapeutic and life goals.</p>
        <h3>Current Groups</h3>
        <dl>
          <dt>Self-Compassion Group</dt>
          <dd>
            <p>
              Do you find it easier to be kind to others than to yourself? In this group, we’ll explore practical skills for quieting your inner critic, improving your sense of self, and building confidence. Through guided practices, discussion, and support, you’ll learn how self-compassion can reduce stress, improve mood, and strengthen resilience.
            </p>
            <p>
              <em>Who’s it for?</em> Adults who want to let go of self-judgment and develop a kinder relationship with themselves.
            </p>
          </dd>
          <dt>Healing Together: An IFS Group for Parents</dt>
          <dd>
            <p>
              This group is a safe and supportive space for parents who grew up with childhood trauma or attachment wounds. Together, we’ll use Internal Family Systems (IFS) to gently get to know the parts of us that carry old hurts and the parts that try to protect us. Our goal is to heal, grow, and find new ways to show up for ourselves and our children with more compassion, connection, and care.
            </p>
            <p>
              <em>Who’s it for?</em> Parents who want to break cycles of pain from their own childhood, build healthier patterns, and create more nurturing relationships with their children. No prior experience with IFS is needed, just a willingness to explore and grow in a supportive group.
            </p>          
          </dd>
          <dt>DBT Skills Group</dt>
          <dd>
            <p>
              This group is a supportive place to learn tools for calming big emotions, coping with stress, and building stronger connections. We’ll practice Dialectical Behavior Therapy (DBT) skills together in a gentle, step-by-step way that helps you be less reactive and more in control of your life.
            </p>
            <p>
              <em>Who’s it for?</em> Adults who feel emotions deeply, have been impacted by trauma, or struggle to manage distress. No DBT experience needed.
            </p>          
          </dd>
          <dt>Neurodivergent Support Group</dt>
          <dd>
            <p>
              Come as you are to a welcoming space created for neurodivergent folks to share and support one another. Together we’ll celebrate strengths, talk through challenges, and explore strategies for navigating life in a way that honors who we are while recovering from the traumatic invalidation of being in an Allistic world.
            </p>
            <p>
              <em>Who’s it for?</em> Autistic, ADHD, and other neurodivergent adults looking for understanding, community, and a safe place to normalize their experiences.
            </p>          
          </dd>
          <dt>Unmasking: Support for Those Late Diagnosed with Autism and/or ADHD</dt>
          <dd>
            <p>
              Finding out you’re autistic or ADHD later in life can bring relief, new understanding, and also big questions. This group is a supportive space to explore your story, unlearn old messages, and connect with others who “get it.” Together, we’ll celebrate strengths, share struggles, and practice showing up as our authentic selves without the mask.            </p>
            <p>
              <em>Who’s it for?</em> Adults who received an autism and/or ADHD diagnosis later in life (or who strongly identify with these experiences) and want a safe, affirming community for reflection, support, and connection.
            </p>          
          </dd>
          <dt>Finding Freedom: An Adolescent Trauma Support Group</dt>
          <dd>This group is for adolescents age 13-21 who have experienced trauma through abuse, sexual assault,
                foster care, etc. who wish to connect with others around their age to gain support, understanding, and
                coping skills. This group is not designed as a substitute for trauma based therapy. Group members need
                to have either a letter from a current or past therapist stating they are appropriate for the group or
                have an interview at Caladrius to determine that the group is a good fit. <em>Currently on hold due to
                COVID-19.</em>
          </dd>
        </dl>
        <p>Insurance often covers group therapy. Reach out to us with any billing questions!</p>     </div>
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
