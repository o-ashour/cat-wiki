import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import GlobalStyles from "../../components/styles/Global";
import { ThemeProvider } from "styled-components";
import { ModalReal } from "../../components/ModalReal/component";
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
    large: "992px",
    extra_large: "1200px",
  },
};

function Layout() {
  const { isModalRealOpen } = useContext(UserContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles isModalRealOpen={isModalRealOpen} />
      <ModalReal />
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
