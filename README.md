# etch-a-sketch

This project was my first in a while, and took a lot of googling, especially for working out how to make the body flexible and able to change with the size of the window. 

Once I got the body sorted out the rest came fairly straightforward, using event listeners, query selectors, functions to build out the etch a sketch grid. 

I needed a bit of help with getting the for loops to actually build a rectangular grid, but the solution was actually fairly simple. 

I ran into another issue with replacing the default grid with a user one, I thought that the user grid would automatically replace the default one, but I ended up needing to create a while loop to remove all default nodes before inserting the new ones. 

The biggest problem I came across was actually getting the number of rows and columns in the grid to correlate to the user's size input. I overlooked it initially in the resizeGrid function I created, but I ended up needing to google a lot about setting CSS style rules manually in JS. Still might need to do more research on that one. 

All in all, very good project for getting used to the DOM, and how JS can be used to change HTML. Onto the next one.