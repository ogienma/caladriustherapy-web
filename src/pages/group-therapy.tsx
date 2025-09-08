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
              Finding out you’re autistic or ADHD later in life can bring relief, new understanding, and also big questions. This group is a supportive space to explore your story, unlearn old messages, and connect with others who “get it.” Together, we’ll celebrate strengths, share struggles, and practice showing up as our authentic selves without the mask.
            </p>
            <p>
              <em>Who’s it for?</em> Adults who received an autism and/or ADHD diagnosis later in life (or who strongly identify with these experiences) and want a safe, affirming community for reflection, support, and connection.
            </p>          
          </dd>
          <dt>Bibliotherapy: Non-Monogamy Relationship Support</dt>
          <dd>
            <p>
              Through books and shared readings, this group creates space to reflect on the unique joys, needs, and challenges of non-monogamous relationships. Together, we’ll learn relationship skills, share insights, and support one another in building connection and resilience in alternative relationships.
            </p>
            <p>
              <em>Who’s it for?</em> Adults curious about or practicing non-monogamy who want to grow in self-understanding, strengthening relationships, and connecting with others walking a similar path. 
            </p>          
          </dd>
          <dt>Perinatal Support Group: Pregnancy & Postpartum</dt>
          <dd>
            <p>
              This group is a gentle, supportive space for moms from pregnancy through baby’s first year. Together, we’ll talk openly about the joys and challenges of motherhood: shifts in identity, postpartum mood and anxiety, changes in relationships, self-care struggles, and the ups and downs of adjusting to life with a new little one. Babies are welcome, and you’ll find connection with other moms who truly understand this tender season.
            </p>
            <p>
              <em>Who’s it for?</em> Expecting moms and moms in the first year after birth who want a safe place to share their experiences, care for their mental health, and build community while navigating the transitions of early motherhood.
            </p>          
          </dd>
          <dt>Social Group for Neurodivergent Teens</dt>
          <dd>
            <p>
              A safe and welcoming space for neurodivergent teens to connect, have fun, and build friendships in ways that feel authentic and comfortable. Through games, activities, and shared experiences, we’ll celebrate neurodivergent strengths and create a community where everyone can show up as themselves.
            </p>
            <p>
              <em>Who’s it for?</em> Neurodivergent teens looking for friendship, connection, and a place where they are understood and accepted just as they are.
            </p>          
          </dd>
          <dt>Social Group for Kids (Ages 5–7 & 8–10)</dt>
          <dd>
            <p>
              A fun and supportive space where kids can connect, play, and make friends in ways that feel natural to them. After the challenges of COVID, many children are looking for opportunities to practice social connection and build confidence. Through games, creative activities, and shared experiences, kids will explore their interests, strengthen friendships, and enjoy being part of a community that celebrates who they are.
            </p>
            <p>
              <em>Who’s it for?</em> Children ages 5–7 and 8–10 who want to reconnect with peers, build friendships, overcome social anxiety, and grow their social confidence in a supportive, playful environment.
            </p>          
          </dd>
          <dt>Support Group for Parents of Highly Sensitive Kids</dt>
          <dd>
            <p>
              Parenting a highly sensitive child can be both rewarding and challenging. This group offers understanding, strategies, and support from other parents who get it. Together, we’ll share experiences, learn tools for support, and find encouragement for the parenting journey.
            </p>
            <p>
              <em>Who’s it for?</em> Parents of highly sensitive/strongly emotional kids who want community, practical strategies, and a safe space to share the ups and downs of parenting.
            </p>          
          </dd>
          <dt>Foster & Adopted Teens Group</dt>
          <dd>
            <p>
              Being fostered or adopted comes with its own stories, challenges, and questions about family and identity. This group is a relaxed space to talk, share, and connect with others who get it. We’ll explore what family means to us, how our stories shape who we are, and find support while building real connections.
            </p>
            <p>
              <em>Who’s it for?</em> Foster and adopted teens who want a safe place to be themselves, share their experiences, and connect with others on a similar journey.
            </p>          
          </dd>
          <dt>Grief Work for Complicated Bereavement</dt>
          <dd>
            <p>
              Grief can be messy, heavy, and so much more complicated than people expect. This group is a tender space to share your story, sit with others who understand, and gently explore the many layers of loss. Together, we’ll honor your loved one, your grief, and your own path forward at a pace that feels right for you.
            </p>
            <p>
              <em>Who’s it for?</em> Adults carrying grief that feels complicated, ongoing, or hard to share with others and who long for comfort, understanding, and connection in their healing journey.
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
