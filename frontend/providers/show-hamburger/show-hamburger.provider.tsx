import { createContext, ReactElement, useContext, useState } from "react";

export const HamburgerContext = createContext({
  showHamburger: false,
  setShowHamburger: (dummy: boolean) => {},
});

export const HamburgerProvider = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  const [showHamburger, setShowHamburger] = useState<boolean>(true);

  return (
    <HamburgerContext.Provider
      value={{
        showHamburger,
        setShowHamburger,
      }}
    >
      {children}
    </HamburgerContext.Provider>
  );
};

export const useShowHamburger = () => {
  const context = useContext<{
    showHamburger: boolean;
    setShowHamburger: (arg0: boolean) => void;
  }>(HamburgerContext);
  if (context === undefined) {
    throw new Error(
      "Please use useShowHamburger within the scoope of a Hamburger Provider"
    );
  }
  return context;
};
