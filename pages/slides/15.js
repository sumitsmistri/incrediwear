import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useAudio from "../../shared/useAudio";
import Loader from "../../shared/Loader";
import { useSelector } from "react-redux";
import MenuSite from "./MenuSite";
import VideoArea from "./VideoArea";

function Slide_15() {
  const baseImgSize = { w: 1920, h: 1080 };
  const baseFontSize = 14.37;
  const router = useRouter();
  const { name } = useSelector((state) => state.incrediwear.user);
  const audio = useAudio("/slides/15/s.mp3", {
    volume: 1,
    playbackRate: 1,
    loop: false,
  });

  const [slideData, setslideData] = useState({
    bg: "/slides/15/bg.jpg",
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
      router.push("/slides/16");
    }, 6000);
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
      marginTop: "8rem",
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
        <title>Incrediwear Interactive - 15</title>
      </Helmet>
      {slideData.bg ? (
        <motion.main style={Styles.slide} className={`slidePage slidePage page_15`}>
          <div className={`container slider-15 bg-none`}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span class="jsx-456089764 text size-2xl color-white">
                Incrediwear products emit <em>negative ions</em> and{" "}
                <em>infrared waves</em>
              </span>
            </motion.div>
          </div>
          <div className="jsx-b1643e76e1cebef9 products">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="jsx-b1643e76e1cebef9 productItem productItem-0"
            >
              <div className="fullHeight">
                <div className="jsx-b1643e76e1cebef9 boxItem boxItem-0">
                  <img
                    src="/slides/15/elbow.webp"
                    alt="product image"
                    className="jsx-b1643e76e1cebef9"
                  />
                  <div className="jsx-b1643e76e1cebef9 text">
                    <span className="jsx-2589450523 text size-s color-standard">
                      Elbow sleeve
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* <div className="jsx-b1643e76e1cebef9 productItem productItem-1">
              <div className="fullHeight">
                <div className="jsx-b1643e76e1cebef9 boxItem boxItem-1">
                  <img
                    src="/slides/15/head.webp"
                    alt="product image"
                    className="jsx-b1643e76e1cebef9"
                  />
                  <div className="jsx-b1643e76e1cebef9 text">
                    <span className="jsx-2589450523 text size-s color-standard">
                      Beanie
                    </span>
                  </div>
                </div>
              </div>
            </div> */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="jsx-b1643e76e1cebef9 productItem productItem-1"
            >
              <div className="fullHeight">
                <div className="jsx-b1643e76e1cebef9 boxItem boxItem-2">
                  <img
                    src="/slides/15/leg.webp"
                    alt="product image"
                    className="jsx-b1643e76e1cebef9"
                  />
                  <div className="jsx-b1643e76e1cebef9 text">
                    <span className="jsx-2589450523 text size-s color-standard">
                      Leg sleeve
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <MenuSite next={16} islight={true} previous={14} />
        </motion.main>
      ) : (
        <Loader />
      )}
    </motion.div>
  );
}

export default Slide_15;
