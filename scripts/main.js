var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.right-arrow',
    prevEl: '.left-arrow',
  },
});

//second-slider

var swiper = new Swiper('.second-slider', {
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.right-arrow2',
    prevEl: '.left-arrow2',
  },
});

//burger
$("#opener").on("click", function () {
  if (document.getElementById("opened").style.display == "none"){
    document.getElementById("opened").style.display = "flex";
  } else
  document.getElementById("opened").style.display = "none";
});