import $ from 'jquery';
import 'fancybox';
import 'flex';
import 'waypoints';

$(document).ready(() => {

  $('.jumpnav li a, .jumpnav > a').on('click', function(e) {

    var target = $(this).attr('href');

    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 80
    }, 500);

    e.preventDefault();

  });


  $('.wp-hide').each(function(){
    const waypoint = new Waypoint({
      element: $(this)[0],
      handler(direction) {
        if(direction == 'down'){
          if(!$(this.element).hasClass('isActive')){
            $(this.element).addClass('isActive');
          }
        }
      },
      offset: '80%'
    });
  });

  $('.nest > a').on('click', function(e){
    $(this).parent().toggleClass('isActive');
    $('html, body').stop();
    e.preventDefault();
  });

  $(window).scroll(function(){
    if($(document).scrollTop() > 150){
      $('.main-nav').addClass('isActive');
    }else{
      $('.main-nav').removeClass('isActive');
    }
  })

  function contactCondition() {

    var showForm = function(value) {

      $('.hidden-select-items.active').removeClass('active').addClass('hidden');
      $('.hidden-select-items.' + value).removeClass('hidden').addClass('active');

    }

    $('.form-select-option.primary').on('change', function() {


      var value = $(this).val();

      if (value === 'company') {
        if (window.location.href.indexOf("compliance") >= 0) {
          $('html, body').stop().animate({
            scrollTop: $('#registration').offset().top - 90
          }, 400);
        } else {
          window.location.href = "/compliance?registration=true&name=" + encodeURIComponent($('#name-form-input').val()) + "&email=" + encodeURIComponent($('#email-form-input').val()) + "&telephone=" + encodeURIComponent($('#tel-form-input').val());
        }
      } else {
        showForm(value);
      }

    });

    if (window.location.href.indexOf("registration") >= 0) {
      $('html, body').stop().animate({
        scrollTop: $('#registration').offset().top - 90
      }, 400);
    }

    //Copy Input Vals
    $('#name-form-input, #email-form-input, #tel-form-input ').on('blur', function() {
      copyEl = $(this).attr('data-target');

      //Set both attr and val
      $(copyEl).val($(this).val());
      $(copyEl).attr('value', $(this).val());
    });

  }

  function successNav() {

    $('.success-stories-nav a').on('click', function(e) {

      if ($(this).hasClass('.slide-next')) {
        $('.flexslider').flexslider('prev');
      } else {
        $('.flexslider').flexslider('prev');
      }

      e.preventDefault();
    });
  }

  function facilitiesDrawers() {

    var clearOpen = function() {
      $('.facilities-graph li.open').toggleClass('open');
    }

    $('.facilities-graph > li > a').on('click', function(e) {

      if (!$(this).parent().hasClass('open')) {
        clearOpen();
      }

      $(this).parent().toggleClass('open');
      $(this).parent().find('.fa-plus').toggleClass('fa-minus');

      setTimeout(function() {
        clearOpen();
      }, 10000);

      e.preventDefault();
    });

  }

  function marketModals() {

    $('.market-graph li a').on('click', function(e) {

      var targetModal = $(this).attr('data-graph');

      $('.market-modals').removeClass('hidden');
      $('.market-modals ' + targetModal).removeClass('hidden').addClass('visible-market-modal');

      e.preventDefault();
    });

    $(document).on('click', '.market-modal-close', function(e) {
      $('.market-modals, .market-modal-element').addClass('hidden');
      $('.visible-market-modal').removeClass('visible-market-modal');
      e.preventDefault();
    });

  }

  function scrollNav() {

    var scrollAdjust = function() {
      var scrolltop = $(this).scrollTop();

      if (scrolltop >= 100) {
        setTimeout(function() {
          $('.primary-nav').addClass('filled');
        }, 100);
      }

      if (scrolltop < 100) {
        setTimeout(function() {
          $('.primary-nav').removeClass('filled');
        }, 100);
      }
    }
    $(document).on('scroll', function() {
      scrollAdjust();
    });

    //Fire on load, just as good measure
    setTimeout(function() {
      scrollAdjust();
    }, 50);

    $('.hm-hero--arrow-down').on('click', function(e) {
      $('html, body').stop().animate({
        scrollTop: $('.site-container').offset().top
      }, 700);

      e.preventDefault();
    });
  }

  scrollNav();
  marketModals();
  facilitiesDrawers();
  successNav();
  contactCondition();

  $('.main-nav__bars, .flyout-nav__x').on('click', function(e){
    $('.flyout__container').toggleClass('isActive');
    setTimeout(function(){
      $('.flyout-nav').toggleClass('isActive');
    },50)
    e.preventDefault();
  });

  $('.flyout__container').on('click', function(e){
    if($(e.target).hasClass('flyout__container')){
      $('.flyout__container').removeClass('isActive');
      $('.flyout-nav').removeClass('isActive');
    }
  });

  $('.purple-dropdown').on('click', function(e){
    $(this).toggleClass('isActive');
  });

  $(".fancybox").fancybox({});
  $('.flexslider').flexslider();

  $('.fb-close').on('click', function(e) {
    $.fancybox.close();

    $('html, body').stop().animate({
      scrollTop: $('.contact-section').offset().top
    }, 200);

    $('.primary-contact-form input#name-form-input').focus();

    e.preventDefault();
  });

});
