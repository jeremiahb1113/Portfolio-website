
const form = document.getElementById('contact-submit');
 
function submit_btn(){
       form.addEventListener('submit', function(event) {
        event.preventDefault();
        const company = document.getElementById('company-name');
        const yourName = document.getElementById('full-name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

    })
    console.log(yourName + "," + company + "," + email + "," + message + 'form submitted')
}

export default submit_btn;