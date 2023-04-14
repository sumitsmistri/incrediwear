import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useAudio from "../../shared/useAudio";
import Loader from "../../shared/Loader";
import { useSelector } from "react-redux";
import MenuSite from "./MenuSite";
import VideoArea from "./VideoArea";
import AreaSelector from "./AreaSelector";
import AreaSelectionresult from "./AreaSelectionresult";

function Slide_36() {
  const baseImgSize = { w: 1920, h: 1080 };
  const baseFontSize = 14.37;
  const router = useRouter();
  const { name } = useSelector((state) => state.incrediwear.user);
  const audio = useAudio("/slides/36/s.mp3", {
    volume: 1,
    playbackRate: 1,
    loop: false,
  });

  const [slideData, setslideData] = useState({
    bg: "/slides/36/bg.jpg",
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
      router.push("/slides/36");
    }, 10000);
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
        <title>Incrediwear Interactive - 35</title>
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
          <div className={`container slider-36 isSlideContentWrapper`}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <span class="jsx-456089764 text size-xl color-white">
                <em>Incrediwear</em> works best if it&apos;s worn{" "}
                <em>before</em>, <em>during</em>, and <em>after</em> activity.
                We have products for all <em>3 stages</em>
              </span>
            </motion.div>
          </div>

          <MenuSite next={36} islight={true} previous={34} />
        </motion.main>
      ) : (
        <Loader />
      )}
    </motion.div>
  );
}

export default Slide_36;
