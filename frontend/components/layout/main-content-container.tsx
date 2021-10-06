import { ReactElement } from "react";

interface MainContentContainerProps {
  children: ReactElement | ReactElement[];
}

const MainContentContainer = ({ children }: MainContentContainerProps) => (
  <div className="h-screen w-screen overflow-hidden relative">{children}</div>
);

export default MainContentContainer;
