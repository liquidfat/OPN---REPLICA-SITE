//Creating variables for table cells, gif and background video
const cells = document.querySelectorAll("#tracktable td");
const gif = document.getElementById("tracklistgif");
const video = document.getElementById("bg-video");

let currentSrc = "";

cells.forEach(cell => {
  cell.addEventListener("mouseenter", () => {//When the mouse hovers over a cell of the table
    gif.style.opacity = "0";//Gif is hidden

    const src = cell.dataset.video;//Read the data-video for the cell, which is in the HTML
    if (src && src !== currentSrc) {//Checks if the video source is different from the current one
      video.src = src;
      currentSrc = src;
    }

    video.muted = false;
    video.volume = 0.5;
    video.style.opacity = "1";
    video.play();
  });

  cell.addEventListener("mouseleave", () => {//When the mouse leaves the gif reappears and the video pauses and dissapears. Using play and pause allows the video to resume being played rather than fully reset everytime
    gif.style.opacity = "1";
    video.pause();
    video.style.opacity = "0";
  });
});