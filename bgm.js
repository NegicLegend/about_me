const audio = document.getElementById('audio');
const toggleVolume = document.querySelector('.toggle-volume');
var a = 0;
audio.volume = 0.2;

if(a === 0) {
   audio.addEventListener('play', audio.pause());
}

audio.addEventListener('ended', audio.play());

toggleVolume.onclick = function() {
   a += 1;
   if(toggleVolume.classList.contains('active')) {
      toggleVolume.innerHTML = '<i class="icon fas fa-volume-mute"></i>'
      toggleVolume.classList.remove('active');
      toggleVolume.classList.add('mute');
      audio.pause();
   }else {
      toggleVolume.innerHTML = '<i class="icon fas fa-volume-up"></i>'
      toggleVolume.classList.remove('mute');
      toggleVolume.classList.add('active');
      audio.play();
   }
}