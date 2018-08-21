# Example 1
## OverView
In this example we have a simple use of import and export statements.

## Step One
In this challenge there are two two typescript files. Before starting look at the code
in index.ts and the import statement on line 1. Then look at what it is importing from hello.ts. 
Inside hello.ts notice the export statement. The is needed to import code.

Importing
   We do not always have all our code in one file. Our code can quickly grow to hundreds of lines and becomes hard to maintain due to being unorganized. This is an example of **seperation of concerns**. For example all our javascript goes in index.js, our css in index.css, and index.html. This is a great start but what if your index.js is hundreds of lines? You can **import** other files into index.js to further organize your code.
 A typescript import statment **index.js**
    ```
    import { hello } from "./hello";

    ```

## Step Two

Typescript code cannot be run on our the browser we it must be converted before we run it. The act of converting our code is called compiling / transpiling.

### Compliling
   You going to be writing code in typescript in these challenges and your typescript will then be converted into valid javascript. This process is called **compiling**. In compiling we are simply taking text or code from one language and converting it into another. This is just like **translating** from one languge to another, german to english. 
   To compile your index.ts file run the following command
   ```
   $ tsc index.ts 
   ```
   This will create a index.js and a hello.js file within the same folder. Inspect code but no need to write anything in these files.
   
### Step Three

Now lets run the code with the following command
```
$ node index.js
```
You should see hello printed to the console. This is an example of runtime. Our javascript code is actually invoked or ran but the typescript code was just translated. This is a key difference as going forward you can get errors during the compile / translation to javascript and errors at runtime when the code is actually running.
  
  
