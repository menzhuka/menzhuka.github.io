
var templateParams = {
    full_name: jQuery("#your-name").val(),
    email: jQuery("#email").val()
};
 
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });


    jQuery(".cookie_ok").on("click", function(event) {
        event.preventDefault()      
        localStorage.setItem("cookie_ok", true)
        jQuery(".cookies_alert").hide()
    })
    if(!localStorage.getItem("cookie_ok")) {
        jQuery(".cookies_alert").show()
    }