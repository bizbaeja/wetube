console.log("video player");
const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const time = document.getElementById("time");
const volume = document.getElementById("volume");

const handlePlayClick = (e) => {
  //if hte video is playing , pause it
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  //else play the video
};
const handleMute = (e) => {};
const handlePause = (e) => {
  playBtn.innerText = "play";
};

const handlePlay = (e) => {};
playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMute);
video.addEventListener("pause", handlePause);
video.addEventListener("play", handlePlay);
