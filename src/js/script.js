var button = document.querySelector('.main-nav__toggler');
var list = document.querySelector('.main-nav__nav');

button.addEventListener ('click', function() {
  if (button.classList.contains('main-nav__toggler--active')) {
      button.classList.remove('main-nav__toggler--active');
      list.style.display = 'none';
  }
  else {
    button.classList.add('main-nav__toggler--active');
    list.style.display = 'block';
  }
})

document.querySelector('.main-nav__item').addEventListener('click', function(){
  button.classList.remove('main-nav__toggler--active');
  list.style.display = 'none';
})


function anchorScroll(boxAnchorLink){ 
  $(boxAnchorLink + ' a').on('click', function(e){ 
    e.preventDefault(); 
    var attr = $(this).attr('href').substring(1); 
    var currentPosition = $(document).scrollTop(); 
    var idPosition = $('#'+attr).offset().top; 
    var scrollTime = Math.abs(currentPosition - idPosition) / 4; // Math.abs - модуль числа. 
    $('body,html').animate({'scrollTop':idPosition},scrollTime); 
  }); 
}; 

anchorScroll('.main-nav__nav');