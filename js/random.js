const link = document.querySelector('.rick .link');
link.addEventListener('click', function() {
   var random = Math.floor(Math.random() * 1000000);
   if(random === 177013) {
      link.href = 'https://nhentai.net/g/177013/';
   }
});