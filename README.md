# Carousel-project
HTML, CSS, Javascript

In this project I decided to use vanilla javascript for basic funtional purposes. 

I started by building the general structure around 5 main images (and 2 duplcates) held inside parent divs for the carousel in HTML. Then using CSS I added attributes like flex to display the images next to each other and removed overflow to get the first image in position. From there I also styled the custom arrow buttons.

Next I added Javascript that would use the transform and translateX properties to calculate the numer of pixels needed to move and then to move the focus to the next or previous image on the event of button click. 

I also added a duplicate of the last image before the first and a duplicate of the fist image after the last in orer to make a smooth transition from the end to the begining and vice versa by adding a listener to look out for the duplicate ids and then automatically switching them to either the first or last images without a transition animation. 

I then added the logo with the aprropriate padding and a brand coloured backgroud as well as a text box for a heading and description on each image in brand fonts and colours.

Finally I went about making the page responsive by adding a number of @media specifications for the various divs and elements. I also decided to add smaller versions of the images for mobile which required a few additions to the Javascript code in order to adjust the arrow click functionality, escpecially in terms of the calculated width of the images to use for translateX.
