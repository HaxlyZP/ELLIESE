(function(){
    emailjs.init("RjHv2Cu4xqV2J3TUb"); // Replace YOUR_USER_ID with your EmailJS user ID
    
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get input values
        var name = document.getElementById('first-name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        
        // Send email using EmailJS
        emailjs.send("service_yd1chfp", "template_18114mo", {
            from_name: name,
            to_email: email,
            message: message
        })
        .then(function(response) {
            console.log('Email sent:', response);
            alert('Email sent successfully!');
            document.getElementById('contactForm').reset(); // Reset form after successful submission
        }, function(error) {
            console.error('Email sending failed:', error);
            alert('Failed to send email. Please try again later.');
        });
    });
})();
