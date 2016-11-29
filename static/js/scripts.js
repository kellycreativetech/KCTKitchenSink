//@codekit-prepend "hoverIntent.js";
//@codekit-prepend "superfish.js";
//@codekit-prepend "KCT-mobilenav.js";
//@codekit-prepend "slick.js";
//@codekit-prepend "jquery.fancybox.js";
//@codekit-prepend "jquery.fancybox-media.js";
//@codekit-prepend "headroom.js";


// carousel plugin.
$('.carousel').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 1000,
    fade: true,
    pauseOnHover: true
});

// grab an element
var headroomElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(headroomElement, {
  "offset": 0,
  "tolerance": 5,
});
// initialise
headroom.init();

$("document").ready(function () {
    // anytime there's a youtube link, make it pop up in a lightbox
    $("[href*='youtube.com'], [href*='youtu.be']").fancybox({
      helpers : {
          media: true
      },
      width       : 800,
      height      : 450,
      aspectRatio: true,
      scrolling: 'no',
    });
    // add .fancybox to any link to make it pop up in a lightbox
    $(".fancybox").fancybox({
      autoSize : false,
      padding: 30,
      helpers:  {
        title : {
          type : 'over'
        },
      }
    });

    // if the contact form is in the footer, this scrolls to it
    // and focuses the first field.

    $('a[href*="#contact"]').click(function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $("#contact").offset().top
      }, 700, function() {
          $('[name="Your Name"]').focus();
      });
    });
});

// add responsive video wrapper to any iframe. Kinda heavy,
// but easy to make more specific if you know it's here.
$('iframe').wrap('<div class="video-wrap" />');

// This is a simple responsive utility: put things in here
// if you want something to happen on window resize.

function resizedw(){
  // Haven't resized in 250ms. Add scripts here.
}

var doit;
window.onresize = function(){
  clearTimeout(doit);
  doit = setTimeout(resizedw, 250);

};

// This is a simple spam catcher. By adding the form action via
// JS, we can prevent a lot of spam bots who have better things
// to do than render the JS on a target form.

  $(".nojs").remove();
  $('.glass-form').attr({'action': "/siteapi/submit_form"});
