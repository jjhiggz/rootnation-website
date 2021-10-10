import { ReactElement } from "react";
import { useShowHamburger } from "../../providers/show-hamburger/show-hamburger.provider";

interface MainContentContainerProps {
  children: ReactElement | ReactElement[];
}

const MainContentContainer = ({ children }: MainContentContainerProps) => {
  const { showHamburger } = useShowHamburger();
  return (
    <div
      className={`h-screen w-screen overflow-hidden relative ${
        showHamburger && "noscroll"
      }`}
    >
      {children}
    </div>
  );
};

export default MainContentContainer;
