let slideIndex = 1;
showSlide(slideIndex);

// Section button
function plusSlide(n) {
    showSlide(slideIndex += n);
}

// Section dots
function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("mySlide");
    let dot = document.getElementsByClassName("dots");

    // Section bug scrolling forward and backward
    if (slideIndex > slides.length) {slideIndex = 1};
    if (slideIndex < 1) {slideIndex = slides.length};

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" active","");
    }

    slides[slideIndex-1].style.display = "block";
    dot[slideIndex-1].className += " active";
}