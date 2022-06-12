const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
  loop: true,
    
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  });
    
let li = document.querySelectorAll(".faq-text li");
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", (e)=>{
    let clickedLi;
    if(e.target.classList.contains("question-arrow")){
      clickedLi = e.target.parentElement;
    }else{
      clickedLi = e.target.parentElement.parentElement;
    }
   clickedLi.classList.toggle("showAnswer");
  });
}

$(document).ready(function() {
  $('.autoWidth').lightSlider({
      autoWidth:true,
      onSliderLoad: function() {
          $('.autoWidth').removeClass('cS-hidden');
      } 
  });  
});