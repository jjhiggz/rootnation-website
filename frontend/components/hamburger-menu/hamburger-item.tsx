import { MouseEventHandler, useEffect, useState } from "react";
import { useShowHamburger } from "../../providers/show-hamburger/show-hamburger.provider";

export const HamburgerItem = ({
  clickHandler,
  text,
}: {
  clickHandler: MouseEventHandler;
  text: string;
}) => {
  const [pressed, setPressed] = useState<boolean>(false);
  const { setShowHamburger } = useShowHamburger();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (pressed) {
        setPressed(false);
      }
    }, 60);
    return () => {
      clearTimeout(timer);
    };
  }, [pressed]);
  return (
    <div className="flex w-100 h-20">
      <div
        className="h-100 w-1/4 bg-black  opacity-50 "
        onClick={() => {
          setShowHamburger(false);
        }}
      ></div>
      <div className="text-white text-2xl w-1/2 text-center bg-black">
        <div
          onClick={(e) => {
            setPressed(true);
            clickHandler(e);
          }}
          className={`transform ${pressed ? "scale-110" : ""}`}
        >
          {text}
        </div>
      </div>
      <div
        className="h-100 w-1/4 bg-black opacity-50 "
        onClick={() => {
          setShowHamburger(false);
        }}
      ></div>
    </div>
  );
};
