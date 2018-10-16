# Challenge Three

#### Part One
Instructions
* Create a file named index.ts and person.ts
* In person.ts create a variable named person, that is an object with the property of firstName and value of John and lastName property with a value of Doe
* Export the person variable
* Import the person variable into index.ts
* Confirm the value of the imported variable. Hint use console.log
* Now convert the typescript code to javascript. Run
```
$ tsc index.ts
```
* Now run the javascript code. By running the below command.
```
$ node index.js
```
#### Part Two
Instructions
* Create a function in person.ts named greet. This function will take in a persons name and and output **'Nice to meet you, <first name>'**
* Export  the function
* Import the function into index.ts
* Invoke the function passing in the first name from person and storing the output in an exported variable called **salutations**
* Convert Typescript into Javascript run the below code
```
$ tsc index.ts
```
* Run the code
```
$ npm test -- challenge-three
```
## When finished Commmit your work
* Check git files status with
``` 
$ git status
````
Red files are untracked green are already tracked

* Now lets add files with the command 
```
git add .
````
* Check your work before committing
```
$ git status
```
* Now lets commit all the files that were green 
``` 
git commit -m " <your committ message>"
```
## Continue to 
[Filepath Example](https://github.com/SoftStackFactory/typescript-imports/tree/master/filepath-example)
