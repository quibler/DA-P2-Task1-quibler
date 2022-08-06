import React, { useEffect, useState } from "react";
import UseAnimations from "react-useanimations";
import arrowDown from "react-useanimations/lib/arrowDown";
import arrowUp from "react-useanimations/lib/arrowUp";

function ScrollProgressBar() {
  const [scroll, setScroll] = useState(0);
  const [upRemind, setUpRemind] = useState(false);
  const [downRemind, setDownRemind] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDownRemind(true);
    }, 10000);
  }, []);

  useEffect(() => {
    const progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      scroll > 0.8 ? setDownRemind(false) : setDownRemind(true);
      scroll < 0.18 ? setUpRemind(false) : setUpRemind(true);
      setScroll(scroll);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });

  return (
    <>
      <div
        id="progressBar"
        className="bg-yellow-400 h-1 w-full fixed top-0"
        style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }}
      ></div>
      <div
        className={`fixed right-2 rounded-lg ${
          !upRemind ? "hidden" : ""
        }`}
      >
        <UseAnimations animation={arrowUp} size={40} />
      </div>
      <div
        className={`fixed bottom-2 right-2 rounded-lg ${
          !downRemind ? "hidden" : ""
        }`}
      >
        <UseAnimations animation={arrowDown} size={40} />
      </div>
    </>
  );
}

export default ScrollProgressBar;
