var myApp = angular.module('myApp',['ngRoute']);



myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/index.html',
        controller: 'homeController'
    })
    .when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'homeController'
    })
    .when('/services', {
        templateUrl: 'pages/services.html',
        controller: 'homeController'
    })
    .when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'homeController'
    })
});

myApp.controller('homeController', ['$scope', '$http', '$location','$window', function($scope,$http,$location,$window){

    var s = $("#sticker");
    var pos = s.position();
    $(window).on('scroll', function() {
      var windowpos = $(window).scrollTop() > 300;
      if (windowpos > pos.top) {
        s.addClass("stick");
      } else {
        s.removeClass("stick");
      }
    });

    var main_menu = $(".main-menu ul.navbar-nav li ");
    main_menu.on('click', function() {
      main_menu.removeClass("active");
      $(this).addClass("active");
    });
    new WOW().init();

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });


    var test_carousel = $('.testimonial-carousel');
  test_carousel.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });   

   }]);