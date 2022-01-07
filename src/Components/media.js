import React from 'react';

export const Media = () => {
  var myVideo = document.getElementById('video1'); //dom manipulation

  function playPause() {
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }

  function makeBig() {
    myVideo.width = 560;
  }

  function makeSmall() {
    myVideo.width = 320;
  }

  function makeNormal() {
    myVideo.width = 420;
  }

  return (
    <div>
      <video
        width="320"
        height="240"
        controls //add def ability to control media
        muted
        autoplay
      >
        <source //replace video if browser not supported
          src="movie.mp4"
          type="video/mp4"
        />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>

      <audio controls autoplay muted>
        <source src="horse.ogg" type="audio/ogg" />
        <source src="horse.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <iframe //normal ytb video
        width="420"
        height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      ></iframe>
      <iframe //ytb with autoplay: true and mute:true
        width="420"
        height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
      ></iframe>
      <iframe   //youtube playlist with loop set true
        width="420"
        height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1"
      ></iframe>
    </div>
  );
};
