import React from "react";
import "../css/bulma.css";
import "../css/main.css";
import "../css/custom.css";
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
    <div id="wrapper" className="divided">  
      <Nav />
      {children}
      <Footer />
      </div>
    </>
  );
};

export default Layout;