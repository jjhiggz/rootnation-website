import { createContext, useState } from "react";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
export const HamburgerContext = createContext({
  showHamburger: false,
  setShowHamburger: (value) => undefined,
});

function MyApp({ Component, pageProps }: AppProps) {
  const [showHamburger, setShowHamburger] = useState<boolean>(false);
  return (
    <HamburgerContext.Provider value={{ showHamburger, setShowHamburger }}>
      <div className="h-screen w-screen bg-black z-50 fixed opacity-90 overlay flex-col text-center">
        {"a"
          .repeat(400)
          .split("")
          .map((a) => (
            <h1 className="text-white text-3xl">I FUCKING LOVE RACHEL</h1>
          ))}
      </div>
      <Component {...pageProps} />
    </HamburgerContext.Provider>
  );
}
export default MyApp;
