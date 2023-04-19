import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function Items_37() {
  const [first, setfirst] = useState(false);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);
  const [fourth, setfourth] = useState(false);
  const [total, settotal] = useState(0);
  const router = useRouter();
  useEffect(() => {
    settotal(0);
  }, []);

  useEffect(() => {
    settotal(0);
    if (first) {
      settotal(total + 25);
    } else {
      settotal(total - 25 <= 0 ? 0 : total - 25);
    }
  }, [first]);

  useEffect(() => {
    settotal(0);
    if (second) {
      settotal(total + 25);
    } else {
      settotal(total - 25 <= 0 ? 0 : total - 25);
    }
  }, [second]);

  useEffect(() => {
    settotal(0);
    if (third) {
      settotal(total + 25);
    } else {
      settotal(total - 25 <= 0 ? 0 : total - 25);
    }
  }, [third]);
  useEffect(() => {
    settotal(0);
    if (fourth) {
      settotal(total + 25);
    } else {
      settotal(total - 25 <= 0 ? 0 : total - 25);
    }
  }, [fourth]);

  return (
    <>
      {/* {total} */}
      <div class="wwraper">
        <span className="jsx-1677480984 text size-m color-standard">
          <ul className="jsx-6ad822bbc7c679cf">
            <div className="">
              <motion.li
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="jsx-6ad822bbc7c679cf"
                onClick={() => setfirst(!first)}
              >
                <div
                  className={`jsx-666091d8ee850693 checkbox small ${
                    first ? `active` : ``
                  }`}
                >
                  {first && (
                    <svg
                      width="100%"
                      viewBox="0 0 265 239"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      transformOrigin="138px 106.75px"
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
                  )}
                </div>
                <div className="jsx-6ad822bbc7c679cf">
                  The key to natural{" "}
                  <em>
                    <b>healing</b>
                  </em>{" "}
                  is{" "}
                  <em>
                    <b>proper blood flow</b>
                  </em>{" "}
                  through microcirculation
                </div>
              </motion.li>
            </div>
            <div className="">
              <motion.li
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="jsx-6ad822bbc7c679cf"
                onClick={() => setsecond(!second)}
              >
                <div
                  className={`jsx-666091d8ee850693 checkbox small ${
                    second ? `active` : ``
                  }`}
                >
                  {second && (
                    <svg
                      width="100%"
                      viewBox="0 0 265 239"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      transformOrigin="138px 106.75px"
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
                  )}
                </div>
                <div className="jsx-6ad822bbc7c679cf">
                  <em>
                    <b>Negative ions</b>
                  </em>{" "}
                  and{" "}
                  <em>
                    <b>infrared waves</b>
                  </em>{" "}
                  support the blood flow also through the{" "}
                  <em>
                    <b>smallest vessels</b>
                  </em>
                </div>
              </motion.li>
            </div>
            <div className="">
              <motion.li
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="jsx-6ad822bbc7c679cf"
                onClick={() => setthird(!third)}
              >
                <div
                  className={`jsx-666091d8ee850693 checkbox small ${
                    third ? `active` : ``
                  }`}
                >
                  {third && (
                    <svg
                      width="100%"
                      viewBox="0 0 265 239"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      transformOrigin="138px 106.75px"
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
                  )}
                </div>
                <div className="jsx-6ad822bbc7c679cf">
                  Incrediwear produces these negative ions and infrared waves by
                  using{" "}
                  <em>
                    <b>semiconductors</b>
                  </em>{" "}
                  woven into the fabric
                </div>
              </motion.li>
            </div>
            <div className="">
              <motion.li
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
                className="jsx-6ad822bbc7c679cf"
                onClick={() => setfourth(!fourth)}
              >
                <div
                  className={`jsx-666091d8ee850693 checkbox small ${
                    fourth ? `active` : ``
                  }`}
                >
                  {" "}
                  {fourth && (
                    <svg
                      width="100%"
                      viewBox="0 0 265 239"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      transformOrigin="138px 106.75px"
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
                  )}
                </div>
                <div className="jsx-6ad822bbc7c679cf">
                  The{" "}
                  <em>
                    <b>semiconductors</b>
                  </em>{" "}
                  are powered by{" "}
                  <em>
                    <b>body heat</b>
                  </em>
                  , which your body produces anyway
                </div>
              </motion.li>
            </div>
          </ul>
        </span>
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 4, duration: 0.5 }}
        className="jsx-1419882425 container bg-none isSlideContentWrapper absolute bottomContainer"
      >
        <div className="jsx-6ad822bbc7c679cf bottomRow">
          <div className="">
            <div className="jsx-6ad822bbc7c679cf progress">
              <div className="bar" style={{ width: `${total}%` }}></div>
            </div>
          </div>
          <div className="">
            <button
              className="jsx-dd33fbfc98d4eb22 button size-m color-undefined"
              disabled={total != 100}
              onClick={() => router.push("/slides/37")}
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
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Items_37;
