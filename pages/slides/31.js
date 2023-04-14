import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useAudio from "../../shared/useAudio";
import Loader from "../../shared/Loader";
import { useSelector } from "react-redux";
import MenuSite from "./MenuSite";
import VideoArea from "./VideoArea";

function Slide_32() {
  const baseImgSize = { w: 1920, h: 1080 };
  const baseFontSize = 14.37;
  const router = useRouter();
  const { name } = useSelector((state) => state.incrediwear.user);
  const audio = useAudio("/slides/32/s.mp3", {
    volume: 1,
    playbackRate: 1,
    loop: false,
  });

  const [slideData, setslideData] = useState({
    bg: "/slides/32/bg.jpg",
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
    // let t = setTimeout(() => {
    //   router.push("/slides/29");
    // }, 25000);
    return () => {
      //   clearTimeout(t);
      audio.pause();
    };
  }, []);

  const Styles = {
    slide: {
      background: `linear-gradient(rgb(24, 34, 36) 0%, rgb(49, 59, 61) 100%)`,
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
        <title>Incrediwear Interactive - 31</title>
      </Helmet>
      {slideData.bg ? (
        <motion.main style={Styles.slide} className={`slidePage slidePage`}>
          <div className={`container  slider-32 isSlideContentWrapper`}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                class="jsx-2945311205 text size-xl color-white"
              >
                Our <em>scientific</em> studies are <em>game-changing</em>
              </motion.span>
            </motion.div>
          </div>
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="jsx-3d6d8b5904c975a9 imageContainer image1"
          >
            <div>
              <img
                src="/slides/32/img_1.png"
                alt="study 1"
                className="jsx-3d6d8b5904c975a9"
              />
              <div className="jsx-3d6d8b5904c975a9 caption caption1">
                <span className="jsx-931690302 text size-caption color-white">
                  The major German soccer club 1. FC Cologne has found out in a
                  scientifically conducted study that wearing Incrediwear
                  contributed to
                  <em>faster absorption of swelling and pain improvement</em> in
                  acute injuries. Players were little or <em>not restricted</em>
                  in their <em>training performance</em>.
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="jsx-3d6d8b5904c975a9 imageContainer image2"
          >
            <div>
              <img
                src="/slides/32/img_2.png"
                alt="study 1"
                className="jsx-3d6d8b5904c975a9"
              />
              <div className="jsx-3d6d8b5904c975a9 caption">
                <span className="jsx-931690302 text size-caption color-white">
                  The study was conducted by USC Division of Biokinesiology
                  &amp; Physical Therapy on the Real Salt Lake soccer club and
                  focused on the <em>effectiveness of wearing Incrediwear</em>{" "}
                  sleeves to <em>reduce time-loss for professional athletes</em>
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="jsx-3d6d8b5904c975a9 imageContainer image3"
          >
            <div>
              <img
                src="/slides/32/img_3.png"
                alt="study 3"
                className="jsx-3d6d8b5904c975a9"
              />
              <div className="jsx-3d6d8b5904c975a9 caption caption3">
                <span className="jsx-931690302 text size-caption color-white">
                  Major studies are{" "}
                  <a
                    href="https://incrediwear.com/pages/research"
                    target="_blank"
                    rel="noreferrer"
                    className="jsx-3d6d8b5904c975a9"
                  >
                    here
                  </a>{" "}
                  on our website
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="jsx-3d6d8b5904c975a9 imageContainer image4"
          >
            <div>
              <img
                src="/slides/32/img_4.png"
                alt="study 4"
                className="jsx-3d6d8b5904c975a9"
              />
            </div>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
            className="jsx-dd33fbfc98d4eb22 button size-m color-undefined btnABS32"
            onClick={() => router.push("/slides/32")}
          >
            <div className="jsx-dd33fbfc98d4eb22 bg"></div>Move ahead
            <div className="jsx-dd33fbfc98d4eb22 icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
              </svg>
            </div>
          </motion.button>

          <MenuSite next={32} islight={true} previous={30} />
        </motion.main>
      ) : (
        <Loader />
      )}
    </motion.div>
  );
}

export default Slide_32;
