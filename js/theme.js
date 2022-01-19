(function () {
   const theme = document.getElementById('theme');
   const changeThemeBtn = document.querySelector('.toggle-theme');
   var light = new File('./theme/light.css');
   var dark = new File('./theme/dark.css');

   changeThemeBtn.onclick = function () {
      if (theme.href.indexOf('dark') > -1) {
         if(light.exists()) {
            theme.href = './theme/light.css';
            changeThemeBtn.innerHTML = '<i class="icon fas fa-sun"></i>';  
         }
      } else if (theme.href.indexOf('light') > -1) {
         if(dark.exists()) {
            theme.href = './theme/dark.css';
            changeThemeBtn.innerHTML = '<i class="icon fas fa-moon"></i>';
         }
      } else {
         console.error('Something must be wrong!');
      }

      if(anim.animationName != 'MoveTop') {
         anim.cancel();
         anim.play();
      }
   }
})()