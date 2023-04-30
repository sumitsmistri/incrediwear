import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
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

  const [audioPlayed, setaudioPlayed] = useState(false);

  useEffect(() => {
    const audioCtx = new AudioContext();
    const sound = new Howl({
      src: ['/slides/backgroundmusic_2.mp3'],
      autoplay: false,
      loop: true,
      volume: 0.2,
      context: audioCtx,
    });
    
    // Save the Howl instance and AudioContext to the global object for later use
    window.audioCtx = audioCtx;
    window.sound = sound;

    // Play the audio when the user clicks on the first page
    document.addEventListener('click', handleDocumentClick);

    if(document.getElementById('jackson_video_img')) {

      const videoElement_img = document.getElementById('jackson_video_img');

      videoElement_img.addEventListener('click', function() {
        Howler.stop();
      });
    }
    if(document.getElementById('jackson_video')) {

      const videoElement = document.getElementById('jackson_video');

      videoElement.addEventListener('play', function() {
        Howler.stop();
      });

      videoElement.addEventListener('pause', function() {
        window.sound.play();
        setaudioPlayed(true);
      });
    }

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    }

  });

  const handleDocumentClick = () => {
    // Play the audio if it hasn't been played before
    if (!audioPlayed) {
      console.log("click");
      window.sound.play();
      setaudioPlayed(true);
    }
  };

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
