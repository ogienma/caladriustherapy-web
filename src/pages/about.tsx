import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { SEO } from "../components/SEO";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        {/*         
<!-- Spotlight: Madalyn Twist --> */}
        <section
          className="spotlight style2 orient-right content-align-left image-position-center"
          id="madalyn-twist"
        >
          <div className="content">
            <p>
              My name is
              <strong>
                <a href="#">Madalyn</a>
              </strong>{" "}
              (she/her) and I am here to facilitate your healing and growth as
              an individual.
            </p>
            <p>
              <em>
                "The most important thing we can do for the healing of the world
                is to hear inside ourselves" - Thich Nhat Hanh
              </em>
            </p>
            <p>
              Therapy is a transformative journey. It is one in which we begin
              to take off the masks that we are afraid of living without but
              know we cannot live within. Together, we will gently remove old
              and new masks, allowing for the opportunity to get to know our
              truest, inner selves. From witnessing how personal challenges -
              past and present - can impact individuals in distinct ways, I have
              grown increasingly passionate about helping individuals to
              reconnect with life through self-discovery. I use a
              person-centered, trauma informed approach that recognizes and
              respects you, in all of your glorious uniqueness. I believe you
              are the expert in your lived experiences and I work to create a
              space where you can share your journey, challenges, and hopes for
              the future.
            </p>
            <p>
              With over five years of experience working with youth experiencing
              foster care, I have a special interest in helping children (and
              families) navigate the various emotions that arise due to the
              circumstances they are faced with. I help children understand and
              express their emotions constructively through play, their most
              effective language. With adolescents, I focus on establishing
              trust and connection while addressing challenging behaviors and
              developing valuable skills within, such as self regulation and
              self compassion. When working with adults, I focus on wellness and
              stability, while guiding you through your healing journey and
              equipping you with resources and tools to use both inside and
              outside of sessions. I draw heavily from CBT, responsive
              parenting, attachment theory, and other trauma-informed practices
              to meet your specific needs and desires. I also enjoy
              incorporating mindfulness, meditation, and body focused practices
              to connect the mind, body, and spirit, into sessions.
            </p>
            <p>
              <em>
                Madalyn Twist, MSW, LCSW-A graduated from The University of
                North Carolina at Charlotte with her Master's of Social Work
                degree. She received her Bachelor's of Social Work degree from
                The University of North Carolina at Wilmington. Madalyn
                specializes in working with children and adolescent's
                experiencing foster care as well as youth and adult adoptees.
                She has experience with a variety of mental health diagnoses and
                the impacts of trauma within both children and adults. Madalyn
                has a special interest in Internal Family Systems Model. She is
                passionate about creating a safe and affirming space for
                LGBTQIA+ populations.
              </em>
            </p>
          </div>
          <div className="image">
            <img
              src="/headshots/headshot-madalyn-twist-500.jpg"
              alt="Madalyn Twist"
            />
          </div>
          <ul className="icons" style={{ padding: "8px" }}>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="mailto:madalyn.twist@caladriustherapy.com"
                className="icon style2 solid fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
            {/* <!--
    <li style={{display: "block", padding: "8px"}}>
      <a
        href="https://www.linkedin.com/in/hannah-wagers-606140183/"
        className="icon style2 brands fa-linkedin"
        ><span className="label">LinkedIn</span></a
      >
    </li>--> */}
          </ul>
        </section>


{/* 
<!-- Spotlight: deerik-bradley --> */}
<section
  className="spotlight style2 orient-right content-align-left image-position-center"
  id="deerik-bradley"
>
  <div className="content">
    <p>
      Hey, what's up! My name is
      <strong
        ><a
          href="#"
          >De'Erik</a></strong> (he/him) and I'm here to help you process and progress.
    </p>
    <p>
      <em>
        "As long as you have breath, you have options" - Imani Cohen
      </em>
    </p>
    <p>
      Progress in life is a process. To move forward, sometimes you have to look back to see how much progress you have made, but you must also look ahead to see how much more progress remains. This process doesn't come without bumps and bruises. It can produce feelings of anxiety, anger, or depression, and sometimes we may lose loved ones or damage relationships while on our journey.
      </p>
      <p>
        No matter where you are on your journey, I am here to help you process those traumatic experiences, those sleepless nights that keep you up, and the moments that prevent you from being present.
      </p>
      <p>
        Progress awaits you with open arms. Trust and give yourself grace along the way. Therapy can be scary. Perhaps this isn't your first time attending therapy. Or maybe, therapy is not common in your community and you never even considered it.
      </p>  
      <p>
        We all deserve the feeling of being present, inspired, and happy. I'm here to guide you along your journey to help you reach that. Together we will get to the root of your challenges to help you find clarity and embrace your authentic self.I will provide a person-centered approach that meets you where you are and allows you a space where you will have grace to process, cry, and laugh, as you come back home to yourself.
      </p>
    <p>
      <em>        
        De'Erik is a Licensed Clinical Social Worker Associate. He earned his Bachelor's degree in Social Work at Johnson C. Smith University and earned his Masters in Social Work at Winthrop University. He utilizes a person-centered approach which involves placing emphasis on strength building, self awareness, accountability, and authenticity. He has over 8 years of experience working with individuals across all ages. His experience in the Mental Health field includes individual, group and family counseling. He provides support with Stress Management, Depression, Cultural Specific issues, and Anxiety. He offers both in person and Tele-Health services to fit the needs of each client.
      </em>
    </p>
  </div>
  <div className="image">
    <img src="/headshots/headshot-deerik-bradley-500.jpg" alt="De'Erik Bradley" />
  </div>
  <ul className="icons" style={{padding: "8px"}}>
    <li style={{display: "block", padding: "8px"}}>
      <a
        href="mailto:deerik.bradley@caladriustherapy.com"
        className="icon style2 solid fa-envelope"
        ><span className="label">Email</span></a>
    </li>
    {/* <!--
    <li style={{display: "block", padding: "8px"}}>
      <a
        href="https://www.linkedin.com/in/hannah-wagers-606140183/"
        className="icon style2 brands fa-linkedin"
        ><span className="label">LinkedIn</span></a
      >
    </li>--> */}
  </ul>
</section>

{/* 

<!-- Spotlight: Hannah Travis --> */}
<section
  className="spotlight style2 orient-right content-align-left image-position-center"
  id="hannah-travis"
>
  <div className="content">
    <p>
      Hi! My name is
      <strong
        ><a
          href="#"
          >Hannah</a
        ></strong
      > and I am here to help you feel connected.
    </p>
    <p>
      I chose a career in mental health because I understand that humans are hardwired for connection but life can sometimes leave us feeling disconnected. I chose to go into clinical social work to help people through suffering, to help people reconnect with themselves and the people that matter most to them, and to help people make the positive changes they need to live the life that is most fulfilling for them. I am most passionate about helping people make connections about their past experiences/upbringing to increase their self-awareness and cultivate self-compassion for the struggles they are facing in the present moment. Giving people a place to process whatever they need to process, without any fear of judgment, where they feel understood, accepted, valued, and safe. Empowering people to take action to get their wants and needs met in their relationships (romantic, platonic, and familial). I strive to empower and support all patients to make the changes necessary for them to meet their goals through the cultivation of understanding, awareness, and self-compassion. I will meet people where they are, go as fast or as slow as they need to go and focus on the topics/issues they prioritize. I structure therapy sessions to meet the unique needs and preferences of each client because there is no one-size-fits-all. The quality of the therapeutic relationship is of the utmost importance to me, so I check in with my patients on a regular basis to invite feedback and encourage open communication.
      </p>
  </div>
  <div className="image">
    <img src="/headshots/headshot-hannah-travis-500.jpg" alt="Hannah Travis" />
  </div>
  <ul className="icons" style={{padding: "8px"}}>
    <li style={{display: "block", padding: "8px"}}>
      <a
        href="mailto:hannah.travis@caladriustherapy.com"
        className="icon style2 solid fa-envelope"
        ><span className="label">Email</span></a
      >
    </li>
    {/* <!--
    <li style={{display: "block", padding: "8px"}}>
      <a
        href="https://www.linkedin.com/in/hannah-wagers-606140183/"
        className="icon style2 brands fa-linkedin"
        ><span className="label">LinkedIn</span></a
      >
    </li>--> */}
  </ul>
</section>

{/* 
<!-- Spotlight: Zach Saint --> */}
<section
  className="spotlight style2 orient-right content-align-left image-position-center"
  id="zach-saint"
>
  <div className="content">
    <p>
      My name is
      <strong
        ><a
          href="#"
          >Zach</a></strong> (he/him) and I'm here to meet you where you are.
    </p>

    <p>
      <em>        
        "Perhaps one did not want to be loved so much as to be understood." - George Orwell
      </em>
    </p>
    <p>
      There are times for all of us when we feel helpless or powerless over our situation. I'm here for those moments to walk alongside you - not in front, behind, or to the side. I believe the therapeutic relationship is based on compassion and empathy. True empathy is when someone seeks to understand you and meet you where you are. My goal is to help people figure out how to use their strengths to thrive in their existing environment. Our thoughts, feelings, and actions all affect each other. If we can find the strengths in our narratives, we can redefine the way we tell our stories.
      </p>
      <p>
        My hope and belief is that therapy should be fun! I aim to show up as a genuine and authentic version of myself and often utilize humor to build trust. I enjoy working with people in all stages of their therapeutic journey. I feel confident that we will be able to build a working relationship to address your therapeutic goals.
      </p>
    <p>
      <em>        
Zach Saint, LCSW-A, LCAS-A, specializes in trauma, substance use/addiction, anxiety, and depression. He has experience with a wide range of concerns from working in the psychiatric environment to working in opioid treatment. He enjoys working with adults, adolescents, and couples. Zach currently offers both in-person and telehealth sessions.   
      </em>
    </p>
  </div>
  <div className="image">
    <img src="/headshots/headshot-zach-saint-500.jpg" alt="Zach Saint" />
  </div>
  <ul className="icons" style={{padding: "8px"}}>
    <li style={{display: "block", padding: "8px"}}>
      <a
        href="mailto:zach.saint@caladriustherapy.com"
        className="icon style2 solid fa-envelope"
        ><span className="label">Email</span></a
      >
    </li>
    {/* <!--
    <li style={{display: "block", padding: "8px"}}>
      <a
        href="https://www.linkedin.com/in/hannah-wagers-606140183/"
        className="icon style2 brands fa-linkedin"
        ><span className="label">LinkedIn</span></a
      >
    </li>--> */}
  </ul>
</section>
{/* 
<!-- Spotlight: Kira Rowane --> */}
<section
  className="spotlight style2 orient-right content-align-left image-position-center"
  id="kira-rowane"
>
  <div className="content">
    <p>
      My name is
      <strong
        ><a
          href="https://www.linkedin.com/in/kirarowane/"
          >Kira</a></strong> (she/her) and I am here to help you heal relational wounds.
    </p>
    <p>Relationships are foundational to our experience. Connection, intimacy, authenticity, and feelings of safety are all tied into the relationships formed with ourselves, loved ones, our communities, and even the natural world. These interactions, or lack thereof, shape our stories, and affirm the kind of narratives we tell ourselves about the world around us. As a relational therapist, I recognize that you and I are entering a relationship of our own. It is my goal to nurture a working alliance that is honest, trusting, and collaborative. One in which you will have a safe holding space as we explore the difficulties and vulnerabilities that brought you to therapy.</p>
    <p>If relationships are the chapters within our stories, identity is the color and context that fills the pages. Our intersecting roles and identities are interwoven together to create the unique values, beliefs, customs, and systems of being.  Growing up as the oldest child to Caribbean immigrants, I appreciate how these sometimes conflicting parts of self have informed my experience. I also know first hand that stigma and lack of access to mental health services are still pervasive. I firmly believe that my work as a therapist extends beyond  the individual sitting in the therapy room but to the systems they are a part of as a whole. I welcome all conversations about how your experiences have impacted your journey.</p>
    <p>
      <em>
        Kira Rowane, M.Ed, LCMHCA graduated from Florida Atlantic University with a Masters of Education in Clinical Mental Health Counseling. Kira works with older adolescents, adults and first-time-in-therapy clients. She is trained in a variety of trauma-informed techniques including TF-CBT, sandtray therapy, trauma-informed yoga therapy and is also under training and supervision to become a licensed sex therapist. She specializes in racial and cultural identity, complex trauma, and life transitions.
      </em>
    </p>
  </div>
  <div className="image">
    <img src="/headshots/headshot-kira-rowane-500.jpg" alt="Kira Rowane" />
  </div>
  <ul className="icons" style={{padding: "8px"}}>
    <li style={{display: "block", padding: "8px"}}>
      <a
        href="mailto:kira.rowane@caladriustherapy.com"
        className="icon style2 solid fa-envelope"
        ><span className="label">Email</span></a
      >
    </li>
    <li style={{display: "block", padding: "8px"}}>
      <a
        href="https://www.linkedin.com/in/kirarowane/"
        className="icon style2 brands fa-linkedin"
        ><span className="label">LinkedIn</span></a
      >
    </li>
  </ul>
</section>
{/* 

<!-- Spotlight: Hannah Wagers --> */}
<section
  className="spotlight style2 orient-right content-align-left image-position-center"
  id="hannah-wagers"
>
  <div className="content">
    <p>
      My name is
      <strong
        ><a
          href="https://www.psychologytoday.com/us/therapists/hannah-wagers-charlotte-nc/1046556"
          >Hannah</a
        ></strong
      > (she/her) and I am here to empower you as you navigate life's unpredictable challenges. 
    </p>
    <p>Tackling all that may be thrown your way can be incredibly difficult, especially if you take on the challenge alone. My goal is to support and hold space for you on that journey. If you are experiencing anxiety, grief, or life transitions, I will stand beside you as we work to process the impact of those stressors on your day to day life. I am here to provide encouragement and space to verbalize your frustrations while offering helpful coping skills, increased insight, and empathy.</p>
    <p>I am especially passionate about working with women who are struggling to protect and maintain their mental health. There are times where we feel silenced or bothersome for advocating for ourselves. One of my objectives is to walk with you as you find your voice and embrace your strengths. </p>
    <p>I operate from a person-centered lens which allows the client to lead sessions at a pace that makes sense for them. We may be a strong fit if you are in need of someone to process or explore parts of your identity with. Asking for help is a brave step in and of itself! </p>
    <p>
      <em>        
Hannah Wagers, MA, LCMHCA, graduated from The University of North Carolina at Charlotte with her Master's degree in Counseling. She received her undergraduate degree in Psychology from the University of North Carolina at Charlotte as well. She has experience working with teens, young adults, and adults. 
      </em>
    </p>
  </div>
  <div className="image">
    <img src="headshots/headshot-hannah-wagers-500.jpg" alt="Hannah Wagers" />
  </div>
  <ul className="icons" style={{padding: "8px"}}>
    <li style={{display: "block", padding: "8px"}}>
      <a
        href="mailto:hannah.wagers@caladriustherapy.com"
        className="icon style2 solid fa-envelope"
        ><span className="label">Email</span></a
      >
    </li>
    <li style={{display: "block", padding: "8px"}}>
      <a
        href="https://www.linkedin.com/in/hannah-wagers-606140183/"
        className="icon style2 brands fa-linkedin"
        ><span className="label">LinkedIn</span></a
      >
    </li>
  </ul>
</section>


{/* 
<!-- Spotlight: Emily Lee --> */}
<section
  className="spotlight style2 orient-right content-align-left image-position-center"
  id="emily-lee"
>
  <div className="content">
    <p>
      My name is
      <strong
        ><a
          href="https://www.psychologytoday.com/us/therapists/emily-lee-charlotte-nc/963361"
          >Emily</a
        ></strong
      > (she/her) and I am here to help you nurture who you are as a person and a parent.
    </p>
    <p>
      Motherhood (and fatherhood!) looks different on everyone. My passion for
      maternal mental health sparked after having my daughter and I was able to
      fully appreciate the challenges and range of emotions that surface within
      parenthood from a lived experience. I then sought to specialize in
      Perinatal Mental Health to shift my focus from counseling children to
      counseling parents. When most people hear about Perinatal Mental Health,
      they often think of postpartum depression- but Perinatal Mental Health
      encompasses so much more than that! I work with women in all stages of
      parenthood including infertility, grief, and loss. I am here to help you
      navigate challenges and emotions that may arise in pregnancy, birth, and
      parenthood- including helping you explore bonding with your baby,
      navigating those terrible twos, parenting threenagers, and staying true to
      yourself as a parent through the child and adolescent years.
    </p>
    <p>
      Becoming a parent often changes your identity, but it should never feel
      like you've lost yourself. Each stage brings new challenges and new things
      to enjoy and it seems as soon as you adjust to one stage, a new one is
      just around the corner! Those of us parenting without clear role models of
      the kind of parent we want to be face additional challenges and can
      benefit greatly from support to make their parenting goals and vision a
      reality. I am here to partner with you to maintain your sense of self,
      your mental health, and provide support as we navigate it together.
    </p>
    <p>
      As well as providing support to parents, I want to continue my work
      providing care to children and adolescents. During my five years of
      experience working as a school social worker, I have experience providing
      children with support identifying and naming their emotions, positive
      coping skills, working through depression, self harm, and suicidality, and
      providing crisis support. I enjoy working with children going through
      family transitions, parent separation, and social anxiety.
    </p>
    <p>
      <em>
        Emily Lee, MSW, LCSWA, PMH-C graduated from Winthrop University with her
        Master's of Social Work degree. Emily received her Bachelor's of Social
        Work from Western Carolina University. Emily has several years of
        experience as a school social worker with grade school children. She is
        certified in Perinatal Mood and Anxiety Disorders through Postpartum
        Support International.
      </em>
    </p>
  </div>
  <div className="image">
    <img src="headshots/headshot-emily-lee-500.jpg" alt="Emily Lee" />
  </div>
  <ul className="icons" style={{padding: "8px"}}>
    <li style={{display: "block", padding: "8px"}}>
      <a
        href="mailto:emily.lee@caladriustherapy.com"
        className="icon style2 solid fa-envelope"
        ><span className="label">Email</span></a
      >
    </li>
    <li style={{display: "block", padding: "8px"}}>
      <a
        href="https://www.linkedin.com/in/emilyelee123/"
        className="icon style2 brands fa-linkedin"
        ><span className="label">LinkedIn</span></a
      >
    </li>
  </ul>
</section>
{/* 
<!-- Spotlight: Emma Braisted --> */}
<section
  className="spotlight style2 orient-right content-align-left image-position-center"
  id="emma-braisted"
>
  <div className="content">
    <p>
      My name is <strong><a href="https://www.psychologytoday.com/us/therapists/emma-braisted-charlotte-nc/980903">Emma</a></strong> (she/her) and I'm here to help you
      discover and foster the healthiest version of yourself.
    </p>
    <p>
      I applaud you for taking this courageous first step in recognizing that
      you may need or want support to get to where you want to be. My first goal
      as a therapist is to provide you a safe space to simply exist as your
      truest self in whatever stage you may be at. I understand the overwhelming
      emotions and anxieties that can be experienced as a result of trauma,
      difficult life circumstances and relationships, displacement, loss, or
      grief.
    </p>
    <p>
      Our therapeutic relationship built in this space will serve as the
      foundation for discovery and growth. Together, we will navigate the
      complexities, anxieties, and transitions that life can sometimes throw our
      way. I commit to holding space for your emotions while encouraging and
      assisting you to decide what necessary changes to make to become the
      healthiest and most authentic version of yourself.
    </p>

    <p>
      <em>
        Emma Braisted, M.Ed, LCMHCA graduated from the University at Buffalo
        with a Masters of Education in School Counseling in 2016. After six
        years as a School Counselor, Emma pursued her Clinical Mental Health
        license to practice outside the scope of a school setting. Emma has
        experience working with older children, adolescents, adults, and
        families experiencing great risk factors and trauma.
      </em>
    </p>
  </div>
  <div className="image">
    <img
      src="headshots/headshot-emma-braisted-500.jpg"
      alt="Emma Braisted"
    />
  </div>
  <ul className="icons" style={{padding: "8px"}}>
    <li style={{display: "block", padding: "8px"}}>
      <a
        href="mailto:emma.braisted@caladriustherapy.com"
        className="icon style2 solid fa-envelope"
        ><span className="label">Email</span></a
      >
    </li>
    <li style={{display: "block", padding: "8px"}}>
      <a
        href="https://www.linkedin.com/in/emma-braisted-m-ed-lcmhca-40b6215a/"
        className="icon style2 brands fa-linkedin"
        ><span className="label">LinkedIn</span></a
      >
    </li>
  </ul>
</section>

      </Layout>
    </>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <SEO />;
