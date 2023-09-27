import classes from "../main.css";

export default () => {
  console.log(classes.main);
};

$(".Header-switch").on("click", function () {
  if ($(".Header").is(".menu-show")) {
    $(".Header").removeClass("menu-show");
  } else {
    $(".Header").addClass("menu-show");
  }
});

$(".Highlights-slider").flickity({
  // options
  cellAlign: "left",
  contain: true, 
  pageDots: false,  //Sayfa işaretleri
  autoPlay: false,  //Otomatik kaydırma
  /* autoPlay: 4000, */  //4 saniyede bir kaydır
  wrapAround: false, //Kaydırmayı devam ettir
  prevNextButtons: false,
  freeScroll: false, //Serbestçe kaydırma
});
