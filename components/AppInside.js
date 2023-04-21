import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import useAudio from "../shared/useAudio";
import store from "../store/store";

export default function AppInside({ Component, pageProps }) {
  const { stopBgMusic } = useSelector((state) => state.incrediwear);
  // console.log(state);
  const audio = useAudio("/slides/backgroundmusic_2.mp3", {
    volume: 0.2,
    playbackRate: 1,
    loop: true,
  });

  useEffect(() => {}, [stopBgMusic]);

  useEffect(() => {
    if (stopBgMusic) {
      audio.pause();
    } else {
      audio.play();
    }
  }, [audio]);

  return (
    <AnimatePresence>
      <div className="pageWrapper">
        <div className="pageContainer">
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </div>
      </div>
    </AnimatePresence>
  );
}
