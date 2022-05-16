$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navber').addClass("sticky");

        }else{
            $('.navber').removeClass("sticky");

        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }

    });

    // slide-up script

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    // toggle menu/navber script
    $('.menu-btn').click(function(){

        $('.navber .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
var typed = new Typed(".typing", {
    strings: ["Full-Stack Web Developer","React Developer"],  

    typespeed:50,
    backspeed:20,
    loop: true

});

var typed = new Typed(".typing-2", {
    strings: ["Full-Stack Web Developer","React Developer"], 

    typespeed:50,
     backspeed:20,
    loop: true

});



    // owl carousel script
    $('.carousel').owlCarousel({

        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
        
    });
});

window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      status.innerHTML = "<span class='sent-message'>Your message has been sent. Thank you!</span>";
    }

    function error() {
      status.innerHTML = "<span class='error-message'>Oops! There was a problem  &times;</span>";
    }
    $(document).ready(function(){
      $("#my-form-status").click(function(){
        status.innerHTML ="<span style='display:none;'> </span>";
      });
    });

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });