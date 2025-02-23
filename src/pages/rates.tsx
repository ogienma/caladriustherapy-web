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
            <h2>Rates & Insurance</h2>
            <ul>
              <li>$200 per initial evaluation</li>
              <li>$185 per 50-60-minute session</li>
              <li>$165 per 45-minute session</li>
              <li>$130 per 30-minute session</li> 
            </ul>
            <h3>In-Network Insurance</h3>
            <p>We accept the following insurance plans:</p>
            <ul>
              <li>Alliance Behavioral Health</li>
              <li>Amerihealth</li>
              <li>AETNA</li>
              <li>Blue Cross Blue Shield <sup>1</sup></li>
              <li>Carolina Complete Health</li>
              <li>Healthy Blue</li>
              <li>Partners Behavioral Health</li>
              <li>Trillium</li>
              <li>United Healthcare <sup>2</sup></li>
              <li>United Healthcare Community</li>
              <li>Wellcare</li>
            </ul>
              <p>
              <em>
                <sup>1</sup> Blue Value and Blue Local are unfortunately considered out-of-network. Blue Home is typically in-network, but we will verify your benefits for you.
                </em>
              <em>
                <sup>2</sup> Hannah Travis, LCSW, Sav Raynor, LMFT are the only providers considered in-network at this time. All other providers can bill on out-of-network benefits.   
                </em>
              </p>
            <p>
              In-network fees and out of pocket costs may vary from above based on the insurance provider and individual benefits. Couples therapy may not be covered in-network; please call for a free consultation to see if it is covered in your case (more information on the blog!). 
            </p>
            <h3>Out of Network Insurance Benefits</h3>
            <p>
              We accept most insurances as out of network providers. Depending
              on your specific plan, you may be reimbursed for all or part of
              your cost. Call your insurance to ask about your out of network
              benefits. We offer free courtesy billing on your behalf to your
              insurance as well as providing super-bills for you to bill
              yourself. We can help you navigate the process of billing as well
              if you have questions.
            </p>
            <h3>Sliding Scale Fee Schedule</h3>
            <p>
              If we are unable to take your insurance or you are uninsured and cannot afford to pay for services, you may be eligible for our sliding scale fee with a second-year Masters-Level Intern. Sliding scale is 10% of your weekly income for a one-hour session. Proof of income is required. No minimum or maximum. Please reach out via phone or email to ask about the current availability of sliding fee slots. 
            </p>
            <h3>Self-Pay</h3>
            <p>
              There are good reasons to avoid using your insurance to pay for
              your therapy - you can find more{" "}
              <a href="https://blog.caladriustherapy.com/reasons-not-to-use-your-insurance-coverage-for-your-therapy/">
                information about why you might not wish to use your insurance
                benefits on our blog.
              </a>
            </p>
          </div>
          <div className="image">
            <img src={"/heroes/nathan-dumlao-I_394sxx0ec-unsplash.jpg"} alt="Caladrius Therapy Charlotte NC" />
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
