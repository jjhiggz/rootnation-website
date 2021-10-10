import { createContext, useState } from "react";
import "tailwindcss/tailwind.css";
import { HamburgerMenu } from "../components/hamburger-menu/hamburger-menu";
import { HamburgerProvider } from "../providers/show-hamburger/show-hamburger.provider";
import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AppProps } from "next/dist/shared/lib/router/router";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HamburgerProvider>
      <HamburgerMenu />
      <Component {...pageProps} />
    </HamburgerProvider>
  );
}
export default MyApp;
