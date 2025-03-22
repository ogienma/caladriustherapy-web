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
            <p>For providers: please use this form to send a referral to Caladrius Therapy.</p>
            <form name="referrals" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="referrals" />
              <div className="fields">
                {/* Referral Source Information */}
                <div className="field half">
                  <label htmlFor="referral-source">Referral Source (Agency/Person Name)*</label>
                  <input type="text" name="referral-source" id="referral-source" required />
                </div>
                <div className="field half">
                  <label htmlFor="referral-email">Referral Source Email Address*</label>
                  <input type="email" name="referral-email" id="referral-email" required />
                </div>
                <div className="field half">
                  <label htmlFor="referral-phone">Referral Source Phone Number*</label>
                  <input type="tel" name="referral-phone" id="referral-phone" required />
                </div>
                <div className="field half">
                  <label htmlFor="referral-address">Referral Source Address</label>
                  <input type="text" name="referral-address" id="referral-address" />
                </div>
                <div className="field half">
                  <label htmlFor="referral-fax">Referral Source Fax Number</label>
                  <input type="text" name="referral-fax" id="referral-fax" />
                </div>

                {/* Client Information */}
                <div className="field half">
                  <label htmlFor="client-name">Client Name*</label>
                  <input type="text" name="client-name" id="client-name" required />
                </div>
                <div className="field half">
                  <label htmlFor="client-phone">Client Phone Number*</label>
                  <input type="tel" name="client-phone" id="client-phone" required />
                </div>
                <div className="field half">
                  <label htmlFor="client-email">Client Email Address*</label>
                  <input type="email" name="client-email" id="client-email" required />
                </div>
                <div className="field half">
                  <label htmlFor="client-dob">Client Date of Birth*</label>
                  <input type="date" name="client-dob" id="client-dob" required />
                </div>
                <div className="field half">
                  <label htmlFor="guardian-name">(If Minor) Client's Parent/Legal Guardian Name</label>
                  <input type="text" name="guardian-name" id="guardian-name" />
                </div>
                <div className="field half">
                  <label htmlFor="guardian-relationship">(If Minor) Client's Parent/Legal Guardian Relationship</label>
                  <input type="text" name="guardian-relationship" id="guardian-relationship" />
                </div>

                {/* Client Demographics */}
                <div className="field half">
                  <label htmlFor="client-sex">Client Sex Assigned at Birth</label>
                  <select name="client-sex" id="client-sex">
                    <option value="">Select an option</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="intersex">Intersex</option>
                  </select>
                </div>
                <div className="field half">
                  <label htmlFor="client-gender">Client Gender Identity</label>
                  <input type="text" name="client-gender" id="client-gender" />
                </div>
                <div className="field half">
                  <label htmlFor="client-pronouns">Client Pronouns</label>
                  <input type="text" name="client-pronouns" id="client-pronouns" />
                </div>

                {/* Reasons for Referral */}
                <div className="field">
                  <label>Reason(s) For Referral (check all that apply)*</label>
                  <div className="checkboxes grid grid-cols-2 md:grid-cols-3 gap-2">
                    <div className="checkbox">
                      <input type="checkbox" id="individual" name="referral-reasons" value="Individual Therapy" />
                      <label htmlFor="individual">Individual Therapy</label>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id="couples" name="referral-reasons" value="Couples Therapy" />
                      <label htmlFor="couples">Couples Therapy</label>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id="family" name="referral-reasons" value="Family Therapy" />
                      <label htmlFor="family">Family Therapy</label>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id="play" name="referral-reasons" value="Play Therapy" />
                      <label htmlFor="play">Play Therapy</label>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id="parent" name="referral-reasons" value="Parent Coaching" />
                      <label htmlFor="parent">Parent Coaching</label>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id="assessment" name="referral-reasons" value="Comprehensive Clinical Assessment" />
                      <label htmlFor="assessment">Comprehensive Clinical Assessment</label>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id="trauma-assessment" name="referral-reasons" value="Trauma Informed Comprehensive Clinical Assessment" />
                      <label htmlFor="trauma-assessment">Trauma Informed Comprehensive Clinical Assessment</label>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id="tfcbt" name="referral-reasons" value="TF-CBT" />
                      <label htmlFor="tfcbt">TF-CBT</label>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id="emdr" name="referral-reasons" value="EMDR" />
                      <label htmlFor="emdr">EMDR</label>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id="brainspotting" name="referral-reasons" value="Brainspotting" />
                      <label htmlFor="brainspotting">Brainspotting</label>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id="sex" name="referral-reasons" value="Sex Therapy" />
                      <label htmlFor="sex">Sex Therapy</label>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id="group" name="referral-reasons" value="Group Therapy" />
                      <label htmlFor="group">Group Therapy</label>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id="reunification" name="referral-reasons" value="Reunification Therapy" />
                      <label htmlFor="reunification">Reunification Therapy</label>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id="sandtray" name="referral-reasons" value="Sandtray Therapy" />
                      <label htmlFor="sandtray">Sandtray Therapy</label>
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id="other-reason" name="referral-reasons" value="Other" />
                      <label htmlFor="other-reason">Other</label>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="referral-description">Brief Description of Reason For Referral*</label>
                  <textarea name="referral-description" id="referral-description" rows={4} required 
                    placeholder="PLEASE FORWARD MEDICAL & BEHAVIORAL INFORMATION, COURT REPORTS, SOCIAL SUMMARIES, PREVIOUS EVALUATIONS, ETC."></textarea>
                </div>

                {/* Billing Information */}
                <div className="field">
                  <label>Billing Information / Primary Insurance Company*</label>
                  <div className="checkboxes grid grid-cols-2 md:grid-cols-3 gap-2">
                    <div className="checkbox">
                      <input type="radio" id="self-pay" name="insurance" value="Self-Pay" />
                      <label htmlFor="self-pay">Self-Pay</label>
                    </div>
                    <div className="checkbox">
                      <input type="radio" id="aetna" name="insurance" value="AETNA" />
                      <label htmlFor="aetna">AETNA</label>
                    </div>
                    <div className="checkbox">
                      <input type="radio" id="bcbs" name="insurance" value="BCBS" />
                      <label htmlFor="bcbs">BCBS</label>
                    </div>
                    <div className="checkbox">
                      <input type="radio" id="blue-value" name="insurance" value="Blue Value / Blue Home" />
                      <label htmlFor="blue-value">Blue Value / Blue Home (out of network at this time)</label>
                    </div>
                    <div className="checkbox">
                      <input type="radio" id="healthy-blue" name="insurance" value="Healthy Blue" />
                      <label htmlFor="healthy-blue">Healthy Blue</label>
                    </div>
                    <div className="checkbox">
                      <input type="radio" id="united" name="insurance" value="United HealthCare / Optum" />
                      <label htmlFor="united">United HealthCare / Optum</label>
                    </div>
                    <div className="checkbox">
                      <input type="radio" id="united-eap" name="insurance" value="United EAP" />
                      <label htmlFor="united-eap">United EAP</label>
                    </div>
                    <div className="checkbox">
                      <input type="radio" id="united-community" name="insurance" value="United Community" />
                      <label htmlFor="united-community">United Community</label>
                    </div>
                    <div className="checkbox">
                      <input type="radio" id="partners" name="insurance" value="Partners Medicaid" />
                      <label htmlFor="partners">Partners Medicaid</label>
                    </div>
                    <div className="checkbox">
                      <input type="radio" id="trillium" name="insurance" value="Trillium" />
                      <label htmlFor="trillium">Trillium</label>
                    </div>
                    <div className="checkbox">
                      <input type="radio" id="alliance" name="insurance" value="Alliance Medicaid" />
                      <label htmlFor="alliance">Alliance Medicaid (requires a single case agreement request/pre-authorization)</label>
                    </div>
                    <div className="checkbox">
                      <input type="radio" id="cigna" name="insurance" value="Cigna" />
                      <label htmlFor="cigna">Cigna (out of network as of February 2025)</label>
                    </div>
                    <div className="checkbox">
                      <input type="radio" id="sliding-scale" name="insurance" value="Request for Sliding Scale" />
                      <label htmlFor="sliding-scale">Request for Sliding Scale</label>
                    </div>
                    <div className="checkbox">
                      <input type="radio" id="other-insurance" name="insurance" value="Other" />
                      <label htmlFor="other-insurance">Other</label>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label>Does client have any other form of insurance?*</label>
                  <div className="radio-group">
                    <div className="radio">
                      <input type="radio" id="secondary-yes" name="secondary-insurance" value="Yes" required />
                      <label htmlFor="secondary-yes">Yes</label>
                    </div>
                    <div className="radio">
                      <input type="radio" id="secondary-no" name="secondary-insurance" value="No" />
                      <label htmlFor="secondary-no">No</label>
                    </div>
                    <div className="radio">
                      <input type="radio" id="secondary-unknown" name="secondary-insurance" value="Unknown" />
                      <label htmlFor="secondary-unknown">Unknown</label>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="actions">
                <li>
                  <button type="submit" className="primary" name="submit" id="submit">
                    Submit
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </section>
        <form name="colors" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="colors" />
      <fieldset name="color">
  <div className="radio-group">
<div className="radio">
      <input type="radio" name="color" id="red" value="red"/> <label htmlFor="red">Red</label>
  </div>
  <div className="radio">
      <input type="radio" name="color" id="green" value="green"/> <label htmlFor="green">Green</label>
  </div>
  <div className="radio">
      <input type="radio" name="color" id="blue" value="blue"/>  <label htmlFor="blue">Blue</label>
  </div>
  </div>
</fieldset>
<button type="submit" className="primary" name="submit" id="submit">
                    Submit
                  </button>
</form>
      </Layout>
    </>
  );
};

export default ReferralsPage;

export const Head: HeadFC = () => <SEO title="Referrals | Caladrius Therapy" />;
