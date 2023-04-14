import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useAudio from "../../shared/useAudio";
import Loader from "../../shared/Loader";
import { useDispatch, useSelector } from "react-redux";
import { nextslide } from "../../reducers/index";

function Slide_02() {
  const bgs = useSelector((state) => state.incrediwear.bgs);
  const baseImgSize = { w: 1920, h: 1080 };
  const baseFontSize = 14.37;
  const router = useRouter();
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state.incrediwear.user);
  const [formname, setformname] = useState(name);
  const [formemail, setformemail] = useState(email);
  const [iswfhpr, setiswfhpr] = useState(false);

  const audio = useAudio("/slides/02/s02.mp3", {
    volume: 1,
    playbackRate: 1,
    loop: false,
  });

  const [slideData, setslideData] = useState({
    bg: bgs[1],
    title_1: "Let's get <br/> you <em>started</em>",
  });

  const onNameChange = (e) => {
    setiswfhpr(!iswfhpr);
  };

  useEffect(() => {
    setTimeout(() => {
      audio.play();
    }, 1000);
    setDim();
    window.addEventListener("resize", function (e) {
      setDim();
    });
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
      marginTop: "5rem",
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

  const handleClick = () => {
    dispatch({
      type: "setUserDetails",
      payload: {
        name: formname,
        email: formemail,
        workingForHealthProductRetailer: iswfhpr,
      },
    });
    router.push("/slides/03");
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
        <title>Incrediwear Interactive - 02</title>
      </Helmet>
      {slideData.bg ? (
        <motion.main
          initial={{
            backgroundPosition: "center",
            backgroundSize: "200%",
          }}
          animate={{
            backgroundPosition: "top left",
            backgroundSize: "100%",
          }}
          transition={{ delay: 0, duration: 1 }}
          style={Styles.slide}
          className={`slidePage slidePage`}
        >
          <div className={`container bg-none slider-2`}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span
                className="text size-2xl color-standard"
                dangerouslySetInnerHTML={{ __html: slideData.title_1 }}
              ></span>
            </motion.div>
            <div style={Styles.blankMargin}></div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="fullWidth">
                <div className="inputGrid">
                  <div className="label input">
                    <label for="name" className="">
                      <span className="text size-m color-standard">
                        Your name:
                      </span>
                    </label>
                  </div>
                  <div className="field input">
                    <input
                      id="name"
                      type="text"
                      placeholder="My first name"
                      autocomplete="off"
                      className=""
                      value={formname}
                      onChange={(e) => setformname(e.target.value)}
                    />
                  </div>
                  <div className="label input">
                    <label for="email" className="">
                      <span className="text size-m color-standard">Email:</span>
                    </label>
                  </div>
                  <div className="field input">
                    <input
                      id="email"
                      type="email"
                      placeholder="My email adress"
                      autocomplete="off"
                      className=""
                      value={formemail}
                      onChange={(e) => setformemail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            <div style={Styles.blankMargin}></div>
            <div className="so2_wrap">
              <div className="row">
                {/* <div className="checkboxwrap clickable">
                  <div
                    className={`checkbox inverted small ${
                      iswfhpr ? "active" : ""
                    } `}
                    onClick={onNameChange}
                  >
                    <svg
                      width="100%"
                      viewBox="0 0 265 239"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      transform-origin="138px 106.75px"
                    >
                      <g
                        clip-path="url(#clip0_4_12)"
                        className="jsx-666091d8ee850693"
                      >
                        <path
                          d="M-12.5 125L87.5 213.5L288.5 0"
                          stroke="white"
                          strokeWidth="36"
                          className="jsx-666091d8ee850693"
                        ></path>
                      </g>
                      <defs className="jsx-666091d8ee850693">
                        <clipPath
                          id="clip0_4_12"
                          className="jsx-666091d8ee850693"
                        >
                          <rect
                            width="265"
                            height="239"
                            fill="white"
                            className="jsx-666091d8ee850693"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div> */}
                {/* <div className="col">
                  <div className="clickable">
                    <span className="text size-s color-standard">
                      I am working for a health product retailer
                    </span>
                  </div>
                  <div className="blank2">&nbsp;</div>
                  <span className="text size-xs color-standard">
                    I am working for a retailer selling health products or for a
                    pharmacy. I am already a member of the world of Incrediwear
                    as a salesperson or would like to join.
                  </span>
                </div> */}
              </div>
            </div>
            <div style={Styles.blankMargin}></div>
            <div className="jsx-6aa79e3230815163 horizontalEnd">
              <div className="jsx-6aa79e3230815163">
                <div className="">
                  <button
                    className="jsx-dd33fbfc98d4eb22 button size-l color-transparent"
                    onClick={() => handleClick()}
                  >
                    <div className="jsx-dd33fbfc98d4eb22 bg"></div>
                    <span className="jsx-2945311205 text size-m color-standard">
                      Done
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.main>
      ) : (
        <Loader />
      )}
    </motion.div>
  );
}

export default Slide_02;
