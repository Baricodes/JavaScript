
// Creating/linking items for JavaScript to be attached to
const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

// Add event listener
// closedFaced is waiting for event click 
// Then performs function
closedFace.addEventListener('click',() => {
    if(openFace.classList.contains('open')){
        // Adds active class from CSS 
        // to 'emoji open' element in HTML
        openFace.classList.add('active');
        // Removes active class from 'emoji closed' HTML element
        closedFace.classList.remove('active');
    }
});

// Repeat process but reverse locgic to 
// return from open phase back to closedFace
// with a click
openFace.addEventListener('click',() => {
    if(closedFace.classList.contains('closed')){
        // Adds active class from CSS 
        // to 'emoji closed' element in HTML
        closedFace.classList.add('active');
        // Removes active class from 'emoji open' HTML element
        openFace.classList.remove('active');
    }
});    

