import * as React from "react";
import { Link } from "gatsby"
import type { HeadFC, PageProps } from "gatsby";
import { SEO } from "../components/SEO";
import Layout from "../components/Layout";
const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        <section className="wrapper style1 align-center">
          <div className="inner" style={{padding: "6rem 2.5rem 2.5rem 2.5rem"}}>
            <h1>not found</h1>
          </div>
        </section>
            <section className="spotlight style2 orient-right content-align-left image-position-center about-member-section">
            Sorry 😔, we couldn't find what you were looking for.
            </section>
      </Layout>
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <SEO />;
