$(document).ready(function(){
    //IMAGE  GALLERY CODE
    $(".gallery-thumb").on("click", function(){
        $(".gallery-thumb").removeClass("gallery-active");
        $(this).addClass("gallery-active");
        let imageSrc = $(this).children("img").attr("src");
        $(".gallery-preview img").attr("src",imageSrc)
    })
    //attr stands for attribute
    //src stands for image source
      
})