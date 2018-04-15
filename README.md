# inforetro
Project for Information Retrieval
This is the experimental setup for the project that we hosted online : http://inforetroweb.000webhostapp.com

The numbered folders contain the documents of a specific given topic
"save.php" stores the generated image from the browser to the server side in the folder called "images"

the folder "js" contains "mousetracking.js" which contains the implementation of the project experiment.

explanation of our implementation is given below-

Mouse Listener: this component captures and handles incoming mouse movements from the application's clients. The data is processed and stored into an array of object containing X and Y coordinates of the mouse while it is active on the browser window. The array is updated every 1500 ms for better precision to capture and track user's mouse movement during relevance judgment. The Mouse Listener directly communicates with the Mouse Manager through the means of sending the array containing position data.

Mouse Manager: this component manages the mouse movements which have been passed on to use D3 for further processing. For each document it stores the mouse movement data and as soon as the user makes a judgment regarding the relevance of the document given a specific topic, our application draws the mouse movement on top of the document depicting exactly how the user used the mouse to read the document during each document session.


We track mouse movement by drawing a line connecting all the X-Y coordinates of the mouse position captured during relevance judgment of the user and also indicating hot spots, where the mouse is relatively still, with circles. We indicated the start position with an opaque orange circle and the end position with a purple one. Furthermore, we used transparent circles to indicate the mouse being idle. The bigger the radius is of such circles, the more the idle time. Finally, we used html2canvas to render the final image for analyzing in later stages.

Lines are used to represent mouse movement
Circles are used to indicate hot spots
