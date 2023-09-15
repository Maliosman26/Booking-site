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

$('.Highlights-slider').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  autoPlay: true,
  autoPlay: 2000,
  wrapAround: true,
});