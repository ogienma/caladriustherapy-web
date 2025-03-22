import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { SEO } from "../components/SEO";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const ReferralsPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        <section className="spotlight style1 orient-left content-align-left image-position-center">
          <div className="content">
            <h2>Referrals</h2>
            <p>
              <form name="referrals" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="referrals" />
                <div className="fields">
                  <div className="field half">
                    <label htmlFor="referral-source">Referral source (organization/individual name)</label>
                    <input type="text" name="referral-source" id="referral-source" />
                  </div>
                  <div className="field half">
                    <label htmlFor="referral-email">Referral email</label>
                    <input type="email" name="referral-email" id="referral-email" />
                  </div>
                </div>
                <ul className="actions">
                  <li>
                    <button
                      type="submit"
                      className="primary"
                      name="submit"
                      id="submit"
                    >
                      Send Message
                    </button>
                  </li>
                </ul>
              </form>
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ReferralsPage;

export const Head: HeadFC = () => <SEO />;
