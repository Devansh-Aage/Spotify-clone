
let songIndex =0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems= document.getElementsByClassName('songItem');
let masterSongName = document.getElementById('masterSongName');
let greet = document.getElementById('greet');


let songs  =[
  {songName : "Tu aake dekhle -KING",filePath:"songs/dekhle.mp3", coverpath: "tate.jpg" },
  {songName : "Andrew-Tate",filePath:"songs/tate.mp3", coverpath: "tate.jpg" },
  {songName : "Godzilla -EMINEM & JUICE WRLD",filePath:"songs/godzilla.mp3", coverpath: "tate.jpg" },
  {songName : "Starboy-WEEKEND",filePath:"songs/starboy.mp3", coverpath: "tate.jpg" },
  {songName : "Perfect-ED SHEERAN",filePath:"songs/perfect.mp3", coverpath: "tate.jpg" },
  {songName : "Lucid-Dreams-JUICE WRLD",filePath:"songs/lucid.mp3", coverpath: "tate.jpg" },
] 

let date= new Date();
let hrs = date.getHours();
if(hrs<12){
  greet.innerText = 'GOOD MORNING';
}
else if(hrs>12 && hrs<18){
greet.innerText = 'GOOD AFTERNOON';
}
else{
 greet.innerText = 'GOOD EVENING';
}


// Play and Pause Clicks
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

audioElement.addEventListener('timeupdate', () => {
  progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
  myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
  audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlays= () => {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element) => {
    Element.classList.add('fa-circle-play');
    Element.classList.remove('fa-circle-pause');
  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element) => {
  Element.addEventListener('click', (e)=> {
    
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src= `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  });
});


document.getElementById('next').addEventListener('click',() =>{
  if(songIndex>=6){
    songIndex=0;
  }
  else{
    songIndex += 1;
  }
  audioElement.src= `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});

document.getElementById('previous').addEventListener('click',() =>{
  if(songIndex>=0){
    songIndex=0;
  }
  else{
    songIndex -= 1;
  }
  audioElement.src= `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});