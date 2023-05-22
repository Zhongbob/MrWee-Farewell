import React, { useEffect, useRef, useState } from "react";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import bg4 from "../assets/bg4.png";
import bg5 from "../assets/bg5.png";
import bg6 from "../assets/bg6.png";
import bg7 from "../assets/bg7.png";
import bg8 from "../assets/bg8.jpg";
import bg9 from "../assets/bg9.jpeg";
import bg10 from "../assets/bg10.jpg";
import bg11 from "../assets/bg11.jpg";
import bg12 from "../assets/bg12.jpg";
import bg13 from "../assets/bg13.jpg";
import bg14 from "../assets/bg14.jpg";
import bg15 from "../assets/bg15.jpg";
import bg16 from "../assets/bg16.jpg";
import bg17 from "../assets/bg17.jpg";
import bg18 from "../assets/bg18.jpg";
import bg19 from "../assets/bg18.jpg";

import final from "../assets/finalbg.png";
const bgArray = [bg1, bg2, bg3, bg4, bg5, bg6, bg7,bg8,bg9,bg10,bg11,bg12,bg13,bg14,bg15,bg16,bg17,bg18,bg19,final];

function Background({ info, getTimeUntilNext, setInfo, nextBg, setNextBg,darken }) {
  const backgroundRef1 = useRef(null);
  const backgroundRef2 = useRef(null);

  const fadeOutRef = useRef(null);
  const [timeUntilNext, setTimeUntilNext] = useState(null);
  const [swap, setSwap] = useState(false);
  const [bgtoUse, setBgtoUse] = useState(0);
  const [style, setStyle] = useState({});
  useEffect(() => {
    for (var i of bgArray){
      const img = new Image();
      img.src = i;
      
    }
    
  },[])
  useEffect(() => {
    if (!nextBg) return;
    console.log(nextBg);
    if (nextBg === "fade") {
      setTimeout(() => {
        setNextBg(false);
      }, 1714);
      setTimeout(() => {
        setBgtoUse((prev) => (prev + 1) % (bgArray.length-1));
      }, 1000);
    } else if (nextBg === "quick-fade") {
      setTimeout(() => {
        setNextBg(false);
      }, 500);
      setTimeout(() => {
        setBgtoUse((prev) => (prev + 1) % bgArray.length);
      }, 300);
    } else if (nextBg === "final") {
      setTimeout(() => {
        setNextBg(false);
        setInfo((prevInfo) => {console.log({...prevInfo,x:0});return {...prevInfo,x:0}});
      }, 1714);
      setTimeout(() => {
        setBgtoUse(bgArray.length - 1);
        setStyle({width:"100vw"});
      }, 1000);
      
    }
    else {
      setBgtoUse((prev) => (prev + 1) % (bgArray.length-1));
      setNextBg(false);
    }
  }, [nextBg]);
  useEffect(() => {
    const websiteWidth = Math.max(
      document.documentElement.clientWidth,
      document.body.clientWidth
    );
    // console.log(websiteWidth,)
    if (
      backgroundRef1.current.getBoundingClientRect().right <= 0 ||
      backgroundRef2.current.getBoundingClientRect().right <= 0
    ) {
      setSwap((prevSwap) => !prevSwap);
      setInfo((prevInfo) => {
        return { ...prevInfo, x: 0 };
      });
    }
  }, [info]);
  return (
    <div
      className={`background `+(darken?"darken ":"")+(bgtoUse === bgArray.length-1?"final-bg":"")}
      style={{ transform: `translate(${bgtoUse === bgArray.length-1?0:info["x"]}px,${info["y"]}px)` }}
    >
      <img
        ref={backgroundRef1}
        src={bgArray[bgtoUse]}
        alt="background"
        style={{ order: swap ? "2" : "1",...style }}
      />
      <img
        ref={backgroundRef2}
        src={bgArray[bgtoUse]}
        alt="background"
        style={{ transform: `rotateY(180deg)`, order: swap ? "1" : "2" ,...style}}
      />
      {(nextBg === "fade" || nextBg === "quick-fade" || nextBg === "final") && (
        <div
          ref={fadeOutRef}
          className="fade_out"
          style={{
            animationDuration: nextBg === "quick-fade " ? "0.3s !important" : "1s !important",
          }}
        ></div>
      )}
    </div>
  );
}

export default Background;
