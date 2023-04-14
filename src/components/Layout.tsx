import React from "react";

import Nav from "./Nav";
import Footer from "./Footer";

export interface IProps {
  children?: React.ReactNode
  data?: {
    pageData?: {
      frontmatter?: {
        isOutdated: boolean
      }
    }
  }
}

const Layout: React.FC<IProps> = ({ data, children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
