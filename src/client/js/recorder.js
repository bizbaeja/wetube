import regeneratorRuntime from "regenerator-runtime";
const startBtn = document.getElementById("startBtn");
const video = document.getElementById("preview");

let stream;

const handleStart = () => {
  startBtn.innerText = "Stop Recording";
  startBtn.removeEventListener("click", handleStart);
  startBtn.addEventListener("click", handleStop);
  const recorder = new MediaRecorder(stream);
  recorder.ondataavailable = (e) => {
    const videoFile = URL.createObjectURL(e.data);
    video.srcObject = null;
    video.src = videoFile;
    video.loop = true;
    video.play();
  };
  console.log(recorder);
  recorder.start();
  console.log(recorder);
  setTimeout(() => {
    recorder.stop();
  }, 10000);
};

const handleStop = () => {
  startBtn.innerText = "Start Recording";
  startBtn.addEventListener("click", handleStart);
  startBtn.removeEventListener("click", handleStop);
};
const init = async () => {
  stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  });
  video.srcObj = stream;
  video.play();
};
init();
startBtn.addEventListener("click", handleStart);
