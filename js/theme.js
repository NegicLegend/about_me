(function () {
   const theme = document.getElementById('theme');
   const changeThemeBtn = document.querySelector('.toggle-theme');

   changeThemeBtn.onclick = function () {
      if (theme.href.indexOf('dark') > -1) {
         theme.href = './theme/light.css';
         changeThemeBtn.innerHTML = '<i class="icon fas fa-sun"></i>'; 
      } else if (theme.href.indexOf('light') > -1) {
         theme.href = './theme/dark.css';
         changeThemeBtn.innerHTML = '<i class="icon fas fa-moon"></i>';
      } else {
         console.error('Something must be wrong!');
      }

      (function() {
         document.getAnimations().forEach((anim) => {
            if(anim.animationName != 'MoveTop') {
               anim.cancel();
               anim.play();
            }
         });
      })()
   }
})()