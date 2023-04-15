import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image"

const RatesPage: React.FC<PageProps> = () => {

  return (
    <>
      <Layout>
        <section className="spotlight style1 orient-left content-align-left image-position-center">
          <div className="content">
            <h2>Rates</h2>
            <ul>
              <li>$165 per initial evaluation</li>
              <li>$165 per 50-60-minute session</li>
              <li>$135 per 45-minute session</li>
              <li>$100 per 30-minute session</li>
            </ul>
            <h3>In-Network Insurance</h3>
            <p>We accept the following insurance plans:</p>
            <ul>
              <li>Blue Cross Blue Shield</li>
              <li>Cigna</li>
              <li>United Healthcare</li>
              <li>Partners Health Management (Medicaid)</li>
            </ul>
            <p>
              <em>
                Not all therapists accept all insurance plans as in-network
                providers. Please call us to determine which therapist is
                in-network with your insurance and if they have availability.
                In-network fees and out of pocket costs may vary from above
                based on the insurance provider and individual benefits.
              </em>
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
              If we are unable to take your insurance or you are uninsured and
              cannot afford to pay for services, you may be eligible for our
              sliding scale fee with a fully licensed provider or a Masters
              Level Intern. Please reach out via phone to ask about the current
              availability of sliding fee slots and a short application to
              apply.
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
            <img
              src={'/nathan-dumlao-I_394sxx0ec-unsplash.jpg'}
              alt=""
            />
            {/* <StaticImage src="../images/nathan-dumlao-I_394sxx0ec-unsplash.jpg" alt="Caladrius Therapy Rates" /> */}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default RatesPage;
