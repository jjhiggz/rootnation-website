import { rainbowAssigner } from "../../util/rainbow-assigner";
import { useEffect, useState } from "react";

const TitleLetter = ({
  color,
  letter,
  size,
}: {
  color: string;
  letter: string;
  size: string;
}) => (
  <span>
    <p
      className={`text-${size} font-bold text-${color} drop-shadow-sm text-shadow-lg`}
    >
      {letter}
    </p>
  </span>
);

const Logo = ({ mobile }: { mobile: boolean }) => {
  const [startingIndex, setStartingIndex] = useState(0);

  useEffect(() => {
    const clearTimout = setTimeout(() => {
      if (startingIndex === 6) {
        setStartingIndex(0);
      }
      setStartingIndex(startingIndex + 1);
    }, 700);
    return clearTimeout;
  }, [startingIndex]);

  const logoText = mobile ? "RNR" : "ROOTNATION";
  return (
    <>
      {!mobile && (
        <div className="flex bg-black h-full items-center border-8 rounded-xl border-gray-700 m-0 cursor-default px-2 stroke-white justify-center">
          {logoText.split("").map((letter, index) => {
            return (
              <TitleLetter
                letter={letter + (index > 3 ? "     " : ".")}
                color={rainbowAssigner(index + startingIndex)}
                size="3xl"
              />
            );
          })}
        </div>
      )}
      {mobile && (
        <div className="flex bg-black h-full items-center border-8 rounded-full border-gray-700 m-0 cursor-default px-5 stroke-white justify-center">
          {logoText.split("").map((letter, index) => {
            return (
              <TitleLetter
                letter={letter}
                color={rainbowAssigner(index + startingIndex)}
                size="3xl"
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Logo;
