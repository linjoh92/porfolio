$(function() {

    $("body").append($("<div class='modal window', id='ex1'>"));
    $(".modal").append($("<a href='#' rel='modal:close'>"));

    $(".modal").append($("<form class='form' action='mailto:linnjdesign@gmail.com' method='post' enctype='text/plain'>").text("contact me"));
    $(".form").append($("<input class='contact-input' placeholder='Name' name='name' required data-name='name'>"));
    $(".form").append($("<input class='contact-input' placeholder='Email' name='email' required data-name='email'>"));
    $(".form").append($("<input class='contact-input' placeholder='Subject' name='Subject' required data-name='subject'>"));
    $(".form").append($("<textarea class='contact-message' placeholder='Message' name='message' cols='5' rows='20' required data-name='message'>"));
    $(".form").append($("<div class='contact-container'>"));
    $(".contact-container").append($("<button class='contact-btn' type='submit'>").text("Send Message"));

    $("form").submit(function(){
        window.location = href="#close-modal";    
    });
})