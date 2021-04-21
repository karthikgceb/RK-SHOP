$(document).ready(function(){

    $('#search, .fa-search').mouseenter(function(){
        $('.logo').hide();
    });

    $('#search, .fa-search').mouseleave(function(){
        $('.logo').show();
    });

    $('.fa-bars').click(function(){
        $('.navbar').toggle();
        $('#home').toggle();
        $('#product').toggle();
        $('#offer').toggle();
        $('#review').toggle();
        $('#newsletter').toggle();
        $('#brand').toggle();
        $('#footer').toggle();
        $(this).toggleClass('fa-times');
    });

    $('.navbar, .navbar a').click(function(){
        $('.navbar').hide();
        $("#home").show();
        $("#product").show();
        $("#offer").show();
        $("#review").show();
        $("#newsletter").show();
        $("#brand").show();
        $("#footer").show();
        $('.fa-bars').removeClass('fa-times');
    });

    $(window).on('scroll load',function(){

        if($(window).scrollTop() > 20){
            $('#header').css({
                'background':'#EB4D4B',
                'position':'fixed',
                'padding':'0.5rem 1rem',
                'z-index':'1000',
                'box-shadow':'0 .1rem .3rem #000'
            });
        }else{
            $('#header').css({
                'background':'#333',
                'box-shadow':'none',
                'position':'relative'
            });
        }

    });

    $('.home-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        autoplay:true
    });

    $('.product-slider').owlCarousel({
        loop:true,
        nav:true,
        items:3,
        autoplay:true,
        center:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $('.review-slider').owlCarousel({
        loop:true,
        nav:true,
        items:1,
        autoplay:true
    })
    $('.brand-slider').owlCarousel({
        loop:true,
        nav:false,
        items:5,
        autoplay:true,
        dots:false,
        responsive:{
            0:{
                items:1,
            },
            400:{
                items:2
            },
            550:{
               item:3
            },
            1000:{
                items:5
            }
        }
    });

})
