$(document).ready(function () {
    'use strict';


    $('.panel-heading a[aria-expanded="true"]').click(function () {
        $(this).find('i').toggleClass('icofont-simple-down icofont-simple-up');
    });

    
    
    function readURL(input) {
        if(input.files && input.files[0]){
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#preview img').attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    $(document).on('change','input[type="file"]', function () {
        readURL(this);
    });

    $('button.plus').click(function (e) {
        e.preventDefault();
        $( ".plus-content" ).append("<div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
            "                                            <div class=\"form-inline choose-file\">\n" +
            "                                                <input type=\"file\" class=\"form-control\" name=\"file\">\n" +
            "                                                <label>ارفق ملف </label>\n" +
            "                                                <i class=\"icofont icofont-upload-alt\"></i>\n" +
            "                                            </div>\n" +
            "                                        </div>");
    });


    var owl1 = $('.new1 .owl-carousel');
    owl1.owlCarousel({
        items:1,
        dots: false,
        nav:true,
        rtl:true,
        loop:true,
        margin:10,
        autoplay: true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        navText: ['<i class="icofont icofont-simple-right"></i>', '<i class="icofont icofont-simple-left"></i>']
    });
    $('.control1 .play').on('click',function(){
        owl1.trigger('play.owl.autoplay',[1000]);
        $(this).toggleClass('control-toggle');
        $('.control1 .stop').toggleClass('control-toggle');
    });
    $('.control1 .stop').on('click',function(){
        owl1.trigger('stop.owl.autoplay');
        $('.control1 .play').toggleClass('control-toggle');
        $(this).toggleClass('control-toggle');
    });
    
    var owl10 = $('.new2 .owl-carousel');
    owl10.owlCarousel({
        items:1,
        dots: false,
        nav:true,
        rtl:true,
        loop:true,
        margin:10,
        autoplay: true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        navText: ['<i class="icofont icofont-simple-right"></i>', '<i class="icofont icofont-simple-left"></i>']
    });
    $('.control2 .play').on('click',function(){
        owl1.trigger('play.owl.autoplay',[1000]);
        $(this).toggleClass('control-toggle');
        $('.control2 .stop').toggleClass('control-toggle');
    });
    $('.control2 .stop').on('click',function(){
        owl1.trigger('stop.owl.autoplay');
        $('.control2 .play').toggleClass('control-toggle');
        $(this).toggleClass('control-toggle');
    });

    var owl2 = $('.slider-show .owl-carousel');
    owl2.owlCarousel({
        animateIn: 'fadeIn',
        items:1,
        smartSpeed: 2500,
        dots: false,
        nav:false,
        rtl:true,
        loop:true,
        margin:10,
        autoplay:true
    });


    $('.videos .owl-carousel').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        rtl: true,
        dots: false,
        video:true,
        lazyLoad:true,
        center:true
    });
    
    $('.video .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        rtl:true,
        center:true,
        dots: false,
        URLhashListener:true,
        startPosition: 'URLHash'
    });
    
    $('.photo .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        center:true,
        rtl:true,
        autoplay:true,
        dots: false,
        URLhashListener:true,
        startPosition: 'URLHash'
    });

    $('.suponsers-owl').owlCarousel({
        loop:true,
        margin:10,
        rtl:true,
        nav:true,
        navText: ["<i class='icofont icofont-rounded-right'></i>", "<i class='icofont icofont-rounded-left'></i>"],
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }   
    });
});


// SHOW DATE 
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;         