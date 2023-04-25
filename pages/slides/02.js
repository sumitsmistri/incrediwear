import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useAudio from "../../shared/useAudio";
import Loader from "../../shared/Loader";
import { useDispatch, useSelector } from "react-redux";
import { nextslide } from "../../reducers/index";
/* import HiddenButton from "../../components/HiddenButton"; */


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

  /* const hiddenbutton = useRef(null);
  const audioRef = useRef(null); */

  /* const audio = useAudio("/slides/02/s02.mp3", {
    volume: 1,
    playbackRate: 1,
    loop: false,
  }); */

  /* const [muted, setMuted] = useState(true);

  useEffect(() => {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay started!
        })
        .catch((error) => {
          // Autoplay was prevented.
          // You may want to display a message to the user explaining how to play the audio manually.
        });
    }
  }, []); */

  /* function handleButtonClick() {
    audioRef.current.src = "/slides/02/s02.mp3";
    audioRef.current.play();
    setMuted(false);
  } */

  const [slideData, setslideData] = useState({
    bg: "/slides/02/bg.jpg",
    title_1: "Let's get <br/> you <em>started</em>",
  });

  const onNameChange = (e) => {
    setiswfhpr(!iswfhpr);
  };

  const { GoogleSpreadsheet } = require('google-spreadsheet');

  // Config variables
  const SPREADSHEET_ID = "1ZAUIraxoL0WemHMr0stx65fLxvMd7kUDodc3dH5txtc";
  const SHEET_ID = "0";
  const GOOGLE_CLIENT_EMAIL = "nextjs-sheetsave@nextjs-sheetsave.iam.gserviceaccount.com";
  const GOOGLE_SERVICE_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDJ9kK/irc5adbi\nrqBd6N3skEbVo4qkzidoZDl8Ix0Kmc3/PbAVRlG+57WJPnN78BgQtWUTFJ6oEPsN\nvABQoVrm/cHG7dYDDJ64uLsWgUbpBNRTNwcbWLBmB38zccs29r7aHRuJ0FHyJnR6\nYzPFul3U6azSM9WjAJIaJd/9u9mGWSfC3yhXWQhTX3OzQwZjxDc2KRSKyrCGeYIS\nZPaAPdbVGUZcRg2JZKwUd5tXkw38ScBmPsXO0a0UFT90bvTYKIMUY1JdZrxvFTfg\ne9pfGGN0ofAACGaobJPB0wlw4n7H4YxoR1cNrlRHNrm8fXZHi9smfuGfeyTulPka\nKRC+JQofAgMBAAECggEAQeBa22Gi7E5SsnQliRxJLz3MbSlAMwuvnQR8H7rQYUHU\nCLqVcgsS5QNtmovNXZLuNp0EkBm8urN3QH6fV62aGhiRmZLAqRP3vec711Zpy94w\nZ8heQBRIza8KVbx7fb00ea7e6bAS2rqiab1sCMYGj0l9fr87o0SvY2oRSxF4HbLo\njvO8J1hL8b+lBdvApwtc/+LuTP9T14hsKYh6Tf3TMiFIclqGhgyWAll/jNgtVhzj\no04iFTKKU0tTguD8cQyewVZRKqRvD5PzSi/SMRGzIl9ooCXngV/e9gdI2PmWv+gP\ncejm+kcUPontsgZmF9zQxYHORglPf9a9wXc5VHYlEQKBgQDwLJsIOO0GjGxVn9pn\nCMMfX0SiQ4AyZ9K5rBCmJeSCjC4uJbQ/cjL9TtkB3A8TXpKshzdwsvZJKitqltvI\nsqMA9hmttzK4eFhtIGjbihK+pdKJ0BYdYcZCZh0GX6nRHWwzQ1QVn82tdBKzU0wf\nh7kC9nyDBaax7QzUX2anw0PVGQKBgQDXRRGckTCIgDckF+0W1l0TiYgTxM9+jXIO\n8qaD/FDcPjsAButfBeZwpNYnr/KO9waP2eHFzmFOT9pZesh7xWrgi6ivw1IEg7mJ\nR1YEiKTImgomo4DoDj2Zoas5OrMC47QYdw/dyn7LL9pWSbhTPMPU4/IuadZMjQgI\n2R4VuuzH9wKBgQDtC2lcPSsbmn7WJ7acmNZUYWfRKwQdO8GMxdmM0rttacOugkIb\nmK/guPCP2Ez81gu3wqEiV0+jOL6vLgPwWvds3HjNrpGd5hGIa0Ny4xzLE8jvgfRB\nvZ27LSOahdKKdRq0odAco6ORfY1zdlQcjo048mRDwNEcrRVLink8PQn3CQKBgBaE\nQ/ZTfXcZqirdUdBMtcmgXhprQKTlGKQVn3M4xiBzZep3ztDOpi7sHvZhwgZQMmCD\nkskE8EqnsZggbq37lVVNZmSUEpUkThjc3FN3E31kF2G5QneDXdAfB/Dhge3wcVsJ\nwSAa2S5ZoAXciioyte0jtqZCLccuDUQXqbzuI2w7AoGBALjdA+b5KgyWSySC5DpF\nQEbWvZXy+2HccyBKZawaD/as8jwowSocL0/IcIzJcH3FJd6DrphWJtYKAP3wl/kG\nLCOnfBl2m2OKp5gvBkn0fCOpkn/sz96rTjbBZgHERvErIGOm2/bufRrfgZp4WSB7\neZxX7WhaLBpfSih1nwEL5O2/\n-----END PRIVATE KEY-----\n";

  // GoogleSpreadsheet Initialize
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  // Append Function
  const appendSpreadsheet = async (row) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: GOOGLE_CLIENT_EMAIL,
        private_key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      });
      // loads document properties and worksheets
      await doc.loadInfo();

      const sheet = doc.sheetsByIndex[0];
      await sheet.addRow(row);
    } catch (e) {
      console.error('Error: ', e);
    }
  };


  useEffect(() => {

    //audio.play();
    //hiddenbutton.current.click();
    
    setTimeout( () => {
      //audio.play();
      //hiddenbutton.current.click();
    }, 1000);

    setDim();
    window.addEventListener("resize", function (e) {
      setDim();
    });

    /* return () => {
      audio.pause();
    }; */

    //const audioElement = new Audio("/slides/02/s02.mp3");

    //audioElement.muted = true;
    // autoplay on iOS devices
    //const playPromise = audioElement.play();
    
    /* if (playPromise !== undefined) {
      playPromise.then(() => {}).catch(() => {});
    } */
    
  }, []);

  useEffect(() => {
    // Access the Howl instance and AudioContext from the global window object
    const sound = window.sound;
    const audioCtx = window.audioCtx;

    // Create a new AudioBufferSourceNode and connect it to the AudioContext
    const source = audioCtx.createBufferSource();
    source.connect(audioCtx.destination);

    // Load the audio file and start playing it
    fetch('/slides/02/s02.mp3')
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        audioCtx.decodeAudioData(buffer, (decodedData) => {
          source.buffer = decodedData;
          source.start(0);
        });
      });

    return () => {
      // Stop the audio when the page unmounts
      source.stop();
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

  const handleClick = () => {
    if (formname !== '' &&  formemail !== '') {
      // Data add for append
      const newRow = {
        Name: formname,
        Email: formemail,
      };
  
      appendSpreadsheet(newRow);
    }
    
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
      {/* <HiddenButton/> */}
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
          className={`slidePage slidePage page_2`}
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
            <div style={Styles.blankMargin} className="no_mobile"></div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="fullWidth">
                {/* <div className="inputGrid">
                  <div className="label input">
                    <label htmlFor="name" className="">
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
                      autoComplete="off"
                      className=""
                      value={formname}
                      onChange={(e) => setformname(e.target.value)}
                    />
                  </div>
                  <div className="label input">
                    <label htmlFor="email" className="">
                      <span className="text size-m color-standard">Email:</span>
                    </label>
                  </div>
                  <div className="field input">
                    <input
                      id="email"
                      type="email"
                      placeholder="My email adress"
                      autoComplete="off"
                      className=""
                      value={formemail}
                      onChange={(e) => setformemail(e.target.value)}
                    />
                  </div>
                </div> */}
                  <div className="inputfieldwarapper">
                    <div className="oneinput">
                      <label htmlFor="name" className="">
                        <span className="text size-m color-standard">
                          Your name:
                        </span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="My first name"
                        autoComplete="off"
                        className=""
                        value={formname}
                        onChange={(e) => setformname(e.target.value)}
                      />
                    </div>
                    <div className="oneinput">
                      <label htmlFor="email" className="">
                        <span className="text size-m color-standard">Email:</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="My email adress"
                        autoComplete="off"
                        className=""
                        value={formemail}
                        onChange={(e) => setformemail(e.target.value)}
                      />
                    </div>
                  </div>
              </div>
            </motion.div>
            <div style={Styles.blankMargin} className="no_mobile"></div>
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
            <div style={Styles.blankMargin} className="no_mobile"></div>
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
          {/* <button className="hidden_btn" ref={hiddenbutton}
          onClick={async (e) => {
            e.stopPropagation();
            await new Promise((r) => setTimeout(r, 900));
            await audio?.play();           
          }}
          style={{cursor: "pointer"}}
          >
            TEST
          </button> */}
        {/* <button onClick={handleButtonClick} className="hidden_btn" ref={hiddenbutton} >Play</button>
        <audio
          src="/slides/01/silent.mp3"
          ref={audioRef}
          playsInline
          autoPlay
          muted={muted}
        /> */}
        </motion.main>
      ) : (
        <Loader />
      )}
    </motion.div>
  );
}

export default Slide_02;
