
$(window).bind('scroll', function(e) {
  parallaxScroll();
});

function parallaxScroll() {
  var scrolled = $(window).scrollTop();
  $('.layer-1').css('top', (0 - (scrolled * 0.25)) + 'px');
  $('.layer-2').css('top', (0 - (scrolled * 0.5)) + 'px');
  $('.layer-3').css('top', (0 - (scrolled * 0.75)) + 'px');
  $('.bgpic').css('top',(400-(scrolled*.9))+'px');
  $('.pasta').css('top',(1000-(scrolled*.9))+'px');
  $('.spaghetti').css('top',(1800-(scrolled*.9))+'px');
  $('.lasagna').css('top',(2700-(scrolled*.9))+'px');
}
