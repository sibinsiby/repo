
var music = document.getElementById('audio');
     function playaudio() {
      if (music.paused) {
         music.play();
          demo.className = "";
          demo.className = "pause";
       } else {
         music.pause();
        demo.className = "";
        demo.className = "play";
}}



let recent_vol = document.querySelector('#volume');
let vol_show = document.querySelector('#volume_show');

let track = document.createElement('audio');
function volume_change(){
    volume_show.innerHtml  = recent_vol.Value;
    track.volume = recent_vol.Value / 100; 
}