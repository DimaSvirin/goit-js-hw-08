import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

function timeUpdate(time) {
    localStorage.setItem(CURRENT_TIME, time.seconds);
  };

player.on(
  "timeupdate",
  throttle(timeUpdate, 1000)
);

const currentTime = localStorage.getItem(CURRENT_TIME);
const settingTime = currentTime ? currentTime : 0;

player.setCurrentTime(settingTime);
