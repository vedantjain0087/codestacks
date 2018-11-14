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
    .when('/zeus', {
      templateUrl: 'pages/zeus.html',
      controller: 'homeController'
  })
    .when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'homeController'
    })
    .when('/ama', {
      templateUrl: 'pages/ama.html',
      controller: 'homeController'
  })
  .when('/competition', {
    templateUrl: 'pages/comp.html',
    controller: 'compController',
    controllerAs:'ctrl'
})
});

myApp.controller('compController', ['$scope', '$http', '$location','$window','$rootScope', function($scope,$http,$location,$window,$rootScope){
  $rootScope.$on('$includeContentLoaded', function() {
    if(location.hash=="#/competition"){
      $('html, body').animate({
        scrollTop: $("#services").offset().top
    }, 500);
    
    }
  });
  
 
  var vm  = this;
  $scope.reg_ind = function(form){

    if(!form.$valid || vm.contact.length != 10){
      swal({
        title: "Error",
        text: "The details you have entered are incorrect",
        icon: "error",
        button: "Ok, let me correct",
      });
    }else{
      $http({
        url: 'https://codestacks.herokuapp.com/individual',
        method: "POST",
        data: { fullname: form.fullname.$viewValue, email: form.email.$viewValue,address:form.address.$viewValue,contact:form.contact.$viewValue,org:form.org.$viewValue,txn:form.txn.$viewValue}
    })
    .then(function(response) {
      console.log(response);
      swal({
        title: response.data.type,
        text: response.data.message,
        icon: response.data.type,
        button: "Ok",
      });
    });
    }
  }
  $scope.reg_team = function(form){
    if(!form.$valid || vm.contact.length != 10){
      swal({
        title: "Error",
        text: "The details you have entered are incorrect",
        icon: "error",
        button: "Ok, let me correct",
      });
    }else{
      $http({
        url: 'https://codestacks.herokuapp.com/team',
        method: "POST",
        data: { team: form.teamname.$viewValue, fullname1: form.fullname1.$viewValue,email1:form.email1.$viewValue, fullname2: form.fullname2.$viewValue,email2:form.email2.$viewValue, fullname3: form.fullname3.$viewValue,email3:form.email3.$viewValue, fullname4: form.fullname4.$viewValue,email4:form.email4.$viewValue, fullname5: form.fullname5.$viewValue,email5:form.email5.$viewValue,contact:form.contact.$viewValue,org:form.org.$viewValue,txn:form.txn.$viewValue}
       
    })
    .then(function(response) {
      console.log(response);
      swal({
        title: response.data.type,
        text: response.data.message,
        icon: response.data.type,
        button: "Ok",
      });
    });
    }
  }

  
}]);

myApp.controller('homeController', ['$scope', '$http', '$location','$window','$rootScope', function($scope,$http,$location,$window,$rootScope){

  $rootScope.$on('$includeContentLoaded', function() {
 
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

// if(location.hash=="#/"){
//   $('html, body').animate({
//     scrollTop: $("#particles-js").offset().top
// }, 500);

// }
//  else 
 if(location.hash=="#/services"){
    $('html, body').animate({
      scrollTop: $("#services").offset().top
  }, 500);
  }else if(location.hash=="#/about"){
    $('html, body').animate({
      scrollTop: $("#about").offset().top
  }, 500);
  }else if(location.hash=="#/contact"){
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
  }, 500);
  }
  else if(location.hash=="#/ama"){
    $('html, body').animate({
      scrollTop: $("#team").offset().top
  }, 500);
  }

  });
  



    

   }]);