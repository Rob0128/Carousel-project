const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll(".carousel-slide img");

const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("previous-button");


//counter

var count = 1;
var size = carouselImages[0].clientWidth;


//counter - if resized (mobile)

if (screen.width < 400){
    size = carouselImages[1].clientWidth;
}

window.addEventListener('resize', function(event){
    if (screen.width <= 400){
        size = carouselImages[1].clientWidth;
        count = 1;
        
    }
    else if (screen.width > 400){
        size = carouselImages[0].clientWidth;
        count = 1;
        
    }
})

carouselSlide.style.transform = "translateX(" + (-size * count) + "px)";


//listeners 

lenOfCarousel = carouselImages.length / 2;

nextButton.addEventListener('click', function (event){
    if (count >= lenOfCarousel - 1)return
    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    count++;
    carouselSlide.style.transform = "translateX(" + (-size * count) + "px)";

})

prevButton.addEventListener("click", function(event){
    if (count <= 0)return;
    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    count--;
    carouselSlide.style.transform = "translateX(" + (-size * count) + "px)";

})

carouselSlide.addEventListener("transitionend", function(event){
    if (carouselImages[count].id === "last-copy"){
        carouselSlide.style.transition = "none";
        count = lenOfCarousel - 2;
        carouselSlide.style.transform = "translateX(" + (-size * count) + "px)";
    }

    if (carouselImages[count*2].id === "first-copy"){
        carouselSlide.style.transition = "none";
        count = lenOfCarousel - count;
        carouselSlide.style.transform = "translateX(" + (-size * count) + "px)";
    }

})