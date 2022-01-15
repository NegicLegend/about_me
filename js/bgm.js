const audio = document.getElementById('audio');
const toggleVolume = document.querySelector('.toggle-volume');
audio.volume = 0.2;

audio.addEventListener('ended', ()=> {audio.play()});

toggleVolume.onclick = function() {
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

toggleVolume.click();