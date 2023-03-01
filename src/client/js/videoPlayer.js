const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const volumeRange = document.getElementById("volume");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");

let volumeValue = 0.5;
const handlePlayClick = (e) => {
  //if hte video is playing , pause it
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  playBtn.innerText = video.pauesd ? "Play" : "Pause";
};
const handleMute = (e) => {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
  muteBtn.innerText = video.muted ? "Unmute" : "Mute";
  volumeRange.value = video.muted ? 0 : 0.5;
};
const handlePause = (e) => {
  playBtn.innerText = "play";
};

const handleVolumeChange = (event) => {
  const {
    target: { value },
  } = event;
  if (video.muted) {
    video.muted = false;
    muteBtn.innerText = video.muted ? "Unmute" : "Mute";
  }
  video.volume = value;
};
const handleMetadata = () => {
  totalTime.innerText = formatTime(Math.floor(video.duration));
  timeline.max = Math.floor(video.duration);
};

const handleTimeUpdate = () => {
  currentTime.innerText = Math.floor(video.currentTime);
};

playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMute);
video.addEventListener("pause", handlePause);
video.addEventListener("play", handlePlay);
volumeRange.addEventListener("change", handleVolumeChange);
video.readyState
  ? handleMetadata()
  : video.addEventListener("loadedmetadata", handleMetadata);
video.addEventListener("timeupdate", handleTimeUpdate);
