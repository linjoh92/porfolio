$(function() {

    const prefixHome = $("main").hasClass("index") ? "" : "../";
    const prefix = $("main").hasClass("index") ? "html/" : "./";

    $("header").append($("<section class='left-menu'>"));
    $(".left-menu").append($("<a class='logga',  href='" + prefixHome + "index.html'>").text("LJ"));
    $(".left-menu").append($("<img class='mobil-menu' src='" + prefixHome + "resources/img/hamburger-menu.svg'>"));
    $(".left-menu").append($("<img class='close' src='" + prefixHome + "resources/img/close.svg'>"));

    $("header").append($("<section class='menu'>"));
    $(".menu").append($("<a class='menu-item who-item',  href='" + prefix + "who-profile.html'>").text("Who"));
    $(".menu").append($("<a class='menu-item what-item', href='" + prefix + "what-skills.html'>").text("What"));
    $(".menu").append($("<div class='menu-item work'>").text("Work"));

    $(".menu-item, .work").append($("<div class='submenu'>"));
    $(".submenu").append($("<a class='sub-menu-item' href='" + prefix + "graphic-design.html'>").text("Graphic Design"));
    $(".submenu").append($("<div class='sub-menu-item front-end'>").text("Front End"));
    $(".submenu").append($("<div class='sub-sub-menu' id='submenu'>"));

    $(".sub-sub-menu").append($("<a class='sub-sub-menu-item' , href='" + prefix + "haceli.html'>").html("Hac&#233;li"));
    $(".sub-sub-menu").append($("<a class='sub-sub-menu-item' , href='" + prefix + "hangman.html'>").text("Hangman"));
    $(".sub-sub-menu").append($("<a class='sub-sub-menu-item' , href='" + prefix + "spotify-top-tracks.html'>").text("Spotify Top Tracks"));

    $("header").append($("<section class='right-menu'>"));
    $(".right-menu").append($("<a class='menu-item-right',  href='#ex1', rel='modal:open'>").text("Contact"));
   
    $(".menu-item").on({
        mouseenter: function() {
            $(this).addClass("active"); 
        },
        mouseleave: function() {
            $(this).removeClass("active");
        },
        click: function() {
            $(".work").find(".submenu").slideToggle();
            $(this).siblings().find(".submenu").hide();
            $(this).toggleClass("active-click");
            $(this).children().children().removeClass("active");
            $(this).children().children().siblings(".sub-sub-menu").hide();
        }  
    })

    if ($("main").hasClass("who")) {
        $(".who-item").addClass("active-click");
    } else if ($("main").hasClass("what")) {
        $(".what-item").addClass("active-click");
    }

    $(".menu-item-right, .logga").on({
        mouseenter: function() {
            $(this).addClass("active"); 
        },
        mouseleave: function() {
            $(this).removeClass("active");
        } 
    })

   $(".sub-menu-item.front-end").on("click", function (e) {
        $(this).siblings(".sub-sub-menu").slideToggle("slow");
        $(this).toggleClass("active");
        e.stopPropagation();
    })

    $(".sub-menu-item, .sub-sub-menu-item").on({
        mouseenter: function(){
            $(this).addClass("sub-menu-active");
        }, 
        mouseleave: function() {
            $(this).removeClass("sub-menu-active");
        }
    })

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
           $("header").addClass("header-scrool");
        } else {
            $("header").removeClass("header-scrool");
        }
    })

    function openMobilMenu() {
        $(".mobil-menu").hide();
        $(".close").show();
        $(".menu").show();
        $(".right-menu").show();
        $("header").addClass("mobil-menu-color");
        $("header").removeClass("header-scrool");
        $(".logga").css('color', '#ff7900')
        $(".mobil-menu").css('color', '#ff7900')
        $(".menu-item").removeClass("active-click")
    }

    function closeMobilMenu() {
        $(".mobil-menu").show();
        $(".close").hide();
        $(".menu").hide();
        $(".right-menu").hide();
        $("header").removeClass("mobil-menu-color");
        $(".logga").css('color', '#ffffff')
        $(".mobil-menu").css('color', '#ffffff')
    }

    $(".mobil-menu").on("click", function(){
        openMobilMenu();
    })

    $(".close").on("click", function(){
        closeMobilMenu();
    })

})
