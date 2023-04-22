import { Howl } from "howler";
import { useEffect, useRef, useState } from "react";
import useInteraction from "./userInteraction";


export default function useCustomAudio(options) {
  const [audio, setAudio] = useState();

  const interacted = useInteraction();

  useEffect(() => {
    async function createAudoContext() {
      const { Howl } = await import('howler');
      setAudio(new Howl(options));
    }

    if (interacted) {
      createAudoContext();
    }

    return () => {
      if (audio) {
        audio.unload();
      }
    };
  }, [options]);

  const ready = Boolean(interacted && audio);

  return { audio, ready };
}