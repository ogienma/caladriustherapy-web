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
              <strong>
                <a href="#">De'Erik</a>
              </strong>{" "}
              (he/him) and I'm here to help you process and progress.
            </p>
            <p>
              <em>
                "As long as you have breath, you have options" - Imani Cohen
              </em>
            </p>
            <p>
              Progress in life is a process. To move forward, sometimes you have
              to look back to see how much progress you have made, but you must
              also look ahead to see how much more progress remains. This
              process doesn't come without bumps and bruises. It can produce
              feelings of anxiety, anger, or depression, and sometimes we may
              lose loved ones or damage relationships while on our journey.
            </p>
            <p>
              No matter where you are on your journey, I am here to help you
              process those traumatic experiences, those sleepless nights that
              keep you up, and the moments that prevent you from being present.
            </p>
            <p>
              Progress awaits you with open arms. Trust and give yourself grace
              along the way. Therapy can be scary. Perhaps this isn't your first
              time attending therapy. Or maybe, therapy is not common in your
              community and you never even considered it.
            </p>
            <p>
              We all deserve the feeling of being present, inspired, and happy.
              I'm here to guide you along your journey to help you reach that.
              Together we will get to the root of your challenges to help you
              find clarity and embrace your authentic self.I will provide a
              person-centered approach that meets you where you are and allows
              you a space where you will have grace to process, cry, and laugh,
              as you come back home to yourself.
            </p>
            <p>
              <em>
                De'Erik is a Licensed Clinical Social Worker Associate. He
                earned his Bachelor's degree in Social Work at Johnson C. Smith
                University and earned his Masters in Social Work at Winthrop
                University. He utilizes a person-centered approach which
                involves placing emphasis on strength building, self awareness,
                accountability, and authenticity. He has over 8 years of
                experience working with individuals across all ages. His
                experience in the Mental Health field includes individual, group
                and family counseling. He provides support with Stress
                Management, Depression, Cultural Specific issues, and Anxiety.
                He offers both in person and Tele-Health services to fit the
                needs of each client.
              </em>
            </p>
          </div>
          <div className="image">
            <img
              src="/headshots/headshot-deerik-bradley-500.jpg"
              alt="De'Erik Bradley"
            />
          </div>
          <ul className="icons" style={{ padding: "8px" }}>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="mailto:deerik.bradley@caladriustherapy.com"
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

<!-- Spotlight: Hannah Travis --> */}
        <section
          className="spotlight style2 orient-right content-align-left image-position-center"
          id="hannah-travis"
        >
          <div className="content">
            <p>
              Hi! My name is
              <strong>
                <a href="#">Hannah</a>
              </strong>{" "}
              and I am here to help you feel connected.
            </p>
            <p>
              I chose a career in mental health because I understand that humans
              are hardwired for connection but life can sometimes leave us
              feeling disconnected. I chose to go into clinical social work to
              help people through suffering, to help people reconnect with
              themselves and the people that matter most to them, and to help
              people make the positive changes they need to live the life that
              is most fulfilling for them. I am most passionate about helping
              people make connections about their past experiences/upbringing to
              increase their self-awareness and cultivate self-compassion for
              the struggles they are facing in the present moment. Giving people
              a place to process whatever they need to process, without any fear
              of judgment, where they feel understood, accepted, valued, and
              safe. Empowering people to take action to get their wants and
              needs met in their relationships (romantic, platonic, and
              familial). I strive to empower and support all patients to make
              the changes necessary for them to meet their goals through the
              cultivation of understanding, awareness, and self-compassion. I
              will meet people where they are, go as fast or as slow as they
              need to go and focus on the topics/issues they prioritize. I
              structure therapy sessions to meet the unique needs and
              preferences of each client because there is no one-size-fits-all.
              The quality of the therapeutic relationship is of the utmost
              importance to me, so I check in with my patients on a regular
              basis to invite feedback and encourage open communication.
            </p>
          </div>
          <div className="image">
            <img
              src="/headshots/headshot-hannah-travis-500.jpg"
              alt="Hannah Travis"
            />
          </div>
          <ul className="icons" style={{ padding: "8px" }}>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="mailto:hannah.travis@caladriustherapy.com"
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
<!-- Spotlight: Zach Saint --> */}
        <section
          className="spotlight style2 orient-right content-align-left image-position-center"
          id="zach-saint"
        >
          <div className="content">
            <p>
              My name is
              <strong>
                <a href="#">Zach</a>
              </strong>{" "}
              (he/him) and I'm here to meet you where you are.
            </p>

            <p>
              <em>
                "Perhaps one did not want to be loved so much as to be
                understood." - George Orwell
              </em>
            </p>
            <p>
              There are times for all of us when we feel helpless or powerless
              over our situation. I'm here for those moments to walk alongside
              you - not in front, behind, or to the side. I believe the
              therapeutic relationship is based on compassion and empathy. True
              empathy is when someone seeks to understand you and meet you where
              you are. My goal is to help people figure out how to use their
              strengths to thrive in their existing environment. Our thoughts,
              feelings, and actions all affect each other. If we can find the
              strengths in our narratives, we can redefine the way we tell our
              stories.
            </p>
            <p>
              My hope and belief is that therapy should be fun! I aim to show up
              as a genuine and authentic version of myself and often utilize
              humor to build trust. I enjoy working with people in all stages of
              their therapeutic journey. I feel confident that we will be able
              to build a working relationship to address your therapeutic goals.
            </p>
            <p>
              <em>
                Zach Saint, LCSW-A, LCAS-A, specializes in trauma, substance
                use/addiction, anxiety, and depression. He has experience with a
                wide range of concerns from working in the psychiatric
                environment to working in opioid treatment. He enjoys working
                with adults, adolescents, and couples. Zach currently offers
                both in-person and telehealth sessions.
              </em>
            </p>
          </div>
          <div className="image">
            <img
              src="/headshots/headshot-zach-saint-500.jpg"
              alt="Zach Saint"
            />
          </div>
          <ul className="icons" style={{ padding: "8px" }}>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="mailto:zach.saint@caladriustherapy.com"
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
<!-- Spotlight: Kira Rowane --> */}
        <section
          className="spotlight style2 orient-right content-align-left image-position-center"
          id="kira-rowane"
        >
          <div className="content">
            <p>
              My name is
              <strong>
                <a href="https://www.linkedin.com/in/kirarowane/">Kira</a>
              </strong>{" "}
              (she/her) and I am here to help you heal relational wounds.
            </p>
            <p>
              Relationships are foundational to our experience. Connection,
              intimacy, authenticity, and feelings of safety are all tied into
              the relationships formed with ourselves, loved ones, our
              communities, and even the natural world. These interactions, or
              lack thereof, shape our stories, and affirm the kind of narratives
              we tell ourselves about the world around us. As a relational
              therapist, I recognize that you and I are entering a relationship
              of our own. It is my goal to nurture a working alliance that is
              honest, trusting, and collaborative. One in which you will have a
              safe holding space as we explore the difficulties and
              vulnerabilities that brought you to therapy.
            </p>
            <p>
              If relationships are the chapters within our stories, identity is
              the color and context that fills the pages. Our intersecting roles
              and identities are interwoven together to create the unique
              values, beliefs, customs, and systems of being. Growing up as the
              oldest child to Caribbean immigrants, I appreciate how these
              sometimes conflicting parts of self have informed my experience. I
              also know first hand that stigma and lack of access to mental
              health services are still pervasive. I firmly believe that my work
              as a therapist extends beyond the individual sitting in the
              therapy room but to the systems they are a part of as a whole. I
              welcome all conversations about how your experiences have impacted
              your journey.
            </p>
            <p>
              <em>
                Kira Rowane, M.Ed, LCMHCA graduated from Florida Atlantic
                University with a Masters of Education in Clinical Mental Health
                Counseling. Kira works with older adolescents, adults and
                first-time-in-therapy clients. She is trained in a variety of
                trauma-informed techniques including TF-CBT, sandtray therapy,
                trauma-informed yoga therapy and is also under training and
                supervision to become a licensed sex therapist. She specializes
                in racial and cultural identity, complex trauma, and life
                transitions.
              </em>
            </p>
          </div>
          <div className="image">
            <img
              src="/headshots/headshot-kira-rowane-500.jpg"
              alt="Kira Rowane"
            />
          </div>
          <ul className="icons" style={{ padding: "8px" }}>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="mailto:kira.rowane@caladriustherapy.com"
                className="icon style2 solid fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="https://www.linkedin.com/in/kirarowane/"
                className="icon style2 brands fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
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
              <strong>
                <a href="https://www.psychologytoday.com/us/therapists/hannah-wagers-charlotte-nc/1046556">
                  Hannah
                </a>
              </strong>{" "}
              (she/her) and I am here to empower you as you navigate life's
              unpredictable challenges.
            </p>
            <p>
              Tackling all that may be thrown your way can be incredibly
              difficult, especially if you take on the challenge alone. My goal
              is to support and hold space for you on that journey. If you are
              experiencing anxiety, grief, or life transitions, I will stand
              beside you as we work to process the impact of those stressors on
              your day to day life. I am here to provide encouragement and space
              to verbalize your frustrations while offering helpful coping
              skills, increased insight, and empathy.
            </p>
            <p>
              I am especially passionate about working with women who are
              struggling to protect and maintain their mental health. There are
              times where we feel silenced or bothersome for advocating for
              ourselves. One of my objectives is to walk with you as you find
              your voice and embrace your strengths.{" "}
            </p>
            <p>
              I operate from a person-centered lens which allows the client to
              lead sessions at a pace that makes sense for them. We may be a
              strong fit if you are in need of someone to process or explore
              parts of your identity with. Asking for help is a brave step in
              and of itself!{" "}
            </p>
            <p>
              <em>
                Hannah Wagers, MA, LCMHCA, graduated from The University of
                North Carolina at Charlotte with her Master's degree in
                Counseling. She received her undergraduate degree in Psychology
                from the University of North Carolina at Charlotte as well. She
                has experience working with teens, young adults, and adults.
              </em>
            </p>
          </div>
          <div className="image">
            <img
              src="/headshots/headshot-hannah-wagers-500.jpg"
              alt="Hannah Wagers"
            />
          </div>
          <ul className="icons" style={{ padding: "8px" }}>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="mailto:hannah.wagers@caladriustherapy.com"
                className="icon style2 solid fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="https://www.linkedin.com/in/hannah-wagers-606140183/"
                className="icon style2 brands fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
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
              <strong>
                <a href="https://www.psychologytoday.com/us/therapists/emily-lee-charlotte-nc/963361">
                  Emily
                </a>
              </strong>{" "}
              (she/her) and I am here to help you nurture who you are as a
              person and a parent.
            </p>
            <p>
              Motherhood (and fatherhood!) looks different on everyone. My
              passion for maternal mental health sparked after having my
              daughter and I was able to fully appreciate the challenges and
              range of emotions that surface within parenthood from a lived
              experience. I then sought to specialize in Perinatal Mental Health
              to shift my focus from counseling children to counseling parents.
              When most people hear about Perinatal Mental Health, they often
              think of postpartum depression- but Perinatal Mental Health
              encompasses so much more than that! I work with women in all
              stages of parenthood including infertility, grief, and loss. I am
              here to help you navigate challenges and emotions that may arise
              in pregnancy, birth, and parenthood- including helping you explore
              bonding with your baby, navigating those terrible twos, parenting
              threenagers, and staying true to yourself as a parent through the
              child and adolescent years.
            </p>
            <p>
              Becoming a parent often changes your identity, but it should never
              feel like you've lost yourself. Each stage brings new challenges
              and new things to enjoy and it seems as soon as you adjust to one
              stage, a new one is just around the corner! Those of us parenting
              without clear role models of the kind of parent we want to be face
              additional challenges and can benefit greatly from support to make
              their parenting goals and vision a reality. I am here to partner
              with you to maintain your sense of self, your mental health, and
              provide support as we navigate it together.
            </p>
            <p>
              As well as providing support to parents, I want to continue my
              work providing care to children and adolescents. During my five
              years of experience working as a school social worker, I have
              experience providing children with support identifying and naming
              their emotions, positive coping skills, working through
              depression, self harm, and suicidality, and providing crisis
              support. I enjoy working with children going through family
              transitions, parent separation, and social anxiety.
            </p>
            <p>
              <em>
                Emily Lee, MSW, LCSWA, PMH-C graduated from Winthrop University
                with her Master's of Social Work degree. Emily received her
                Bachelor's of Social Work from Western Carolina University.
                Emily has several years of experience as a school social worker
                with grade school children. She is certified in Perinatal Mood
                and Anxiety Disorders through Postpartum Support International.
              </em>
            </p>
          </div>
          <div className="image">
            <img src="/headshots/headshot-emily-lee-500.jpg" alt="Emily Lee" />
          </div>
          <ul className="icons" style={{ padding: "8px" }}>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="mailto:emily.lee@caladriustherapy.com"
                className="icon style2 solid fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="https://www.linkedin.com/in/emilyelee123/"
                className="icon style2 brands fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
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
              My name is{" "}
              <strong>
                <a href="https://www.psychologytoday.com/us/therapists/emma-braisted-charlotte-nc/980903">
                  Emma
                </a>
              </strong>{" "}
              (she/her) and I'm here to help you discover and foster the
              healthiest version of yourself.
            </p>
            <p>
              I applaud you for taking this courageous first step in recognizing
              that you may need or want support to get to where you want to be.
              My first goal as a therapist is to provide you a safe space to
              simply exist as your truest self in whatever stage you may be at.
              I understand the overwhelming emotions and anxieties that can be
              experienced as a result of trauma, difficult life circumstances
              and relationships, displacement, loss, or grief.
            </p>
            <p>
              Our therapeutic relationship built in this space will serve as the
              foundation for discovery and growth. Together, we will navigate
              the complexities, anxieties, and transitions that life can
              sometimes throw our way. I commit to holding space for your
              emotions while encouraging and assisting you to decide what
              necessary changes to make to become the healthiest and most
              authentic version of yourself.
            </p>

            <p>
              <em>
                Emma Braisted, M.Ed, LCMHCA graduated from the University at
                Buffalo with a Masters of Education in School Counseling in
                2016. After six years as a School Counselor, Emma pursued her
                Clinical Mental Health license to practice outside the scope of
                a school setting. Emma has experience working with older
                children, adolescents, adults, and families experiencing great
                risk factors and trauma.
              </em>
            </p>
          </div>
          <div className="image">
            <img
              src="/headshots/headshot-emma-braisted-500.jpg"
              alt="Emma Braisted"
            />
          </div>
          <ul className="icons" style={{ padding: "8px" }}>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="mailto:emma.braisted@caladriustherapy.com"
                className="icon style2 solid fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="https://www.linkedin.com/in/emma-braisted-m-ed-lcmhca-40b6215a/"
                className="icon style2 brands fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
        </section>
        {/* 
<!-- Spotlight: Kaitlyn Cannon --> */}
        <section
          className="spotlight style2 orient-right content-align-left image-position-center"
          id="kaitlyn-cannon"
        >
          <div className="content">
            <p>
              My name is <strong>Kaitlyn</strong> (she/her) and I am here to
              help you process uncomfortable feelings and support you in finding
              your most authentic self.
            </p>
            <p>
              At Caladrius, I am both the Clinical Services Coordinator and a
              second year MSW therapist intern. I have the answers to your
              everyday office questions, and can also help you therapeutically
              if you decide that we are the right fit.
            </p>
            <p>
              Sometimes, certain events in our lives can alter the way we view
              ourselves, others, and the world around us. We all deserve peace.
              We all deserve to feel safe. We all deserve to feel whole. As
              humans, we were not made to carry our burdens alone. I am here to
              help you process your trauma as you adjust to your new normal. I
              can teach you coping skills and offer comfort and support.
            </p>
            <p>
              The intersection between trauma and identity cannot be denied. As
              a queer woman, I am also passionate about helping LGBTQ+
              individuals navigate their traumatic life events.
            </p>
            <p>
              I am here to remind you that you are not what happened to you. I
              am here to help you recognize and hone in on your resilience and
              strength.
            </p>

            <p>
              <em>
                Kaitlyn Cannon, MSW, is graduating from the University of North
                Carolina at Charlotte with a Master's of Social Work in 2023.
                She received her undergraduate degree from Pennsylvania State
                University in 2016. Kaitlyn has worked as a Crisis Counselor for
                Crisis Text Line, and has extensive experience advocating for
                and working with victims of image-based sexual abuse (i.e
                revenge porn). She has served as a panelist, moderator, and
                reviewer of literature for cyber sexual abuse
                conferences/organizations.
              </em>
            </p>
          </div>
          <div className="image">
            <img
              src="/headshots/headshot-kaitlyn-cannon-500.jpg"
              alt="Kaitlyn Cannon"
            />
          </div>
          <ul className="icons" style={{ padding: "8px" }}>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="mailto:kaitlyn.cannon@caladriustherapy.com"
                className="icon style2 solid fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </section>
        {/* 
<!-- Spotlight: Amy Travis --> */}
        <section
          className="spotlight style2 orient-right content-align-left image-position-center"
          id="amy-travis"
        >
          <div className="content">
            <p>
              Hi, I'm
              <strong>
                <a href="https://www.psychologytoday.com/us/therapists/amy-wright-travis-charlotte-nc/983156">
                  Amy
                </a>
              </strong>{" "}
              (she/her) and I am here to walk alongside you in your therapeutic
              journey.
            </p>
            <p>
              <em>
                “It is the client who knows what hurts, what directions to go,
                what problems are crucial, what experiences have been deeply
                buried.”
              </em>
              -Carl Rogers
            </p>

            <p>
              There are times where we don't know where our life is going. We
              feel stuck, and are struggling with life transitions, anxiety,
              depression, grief, and trauma. We know something is wrong but
              aren't equipped with the tools needed in order to feel like
              ourselves again. This is where I can help in your walk through
              those uncomfortable emotions and into self-growth and healing.
            </p>

            <p>
              I work with clients who are experiencing anxiety, depression,
              difficulty adjusting to life transitions, and traumatic evets. I
              utilize a person-centered approach in which the client sets the
              focus and direction of each session. I feel that one of the most
              important parts of therapy is the relationship between client and
              therapist in forming good rapport. Each client needs to feel both
              validated and supported in order to open up about what they're
              experiencing. Throughout the therapeutic process, my goal is to be
              warm, empathetic, and informed.
            </p>

            <p>
              <em>
                Amy Travis, MSW, LCSW graduated from Radford University's Master
                of Social Work program located in southwest Virginia. Amy has
                extensive experience working as a clinician in the school-based
                setting, as well as intensive in-home setting. She has
                experience with adults and adolescents. She has experience
                working with a wide range of mental health diagnoses and diverse
                populations and specializes in trauma.
              </em>
            </p>
          </div>
          <div className="image">
            <img
              src="/headshots/headshot-amy-travis-500.jpg"
              alt="Amy Travis"
            />
          </div>
          <ul className="icons" style={{ padding: "8px" }}>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="mailto:amy.travis@caladriustherapy.com"
                className="icon style2 solid fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="https://www.linkedin.com/in/amy-travis-88441316/"
                className="icon style2 brands fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
        </section>
        {/* 
<!-- Spotlight: Tatim Lace  --> */}
        <section
          className="spotlight style2 orient-right content-align-left image-position-center"
          id="tatim-lace"
        >
          <div className="content">
            <p>
              My name is
              <strong>
                <a href="https://www.psychologytoday.com/us/therapists/tatim-lace-charlotte-nc/944737">
                  Tatim
                </a>
              </strong>
              (he/they) and I'm here to let you know you're not alone.
            </p>

            <p>
              Growing up a queer kid in a rural area shaped the person I am
              today. In my adulthood, I became aware of the power of my own
              resilience, and the protective factors that enabled me to get to
              where I am today. I want to help other people who have been
              through difficult experiences discover the power of their own
              resilience as well.
            </p>
            <p>
              We might be a good fit if you're struggling with personal
              relationships or feeling alone in your journey. You may be stuck
              in a painful past or struggling with sorting out who you are. You
              might be searching for a different perspective or someone to
              validate your experience. I believe in the power of building up
              your resiliency toolbox and finding light at the end of the tunnel
              together. Each life stage and relationship offers different
              rewards and challenges that I enjoy working with. Navigating those
              life stages can be more complex for those struggling with identity
              and social ostracization. The LGBTQIA+ community is the most near
              and dear to my heart.
            </p>
            <p>
              I offer a unique clinical and lived experience with a wide variety
              of complex issues and populations. My clinical instinct operates
              through a systemic lens. I come from a background working with
              families to address tough issues related to juvenile justice and
              DSS involvement. I enjoy helping people find relief and a better
              way forward. I also enjoy going deep and helping people make sense
              of their root traumas that may be holding them back. I enjoy
              practical application and skill-building through CBT and DBT
              modalities. Much of my experience has been assisting people with
              finding and practicing communication and coping skills to
              strengthen their relationships with family, friends, and
              themselves. I am passionate about helping families and couples
              have difficult, but necessary conversations. I often challenge my
              clients to consider circumstances from different angles and guide
              them out of their comfort zones.
            </p>
            <p>
              <em>
                Tatim Lace, MSW, LCSW-A graduated from Marywood University in
                Scranton, PA with a BA in communications and from Appalachian
                State University with a Masters of Social Work degree and a dual
                focus in community and clinical social work. He is experienced
                in training others on best practices for working with the
                LGBTQIA+ community across different settings. Tatim is trained
                in Family Centered Treatment (FCT) and Functional Family Therapy
                (FFT).
              </em>
            </p>
          </div>
          <div className="image">
            <img
              src="/headshots/headshot-tatim-lace-500.jpg"
              alt="Tatim Lace"
            />
          </div>
          <ul className="icons" style={{ padding: "8px" }}>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="mailto:tatim.lace@caladriustherapy.com"
                className="icon style2 solid fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="https://www.linkedin.com/in/tatimlace/"
                className="icon style2 brands fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
        </section>

        {/* 
<!-- Spotlight: Kim  --> */}
        <section
          className="spotlight style2 orient-right content-align-left image-position-center"
          id="kim"
        >
          <div className="content">
            <p>
              My name is
              <strong>
                <a href="https://www.psychologytoday.com/us/therapists/kimberly-ernst-charlotte-nc/866746">
                  Kim
                </a>
              </strong>{" "}
              (she/her) and I'm here to help guide you in overcoming life's
              challenges
            </p>

            <p>
              It's never easy to seek help for your mental health needs. I'm
              here to guide you through this process and provide support through
              your pain, recovery, transition, and path to improvement.
            </p>

            <p>
              Life can be hard at times; you can feel lost and vulnerable. You
              may want to give up or feel just burnt out. Whether you change
              jobs, leave a difficult relationship, lose a special person in
              your life, experience grief, move away, or are adjusting to a new
              way of life, it can be tough to get through. We want to find our
              true authentic selves and feel good instead of feeling the weight
              of the world on our shoulders.
            </p>

            <p>
              Some of us strive for excellence and perfection to the point that
              we have unhealthy thoughts and habits, experience pressure to
              always perform at high levels, and meet demands from others that
              may damage our health – we start to feel we cannot sustain this
              level of effort in all areas of our life. This leaves us feeling
              down, feeling stressed, struggling to manage our emotions, hurting
              relationships we do not mean to, and putting our needs and
              self-care on the back burner. We often feel a sense of imposter
              syndrome where we believe we do not deserve the success and
              happiness we are experiencing; it becomes a barrier created by us
              and affects our ability to achieve success and happiness.
            </p>

            <p>
              You and I can work through these difficulties together. I work
              with adults and adolescents experiencing anxiety, depression,
              grief, trauma, identity issues, anger problems, PTSD, and
              challenges while in a life transition. I love helping high
              performers increase their resilience and enhance their
              performance. I offer tailored organizational high-performance
              presentations and workshops to maximize potential. As a veteran
              myself, I especially enjoy working with other veterans. The change
              process begins with you. Let's do this together, I'm here with
              you!
            </p>
            <p>
              <em>
                Kimberly Ernst, a Licensed Clinical Social Worker Associate, is
                a veteran who served 15 years in the Air Force and continues to
                serve in the Reserves. Having lived on three different
                continents during her time in the military has allowed her to
                interact with multiple cultures and people of diverse
                backgrounds. During her educational path, she completed her
                Bachelor of Sociology at the American Military University and
                her Master of Social Work at the University of North Carolina at
                Charlotte (UNCC) with honors. Her specialties are military
                mental health, high-performance consulting, PTSD, life
                transitions, anxiety, life coaching, and trauma. Kim is a
                lifelong learner and is pursuing her Ph.D. in Industrial and
                Organizational Psychology to build professional knowledge in
                leadership, teams, and performance. She promotes health
                holistically and teaches indoor cycling part-time. Kim is
                trained in Eye Movement Desensitization and Reprocessing (EMDR)
                Therapy, and she is informed on Internal Family Systems (IFS)
                Therapy. At this time, Kimberly is offering telehealth sessions
                only.
              </em>
            </p>
          </div>
          <div className="image">
            <img src="/headshots/headshot-kim2.jpg" alt="Kim Ernst" />
          </div>
          <ul className="icons" style={{ padding: "8px" }}>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="mailto:kim.ernst@caladriustherapy.com"
                className="icon style2 solid fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="https://www.linkedin.com/in/kimberly-y-k-ernst/"
                className="icon style2 brands fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
        </section>
        {/* 

<!-- Spotlight: Madalyn --> */}
        <section
          className="spotlight style2 orient-right content-align-left image-position-center"
          id="madalyn-kostur"
        >
          <div className="content">
            <p>
              My name is{" "}
              <strong>
                <a href="https://www.psychologytoday.com/us/therapists/maddy-kostur-charlotte-nc/890410">
                  Maddy
                </a>
              </strong>{" "}
              (she/her) and I am here to walk with you and your family through
              life's ups and downs.
            </p>

            <p>
              <em>
                “There is no greater work human hands can do than to hold a
                child with a fierce tenderness that says in a way words never
                can: ‘you are loved', ‘you are safe', ‘you can trust'.”
              </em>
              -Parker Palmer
            </p>

            <p>
              Every child deserves to be a child - to feel safe, loved, and to
              experience the world through a lens filled with wonder, joy and
              curiosity. When trauma occurs, it can affect every fiber of a
              child's being, causing chaos and disruption to their childhood. It
              can often feel impossible to know where to begin to start the
              healing process. That is why I am here - to help your child
              untangle and process the jumbled and complicated emotions that
              trauma can cause. Through processing with your child, we will
              explore emotions and experiences that will help them heal,
              increase their sense of safety and security, and learn skills to
              help them cope with intense moments of emotions.
            </p>
            <p>
              I use a child-centered approach, meaning I meet each child where
              they are with empathy and understanding, taking into account every
              factor playing a role in their life. In the playroom, your child
              gets to be fully, authentically them - without judgement and
              taking the lead. In play therapy, we use the language that all
              children are fluent in - play. Finding words to fully express how
              trauma has affected an individual is difficult for anyone,
              especially a child who might not yet have the vocabulary to
              process their experiences.The playroom is a place for the child to
              experience control over the situations and emotions in their life
              that produce chaos and unease, all the while feeling in their
              element, surrounded by toys, games, and books familiar to them.
            </p>
            <p>
              Your child and family's stories are precious and deserve to be
              held with the utmost respect. To be entrusted to walk alongside
              you and your child as they navigate their past stories, their
              current stories, and their future stories is the greatest honor.
            </p>

            <p>
              <em>
                Madalyn Kostur, MSW, LCSWA graduated from the University of
                North Carolina at Charlotte with a Master of Social Work and a
                graduate certificate in Play Therapy. She specializes in working
                with children and adolescents ages 3 and up. She is trained in
                multiple approaches of play therapy, including Child-Centered
                Play Therapy, Child-Parent Relationship Training, Expressive
                Arts Therapy, and Sand Tray Therapy. She is also trained in EMDR
                and TF-CBT. She specializes in working with children and
                families who have had DSS involvement as well as adoptees and
                has extensive experience working with different child welfare
                programs, including Youth and Family Services, Guardian ad Litem
                programs, and non-profit organizations.
              </em>
            </p>
          </div>
          <div className="image">
            <img
              src="/headshots/headshot-madalyn-kostur-500.jpg"
              alt="Madalyn Kostur"
            />
          </div>
          <ul className="icons" style={{ padding: "8px" }}>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="mailto:madalyn.kostur@caladriustherapy.com"
                className="icon style2 solid fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </section>
        {/* 
<!-- Spotlight: Kacey --> */}
        <section
          className="spotlight style2 orient-right content-align-left image-position-center"
          id="kacey"
        >
          <div className="content">
            <p>
              My name is
              <strong>
                <a href="https://www.psychologytoday.com/us/therapists/kacey-scheuerman-charlotte-nc/791247">
                  Kacey
                </a>
              </strong>{" "}
              (she/her) and I am here to support you on your journey.
            </p>

            <p>
              Feeling uncomfortable is a signal that it is time for us to start
              our own process of change. Starting this path of working through
              difficult or emotional challenges sometimes requires deep
              vulnerability. Opening up and being vulnerable with someone else
              can be intimidating, but once practiced, it can also be
              liberating! You may have had things happen to you that were unfair
              and painful, causing conflict within yourself or with others. It
              is especially difficult when you feel alone without someone you
              can talk to, who will listen without judgment. When you feel
              overwhelmed and you are experiencing trials that are difficult to
              navigate, it is time to reach out for support.
            </p>

            <p>
              I started my journey towards becoming a therapist because I know
              that life can be hard and sometimes it feels like a never-ending
              uphill battle. I am here to provide added support during this
              time, to give you the space to be vulnerable, heard, and to share
              tools that can be helpful to you. My goal is to help you feel
              empowered to seek growth, acceptance, and peace within yourself.
              Sometimes you just need someone to talk to, and other times you
              might need help learning new coping skills. I hope to be that
              trusted person you can share your thoughts and feelings with, as
              well as practice new skills to be implemented in your everyday
              life.
            </p>

            <p>
              I look forward to being a part of your journey towards
              self-discovery and self-empowerment.
            </p>

            <p>
              <em>
                Kacey Scheuerman, MSW, LCSW-A graduated from University of North
                Carolina at Charlotte. Kacey is trained in EMDR and Sand Tray
                Therapy. She is experienced with working with adults and
                adolescents.
              </em>
            </p>
          </div>
          <div className="image">
            <img
              src="/headshots/headshot-kacey-scheuerman-500.jpg"
              alt="Kacey Scheuerman"
            />
          </div>
          <ul className="icons" style={{ padding: "8px" }}>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="mailto:kacey.scheuerman@caladriustherapy.com"
                className="icon style2 solid fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="https://www.linkedin.com/in/kacey-scheuerman-25754710b/"
                className="icon style2 brands fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
        </section>
        {/* 
<!-- Spotlight: Jessie Ogienko --> */}
        <section
          className="spotlight style2 orient-right content-align-left image-position-center"
          id="jessie-ogienko"
        >
          <div className="content">
            <p>
              My name is
              <strong>
                <a href="https://www.psychologytoday.com/us/therapists/jessie-lee-ogienko-charlotte-nc/435847">
                  Jessie
                </a>
              </strong>{" "}
              (she/her) and I can help you move forward.
            </p>
            <p>
              <em>
                "I am not what happened to me. I am what I choose to become." -
                Carl Jung
              </em>
            </p>
            <p>
              Many people have had scary or terrible things happen to them:
              trauma isn't just what happens to you - it's how you experience
              it.
            </p>
            <p>
              Maybe - as is the case with many others - you haven't told anyone.
              Maybe you <em>have</em> told people what happened and their
              response was confusing, hurtful, or dismissive. Maybe you feel
              like you just want it to be over or you should have gotten past it
              already. You might have reminders of what happened impacting your
              life through nightmares, flashbacks, or trying to avoid any
              mention or reminder of the events. You might feel numb. Maybe you
              are a parent and are completely lost on how to help your child
              recover.
            </p>
            <p>
              I work with adolescents, adults, and families - helping
              individuals that are struggling not only with trauma, but with
              depression and anxiety as well.
            </p>
            <p>
              During our first visit, we will talk about what is bothering you
              now and what you want help with. You do not have to tell a
              stranger everything at the first visit - we'll get there together.
            </p>
            <p>
              <em>
                Jessie Ogienko, MSW, LCSW graduated from Emory University with
                Honors in Psychology and from Hunter College at the City
                University of New York with a Masters of Social Work degree with
                a specialty in Clinical Practice and a special focus on
                Interdisciplinary Practice. She is trained in EMDR, is certified
                in Trauma-Focused Cognitive Behavioral Therapy (TF-CBT), has
                graduated the accredited C.A.S.E. Training for Adoption
                Competency (TAC) certificate program, and is a Family Centered
                Treatment (FCT) therapist and trainer.
              </em>
            </p>

            <p>
              Jessie is currently offering consulting services, including
              Clinical Supervision for LCSW-A therapists pursuing full
              licensure, through
              <a href="https://www.caladriusconsulting.me/">
                Caladrius Consulting
              </a>
              .
            </p>
          </div>
          <div className="image">
            <img
              src="/headshots/headshot-jessie-ogienko-500.jpg"
              alt="Jessie Ogienko"
            />
          </div>
          <ul className="icons" style={{ padding: "8px" }}>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="mailto:jessie.ogienko@caladriustherapy.com"
                className="icon style2 solid fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li style={{ display: "block", padding: "8px" }}>
              <a
                href="https://www.linkedin.com/in/jessie-ogienko/"
                className="icon style2 brands fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
        </section>
      </Layout>
    </>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <SEO />;