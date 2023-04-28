import React from "react";
import "../css/bulma.css";
import "../css/main.css";

import "../css/custom.css";

import Nav from "./Nav";
import Footer from "./Footer";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from '@chakra-ui/theme'

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