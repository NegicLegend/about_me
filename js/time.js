function clock() {
   const hour = document.getElementById('hour');
   const minute = document.getElementById('minute');
   const second = document.getElementById('second');

   function zero(n) {
      if(typeof(n) === 'string') {
         if(n.length < 2) {
            n = '0' + n;
         }
      }
      return n;
   }

   let h = zero(new Date().getHours().toString());
   let m = zero(new Date().getMinutes().toString());
   let s = zero(new Date().getSeconds().toString());

   hour.innerHTML = h;
   minute.innerHTML = m;
   second.innerHTML = s;
}

setInterval(clock, 1000);