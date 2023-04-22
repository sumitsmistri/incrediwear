import { useEffect, useState } from "react";

export const useAudioCustom = (
  src = "",
  { volume = 1, playbackRate = 1, loop = false }
) => {
  const [audio, setAudio] = useState();
  useEffect(() => {
    if (!!audio) audio.volume = volume;
  }, [audio, volume]);

  useEffect(() => {
    if (!!audio) audio.playbackRate = playbackRate;
  }, [audio, playbackRate]);

  useEffect(() => {
    if (!!audio) audio.loop = loop;
  }, [audio]);
  useEffect(() => {
    if (src !== "") {
      const _audio = new Audio(src);
      _audio.load();
      _audio.addEventListener("canplaythrough", () => {
        setAudio(_audio);
      });
    }
  }, [src]);
  return audio;
};
