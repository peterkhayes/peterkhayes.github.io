$(document).on('ready', function() {

  $('.panel').css('left', -500);
  $('.panel').hide();
  $('.activePanel').css('left', 0);
  $('.activePanel').show();

  var slideOut = function(el, cb) {
    $(el).animate({'left': -500}, 200, 'swing', function() {
      $(el).hide();
      cb();
    });
  };

  var slideIn = function(el, cb) {
    $(el).show();
    $(el).animate({'left': 0}, 200, 'swing', cb);
  };

  var swapPanels = function(panel1, panel2, cb) {
    $(panel1).removeClass('activePanel');
    $(panel2).addClass('activePanel');
    slideOut(panel1, function() {
      slideIn(panel2, cb);
    });
  };

  $('span.home').on('click', function(clicked) {
    if (!($('activePanel').hasClass('home'))) {
      swapPanels($('.activePanel'), $('.panel.home'));
    }
  });
  $('span.projects').on('click', function(clicked) {
    if (!($('activePanel').hasClass('projects'))) {
      swapPanels($('.activePanel'), $('.panel.projects'));
    }
  });
  $('span.music').on('click', function(clicked) {
    if (!($('activePanel').hasClass('music'))) {
      swapPanels($('.activePanel'), $('.panel.music'));
    }
  });
  $('span.likes').on('click', function(clicked) {
    if (!($('activePanel').hasClass('likes'))) {
      swapPanels($('.activePanel'), $('.panel.likes'));
    }
  });

});