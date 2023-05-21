import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import "./css/Scene.css";
import MessageContainer from "./components/MessageContainer";
import Ground from "./components/Ground";
import Background from "./components/Background";
import mainMusic from "./assets/main.mp3";
import collisionSound from "./assets/collision.mp3";
const music = new Audio(mainMusic);
const collisionSoundEffect = new Audio(collisionSound);
const peopleData = [
  {"title":"Farewell, Mr Wee","desc":"                                                                                                                                                                                  "},
  {"title":"Brought to you by 23J17","desc":"                                                                                                                                                                                  "},
  {"title":"Website Created by Zhong Ding","desc":"Using React.js, HTML, CSS and Javascript. I am now brain dead goodbye. Also #Shameless RdeV Plug                                                                                                                                                                                  "},
  {"title":"Music: 立化美女 by Min Kabar Kyaw","desc":"                                                                                                                                                                                  "},
  {'title': 'CARISSA LIEW HUI WEN', 'desc': 'Hello Mr wee I think you would make a good stand up comedian (sitting works too). Thank you for teaching us the work of geniuses with such enthusiasm I wish I had for physics.'},
{'title': 'DAPHNE CHIA MIN HUI', 'desc': 'hi mr wee thanks for being an amazing physics teacher i really enjoyed your lessons and all the best in your new school!!!'},
{'title': 'GOH ROU HUI ASHLEY', 'desc': 'Thank you Mr Wee, for guiding us so far this year. The jokes you made in class were always a good wake up call and brought much laughter to class. Thank you for bringing us a whole new experience in physics lessons and good luck in your next school. Hopefully you’ll get a class you won’t have to call girls and boys ._.'},
{'title': 'NG SHI QING, EUGENIA', 'desc': 'Hello Mr Wee, thank you for being an amazing physics teacher and always being willing to deal with our shenanigans. Your lessons are always so funny but yet taught in a way that everybody can understand. I wish you all the best in your new school and pls don’t forget us TvT\n\np.s. don’t worry, i’ll disturb you via whatsapp to find out which school you’re teaching hehehe'},
{'title': 'SELINA THEN SHI MIIN', 'desc': 'hello mr wee'},
{'title': 'TOH YUEN HUI', 'desc': "hi mr wee, thanks for being an amazing physics teacher. you really made lessons very entertaining and made physics a fun subject to learn. i wish you all the best in your new school. please don't forget us"},
{'title': 'YEO SU GAR', 'desc': 'thank you mr wee for being so entertaining and making lessons fun and interesting for us while helping us learn. you may not be a good physics teacher (your words not mine) but you were the best physics teacher i’ve had in RV! all the best in your mystery school sayonara'},
{'title': 'ZHANG HUIXIN', 'desc': 'Hi Mr Wee, thank you for looking our for me and helping me in physics haha meeting me kinda last minute for consult and all :D Thanks to you I’ve become more confident in kinematics! >\\/< Thank you and all the best in your new school!! 😀'},
{'title': 'CHEE JUN HAN ISSAC', 'desc': 'Hello Mr Wee, thank you for being the best physics cher I ever had in my school life. They said "The best teachers are the ones who make the subject entertaining and fun.”, and they aren\'t wrong. Not only did you make class so lively and humorous, but we also got to learn and understand the complex topics easily, which is something I haven’t experienced in a long time. All the best in your new school!'},   
{'title': 'CHEW JIN HAO', 'desc': 'Thanks for waking me up in class Mr Wee :D I think you are a bit overqualified to teach in RV, so wish you all the best in your new school! Really appreciate your style of teaching and how you make lessons so lively and understandable.'},
{'title': 'CHUA ZHONG DING', 'desc': 'Hello Mr Wee, thank you for entertaining most of my questions, both during normal physics class and physics talent class :D. It was a pleasure assisting you in by becoming your physics representative, where I definitely did an excellent job yes. I will continue enjoying physics even after you are gone with our new teacher. Thank you for your hard work, and all the best for your future!'},
{'title': 'DYLAN ZIHONG SAGA', 'desc': 'Hello Mr Wee, thank you for making funny jokes all the time. My personal favourite was the “spring constant” joke. Very original hahaha. All the best in your new school.'},
{'title': 'FOO CHUAN YUAN', 'desc': 'hello mr wee u are a very good physic teacher thank you for making physics less boring and wish you all the best for you future endevours :))'},
{'title': 'HONG WENQI', 'desc': 'Hello Mr Wee, I would like to thank you for the wee time we spend together. You are a very interesting teacher and all your lame jokes in class always seem to wake me up and motivate me to continue studying physics! It means alot to have a teacher be so entertaining and inspiring at the same time :D Thanks for always taking the time to help us out and taking extra steps for us to truly understand and appreciate physics! You are amazing and KEEP UP THE GOOD WORK!! I will score well for you <3'},
{'title': 'LEONG NGAI KIT', 'desc': 'Hi Mr Wee, thanks for being such a wonderful physics teacher. You never ceased to amaze me with how you can make complicated topics so easy to understand for me, considering and i quote you “my physics not so good”. Your lessons are also very entertaining and the jokes especially were what I enjoyed the most. Also, your singing is very very good. Thank you, and all the best in your new school.'},
{'title': 'MAH KIAN SIONG JERALD', 'desc': 'Thank you Mr Wee for teaching us physics for the past semester, your lessons are always interesting and enjoyable. Wish you all the best in your next school!'},
{'title': 'NICHOLAS NG YI JIE', 'desc': 'Hi Mr Wee, thanks for teaching us physics and answering all of my questions. Although I missed some lessons, it was still very interesting to hear about all your stories when you teach us physics. ATB for your next school!'},
{'title': 'SHI YU XIANG', 'desc': 'Thank you Mr Wee for sharing with us the stories of your powerful ex girlfriends and funny jokes. 祝你身体健康万事如意 Bye bye Mr Wee *Microwave* 👋🏻'},
{'title': 'TAN IK KAI AYDEN', 'desc': 'Thanks Mr Wee for being such a great teacher! Ur singing is so nice HAHAHA. Thanks for always entertaining us in class and making our lessons fun with all your stories. Atb for ur future endeavours and hope u have fun in life.'},
{'title': 'TAN YI JUN', 'desc': "Just wanted to say a big thank you! You turned the complicated stuff into something we could actually get. As you head off to new stuff, remember you've made a difference here. Good luck with whatever's next!"},
{'title': 'WANG TING AN', 'desc': 'Hi Mr Wee, you give me the impression of the kind of humorous university lecturer that only exist in movies. I really enjoys our lesson and I sincerely thank you for giving me an amazing introduction to H2 physics. \nps. Sorry I occasionally sleep in your lesson, the lesson just so happens to always be in early morning 🙏'},
{'title':"CLASS MESSAGE",'desc': 'Thank you for guiding our class for the past half a year. Though only half a year has passed, your humour, teachings, sense of humour and your willingness to engage in class conversations even after class have left a lasting impression on us. You have shown deep enjoyment and excitement in physics, making lessons more fun that it would have otherwise been. Thank you, and all the best in your future endeavours!<br>Best Regards,<br>23J17',m:10000000000000000000000000},
{'title': 'Thank you, Mr Wee', 'desc': '',m:10000000000000000000000000}
]

function App() {
  const mainRef = useRef(null);
  const subRef = useRef(null);
  const callSub = useRef(null);
  const getCurrentPt = useRef(null);
  const [collided, setCollided] = useState(false);
  const [bgInfo, setBgInfo] = useState({ x: 0, y: 0 });
  const [groundInfo, setGroundInfo] = useState({ x: 0, y: 0 });
  const [mainInfo, setMainInfo] = useState({
    x: 0,
    y: 0,

    vx: 20,
    vy: 0,
    ...peopleData[0],
    m: peopleData[0]["desc"].length,
  });
  const [subInfo, setSubInfo] = useState(null);
  const [start, setStart] = useState(false);
  const [currentPt, setCurrentPt] = useState(0);
  const [darken , setDarken] = useState(false);
  const [stop, setStop] = useState(false);
  const getTimeUntilNext = (audio) => {
    audio = audio ?? music;
    console.log(Math.floor((audio.currentTime * 1000 - 2000) / 1714) + 1);
    return (
      (Math.floor((audio.currentTime * 1000 - 2000) / 1714) +
        1 -
        (audio.currentTime * 1000 - 2000) / 1714) *
      1714
    );
  };
  useEffect(() => {
    callSub.current = (timeUntil, audio) => {
      console.log("Ran")
      const websiteWidth = Math.max(
        document.documentElement.clientWidth,
        document.body.clientWidth
      );
      timeUntil = timeUntil ?? getTimeUntilNext(audio);
      const predictedTime =
        ((websiteWidth - mainRef.current.getBoundingClientRect().right) /
          mainInfo["vx"]) *
          33.3 +150
      var awaittime =
        predictedTime > timeUntil
          ? timeUntil - predictedTime + 1714
          : timeUntil - predictedTime;
      setCurrentPt((prev)=>{
        return prev+1})
          setTimeout(() => {
        setSubInfo({
          x: 0,
          y: 0,
          vx: mainInfo["vx"],
          vy: 0,
          m: peopleData[currentPt+1]["desc"].length,
          ...peopleData[currentPt+1],
        });
      }, awaittime);
    };
    getCurrentPt.current = () => currentPt;
},[currentPt,mainInfo])
  useEffect(() => {
    const collision = () => {
      console.log(music.currentTime)
      collisionSoundEffect.play();
      setCollided(true);
      const oldInfo = [mainInfo, subInfo];
      setSubInfo((prevInfo) => {
        return {
          ...oldInfo[0],
          vx: (2 * mainInfo.m * mainInfo.vx) / (mainInfo.m + subInfo.m),
          x:
            -mainRef.current.getBoundingClientRect().left -
            mainRef.current.getBoundingClientRect().width,
        };
      });
      setMainInfo((prevInfo) => {
        return {
          ...oldInfo[1],
          vx: (2 * mainInfo.m * mainInfo.vx) / (mainInfo.m + subInfo.m),
          x: mainRef.current.getBoundingClientRect().width,
        };
      });
      if (((2 * mainInfo.m * mainInfo.vx) / (mainInfo.m + subInfo.m))<10 && mainInfo.m !== 10000000000000000000000000){
        setTimeout(()=>{
          setMainInfo((prevInfo) => {
            return {
              ...prevInfo,
              vx: 20,
            };
          });
        },getTimeUntilNext())
      }
    };
    const interval = setInterval(() => {
      
      var extra = 0;
      if (mainInfo["x"] >= 0) {
        extra = 10;
        setMainInfo((prevInfo) => {
          return {
            ...prevInfo,
            x: prevInfo.x - extra > 0 ? prevInfo.x - extra : 0,
          };
        });
      }
      if (subInfo) {
        setSubInfo((prevInfo) => {
          return prevInfo
            ? { ...prevInfo, x: prevInfo.x - prevInfo["vx"] -extra}
            : null;
        });
        if (subRef.current.getBoundingClientRect().right <= 0) {
          setCollided(false);
          setSubInfo(null);
        }
        if (
          !collided &&
          subRef.current.getBoundingClientRect().left <=
            mainRef.current.getBoundingClientRect().right
        ) {
          collision();
        }
      }
      if (stop) return
      setBgInfo((prevInfo) => {
        return { x: prevInfo.x - mainInfo["vx"] - extra, y: prevInfo.y };
      });
      setGroundInfo((prevInfo) => {
        return { x: prevInfo.x - mainInfo["vx"] * 0.5 - extra, y: prevInfo.y };
      });
    }, 33.3);
    return () => clearInterval(interval);
  }, [mainInfo, subInfo, collided,start,stop]);

  useEffect(() => {

    const clickHandler = (e) => {
      console.log(music.currentTime-(2*60000+49755)/1000)

      if (mainInfo["x"] > 0 || (subInfo!==null && !collided)) return;
      if (!start) {
        music.play();
        const startmoments = (moments,delay) => {for (var j= 0; j < moments.length; j++) { 
          const toRun = moments[j][1];
          setTimeout(() => {
            toRun();
          }, moments[j][0]+delay);
        }}
        const rapidBeats1 = ()=>{
          // so so xu
          setNextBg("instant")
          setTimeout(()=>{setNextBg("instant")},214.25)
          setTimeout(()=>{setNextBg("instant")},642.75)
        }
        const rapidBeats2 = ()=>{
          setNextBg("instant")
          setTimeout(()=>{setNextBg("instant")},214.25)
          setTimeout(()=>{setNextBg("instant")},642.75)
          setTimeout(()=>{setNextBg("instant")},1071.25)
        }
        const halfBeats = (count,type)=>{
          type = type ?? "instant"
          for (var i = 0; i < count; i++) {
            setTimeout(()=>{setNextBg(type)},i*214.25);
          }
        }

        const wholeBeats = (count,type)=>{
          type = type ?? "instant"
          for (var i = 0; i < count; i++) {
            setTimeout(()=>{setNextBg(type)},i*428.5);
          }
          
        }
        const doubleBeats = (count,type)=>{
          type = type ?? "instant"
          for (var i = 0; i < count; i++) {
            setTimeout(()=>{setNextBg(type)},i*857);
          }
          
        }
        const barBeats = (count,type)=>{
          type = type ?? "instant"
          for (var i = 0; i < count; i++) {
            setTimeout(()=>{setNextBg(type)},i*1714);
          }
          
        }
        const doubleBarBeats = (count,type)=>{
          type = type ?? "instant"
          for (var i = 0; i < count; i++) {
            setTimeout(()=>{setNextBg(type)},i*3428);
          }
          
        }
        const interlude1Moments = [
          [1714,()=>{
            barBeats(2)
          }],
          [5263,()=>{
            rapidBeats1()
          }],
          [7009,()=>{
            wholeBeats(8)
          }],
          [10443,()=>{
            setNextBg("instant")
          }],
          [12146,()=>{
            rapidBeats2()
          }],
          [13766,()=>{
            barBeats(3)
          }], 
          [18975,()=>{
            rapidBeats2()
          }],
          [20724,()=>{
            wholeBeats(8)
          }],
          [24115,()=>{
            setNextBg("instant")
          }],
          [25858,()=>{
            rapidBeats2()
          }],
          [27473,()=>{
            if (getCurrentPt.current() <= 19){
              music.currentTime = 126877/1000
              startmoments(interlude1Moments,-100)
              console.log(interlude1Moments)
            }
            else{
              setDarken(false)
              startmoments(interlude2Moments,-100)
            }
          }],

          

        ]
        const importantMoments = [
          [0,()=>{
            callSub.current()
          }],
          [5000,()=>{
            callSub.current()
          }],
          [10000,()=>{
            callSub.current()
          }],
          [13798,()=>{
            doubleBarBeats(9,"fade")
            callSub.current()
          }],
          [44650,()=>{
            barBeats(6)
          }],
          [54810,()=>{
            halfBeats(4);
          }],
          [56300,()=>{
            setDarken(true);
          }],
          [59997,()=>{
            setNextBg("instant");
          }],
          [60000+3464 ,()=>{
            doubleBeats(5)
          }],
          [60000+8626 ,()=>{
            rapidBeats2()
          }],
          [60000+10397  ,()=>{
            barBeats(2)
          }],
          [60000+15509  ,()=>{
            rapidBeats1()
          }],
          [60000+17229  ,()=>{
            doubleBeats(4)
          }],
          [60000+20696    ,()=>{
            setNextBg("instant");
          }],
          [60000+22366    ,()=>{
            rapidBeats2()
          }],
          // [60000+22385    ,()=>{
          //   setNextBg("fade");
          // }],
          [60000+24000    ,()=>{
            setDarken(false);
          }],
          [60000+22385+1714*2    ,()=>{
            doubleBarBeats(6,"fade")
          }],
          [106381    ,()=>{
            doubleBarBeats(2,"fade")
          }],
          [113237    ,()=>{
            barBeats(3)
          }],
          [120093    ,()=>{
            barBeats(3)
          }],
          [125257    ,()=>{
            halfBeats(4)
          }],
          // [126377    ,()=>{
          //   setNextBg("quick-fade");
          // }],
          [126777    ,()=>{
            setDarken(true);
          }],
          [126877,()=>{
            startmoments(interlude1Moments,-100)
          }],

      
        ]
        const interlude2Moments = [
          [1714,()=>{
            doubleBarBeats(4,"fade")
          }],
          [15505,()=>{
            if (getCurrentPt.current() < 23){
              console.log("Looping")
              music.currentTime = 154459/1000
              startmoments(interlude2Moments,-100)
            }
            else{
              setDarken(true)
              startmoments(finalMoments,200)
            }
          }]
        ]
        const finalMoments = [
          [1714,()=>{doubleBarBeats(2,"fade")}],
          [8570,()=>{setNextBg("fade")
                      callSub.current()}],
          [10312,()=>{wholeBeats(2)}],
          [11223,()=>{halfBeats(4)}],
          // [11569.5,()=>{setNextBg("instant")}],
          // [11998,()=>{setNextBg("instant")}],
          // [12426.5,()=>{setNextBg("instant")}],
          [12114,()=>{rapidBeats2()}],
          // [12855,()=>{setNextBg("instant")}],
          // [13069.25,()=>{setNextBg("instant")}],
          // [13283.5,()=>{setNextBg("instant")}],
          // [13497.75,()=>{setNextBg("instant")}],
          [13712,()=>{setNextBg("instant")}],
          [14569,()=>{setNextBg("instant")}],
          [15426,()=>{setNextBg("instant")}],
          [16283,()=>{setNextBg("instant")}],
          [17194,()=>{setNextBg("instant")}],
          // xiao tou ju
          [18715,()=>{rapidBeats1()}],
          [20636,()=>{doubleBeats(5)}],
          [24492.5,()=>{setNextBg("instant")}],
          [24938,()=>{halfBeats(4)}],
          [25778,()=>{setNextBg("instant")}],
          [25992.25,()=>{setNextBg("instant")}],
          [26635,()=>{setNextBg("instant")}],
          [27519,()=>{setNextBg("final")
                  callSub.current()

        }],
        [28519,()=>{
                  setDarken(false)
                  setStop(true)

        }],
        ]
        startmoments(importantMoments,100)
        setStart(true);
        return;
      }
      if (music.currentTime >= 15.731 && getCurrentPt.current()<23) callSub.current();
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [mainInfo, start, collided, subInfo]);
  const [nextBg, setNextBg] = useState(null);
  return (
    <div className="scene">
      <Background nextBg={nextBg} setNextBg={setNextBg}
        getTimeUntilNext={getTimeUntilNext}
        info={bgInfo}
        setInfo={setBgInfo}
        darken = {darken}
      />
      <MessageContainer
        ref={mainRef}
        moving={true}
        sub={false}
        info={mainInfo}
        title="Test"
        desc="Hello"
      />
      {subInfo ? (
        <MessageContainer
          sub={true}
          moving={collided}
          ref={subRef}
          info={subInfo}
          title="Test"
          desc="Hello"
        />
      ) : null}
      <Ground info={groundInfo} setInfo={setGroundInfo}/>
      <label className="momentum">p = {Math.round(mainInfo["m"]*mainInfo["vx"])} Ns</label>

    </div>
  );
}

export default App;
