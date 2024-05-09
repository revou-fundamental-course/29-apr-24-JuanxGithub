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

document.getElementById('call-btn').addEventListener('click', function() {
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

var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

var slideIndex = 0;

function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
    slideIndex++;
    if (slideIndex > slides.length) {
    slideIndex = 1;
}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
}

showSlides(); 


