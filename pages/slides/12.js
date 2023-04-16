import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useAudio from "../../shared/useAudio";
import Loader from "../../shared/Loader";
import { useSelector } from "react-redux";
import MenuSite from "./MenuSite";
import VideoArea from "./VideoArea";

function Slide_12() {
  const baseImgSize = { w: 1920, h: 1080 };
  const baseFontSize = 14.37;
  const router = useRouter();
  const { name } = useSelector((state) => state.incrediwear.user);
  const audio = useAudio("/slides/12/t12.mp3", {
    volume: 1,
    playbackRate: 1,
    loop: false,
  });

  const [slideData, setslideData] = useState({
    bg: "/slides/12/bg.jpg",
    logo: "/incrediwear_logo.webp",
    title_1: `<em>Thanks</em><br/>${name != "" ? name : "JOHN"},`,
    title_2: "For taking a few minutes to watch this presentation",
  });

  useEffect(() => {
    setDim();
    window.addEventListener("resize", function (e) {
      setDim();
    });
    setTimeout(() => {
      audio.play();
    }, 1000);
    let t = setTimeout(() => {
      router.push("/slides/13");
    }, 8000);
    return () => {
      clearTimeout(t);
      audio.pause();
    };
  }, []);

  const Styles = {
    slide: {
      backgroundImage: `url(${slideData.bg})`,
    },
    blankMargin: {
      height: "0px",
      marginBottom: "0rem",
      marginLeft: "0rem",
      marginRight: "0rem",
      marginTop: "3rem",
    },
  };

  const setDim = () => {
    let h = document.body.clientHeight;
    let w = (document.body.clientWidth >= 575) ? (baseImgSize.w * h) / baseImgSize.h : document.body.clientWidth ;

    if (document.body.clientWidth >= 575) {
      if (document.body.clientWidth <= w) {
        w = document.body.clientWidth;
        let ch = (baseImgSize.h * w) / baseImgSize.w;
        h = ch;
      }
    }

    // PAGE
    let sp = document.querySelector(".slidePage");
    if (sp) {
      sp.style.width = `${w}px`;
      sp.style.height = `${h}px`;
    }

    //FONT size
    let cFS = (baseFontSize * h) / baseImgSize.h;
    let b = document.getElementsByTagName("html")[0];
    b.style.fontSize = `${cFS}px`;
    return { w, h, cFS };
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Incrediwear Interactive - 12</title>
      </Helmet>
      {slideData.bg ? (
        <motion.main style={Styles.slide} className={`slidePage slidePage page_12`}>
          <div
            className={`container slider-12 bg-orange-transparent isSlideContentWrapper`}
          >
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span className="jsx-456089764 text size-2xl color-standard">
                <div className="jsx-7f58f01f7abb3e15 white">
                  With <em>blood flow</em> being essential for natural healing,
                  our circulatory system is the <em>river of life</em>.
                </div>
              </span>
              <div style={Styles.blankMargin}></div>

              <div className="jsx-7f58f01f7abb3e15 statisticsRow">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="jsx-7f58f01f7abb3e15 pieChart">
                    <svg viewBox="0 0 100 100" width="100%" height="100%">
                      <path
                        d="M 96 50 A 46 46 0 1 1 95.99999999299379 49.99919714854413"
                        fill="none"
                        strokeWidth="8"
                        stroke="#F2AF73"
                      ></path>
                      <motion.path
                        d="M 96 50 A 46 46 0 1 1 95.99999999299379 49.99919714854413"
                        fill="none"
                        strokeWidth="8"
                        stroke-dasharray="289"
                        // stroke-dashoffset="255.78847385528093"
                        initial={{ strokeDashoffset: 289 }}
                        animate={{ strokeDashoffset: 255 }}
                        transition={{ delay: 1, duration: 1 }}
                        stroke="#eee"
                        style={{
                          transition: "stroke-dashoffset 500ms ease-out 0s",
                        }}
                      ></motion.path>
                    </svg>
                    <div className="jsx-7f58f01f7abb3e15 stats">
                      <span className="jsx-4155346584 text size-xl color-standard">
                        <span>11,5</span>%
                      </span>
                      <span className="jsx-968007655 text size-xs color-standard">
                        Arteries
                      </span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                >
                  <div className="jsx-7f58f01f7abb3e15 pieChart pieChart-3">
                    <svg viewBox="0 0 100 100" width="100%" height="100%">
                      <path
                        d="M 95.5 50 A 45.5 45.5 0 1 1 95.49999999306996 49.999205875190384"
                        fill="none"
                        strokeWidth="9"
                        stroke="#F2AF73"
                      ></path>
                      <motion.path
                        d="M 95.5 50 A 45.5 45.5 0 1 1 95.49999999306996 49.999205875190384"
                        fill="none"
                        strokeWidth="9"
                        stroke-dasharray="285.88493147667117"
                        //stroke-dashoffset="74.33008218393451"
                        initial={{ strokeDashoffset: 285 }}
                        animate={{ strokeDashoffset: 74 }}
                        transition={{ delay: 3, duration: 1 }}
                        stroke="#eee"
                        style={{
                          transition: "stroke-dashoffset 500ms ease-out 0s",
                        }}
                      ></motion.path>
                    </svg>
                    <div className="jsx-7f58f01f7abb3e15 stats">
                      <span className="jsx-4155346584 text size-2xl color-standard">
                        <span>74</span>%
                      </span>
                      <span className="jsx-968007655 text size-xs color-standard">
                        Microcirculation
                      </span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="jsx-7f58f01f7abb3e15 pieChart pieChart-2">
                    <svg viewBox="0 0 100 100" width="100%" height="100%">
                      <path
                        d="M 96 50 A 46 46 0 1 1 95.99999999299379 49.99919714854413"
                        fill="none"
                        strokeWidth="8"
                        stroke="#F2AF73"
                      ></path>
                      <motion.path
                        d="M 96 50 A 46 46 0 1 1 95.99999999299379 49.99919714854413"
                        fill="none"
                        strokeWidth="8"
                        stroke-dasharray="289.02652413026095"
                        // stroke-dashoffset="247.1176781313731"
                        initial={{ strokeDashoffset: 289 }}
                        animate={{ strokeDashoffset: 247 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        stroke="#eee"
                        style={{
                          transition: "stroke-dashoffset 500ms ease-out 0s",
                        }}
                      ></motion.path>
                    </svg>
                    <div className="jsx-7f58f01f7abb3e15 stats">
                      <span className="jsx-4155346584 text size-xl color-standard">
                        <span>14,5</span>%
                      </span>
                      <span className="jsx-968007655 text size-xs color-standard">
                        Veins
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <MenuSite next={13} islight={false} previous={11} />
        </motion.main>
      ) : (
        <Loader />
      )}
    </motion.div>
  );
}

export default Slide_12;
