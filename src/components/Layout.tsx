import React from "react";
import "../css/bulma.css";
import "../css/main.css";

import "../css/custom.css";

import Nav from "./Nav";
import Footer from "./Footer";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from '@chakra-ui/theme'
import { Script } from "gatsby"
export interface IProps {
  children?: React.ReactNode;
}

const theme = extendBaseTheme({
  components: {
  },
})

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <ChakraBaseProvider theme={theme} resetCSS={false}>
      <Script src="https://widget-cdn.simplepractice.com/assets/integration-1.0.js" />
      <Script src="https://kit.fontawesome.com/733365380c.js" crossorigin="anonymous"/>
      <div id="wrapper" className="divided">
        <Nav />
        {children}
        <Footer />
      </div>
      </ChakraBaseProvider>
  );
};

export default Layout;


// import React from "react";
// import "../css/bulma.css";
// import "../css/main.css";
// import "../css/custom.css";
// import Nav from "./Nav";
// import Footer from "./Footer";


// export interface IProps {
//   children?: React.ReactNode;
// }


// const Layout: React.FC<IProps> = ({ children }) => {
//   return (
//       <div id="wrapper" className="divided">
//         <Nav />
//         {children}
//         <Footer />
//       </div>
//   );
// };

// export default Layout;