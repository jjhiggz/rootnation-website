import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { rainbowAssigner } from "../../util/rainbow-assigner";

const defaultProps = {
  className: "",
};

const RouteLink = ({
  route,
  text,
  className,
}: { route: string; text: string } & typeof defaultProps) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [animationTriggered, setAnimationTriggered] = useState<boolean>(false);
  const [activeRainbowIndex, setActiveRainbowIndex] = useState<number>(0);

  useEffect(() => {
    const clearInterval: ReturnType<typeof setTimeout> = setTimeout(() => {
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
        className={`text-black  font-extrabold ml-5 text-xl ${className}`}
      >
        {!hovered && <span>{text}</span>}
        {hovered &&
          text.split("").map((letter, index) => (
            <span
              key={index}
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

RouteLink.defaultProps = defaultProps;

export default RouteLink;
