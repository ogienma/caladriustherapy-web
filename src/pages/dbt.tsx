import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { SEO } from "../components/SEO";
import Layout from "../components/Layout";
import { useState } from "react";

const DBTPage: React.FC<PageProps> = () => {
  const [isProviderReferral, setIsProviderReferral] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Layout>
        <section className="spotlight style1 orient-left content-align-left image-position-center">
          <div className="content">
            <h2>Dialectical Behavior Therapy (DBT)</h2>
            <p>Dialectical Behavior Therapy (DBT) is an evidence-based, cognitive-behavioral treatment designed to help individuals who experience intense emotions, impulsive behaviors, and challenges in relationships and may also exhibit moderate to high-risk behaviors such as suicidality, self-harm, and addiction.</p>
            
            <p>DBT focuses on building skills in four key areas:</p>
            <ul>
              <li>Mindfulness</li>
              <li>Emotion Regulation</li>
              <li>Distress Tolerance</li>
              <li>Interpersonal Effectiveness</li>
            </ul>

            <p>The DBT Full Program at Caladrius Therapy is a comprehensive, manualized treatment that includes:</p>
            <ul>
              <li>Weekly individual therapy</li>
              <li>Weekly group therapy</li>
              <li>Phone/email coaching between sessions to generalize skills</li>
            </ul>

            <p>Group sessions are available to adults of all ages and genders, with remote and onsite options. Treatment length is 6 months to 1 year based on client need.</p>

            {!showForm ? (
              <div className="form-intro">
                <h3>Getting Started with DBT</h3>
                <p>To begin your journey with DBT, please select how you'd like to proceed:</p>
                <div className="flex flex-col space-y-4 max-w-md mx-auto">
                  <button 
                    className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
                    onClick={() => {
                      setIsProviderReferral(false);
                      setShowForm(true);
                    }}
                  >
                    <span className="text-2xl mb-2">👤</span>
                    <span className="text-lg font-semibold">Self Referral</span>
                    <span className="text-sm text-gray-600 mt-2">I am interested in DBT for myself</span>
                  </button>
                  <button 
                    className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
                    onClick={() => {
                      setIsProviderReferral(true);
                      setShowForm(true);
                    }}
                  >
                    <span className="text-2xl mb-2">👨‍⚕️</span>
                    <span className="text-lg font-semibold">Provider Referral</span>
                    <span className="text-sm text-gray-600 mt-2">I am a provider referring a client</span>
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex justify-center mb-8">
                  <div className="inline-flex rounded-md shadow-sm" role="group">
                    <button
                      type="button"
                      className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                        !isProviderReferral
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
                      }`}
                      onClick={() => setIsProviderReferral(false)}
                    >
                      Self Referral
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
                        isProviderReferral
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
                      }`}
                      onClick={() => setIsProviderReferral(true)}
                    >
                      Provider Referral
                    </button>
                  </div>
                </div>

                <form name="dbt-referral" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="dbt-referral" />
                  <input type="hidden" name="referral-type" value={isProviderReferral ? "provider" : "self"} />
                  
                  <div className="fields">
                    {isProviderReferral ? (
                      <>
                        {/* Provider Information */}
                        <div className="field half">
                          <label htmlFor="provider-name">Provider Name*</label>
                          <input type="text" name="provider-name" id="provider-name" required />
                        </div>
                        <div className="field half">
                          <label htmlFor="provider-email">Provider Email*</label>
                          <input type="email" name="provider-email" id="provider-email" required />
                        </div>
                        <div className="field half">
                          <label htmlFor="provider-phone">Provider Phone*</label>
                          <input type="tel" name="provider-phone" id="provider-phone" required />
                        </div>
                        <div className="field half">
                          <label htmlFor="provider-license">Provider License Number</label>
                          <input type="text" name="provider-license" id="provider-license" />
                        </div>

                        {/* Client Information */}
                        <div className="field half">
                          <label htmlFor="client-name">Client Name*</label>
                          <input type="text" name="client-name" id="client-name" required />
                        </div>
                        <div className="field half">
                          <label htmlFor="client-dob">Client Date of Birth*</label>
                          <input type="date" name="client-dob" id="client-dob" required />
                        </div>
                        <div className="field">
                          <label htmlFor="client-contact">What is the client's contact information?*</label>
                          <textarea name="client-contact" id="client-contact" required />
                        </div>
                        <div className="field">
                          <label htmlFor="client-knowledge">Does the client know about this referral?*</label>
                          <select name="client-knowledge" id="client-knowledge" required>
                            <option value="">Select an option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div className="field">
                          <label htmlFor="insurance">What insurance does the client have?*</label>
                          <input type="text" name="insurance" id="insurance" required />
                        </div>
                        <div className="field">
                          <label htmlFor="current-services">What psychological services is the client presently receiving?*</label>
                          <textarea name="current-services" id="current-services" required />
                        </div>
                        <div className="field">
                          <label htmlFor="assessment-willingness">Is the client willing to take part in an assessment to determine appropriateness of DBT?*</label>
                          <select name="assessment-willingness" id="assessment-willingness" required>
                            <option value="">Select an option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div className="field">
                          <label htmlFor="concerns">Are there any relevant social, legal, substance use, or medical concerns?*</label>
                          <textarea name="concerns" id="concerns" required />
                        </div>
                        <div className="field">
                          <label htmlFor="justification">What is your clinical justification for referring the client for DBT?*</label>
                          <textarea name="justification" id="justification" required />
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Self-Referral Information */}
                        <div className="field half">
                          <label htmlFor="name">Name*</label>
                          <input type="text" name="name" id="name" required />
                        </div>
                        <div className="field half">
                          <label htmlFor="dob">Date of Birth*</label>
                          <input type="date" name="dob" id="dob" required />
                        </div>
                        <div className="field">
                          <label htmlFor="contact">What is your contact information?*</label>
                          <textarea name="contact" id="contact" required />
                        </div>
                        <div className="field">
                          <label htmlFor="insurance">What insurance plan do you have?*</label>
                          <input type="text" name="insurance" id="insurance" required />
                        </div>
                        <div className="field">
                          <label htmlFor="consultation">Are you willing to take part in a 15-minute consultation call to determine appropriateness of referral?*</label>
                          <select name="consultation" id="consultation" required>
                            <option value="">Select an option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div className="field">
                          <label htmlFor="discovery">How did you find out about DBT?*</label>
                          <input type="text" name="discovery" id="discovery" required />
                        </div>
                        <div className="field">
                          <label htmlFor="goals">What are you hoping DBT might help you with?*</label>
                          <textarea name="goals" id="goals" required />
                        </div>
                      </>
                    )}
                  </div>
                  <ul className="actions">
                    <li>
                      <button type="submit" className="primary" name="submit" id="submit">
                        Submit
                      </button>
                    </li>
                  </ul>
                </form>
              </>
            )}
          </div>
          <div className="image">
            <img src={"/heroes/photo-1564121211835-e88c852648ab.jpg"} alt="Caladrius Therapy DBT" />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default DBTPage;

export const Head: HeadFC = () => <SEO title="DBT | Caladrius Therapy" />; 
