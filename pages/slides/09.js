import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useAudio from "../../shared/useAudio";
import Loader from "../../shared/Loader";
import { useSelector } from "react-redux";
import MenuSite from "./MenuSite";

function Slide_09() {
  const baseImgSize = { w: 1920, h: 1080 };
  const baseFontSize = 14.37;
  const router = useRouter();
  const { name } = useSelector((state) => state.incrediwear.user);
  const audio = useAudio("/slides/09/s09.mp3", {
    volume: 1,
    playbackRate: 1,
    loop: false,
  });

  const [slideData, setslideData] = useState({
    bg: "/slides/08/bg.jpg",
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
      router.push("/slides/10");
    }, 20000);
    return () => {
      audio.pause();
      clearTimeout(t);
    };
  }, []);

  const Styles = {
    slide: {
      background: `linear-gradient(rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.82) 100%)`,
    },
    blankMargin: {
      height: "0px",
      marginBottom: "0rem",
      marginLeft: "0rem",
      marginRight: "0rem",
      marginTop: "8rem",
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
        <title>Incrediwear Interactive - 09</title>
      </Helmet>
      {slideData.bg ? (
        <motion.main style={Styles.slide} className={`slidePage slidePage`}>
          <div className={`container bg-none slider-9`}>
            <div style={Styles.blankMargin}></div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span className="jsx-456089764 text size-2xl color-standard">
                Trusted by thousands of <em>professionals</em>
              </span>
            </motion.div>

            <span className="jsx-2589450523 text size-m color-standard">
              <ul className="jsx-44adabf7c82e4b9f ">
                <div className="">
                  <motion.li
                    className="jsx-cf090d7996995cd8 "
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <div className="jsx-cf090d7996995cd8 dot color-orange"></div>
                    <div className="jsx-cf090d7996995cd8">
                      Used by over 200 professional sports teams across the
                      world
                    </div>
                  </motion.li>
                </div>

                <div className="">
                  <motion.li
                    className="jsx-cf090d7996995cd8 "
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <div className="jsx-cf090d7996995cd8 dot color-orange"></div>
                    <div className="jsx-cf090d7996995cd8">
                      Used by over 1,000 pro athletes
                    </div>
                  </motion.li>
                </div>

                <div className="">
                  <motion.li
                    className="jsx-cf090d7996995cd8 "
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    <div className="jsx-cf090d7996995cd8 dot color-orange"></div>
                    <div className="jsx-cf090d7996995cd8">
                      Used by over 300 surgical centers
                    </div>
                  </motion.li>
                </div>

                <div className="">
                  <motion.li
                    className="jsx-cf090d7996995cd8 "
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >
                    <div className="jsx-cf090d7996995cd8 dot color-orange"></div>
                    <div className="jsx-cf090d7996995cd8">
                      As seen in GQ, Forbes...
                    </div>
                  </motion.li>
                </div>
              </ul>
            </span>
          </div>
          <div className="jsx-1114cc793107e7c9 fixed image image1">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <img src="/slides/09/1.jpg" alt="1.jpg" width={`100%`} />
            </motion.div>
          </div>
          <div className="jsx-1114cc793107e7c9 fixed image image2">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              <img src="/slides/09/2.jpg" alt="2.jpg" width={`100%`} />
            </motion.div>
          </div>
          <div className="jsx-1114cc793107e7c9 fixed image image3">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 3, duration: 0.5 }}
            >
              <img src="/slides/09/3.jpg" alt="3.jpg" width={`100%`} />
            </motion.div>
          </div>
          <div className="jsx-1114cc793107e7c9 fixed image image4">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.5 }}
            >
              <img src="/slides/09/4.jpg" alt="4.jpg" width={`100%`} />
            </motion.div>
          </div>

          <MenuSite next={10} previous={8} />
        </motion.main>
      ) : (
        <Loader />
      )}
    </motion.div>
  );
}

export default Slide_09;
