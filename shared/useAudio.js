import { useEffect, useRef } from "react";

const useAudio = (src, { volume = 1, playbackRate = 1, loop = false }) => {
  //const sound = useRef(new Audio(src));

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

  return sound.current;
};

export default useAudio;
