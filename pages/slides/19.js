import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useAudio from "../../shared/useAudio";
import Loader from "../../shared/Loader";
import { useSelector } from "react-redux";
import MenuSite from "./MenuSite";
import VideoArea from "./VideoArea";

function Slide_19() {
  const baseImgSize = { w: 1920, h: 1080 };
  const baseFontSize = 14.37;
  const router = useRouter();
  const { name } = useSelector((state) => state.incrediwear.user);
  const audio = useAudio("/slides/19/s.mp3", {
    volume: 1,
    playbackRate: 1,
    loop: false,
  });

  const [slideData, setslideData] = useState({
    bg: "/slides/19/bg.jpg",
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
      transition={{ duration: 3 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Incrediwear Interactive - 19</title>
      </Helmet>
      {slideData.bg ? (
        <motion.main style={Styles.slide} className={`slidePage slidePage`}>
          <div className={`container slider-19 bg-none isSlideContentWrapper`}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span className="jsx-456089764 text size-2xl color-standard">
                <em>How</em> is{" "}
                <img
                  src={slideData.logo}
                  alt="Incrediwear Logo"
                  className="jsx-b3dc3e38bbe26cf8"
                />{" "}
                <em>powered</em>?
              </span>

              <div style={{ marginTop: "3rem" }}>
                <motion.span
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                  className="jsx-931690302 text size-m color-standard"
                >
                  The source of energy required to power Incrediwear is
                  available anywhere you are.
                </motion.span>
              </div>

              {/* <div className="jsx-b3dc3e38bbe26cf8 list">
                <ul className="jsx-44adabf7c82e4b9f ">
                  <div className="">
                    <span className="jsx-931690302 text size-m color-standard">
                      <motion.li
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 2, duration: 0.5 }}
                        className="jsx-cf090d7996995cd8 "
                      >
                        <div className="jsx-cf090d7996995cd8 dot color-orange"></div>
                        <div className="jsx-cf090d7996995cd8">
                          <div className="jsx-b3dc3e38bbe26cf8">
                            Does Incrediwear need <em>batteries</em> to produce{" "}
                            <em>negative ions</em> and <em>infrared waves</em>?
                          </div>
                        </div>
                      </motion.li>
                    </span>
                  </div>
                  <div className="">
                    <span className="jsx-931690302 text size-m color-standard">
                      <motion.li
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 4, duration: 0.5 }}
                        className="jsx-cf090d7996995cd8 "
                      >
                        <div className="jsx-cf090d7996995cd8 dot color-orange"></div>
                        <div className="jsx-cf090d7996995cd8">
                          <div className="jsx-b3dc3e38bbe26cf8">
                            Do I have to stay close to a <em>wall outlet</em>?
                          </div>
                        </div>
                      </motion.li>
                    </span>
                  </div>
                </ul>
              </div> */}
              <div style={Styles.blankMargin}></div>
              <div className="jsx-6aa79e3230815163 horizontalEnd">
                <div className="jsx-6aa79e3230815163">
                  <div className="">
                    <motion.button
                      onClick={() => router.push("/slides/20")}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 5, duration: 0.5 }}
                      className="jsx-dd33fbfc98d4eb22 button size-m color-undefined"
                    >
                      <div className="jsx-dd33fbfc98d4eb22 bg"></div>
                      <span className="jsx-2773753510 text size-l color-standard">
                        Tell me more
                      </span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <MenuSite next={20} islight={false} previous={18} />
        </motion.main>
      ) : (
        <Loader />
      )}
    </motion.div>
  );
}

export default Slide_19;
