const circle = document.querySelector('#circle')

// Adding an eventlist to listen for presence
// of the mouse over the div element
circle.addEventListener('mouseenter', () => {
    // Adding hover class to div element
    if(!circle.classList.contains('hover')) {
        circle.classList.add('hover');
    }
});

// Reverse logic of above. Listening for the
// absence of the mouse's presence
circle.addEventListener('mouseleave', () => {
    // Removing hover class from div element
    if(circle.classList.contains('hover')){
        circle.classList.remove('hover');
    }
});