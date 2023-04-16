import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function RangeInputEnergy({ onlyView = false }) {
  const [firstSlider, setfirstSlider] = useState(1);
  const [totalBlubs, settotalBlubs] = useState(11);
  const [off, setOff] = useState(5);
  const [onBlubs, setonBlubs] = useState(5);

  useEffect(() => {
    setOff(totalBlubs - firstSlider);
    setonBlubs(firstSlider);
  }, [firstSlider]);

  return (
    <>
      {!onlyView && (
        <div>
          <div className="jsx-2e857196cd1007ea row bulbs">
            {Array.from(Array(parseInt(onBlubs)), (e, i) => {
              return (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 * i, duration: 0.5 }}
                  key={i}
                  className=""
                >
                  <img
                    src="/slides/21/on.png"
                    alt="light bulb"
                    className="jsx-2e857196cd1007ea"
                  />
                </motion.div>
              );
            })}
            {Array.from(Array(parseInt(off)), (e, i) => {
              return (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 * i, duration: 0.5 }}
                  key={i}
                  className=""
                >
                  <img
                    src="/slides/21/off.png"
                    alt="light bulb"
                    className="jsx-2e857196cd1007ea"
                  />
                </motion.div>
              );
            })}
          </div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="rangeWrapWraper"
            style={{ width: "100%" }}
          >
            <div className="rangeWrap">
              <input
                type="range"
                min="1"
                max="11"
                step="1"
                value={firstSlider}
                onChange={(e) => {
                  setfirstSlider(e.target.value);
                }}
              />
            </div>
            {/* <div className="mark mark-1">1</div>
            <div className="mark mark-2">11</div> */}
          </motion.div>
        </div>
      )}
      {onlyView && (
        <div>
          <div className="jsx-2e857196cd1007ea row bulbs">
            {Array.from(Array(parseInt(11)), (e, i) => {
              return (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 * i, duration: 0.5 }}
                  key={i}
                  className=""
                >
                  <img
                    src="/slides/21/on.png"
                    alt="light bulb"
                    className="jsx-2e857196cd1007ea"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default RangeInputEnergy;
