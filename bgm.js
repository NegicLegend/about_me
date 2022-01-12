const audio = document.getElementById('audio');
const toggleVolume = document.querySelector('.toggle-volume');
var a = 0;
audio.volume = 0.2;

audio.addEventListener('ended', audio.play());

toggleVolume.onclick = function() {
   if(toggleVolume.classList.contains('active')) {
      toggleVolume.innerHTML = '<i class="icon fas fa-volume-mute"></i>'
      toggleVolume.classList.remove('active');
      toggleVolume.classList.add('mute');
      audio.pause();
   }else {
      var promise = new Promise(
         function(resolve, reject) {
            resolve()
         }
      );

      promise
         .then(function() {
            if(a === 0) {
               document.querySelector('.music').innerHTML = <audio id="audio" src="./bgm/introduce_bgm.mp3"></audio>
            }
         })
         .then(function() {
            toggleVolume.innerHTML = '<i class="icon fas fa-volume-up"></i>'
            toggleVolume.classList.remove('mute');
            toggleVolume.classList.add('active');
            audio.play();
         })
         .catch(function() {})
   }
   a += 1;
}