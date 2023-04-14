import React, { useEffect, useState } from "react";

function CopyClipboard() {
  const [iscopied, setiscopied] = useState(false);
  useEffect(() => {
    let tt;
    if (iscopied) {
      tt = setTimeout(() => {
        clearTimeout(tt);
        setiscopied(false);
      }, 1000);
    }
  }, [iscopied]);
  return (
    <>
      <div className="">
        <button
          className="jsx-dd33fbfc98d4eb22 button size-s color-undefined"
          onClick={() => {
            navigator.clipboard.writeText(
              "http://retail-education.incrediwear.com/"
            );
            setiscopied(true);
          }}
        >
          <div className="jsx-dd33fbfc98d4eb22 bg"></div>Copy link
        </button>
      </div>
      {/* CHECKBOX */}
      {iscopied && (
        <div className="jsx-666091d8ee850693 checkbox active small">
          <svg
            width="100%"
            viewBox="0 0 265 239"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform-origin="138px 106.75px"
          >
            <g clip-path="url(#clip0_4_12)" className="jsx-666091d8ee850693">
              <path
                d="M-12.5 125L87.5 213.5L288.5 0"
                stroke="white"
                strokeWidth="36"
                className="jsx-666091d8ee850693"
              ></path>
            </g>
            <defs className="jsx-666091d8ee850693">
              <clipPath id="clip0_4_12" className="jsx-666091d8ee850693">
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
      )}
      {/* CHECKBOX END */}
    </>
  );
}

export default CopyClipboard;
