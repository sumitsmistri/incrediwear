import { useEffect, useRef, useState } from "react";

const useAudio = (src, { volume = 1, playbackRate = 1, loop = false }) => {
  //const sound = useRef(new Audio(src));
  const [audio, setAudio] = useState();

  const sound = useRef(typeof Audio !== "undefined" && new Audio(src));
  useEffect(() => {
    sound.current.loop = loop;
  }, [loop]);

  useEffect(() => {
    sound.current.playbackRate = playbackRate;
  }, [playbackRate]);

  useEffect(() => {
    sound.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (src !== "") {
      const _audio = new Audio(src);
      _audio.load();
      _audio.addEventListener("canplaythrough", () => {
        setAudio(_audio);
      });
    }
  }, [src]);

  return sound.current;
};

export default useAudio;
