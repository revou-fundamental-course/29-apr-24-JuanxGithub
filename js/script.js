document.getElementById('home-btn').addEventListener('click', function() {
    document.querySelector('.image-container').scrollIntoView({
        behavior: 'smooth'
    });
});


document.getElementById('package-btn').addEventListener('click', function() {
    document.querySelector('.our-package-content').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('contact-btn').addEventListener('click', function() {
    document.querySelector('.core-item.item-left').scrollIntoView({
        behavior: 'smooth'
    });
});

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim() === '' || email.trim() === '' || interest.trim() === '') {
        alert('Please fill out all required fields.');
        return false; 
    }
    
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false; 
    }

    alert('Form submitted successfully!');
    return true; 
}

