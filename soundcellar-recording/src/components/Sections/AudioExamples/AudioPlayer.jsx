import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import Hover from "wavesurfer.js/dist/plugins/hover.esm.js";

function AudioPlayer({ title, artist, audio, art, duration }) {
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#c58b42",
      progressColor: "#ffffff",
      url: audio,
      height: 50,
      plugins: [
        Hover.create({
          lineColor: "#fff",
          lineWidth: 2,
          labelBackground: "#555",
          labelColor: "#fff",
          labelSize: "11px",
          labelPreferLeft: false,
        }),
      ],
    });

    wavesurferRef.current.on("play", () => setIsPlaying(true));
    wavesurferRef.current.on("pause", () => setIsPlaying(false));

    return () => {
      wavesurferRef.current.destroy();
    };
  }, [audio]);

  function handlePlayPause() {
    wavesurferRef.current.playPause();
  }

  return (
    <>
      <div className="audio__player">
        <img className="player__art" src={art} alt={`${title} Cover Art`} />
        <button className="player__button" onClick={handlePlayPause}>
          {isPlaying ? (
            <svg
              viewBox="0 0 24 24"
              className="audio__icon"
              width="18"
              height="18"
            >
              <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="audio__icon"
              width="18"
              height="18"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <p className="player__song--title">{title}</p>
        <p className="player__song--artist">{artist}</p>

        <div className="player__middle">
          <div ref={waveformRef} className="audio__waveform"></div>
        </div>

        <p className="player__song--duration">{duration}</p>
      </div>
    </>
  );
}

export default AudioPlayer;
