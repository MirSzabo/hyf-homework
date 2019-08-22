console.log("it works")
$(document).ready(function () {
 $(".submit").click(function (event) {
     event.preventDefault()
     console.log("clicked")

     let email = $(".email").val()
     let message = $(".message").val()
     let statusElm = $(".status")
     statusElm.empty()

     if(email.lenght > 5 && email.includes("@") && email.includes(".")) {
        statusElm.append("<div>Email is valid</div>")
     } else {
        event.preventDefault()
        statusElm.append("<div>Email is not valid</div>")
     }

     if(message.lenght < 5) {
        statusElm.append("<div>Message is valid</div>")
    } else {
        event.preventDefault()
          statusElm.append("<div>Message is not valid</div>")
    }

 }) 
})

