import { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import { audioPlaylist } from "../../../data/audio";
import "./AudioExamples.css";

const buttonCategories = [
  {
    id: "pop",
    category: "POP / RNB",
  },
  {
    id: "country",
    category: "COUNTRY / Americana",
  },
  {
    id: "rap",
    category: "RAP / HIPHOP",
  },
  {
    id: "rock",
    category: "ROCK / ALTERNATIVE",
  },
];

function GenreButton({ category, onClick, isActive }) {
  return (
    <button
      className={`audio__genre--button ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {category}
    </button>
  );
}

function AudioExamples() {
  const [activeGenre, setActiveGenre] = useState("pop");

  return (
    <section className="audio" id="audio">
      <div className="audio__center--container">
        <div className="audio__header--container">
          <div className="audio__decorative--line"></div>
          <h3 className="audio__title">AUDIO</h3>
          <div className="audio__decorative--line"></div>
        </div>
        <p className="audio__description">MUSIC THAT SPEAKS</p>
        <p className="audio__info">
          Professional mixes for artists across every genre. Press play to
          listen.
        </p>
        <div className="audio__button--container">
          {buttonCategories.map((button) => (
            <GenreButton
              key={button.id}
              category={button.category}
              isActive={activeGenre === button.id}
              onClick={() => setActiveGenre(button.id)}
            />
          ))}
        </div>
        <div className="audio__player--container">
          {audioPlaylist[activeGenre].map((song) => (
            <AudioPlayer
              key={song.id}
              title={song.title}
              artist={song.artist}
              art={song.art}
              audio={song.audio}
              duration={song.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AudioExamples;
