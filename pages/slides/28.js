import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useAudio from "../../shared/useAudio";
import Loader from "../../shared/Loader";
import { useSelector } from "react-redux";
import MenuSite from "./MenuSite";
import VideoArea from "./VideoArea";

function Slide_29() {
  const baseImgSize = { w: 1920, h: 1080 };
  const baseFontSize = 14.37;
  const router = useRouter();
  const { name } = useSelector((state) => state.incrediwear.user);
  const audio = useAudio("/slides/29/s.mp3", {
    volume: 1,
    playbackRate: 1,
    loop: false,
  });

  const [slideData, setslideData] = useState({
    bg: "/slides/29/bg.jpg",
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
      router.push("/slides/29");
    }, 28000);
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
      marginTop: "6rem",
    },
  };

  const setDim = () => {
    let h = document.body.clientHeight;
    let w = (baseImgSize.w * h) / baseImgSize.h;

    if (document.body.clientWidth <= w) {
      w = document.body.clientWidth;
      let ch = (baseImgSize.h * w) / baseImgSize.w;
      h = ch;
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
        <title>Incrediwear Interactive - 28</title>
      </Helmet>
      {slideData.bg ? (
        <motion.main
          initial={{
            backgroundPosition: "center",
            backgroundSize: "150%",
          }}
          animate={{
            backgroundPosition: "top left",
            backgroundSize: "100%",
          }}
          transition={{ delay: 0, duration: 1 }}
          style={Styles.slide}
          className={`slidePage slidePage`}
        >
          <div
            className={`container slider-28 bg-orange-transparent isSlideContentWrapper`}
          >
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {/* <span className="jsx-456089764 text size-2xl color-standard">
                <em>Performnance</em> enhanced in <br />
                <em>2 ways</em>
              </span> */}
              <div style={Styles.blankMargin}></div>
              <div className="jsx-b3dc3e38bbe26cf8 list list-dark">
                <ul className="jsx-44adabf7c82e4b9f ">
                  <div className="">
                    <span className="jsx-931690302 text size-m color-white">
                      <li className="jsx-cf090d7996995cd8 ">
                        <div className="jsx-cf090d7996995cd8 dot color-orange"></div>
                        <div className="jsx-cf090d7996995cd8">
                          <div className="jsx-b3dc3e38bbe26cf8">
                            <em>Thermoregulation</em> so that people don&apos;t{" "}
                            <em>overheat</em>.
                          </div>
                        </div>
                      </li>
                      <li className="jsx-cf090d7996995cd8 ">
                        <div className="jsx-cf090d7996995cd8 dot color-orange"></div>
                        <div className="jsx-cf090d7996995cd8">
                          <div className="jsx-b3dc3e38bbe26cf8">
                            <em>Continuous</em> delivery of <em>oxygen</em> and
                            nutrients on a <em>microscopic cellular level</em>{" "}
                            minimizes fatigue, thermo regulates the body, and
                            <em>minimizes overheating</em>.
                          </div>
                        </div>
                      </li>
                    </span>
                  </div>
                </ul>
              </div>
            </motion.div>
          </div>

          <MenuSite next={29} islight={false} previous={27} />
        </motion.main>
      ) : (
        <Loader />
      )}
    </motion.div>
  );
}

export default Slide_29;
