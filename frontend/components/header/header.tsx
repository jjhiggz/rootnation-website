import { ComponentClass } from "react";
import Logo from "../logo/logo";
import RouteLink from "../route-link/route-link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSpotify,
  faYoutube,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { Colors } from "../../styles/colors";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useShowHamburger } from "../../providers/show-hamburger/show-hamburger.provider";

const SocialMediaButton = ({
  url,
  icon,
  color,
}: {
  url: string;
  icon: IconDefinition;
  color: string;
}) => (
  <a href={url}>
    <FontAwesomeIcon icon={icon} size={"3x"} className="ml-10" color={color} />
  </a>
);

const WideHeader = () => {
  const { showHamburger, setShowHamburger } = useShowHamburger();
  return (
    <nav className=" hidden lg:flex flex-row w-full items-center h-24 justify-between select-none ">
      <Logo mobile={false} />
      <div id="nav-links-container" className="w-1/2 flex justify-end">
        <div className="flex w-full flex-col items-end ">
          <div id="right-side-header" className="flex justify-end mb-2">
            <SocialMediaButton
              url="#"
              icon={faFacebook}
              color={Colors.facebookBlue}
            />
            <SocialMediaButton
              url="#"
              icon={faInstagram}
              color={Colors.igPurple}
            />
            <SocialMediaButton
              url="#"
              icon={faSpotify}
              color={Colors.spotifyGreen}
            />
            <SocialMediaButton
              url="https://www.youtube.com/watch?v=KViIyIau1YM&list=UUSAtl7dqMUJsxP0wQrJ2TCw"
              icon={faYoutube}
              color={Colors.ytRed}
            />
          </div>{" "}
          <div id="route-links">
            <RouteLink route="/" text="ABOUT" />
            <RouteLink route="/" text="ARTISTS" />
            <RouteLink route="/" text="MERCH" />
            <RouteLink route="/" text="SERVICES" />
            <RouteLink route="/" text="EVENTS" />
            <RouteLink route="/" text="DONATE" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const MobileHeader = () => {
  const { showHamburger, setShowHamburger } = useShowHamburger();
  return (
    <nav className="flex flex-row w-full h-20 justify-between select-none items-center lg:hidden">
      <div className="flex w-1/6 justify-center h-full">
        <Logo mobile={true} />
      </div>
      <div className="p-2 bg-black hover:bg-gray-600">
        <FontAwesomeIcon
          icon={faBars}
          size={"3x"}
          color="white"
          onClick={() => {
            setShowHamburger(true);
          }}
        />
      </div>
    </nav>
  );
};

export const Header = () => {
  return (
    <header className="w-full px-10 bg-white  bg-opacity-60 fixed z-10 border-b-8 border-black py-2">
      <WideHeader />
      <MobileHeader />
    </header>
  );
};
