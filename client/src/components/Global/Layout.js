import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import GlobalStyles from "./Global";
import { ThemeProvider } from "styled-components";
import { Modal } from "../Modal/component";
import { useContext } from "react";
import { UserContext } from "../../App";
import { NavModal } from "../Nav/NavModal/component";

const theme = {
  colors: {
    // Cultured (white-ish)
    primary: "#f8f8f8",
    // Platinum
    secondary: "#E3E1DC",
    // Black
    tertiary: "#000",
    // Bistre
    accent_1: "#291507",
    // Seal Brown
    accent_2: "#4D270C",
    // Gold Crayola
    accent_3: "#DEC68B",
    // Dark Lava
    accent_4: "#544439",
    // Gainsboro (light gray)
    accent_5: "#E0E0E0",
    //error
    // Imperial Red
    accent_6: "#ed2532",
    // Firebrick
    accent_7: "#ba1d27",
  },
  breakpoints: {
    small: "600px",
    medium: "768px",
    large: "1200px",
  },
};

function Layout() {
  const { isNavOpen, isModalOpen } = useContext(UserContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles isNavOpen={isNavOpen} isModalOpen={isModalOpen} />
      <Modal />
      <Header />
      {isNavOpen ? <NavModal /> : null}
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
