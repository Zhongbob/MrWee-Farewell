import React,{useState,useEffect} from 'react';
import Particle from './Particle';
function MessageContainer({info,sub,moving},ref) {
  const particles = Array(10).fill(0)
  return (
    <div ref = {ref} className={"message" + (sub?" sub":"")} style = {{transform:`translate(${info['x']}px,${info['y']}px)`}}>
        <h2>{info['title']}</h2>
        <p>{info['desc']}</p>
        {false&&particles.map((particle,index)=><Particle key = {index} vx = {info['vx']}/>)}
    </div>
  );
}

export default React.forwardRef(MessageContainer);
