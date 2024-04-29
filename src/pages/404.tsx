import * as React from "react";
import { Link } from "gatsby"
import type { HeadFC, PageProps } from "gatsby";
import { SEO } from "../components/SEO";
import Layout from "../components/Layout";
import { Notification } from '@mantine/core';

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
        <Notification color="pink" title="We are moving">
      Starting with May 20th, we will be located at <a href="https://maps.app.goo.gl/gnV7EPLfCnsUMzNd8">200 Queens Road, Suite 300 in Charlotte</a>!
    </Notification>
      </Layout>
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <SEO />;
