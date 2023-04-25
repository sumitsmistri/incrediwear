import { useState, useEffect, forwardRef } from "react";

const HiddenButton = forwardRef((props, ref) => {
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (hasUserInteracted && audio) {
      audio.play();
    }
  }, [hasUserInteracted, audio]);

  const handleStartButtonClick = () => {
    const audioElement = new Audio("/slides/backgroundmusic_2.mp3");
    setAudio(audioElement);
    setHasUserInteracted(true);
    audioElement.play();
  };

  return (
    <>
      <button ref={ref}
      {...props}
       onClick={handleStartButtonClick}>Start</button>
    </>
  );
});

export default HiddenButton;