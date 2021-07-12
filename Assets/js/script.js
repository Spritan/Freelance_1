$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbart on scroll script
        if(this.scrollY > 20){
            $('.navbart').addClass("sticky");
            $('.navbart2').addClass("sticky");
        }else{
            $('.navbart').removeClass("sticky");
            $('.navbart2').removeClass("sticky");
        }
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbart .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    $('.navbart2 .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbart script
    $('.menu-btn').click(function(){
        $('.navbart2 .menu').toggleClass("active");
        $('.navbart .menu').toggleClass("active");

        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Animation", "VFX", "Gaming", "broadcast","Graphic Design","Web design & development"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Artist", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });






    

    
});