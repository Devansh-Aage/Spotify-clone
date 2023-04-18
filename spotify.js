
let songIndex =0;
let audioElement= new Audio('tate.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs  =[
  {songName : "Tu-aake-dekhle",filePath:"song/tate.mp3", coverpath: "tate.jpg" },
  {songName : "Tu-aake-dekhle",filePath:"song/tate.mp3", coverpath: "tate.jpg" },
  {songName : "Tu-aake-dekhle",filePath:"song/tate.mp3", coverpath: "tate.jpg" },
  {songName : "Tu-aake-dekhle",filePath:"song/tate.mp3", coverpath: "tate.jpg" },
  {songName : "Tu-aake-dekhle",filePath:"song/tate.mp3", coverpath: "tate.jpg" },
  {songName : "Tu-aake-dekhle",filePath:"song/tate.mp3", coverpath: "tate.jpg" },
] 

//Listen to events
masterPlay.addEventListener('click', ()=> {
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  }
  else{
  audioElement.pause();
  masterPlay.classList.remove('fa-circle-pause');
  masterPlay.classList.add('fa-circle-play');
  }
})

myProgressBar.addEventListener('timeupdate', ()=>{
  console.log("TimeUpdate");

})