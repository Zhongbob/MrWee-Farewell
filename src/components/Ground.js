import React,{useRef,useEffect,useState} from 'react';

function Background({info,setInfo}) {
  const groundRef1 = useRef(null);
  const groundRef2 = useRef(null);
  const [swap, setSwap] = useState(false);
  useEffect(() => {
    // console.log(websiteWidth,)
    if (
      groundRef1.current.getBoundingClientRect().right <= 0 ||
      groundRef2.current.getBoundingClientRect().right <= 0
    ) {
      setSwap((prevSwap) => !prevSwap);
      setInfo((prevInfo) => {
        return { ...prevInfo, x: 0 };
      });
    }
  }, [info]);
  return (
    <div className="ground" style = {{transform:`translate(${info['x']}px,${info['y']}px)`}}>
          <div
        ref={groundRef1}
        style={{ order: swap ? "2" : "1" }}
      ></div>
      <div
        ref={groundRef2}
        style={{order: swap ? "1" : "2" }}
      >
      </div>
    </div>
    
  );
}

export default React.forwardRef(Background);
