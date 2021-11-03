How it works:

I placed two different emojis in the index.html file. One with 
a class of "emoji closed active" and another with a class of 
"emoji open". The active class was created in the 
styles.css file to simply display whatever element's
classlist it occupied. In the app.js I selected the 
two emojis using querySelector then used addEventListener 
to listen for the action of a 'click' and in response, 
depending on which emoji it was, add the .active class 
to the element's class list and remove the active class
from the other emoji's class list. 

What I learned:

Using querySelector, using addEventListener,
accessing classlist and using its functions
like .add, .remove and .contains.  
