
function sendMail(){
    const params = {
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    }

    const serviceId = "service_I9xum7u";
const templateID = "template_g7qn5b9"

emailjs.send(serviceId, templateID,params)
.then( res =>{
    document.getElementById('email').value = "";
    document.getElementById('subject').value = "";
    document.getElementById('message').value = "";
    console.log(res);
    alert("your message was sent successfully")
})
.catch(err =>{
    console.log(err)
    alert("an error occured")
} )

}



