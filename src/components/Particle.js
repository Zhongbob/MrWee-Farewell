import React, { useEffect, useState } from "react";

function Particle({ vx},ref) {

  const [particlevx,setParticlevx] = useState(Math.random() * vx);
  const [particlevy,setParticlevy] = useState(Math.random() * vx);
  const gravity = 0.1;
  const [posx, setPosx] = useState(0);
  const [posy, setPosy] = useState(0);
  useEffect(() => {
    if (posy > 0) {
        setPosx(0);
        setPosy(0);
        setParticlevx(Math.random() * vx);
        setParticlevy(Math.random() * vx);
        };
    const interval = setInterval(() => {
        setParticlevy((prev)=>prev-gravity)
        setPosx((prev) => prev - particlevx);
        setPosy((prev) => prev - particlevy);
    }, 10);
    return () => clearInterval(interval);
  }, [posx, posy, particlevy, particlevx,vx])
  
  return posy<0 && <div className="particle" style={{transform:`translate(${posx}px,${posy}px)`}}></div>;
}

export default Particle;
