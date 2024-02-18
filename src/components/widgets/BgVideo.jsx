import React, { useEffect, useRef } from "react";

export default function App() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div>
      <div>
        <video
          style={{ maxWidth: "100%", width: "95%", margin: "44px auto", borderRadius: "16px" }}
          playsInline
          loop
          muted
          alt="All the devices"
          src="./src/assets/video/video.mp4"
          ref={videoEl}
        />
      </div>
    </div>
  );
}