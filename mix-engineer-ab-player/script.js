// Variables for expanding and collapsing the playlist
const playListButton = document.getElementById("playlist-button");
const playList = document.querySelector(".player__playlist");
const playListButtonFlip = document.querySelector(".fa-regular.fa-circle-down");

// Player Controls Variables
const playButton = document.getElementById("play");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const playButtonImage = document.getElementById("play-image");

const progress = document.getElementById("progress");
const playerCurrentTime = document.querySelector(".player__time-current");
const playerTimeDuration = document.querySelector(".player__time-duration");

// Player Playlist Variables
const playListItems = document.querySelectorAll(".player__playlist-item");

// A/B Toggle Variables
const abSelect = document.querySelector(".select__ab");
const abStatus = document.querySelector(".player__ab-status");

// Event listener to expand and collapse the playlist
playListButton.addEventListener("click", () => {
  if (playList.classList.contains("hidden")) {
    playList.classList.remove("hidden");
    playListButtonFlip.style.transform = "rotate(180deg)";
  } else {
    playList.classList.add("hidden");
    playListButtonFlip.style.transform = "rotate(360deg)";
  }
});

// Audio Playlist and Data
const allSongs = [
  {
    id: 1,
    title: "Used To",
    artist: "Matt Clarkson Band",
    duration: "4:06",
    audioA: "audio/matt-clarkson-used-to-mixed.mp3",
    audioB: "audio/matt-clarkson-used-to-unmixed.mp3",
    cover: "images/matt-clarkson-cover.png",
  },
  {
    id: 2,
    title: "Atropy",
    artist: "Celine Vong",
    duration: "2:40",
    audioA: "audio/celine-vong-atrophy-mixed.mp3",
    audioB: "audio/celine-vong-atrophy-unmixed.mp3",
    cover: "images/celine-vong-cover.png",
  },

  {
    id: 3,
    title: "Colors",
    artist: "Constance Dees",
    duration: "3:21",
    audioA: "audio/constance-dees-colors-mixed.mp3",
    audioB: "audio/constance-dees-colors-unmixed.mp3",
    cover: "images/constance-dees-cover.png",
  },
  {
    id: 4,
    title: "Lord Of All",
    artist: "Sydney Andrea",
    duration: "3:39",
    audioA: "audio/sydney-andrea-lord-of-all-mixed.mp3",
    audioB: "audio/sydney-andrea-lord-of-all-unmixed.mp3",
    cover: "images/sydney-andrea-cover.png",
  },
  {
    id: 5,
    title: "Let's Dance",
    artist: "Brian Day",
    duration: "4:09",
    audioA: "audio/brian-day-lets-dance-mixed.mp3",
    audioB: "audio/brian-day-lets-dance-unmixed.mp3",
    cover: "images/brian-day-cover.png",
  },

  {
    id: 6,
    title: "Addiction",
    artist: "A The Kid",
    duration: "1:54",
    audioA: "audio/a-the-kid-addiction-mixed.mp3",
    audioB: "audio/a-the-kid-addiction-unmixed.mp3",
    cover: "images/a-the-kid-cover.png",
  },
  {
    id: 7,
    title: "Show Me Love",
    artist: "K Nacole",
    duration: "4:12",
    audioA: "audio/knacole-show-me-love-mixed.mp3",
    audioB: "audio/knacole-show-me-love-unmixed.mp3",
    cover: "images/k-nacole-cover.png",
  },
  {
    id: 8,
    title: "God's Will Be Done",
    artist: "Gabriel Day",
    duration: "5:02",
    audioA: "audio/gabriel-day-gods-will-be-done-mixed.mp3",
    audioB: "audio/gabriel-day-gods-will-be-done-unmixed.mp3",
    cover: "images/gabriel-day-cover.png",
  },
];

const audio = new Audio();

const userData = {
  songs: allSongs,
  currentSong: null,
};

// Get Playlist Items Click Event
playListItems.forEach((item) => {
  item.addEventListener("click", () => {
    const indexString = item.id.replace("song-", "");
    const songIndex = Number(indexString);
    const songObject = allSongs[songIndex];
    loadSong(songObject);
  });
});

// Current Song Function
function getCurrentSongIndex() {
  return userData.songs.indexOf(userData.currentSong);
}

// Next Song Function
function getNextSong() {
  return userData.songs[getCurrentSongIndex() + 1];
}

// Previous Song Function
function getPreviousSong() {
  return userData.songs[getCurrentSongIndex() - 1];
}

// Format Time Function
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const paddedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

  return `${minutes}:${paddedSeconds}`;
}

// Load Song Function
function loadSong(song) {
  audio.onloadedmetadata = () => {
    playerTimeDuration.textContent = formatTime(audio.duration);
    progress.max = audio.duration;
    progress.value = 0;
  };

  if (abMode === "A") {
    audio.src = song.audioA;
  } else {
    audio.src = song.audioB;
  }

  userData.currentSong = song;
  audio.currentTime = 0;
  const songIndex = getCurrentSongIndex();

  document.querySelector(".player__title").textContent = song.title;
  document.querySelector(".player__artist").textContent = song.artist;
  document.querySelector(".player__artwork").src = song.cover;
  document.querySelector(".player__time-duration").textContent = song.duration;

  playListItems.forEach((item) => item.classList.remove("active"));
  playListItems[songIndex].classList.add("active");
}

let isPlaying = false;
let abMode = "A";

// Play Function
function playSong() {
  audio.play();
  isPlaying = true;
  playButtonImage.classList.replace("fa-play", "fa-pause");
}

//Pause Function
function pauseSong() {
  audio.pause();
  isPlaying = false;
  playButtonImage.classList.replace("fa-pause", "fa-play");
}

// Play/Pause Event Listener
playButton.addEventListener("click", () => {
  if (!userData.currentSong) {
    loadSong(userData.songs[0]);
  }
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Next Song Event Listener
nextButton.addEventListener("click", () => {
  const nextSong = getNextSong();
  if (nextSong) {
    loadSong(nextSong);
    playSong();
  } else {
    pauseSong();
  }
});

// Previous Song Event Listener
previousButton.addEventListener("click", () => {
  const previousSong = getPreviousSong();
  if (previousSong) {
    loadSong(previousSong);
    playSong();
  } else {
    pauseSong();
  }
});

// When Song Ends Event Listener
audio.addEventListener("ended", () => {
  const nextSong = getNextSong();
  if (nextSong) {
    loadSong(nextSong);
    playSong();
  } else {
    pauseSong();
  }
});

// Progress Slider Event Listener
audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  playerCurrentTime.textContent = formatTime(audio.currentTime);
  progress.value = audio.currentTime;

  const percent = (audio.currentTime / audio.duration) * 100;

  progress.style.background = `
  linear-gradient(
    to right,
    rgba(254, 180, 123, 0.8) ${percent}%,
    rgba(255, 255, 255, 0.12) ${percent}%
  )
`;
});

// Progress Seek Scrub Event Listener
progress.addEventListener("input", () => {
  if (!audio.duration) return;

  audio.currentTime = Number(progress.value);

  playerCurrentTime.textContent = formatTime(audio.currentTime);

  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.background = `
  linear-gradient(
    to right,
    rgba(254, 180, 123, 0.8) ${percent}%,
    rgba(255, 255, 255, 0.12) ${percent}%
  )
`;
});

// A/B Toggle Event Listener
abSelect.addEventListener("click", () => {
  if (!userData.currentSong) return;

  const wasPlaying = !audio.paused;
  const currentTime = audio.currentTime;

  if (abMode === "A") {
    abMode = "B";
  } else {
    abMode = "A";
  }

  if (abMode === "A") {
    abStatus.textContent = "Mixed";
  } else {
    abStatus.textContent = "Unmixed";
  }

  if (abMode === "B") {
    abSelect.classList.add("on");
  } else {
    abSelect.classList.remove("on");
  }

  if (abMode === "A") {
    audio.src = userData.currentSong.audioA;
  } else {
    audio.src = userData.currentSong.audioB;
  }

  audio.currentTime = currentTime;
  if (wasPlaying) {
    audio.play();
  }
});
