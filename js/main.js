$(document).ready(function(){
    /*--------------Navbar Shrink----------------*/

    $(window).on("scroll",function(){
        if($(this).scrollTop()>90){
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
        }
    });
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
    /*-------------Team Carousel-----------------*/
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3, 
            }
        }
    });

    /*-----------Ratings Carousel-----------------*/
    $('.rating-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3, 
            }
        }
    });

    /*-----------Awards Carousel-------------------*/
    $('.awards-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3, 
            }
        }
    });

    /*----------Page Scrolling---------------------*/
    $.scrollIt({
        topOffset:-50
    });

    /*-----------Navbar Collapse------------------*/
    $(".nav-link").on("click", function(){
        $(".navbar-collapse").collapse("hide");
    });

    /*---------------Locations for Funds-------------*/
    $('#locations').on('change', function(){
        $('#roi').val($(this).find(':selected').data('roi'));
    })
    $("#locations").change();


    $('#locations').on('change', function(){
        $('#ask').val($(this).find(':selected').data('ask'));
    })
    $("#locations").change();

    

    /*------------Toggle Theme - Light to Dark-----------*/
    function toggleTheme(){
        if(localStorage.getItem("invest-theme")!==null){
            if(localStorage.getItem("invest-theme")==="dark"){
                $("body").addClass("dark");
            }  
            else{
                $("body").removeClass("dark");
            }
        }
        updateIcon();
    }
    toggleTheme();
    $(".toggle-theme").on("click",function(){
        $("body").toggleClass("dark");
        if($("body").hasClass("dark")){
            localStorage.setItem("invest-theme","dark");
        }
        else{
            localStorage.setItem("invest-theme","light");
        }
        updateIcon();
    });
    function updateIcon(){
        if($("body").hasClass("dark")){
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        }
        else{
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }

});





