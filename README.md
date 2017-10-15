## React Redux Quiz

#### Purpose

I created this project to cement my understanding of Redux, leaving me free to simply use React as a view layer. At the beginning, I chose the concept of a quiz that would be somewhat appropriate for preschoolers, in hopes that a side project would also be something I could share with my daughter. However, since showing her something this visually hideous might turn her off to coding, I may hold off. We'll see.
   
I purposely did very little styling in order to focus on the Redux flow, opting to dispatch more actions to keep my reducer logic lean. The more things that were trying to be accomplished in a single reduction made me think it would better to have more actions to minimize too many side effects within a reducer's handling of an action.

Results are saved to local storage, with historical results loaded from there as well.

#### Installation
* `npm install` to load dependencies.
* `npm start` to start Webpack Dev Server.
* Run a server or open the file directly. I used `sudo python -m SimpleHTTPServer 8888`