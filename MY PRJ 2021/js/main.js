$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    autoplay: true,
    autoplayTimeout: 4000
});


let d = document.getElementsByClassName('btn1');
let d2 = document.getElementsByClassName('btn2');
let d3 = document.getElementsByClassName('btn3');
let d4 = document.getElementsByClassName('btn4');
let p = document.getElementsByClassName('p');
let p2 = document.getElementsByClassName('p-2');
let p3 = document.getElementsByClassName('p-3');
let p4 = document.getElementsByClassName('p-4');
let i=0;
$(document).ready(function(){
  $(d).click(function(){
  $(p).slideToggle();
  $("#bat-1").attr("src","./img/faq-down.png");
  });
});





$(document).ready(function(){
  $(d2).click(function(){
    $(p2).slideToggle();
  });
});
$(document).ready(function(){
  $(d3).click(function(){
    $(p3).slideToggle();
  });
});
$(document).ready(function(){
  $(d4).click(function(){
    $(p4).slideToggle();
  });
});
