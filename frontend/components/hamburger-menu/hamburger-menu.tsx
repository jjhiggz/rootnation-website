import {
  faFacebook,
  faInstagram,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEventHandler } from "react";
import { useShowHamburger } from "../../providers/show-hamburger/show-hamburger.provider";
import { Colors } from "../../styles/colors";
import Logo from "../logo/logo";

const RouteMenuItem = ({
  text,
  onClick,
}: {
  text: string;
  onClick: MouseEventHandler;
}) => (
  <div className="h-10 pl-10 mb-5" onClick={onClick}>
    <h1 className="text-2xl">{text}</h1>
  </div>
);

export const HamburgerMenu = () => {
  const { showHamburger, setShowHamburger } = useShowHamburger();

  return (
    <>
      <div
        className={`h-screen w-screen z-40 fixed overlay  ${
          !showHamburger && "hidden"
        } bg-white`}
      >
        <div className="h-24 px-5 bg-black flex justify-between items-center mb-10 border-b-8 border-black">
          <FontAwesomeIcon
            icon={faChevronLeft}
            size={"lg"}
            color="white"
            onClick={() => setShowHamburger(false)}
          />
          <div className="h-100">
            <Logo mobile={true} />
          </div>
        </div>
        <div id="routes-container" className="flex flex-col items-center">
          <RouteMenuItem
            text="About"
            onClick={() => {
              console.log("route to about");
            }}
          />
          <RouteMenuItem
            text="Artists"
            onClick={() => {
              console.log("route to about");
            }}
          />
          <RouteMenuItem
            text="Merch"
            onClick={() => {
              console.log("route to about");
            }}
          />
          <RouteMenuItem
            text="Events"
            onClick={() => {
              console.log("route to about");
            }}
          />
          <RouteMenuItem
            text="Donate"
            onClick={() => {
              console.log("route to about");
            }}
          />
          <RouteMenuItem
            text="Services"
            onClick={() => {
              console.log("route to about");
            }}
          />
        </div>
        <div id="social-media-container" className="px-10 flex justify-between">
          <FontAwesomeIcon
            icon={faFacebook}
            size="3x"
            color={Colors.facebookBlue}
          />
          <FontAwesomeIcon icon={faYoutube} size="3x" color={Colors.ytRed} />
          <FontAwesomeIcon
            icon={faInstagram}
            size="3x"
            color={Colors.igPurple}
          />
          <FontAwesomeIcon
            icon={faSpotify}
            size="3x"
            color={Colors.spotifyGreen}
          />
        </div>
      </div>
    </>
  );
};
