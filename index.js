let bulbtop = document.querySelector(".bulb-top")
let bulbbottom = document.querySelector(".bulb-bottom")
let hr = document.querySelector("hr")
let body = document.querySelector("body")
let button = document.querySelector("button")

        // bulbtop.addEventListener("click", function(){
        //     bulbtop.style.backgroundColor = "black"
        //     body.style.backgroundColor = "black"
        //     bulbbottom.style.backgroundColor = "black"
        //     hr.style.color = "black"
        //     hr.style.backgroundColor = "black"
        //     hr.style.border = "black"
        //     button.style.backgroundColor = "black"
        // })
        bulbtop.style.backgroundColor = "yellow"

        button.addEventListener("click", function(){
            if(bulbtop.style.backgroundColor === "yellow"){
                bulbtop.style.backgroundColor = "black"
                body.style.backgroundColor = "black"
                bulbbottom.style.backgroundColor = "black"
                button.style.backgroundColor = "black"
            }
            else{
                bulbtop.style.backgroundColor = "yellow"
                body.style.backgroundColor = "rgba(178, 234, 95, 0.4)"
                bulbbottom.style.backgroundColor = "grey"
                button.style.backgroundColor = "chocolate"
            }
        })

        bulbtop.addEventListener("click", function(){
            if(bulbtop.style.backgroundColor === "yellow"){
                bulbtop.style.backgroundColor = "black"
                body.style.backgroundColor = "black"
                bulbbottom.style.backgroundColor = "black"
                button.style.backgroundColor = "black"
            }
            else{
                bulbtop.style.backgroundColor = "yellow"
                body.style.backgroundColor = "rgba(178, 234, 95, 0.4)"
                bulbbottom.style.backgroundColor = "grey"
                button.style.backgroundColor = "chocolate"
            }
        })