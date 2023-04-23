import { useEffect, useRef, useState } from "react";

const useAudio = (/* src,  */{ volume = 1, playbackRate = 1, loop = false }) => {
  //const sound = useRef(new Audio(src));
  //const sound = useRef(typeof Audio !== "undefined" && new Audio(src));

  const sound = useRef([
    typeof Audio !== "undefined" && new Audio("/slides/backgroundmusic_2.mp3"),
    typeof Audio !== "undefined" && new Audio("/slides/02/s02.mp3"),
    typeof Audio !== "undefined" && new Audio("/slides/03/s03.mp3"),
    typeof Audio !== "undefined" && new Audio("/slides/04/s04.mp3"),
    typeof Audio !== "undefined" && new Audio("/slides/05/s05.mp3"),
  ]);

  useEffect(() => {
    sound.current.loop = loop;
  }, [loop]);
  useEffect(() => {
    sound.current.playbackRate = playbackRate;
  }, [playbackRate]);
  useEffect(() => {
    sound.current.volume = volume;
  }, [volume]);

  sound[0]?.load();
  sound[1]?.load();
  sound[2]?.load();
  sound[3]?.load();
  sound[4]?.load();

  return sound.current;
};
export default useAudio;
