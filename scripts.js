(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {

        let item = document.querySelectorAll(".item");
        let toggleItem = document.querySelector(".toggle");
        let itemMenu = document.querySelectorAll(".item.pages")

        
        let i = 0;

        
            function toggle(){
            if(matchMedia("(max-width: 599px)").matches) {
                if(item.contains(active)){
                    for(i; i < item.length; i++){
                        item[i].classList.remove("active");
                    }
                } 
                else{
                    for(i; i < item.length; i++){
                        item[i].classList.add("active");
                    }
                }
            }
            else{
                if(itemMenu.contains(active)){
                    for(i; i < item.length; i++){
                        itemMenu[i].classList.remove("active");
                    }
                } 
                else{
                    for(i; i < item.length; i++){
                        itemMenu[i].classList.add("active");
                    }
                }
            }
            };
        
        

    
        toggleItem.addEventListener("click", function() {
            for(i=0; i<item.length; i++ ){
                item[i].classList.toggle("active")
            }
        })

        

        // item.addEventListener("click", function(){
        //     if(item.classList="active"){
        //         item.classList.remove="active";
        //     }else{
        //         item.classList.add="active";
        //     };
        // })
    

    }); // DOM CONTENT LOADED
  })();