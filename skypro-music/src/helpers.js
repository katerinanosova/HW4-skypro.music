export default function getTrackDuration(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
  }