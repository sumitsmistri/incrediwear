import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

function MenuSite({ next, previous, hide, islight = false, islast = false }) {
  const [isFullScreen, setisFullScreen] = useState(false);
  const dispatch = useDispatch();
  const menuToggle = useSelector((state) => state.incrediwear.menuToggle);

  useEffect(() => {
    console.log(menuToggle);
  }, []);

  const requestFullscreen = (element = document.documentElement) => {
    if (isFullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setisFullScreen(false);
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
        setisFullScreen(false);
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
        setisFullScreen(false);
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
        setisFullScreen(false);
      }
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen();
        setisFullScreen(true);
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
        setisFullScreen(true);
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        setisFullScreen(true);
      }
    }
  };

  const router = useRouter();
  const handleMenuClick = () => {
    dispatch({
      type: "menuToggle",
      payload: !menuToggle,
    });
  };

  const hideMenu = () => {
    dispatch({
      type: "menuToggle",
      payload: false,
    });
  };

  return (
    <>
      {/* MENU ICON */}
      <div
        className={`jsx-d8d845714e37b78a rightTopActions ${
          islight ? `onDarkBackgroundPage` : ``
        }`}
        onClick={() => {
          handleMenuClick();
        }}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3rem"
            height="3rem"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="jsx-d8d845714e37b78a"
          >
            <line
              x1="4"
              y1="12"
              x2="20"
              y2="12"
              className="jsx-d8d845714e37b78a"
            ></line>
            <line
              x1="4"
              y1="6"
              x2="20"
              y2="6"
              className="jsx-d8d845714e37b78a"
            ></line>
            <line
              x1="4"
              y1="18"
              x2="20"
              y2="18"
              className="jsx-d8d845714e37b78a"
            ></line>
          </svg>
        </div>
      </div>
      {/* MENU ICON END */}
      {menuToggle && (
        <div className="jsx-dfa9b746239e2fed wrapper hidden">
          <div className="jsx-dfa9b746239e2fed overlay">
            <div
              className="jsx-d8d845714e37b78a rightTopActions"
              onClick={() => {
                hideMenu();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="3rem"
                height="3rem"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            <div className="">
              <div
                className={`jsx-730d5bc48b16cda8 btn ${
                  islast ? "isDisabled" : ``
                } `}
                onClick={() =>
                  router.push(
                    `${next < 10 ? `/slides/0${next}` : `/slides/${next}`}`
                  )
                }
              >
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="var(--orange)"></circle>
                  <path
                    d="M13 22l6-6-6-6"
                    stroke="#fff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Next page
              </div>
            </div>
            <div className="">
              <div
                className="jsx-730d5bc48b16cda8 btn"
                onClick={() =>
                  router.push(
                    `${
                      previous < 10
                        ? `/slides/0${previous}`
                        : `/slides/${previous}`
                    }`
                  )
                }
              >
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="var(--orange)"></circle>
                  <path
                    d="M18 10l-6 6 6 6"
                    stroke="#fff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Previous page
              </div>
            </div>
            <div className="">
              <div
                className="jsx-730d5bc48b16cda8 btn"
                onClick={() => router.push(`/slides/01`)}
              >
                <svg
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="17" cy="16" r="16" fill="var(--orange)"></circle>
                  <path
                    d="M23 10l-6 6 6 6M15 10l-6 6 6 6"
                    stroke="#fff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                To the start
              </div>
            </div>
            {/* <div className="">
          <div className="jsx-730d5bc48b16cda8 btn">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="var(--orange)"></circle>
              <path
                d="M12.333 10.5H24.25M12.333 16H24.25M12.333 21.5H24.25M7.75 10.5h.01M7.75 16h.01M7.75 21.5h.01"
                stroke="#fff"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            Go to chapter
          </div>
        </div> */}
            <div className="">
              <div
                className="jsx-730d5bc48b16cda8 btn"
                onClick={() => requestFullscreen()}
              >
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="var(--orange)"></circle>
                  <path
                    d="M18 8h6v6M14 24H8v-6M24 8l-7 7M8 24l7-7"
                    stroke="#fff"
                    strokeWidth="3"
                  ></path>
                </svg>
                Full screen
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuSite;
