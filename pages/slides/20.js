import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useAudio from "../../shared/useAudio";
import Loader from "../../shared/Loader";
import { useSelector } from "react-redux";
import MenuSite from "./MenuSite";
import VideoArea from "./VideoArea";
import RangeInput from "./RangeInput";
import RangeInputEnergy from "./RangeInputEnergy";

function Slide_21() {
  const baseImgSize = { w: 1920, h: 1080 };
  const baseFontSize = 14.37;
  const router = useRouter();
  const { name } = useSelector((state) => state.incrediwear.user);
  const audio = useAudio("/slides/21/s.mp3", {
    volume: 1,
    playbackRate: 1,
    loop: false,
  });

  const [slideData, setslideData] = useState({
    bg: "/slides/20/bg.jpg",
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
    // setTimeout(() => {
    //   router.push("/slides/04");
    // }, 5000);
    return () => {
      audio.pause();
    };
  }, []);

  const Styles = {
    slide: {
      background: `linear-gradient(rgb(24, 34, 36) 0%, rgb(49, 59, 61) 100%) 0% 0% / 100%`,
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
        <title>Incrediwear Interactive - 20</title>
      </Helmet>
      {slideData.bg ? (
        <motion.main style={Styles.slide} className={`slidePage slidePage`}>
          <div className={`container slider-21 bg-none isSlideContentWrapper`}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span className="jsx-2945311205 text size-2xl color-white">
                Please guess how many light bulbs can light up with the{" "}
                <em>energy</em> produced by your{" "}
                <em>
                  body<em>!</em>
                </em>
              </span>

              <div style={Styles.blankMargin}></div>
            </motion.div>
          </div>
          <div style={{ maxWidth: "90%", margin: "auto" }}>
            <RangeInputEnergy />
          </div>
          <div className="">
            <motion.button
              initial={{ y: -50, opacity: 0, visibility: "hidden" }}
              animate={{ y: 0, opacity: 1, visibility: "visible" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              onClick={() => router.push(`/slides/21`)}
              className="jsx-dd33fbfc98d4eb22 button size-m color-undefined"
              style={{ marginRight: "6rem", marginLeft: "auto" }}
            >
              <div className="jsx-dd33fbfc98d4eb22 bg"></div>
              <span className="jsx-2773753510 text size-l color-standard">
                Move ahead
              </span>
              <div className="jsx-dd33fbfc98d4eb22 icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                </svg>
              </div>
            </motion.button>
          </div>

          <MenuSite next={21} islight={true} previous={19} />
        </motion.main>
      ) : (
        <Loader />
      )}
    </motion.div>
  );
}

export default Slide_21;
