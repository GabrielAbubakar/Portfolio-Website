import React, { useState, useEffect, createContext } from "react";
import Head from "next/head";
import GlobalStyle from "../styled/GlobalStyles.styled";
import { ThemeProvider } from "styled-components";
import { light, dark } from "../styled/theme/Theme.styled";
import { useLocomotiveScroll } from "../hooks/useLocomotiveScroll";

// CustomThemeContext to change theme values
export const ThemePreferenceContext = createContext({
  selectedTheme: {},
  handleThemeChange(e: {}) {},
});

const Layout = ({ children }: { children: any }) => {
  const [selectedTheme, setSelectedTheme] = useState(dark);
  useLocomotiveScroll();

  const handleThemeChange = (theme: any) => {
    setSelectedTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme")!);
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
  }, []);

  return (
    <>
      <ThemePreferenceContext.Provider
        value={{ selectedTheme, handleThemeChange }}
      >
        <ThemeProvider theme={selectedTheme}>
          {/* SEO stuff in the head tag */}
          <Head>
            <title>Gabriel Abubakar : Software Engineer</title>
            <meta
              name="description"
              content="Portfolio Site of Gabriel Abubakar"
            />
            <link rel="icon" href="/favicon.ico" />
            {/* <link rel="icon" href="😁" /> */}
          </Head>

          {/* Global Styles Import */}
          <GlobalStyle />

          {/* Locomotive Scroll Container */}
          <div data-scroll-container>
            {/* Output the children of that page */}
            {children}
          </div>
        </ThemeProvider>
      </ThemePreferenceContext.Provider>
    </>
  );
};

export default Layout;
