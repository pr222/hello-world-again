# Hello World Again!

## Setup

The goal for this exercise is to get you up to speed with working with the development environment that will be used in this part of the course.

This includes:

* node, npm
* snowpack
* eslint
* ES Modules
* Javascript in the browser

Steps 1 - 4 is something you will have to do with every exercise even if it is not stated in the exercise.

The instructions below is aimed towards Chrome but should work kind of the same in other browsers.

### 1. Fork the project
If you have not already,  [fork this project](https://gitlab.lnu.se/1dv025/content/exercises/module-b/hello-world-again/-/forks/new) into your Excercise group (coursecode/student/exercise). 

### 2. Clone the project
Clone the project to your local computer. 

1) Click "Clone" on your forked project.
2) Copy the text below "Clone with SSH"
3) Open a bash terminal on your computer. 
4) Navigate to where you want to store your exercise. `cd 1dv025/exercises/`
5) Write `git clone` followed by the copied text from 2. Press enter.

### 3. Start your editor
Start your editor from the cloned folder. 

1) Change directory to your cloned project. `cd hello-world-again`
2) Open your editor. `code .`

### 4. npm install
Open a bash terminal window in your editor.

Make sure to install all dependencies needed to start developing. 

Do:
```bash
npm i
```

This will (among other things) install:

- Snowpack (includes a small webserver to serve our project to the browser)
- Eslint (lining our code)

## The environment

We have provided a minimal template that you can use to extend on and experiment with. Feel free to use this exercise if you want to try out different things. We will get you started!

### 1. Try to start the application.
Do:
```bash
npm start
```

>_In some cases, you will get the error message "! Port 8080 not available. Run on port 8081 instead? (Y/n)"_ This is because you already have another web application running on your computer. If this is your intent, go ahead and start this application on 8081; otherwise try to locate the terminal in which the other application is started and close it before starting a new one.

You browser should now open the application using the URL http://localhost:8080/

Snowpack is serving the application on port 8080 on your computer (localhost a.k.a. 127.0.0.1).

### 2. Open the developer tools in your browser
Open the developer tools in your current browser. This is done differently depending on the browser, but right-clicking and selecting "Inspect" or "Inspect element" often works. Learning the short hand for opening it is well invested. (I.e. for Chrome and FF on Mac OS you press "Alt+CMD+i")

Find the "Console", read the message and follow the instructions.

### 3. Live reload
As you noticed, when changing the content of a file and saving, snowpack noticed the changes and reloaded the browser for you. Serving you the updated application. 

>You might be experiencing issues with the live reloading when you make changes to index.html. If the page does not update properly, it is probably due to caching in the browser. You can disable the browser cache while the developer tools are open by navigating to the tab "Network" and make sure "Disable cache" is selected. 
![](https://gitlab.lnu.se/1dv025/content/exercises/module-b/hello-world-again/-/raw/master/.readme/cache.png?inline=false)

### 4. File structure
In the Browser Inspector navigate to the "Sources" tab. 
Here you find the resources that Snowpack has served to the browser. Take note of the file structure. It should look like this:

```
localhost:8080
  |- __snowpack__
  |- css
      |- styles.css
  |- js
      |- index.js
  |- index.html
```
_We can ignore the `__snowpack__`-folder._ 

Now, compare with the file structure in your editor (your project). It should look something like this:

```
hello-world-again
  |- node_modules
  |- public
    |- css
      |- styles.css
  |- index.html
  |- src
      |- index.js
  |- ...
```
Note the difference. The index.html is located at the root folder in the browser (/index.html) and the javascript is in the js-folder (/js/index.js). 

The mapping is as follows:
```
public -> /
src -> /js
````
Now, open "package.json" and look near the bottom. You will find this mapping as mounting options to Snowpack. It is important to know that the Browser is executing the code and that is why we need to write our paths corresponding to the file structure in the browser.

Open index.html and look in the head-element. 
Note the paths to the stylesheet and the javascript module:
  
  ```html
  <link rel="stylesheet" type="text/css" href="/css/styles.css" />
  <script type="module" src="js/index.js"></script>
  ```
They follow the structure of the browser and not the local file structure.

### 5. Building the application
Building and preparing for production environments are topics that will not be covered at this stage but it could be good to know some basics.

Try to do:
```bash
npm run build
```

This will build your application into the folder "./build". Build contains the same folder structure as we found in the browser. You can copy the files in the build-folder onto a web server and serve your application in that way. However, we will find even better and easier ways of doing this later. 

The "build"-folder is of no real importance since it is only a built version of our source code. You can delete it if you want to. Also note that this folder is in the ".gitignore"-file making sure not to include it in git. 

### 6. Linting
Linting our code to make sure it follows the code convention is something that we might want to do from time to time. To lint the source code (javascript, not CSS and HTML at the moment) run:

`npm run lint` to lint the code

and: 
`npm run lint:fix` to try to automatically fix errors and warnings. 

## Coding
Now we are ready to start writing some code! 

Make sure that Snowpack is running. (`npm start`)

Edit the file `src/index.js` and focus on the code under "Step 2. Coding"

Don't worry about the syntax of the code given. At the end of this course, you will understand it, but for now, all you need to know is that the function "getRandomUsers" will give you an object with some random, made-up users. Let us examine the result.

### 1. Let's debug!
Open the inspector in the browser (if not already open) and navigate to "Sources" and the index.js-file. Now, add a breakpoint at the row with `console.log('Hello World Again!')` (Click on the line number to set a break point.) 

Reload the webpage.

The debugger should stop at the break point.

Under "Scope->Local" you should find the "users"-object and you can explore the object to get to know it. Another method is to just write "users" in the console window and press enter. 

You have now tried the debugger, and you will see that it works like the debugger you are used to when debugging earlier in the course. However, remember, the code is executed in the browser and if you want to debug, you need to do that in the browser and not in the editor. (_There are ways to connect the browser debugger to VSCode, but often it is more convenient to debug in the browser anyway._)

### 2. The exercise
Now you are on your own. Feel free to play around with the "users"-object under the "TODO: Write code here"-section of the index.js-file. If you are not feeling creative enough, here is a task for you:

> My god! It is to much data for me to handle! Help me sanitize it! I am only interested in the full name, email and a link to the medium-sized picture. Present that in a console.table for me!

Hint. You need to create a data structure that look something like this:
```javascript
[
  {
    name: 'Jon Doe',
    email: 'john.doe@example.com',
    image: 'http://thelinkgoeshere'
  },
  {
    name: 'Joline Doe',
    email: 'joline.doe@example.com',
    image: 'http://thelinkgoeshere'
  },
  ...
]
```
That will produce a result like this using `console.table()`:

![](https://gitlab.lnu.se/1dv025/content/exercises/module-b/hello-world-again/-/raw/master/.readme/users.png?inline=false)

Good luck!  We will soon get the tools to change the content of the web page instead doing outputs in the console.