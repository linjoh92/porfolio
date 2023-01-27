$(function() {
    
    $(".read-more").on("click", function(){   
        if ($(this).text() == "Read more") { 
            $(this).text("Read less").addClass("read-less"); 
            $(".assigment-description").show("slow");
            $(".github-btn").css('font-weight' , '700')
        } else { 
            $(this).text("Read more").removeClass("read-less"); 
            $(".assigment-description").hide("slow");
            $(".github-btn").css('font-weight' , '600')
        };
    })

})