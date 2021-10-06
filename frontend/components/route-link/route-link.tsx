import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { rainbowAssigner } from "../../util/rainbow-assigner";

const RouteLink = ({ route, text }: { route: string; text: string }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [animationTriggered, setAnimationTriggered] = useState<boolean>(false);
  const [activeRainbowIndex, setActiveRainbowIndex] = useState<number>(0);

  useEffect(() => {
    const clearInterval = setTimeout(() => {
      if (animationTriggered && hovered) {
        setActiveRainbowIndex(activeRainbowIndex + 1);
        if (activeRainbowIndex === 10) {
          setAnimationTriggered(false);
          setActiveRainbowIndex(0);
        }
        return clearInterval;
      }
      if (!hovered) {
        setActiveRainbowIndex(0);
        setAnimationTriggered(false);
      }
    }, 100);
  }, [animationTriggered, activeRainbowIndex]);
  return (
    <Link href={route}>
      <a
        onMouseEnter={() => {
          setAnimationTriggered(true);
          setHovered(true);
        }}
        onMouseLeave={() => setHovered(false)}
        onMouseDown={() => setHovered(false)}
        onMouseUp={() => setHovered(false)}
        className="text-black  font-extrabold ml-5 text-xl "
      >
        {!hovered && <span>{text}</span>}
        {hovered &&
          text
            .split("")
            .map((letter, index) => (
              <span
                className={
                  index === activeRainbowIndex
                    ? `text-${rainbowAssigner(index)} text-xl`
                    : `text-green-400` + `text-shadow-lg`
                }
              >
                {letter}
              </span>
            ))}
      </a>
    </Link>
  );
};

export default RouteLink;
