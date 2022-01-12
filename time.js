function clock() {
   const hour = document.getElementById('hour');
   const minute = document.getElementById('minute');
   const second = document.getElementById('second');

   let h = new Date().getHours();
   let m = new Date().getMinutes();
   let s = new Date().getSeconds();

   if(h < 10) {
      h.toString()
      h = '0' + h;
   }

   if(m < 10) {
      m.toString()
      m = '0' + m;
   }

   if(s < 10) {
      s.toString()
      s = '0' + s;
   }

   hour.innerHTML = h;
   minute.innerHTML = m;
   second.innerHTML = s;
}

setInterval(clock, 1000);