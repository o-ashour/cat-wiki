import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import GlobalStyles from "./Global";
import { ThemeProvider } from "styled-components";
import { Modal } from "../Modal/component";
import { useContext } from "react";
import { UserContext } from "../../App";

const theme = {
  colors: {
    // white
    primary: "#fff",
    // cool grey
    secondary: "#E3E1DC",
    // black
    tertiary: "#000",
    // lighter black
    accent_1: "#291507",
    // dark woody brown
    accent_2: "#4D270C",
    // lighter beige
    accent_3: "#DEC68B",
    // brownish gray
    accent_4: "#544439",
    // light gray
    accent_5: "#E0E0E0",
    //error
    // hot red
    accent_6: "#ed2532",
    // crimson-ish
    accent_7: "#ba1d27",
  },
  breakpoints: {
    small: "600px",
    medium: "768px",
    large: "1200px",
  },
};

function Layout() {
  const { isModalOpen } = useContext(UserContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles isModalOpen={isModalOpen} />
      <Modal />
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
