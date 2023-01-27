$(function() {

    new jBox('Image');

    const categoryArray = [
        ".all",
        ".art",
        ".design",
        ".logo", 
        ".poster",
        ];

    for (let i = 0; i < categoryArray.length; i++) {
        $(".category" + categoryArray[i]).on("click", function() {
            $(this).addClass("active-category");
            $(this).siblings().removeClass("active-category");
            $(".image-item" + categoryArray[i]).show();
            
            if (i == 0 ) {
                $(".image-item").show();
                $(".image-gallery .column").css('grid-template-columns' , 'repeat(2, 1fr');
            } else {
                $(".image-item" + categoryArray[i]).siblings().hide();
                $(".image-gallery .column").css('grid-template-columns' , 'repeat(1, 1fr');
            }       
        })
    }

})