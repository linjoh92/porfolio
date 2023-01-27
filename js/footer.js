$(function() {

    const prefixHome = $("main").hasClass("index") ? "" : "../";

    $("footer").append($("<div class='footer-container'>"));

    $(".footer-container").append($("<div class='project-container'>"));
    $(".project-container").append($("<div class='project-call-to-action'>"));
    $(".project-call-to-action").append($("<p class='project-titel'>").text("Start a project"));
    $(".project-call-to-action").append($("<p class='project-desciption'>").text("Interested in working together? We should meet up and have a chat. I'll buy the coffee!"));
    $(".project-call-to-action").append($("<a class='project-btn' href='#ex1', rel='modal:open'>").text("Let's do this"));

    $(".footer-container").append($("<img src='" + prefixHome + "resources/img/icon_frontend_developer.svg' alt='icon-front-end-developer' width='60px'>"));
    $(".footer-container").append($("<h2>").text("Follow me on social media"));
    $(".footer-container").append($("<div class='icon-contianer'>"));

    $(".icon-contianer").append($("<a class='facebook-icon' href='https://www.facebook.com/Linnj92/' target='_blank'>"));
    $(".facebook-icon").append($("<img class='icon' src='" + prefixHome + "resources/img/facebook.svg' alt='icon-facebook' width='8px'>"));
    $(".icon-contianer").append($("<a class='istagram-icon' href='https://www.instagram.com/linjoh/' target='_blank'>"));
    $(".istagram-icon").append($("<img class='icon' src='" + prefixHome + "resources/img/instagram.svg' alt='icon-facebook' width='15px'>"));
    $(".icon-contianer").append($("<a class='linkedin-icon' href='https://www.linkedin.com/in/linn-johansson-50724167/' target='_blank'>"));
    $(".linkedin-icon").append($("<img class='icon' src='" + prefixHome + "resources/img/linkedin.svg' alt='icon-facebook' width='15px'>"));

    $(".footer-container").append($("<h3 class='copyright'>").html("Copyright 2023 &#169; Linn J Design"));

})