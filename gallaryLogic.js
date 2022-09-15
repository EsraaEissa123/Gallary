$.fn.display=function (currentImage){
    var currentImage=currentImage;
   allImages=$("img");

    var newImg = $(`<dev id=container><img class="display" src=''><button class=exit>X</button><button class="backArrow"> < </button><button class="forwardArrow"> > </button></dev>`); 
    

    newImg.appendTo($("#display")).css({
      "object-fit": "fill",
      "margin-left" : "370px",
      "margin-top" : "0px",

      // "opacity": '.9'

      });

      $(".display").attr("src", currentImage.attr("src"));

        $(".forwardArrow").click (forward= function(){
            $(".display").hide("slow", function(){

             if (allImages.eq(allImages.length - 1).attr("src")==currentImage.attr("src")) {

                    currentImage=allImages.eq(0);
                       console.log(currentImage);
                       $(".display").fadeIn("2000").attr("src", currentImage.attr("src"));
                }else
                {
               currentImage=currentImage.next();
               console.log(currentImage);
               $(".display").fadeIn().attr("src", currentImage.attr("src"));
                }
          });
                });
                $(".backArrow").click (forward= function(){
                    $(".display").hide("slow", function(){
                        if (allImages.eq(0).attr("src")==currentImage.attr("src")) {

                            currentImage=allImages.eq(allImages.length - 1);
                               console.log(currentImage);
                               $(".display").fadeIn("2000").attr("src", currentImage.attr("src"));
                        }else
                        {
                       currentImage=currentImage.prev();
                       console.log(currentImage);
                       $(".display").fadeIn("2000").attr("src", currentImage.attr("src"));
                    }
                  });
                        });
                        $(".exit").click (forward= function(){
                            $("#container").remove()
                        });
                       
            
    }
    
    $("img").click (function(){
        $("img").display($(this));

      });
                
    