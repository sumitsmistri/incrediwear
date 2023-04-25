import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import useAudio from "../shared/useAudio";
import store from "../store/store";
import { Howl } from "howler";

export default function AppInside({ Component, pageProps }) {
  const { stopBgMusic } = useSelector((state) => state.incrediwear.stopBgMusic);
  // console.log(state);
  /* const audio = useAudio("/slides/backgroundmusic_2.mp3", {
    volume: 0.2,
    playbackRate: 1,
    loop: true,
  }); */

  //useEffect(() => {}, [stopBgMusic]);

  /* useEffect(() => {
    if (stopBgMusic) {
      audio.pause();
    } else {
      audio.play();
    }
  }); */

  useEffect(() => {
    const audioCtx = new AudioContext();
    const sound = new Howl({
      src: ['/slides/backgroundmusic_2.mp3'],
      autoplay: true,
      loop: true,
      volume: 0.2,
      context: audioCtx,
    });
    // Play the audio when the user clicks on the first page
    document.addEventListener('click', () => {
      sound.play();
    });

    // Save the Howl instance and AudioContext to the global object for later use
    window.audioCtx = audioCtx;
    window.sound = sound;
  });

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
