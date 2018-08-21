# File Pathing

#### Overview
A file path is just as the term sounds, a path to a file within the computer's filesystem.
This is not a javascript, typescript or even angular specific rule. This is a general rule across languages and platforms.
You can see all the green folders on the left in cloud9, this is our file system. We can also view our filesysem in the terminal. 

#### Relative Pathing
This type of file pathing is relative to where you currently are typing the file path, whether the file path is written in code or in the terminal, this rule applies.

Type the following command while in the below file path in your terminal.
workspace/import-challenge/filepath-example 
```
$ ls
```
You should see one folder, **folder-one**.

Now we can run the below command again from the filepath example folder in our terminal.
```
$ ls ./folder-one
```
This should output "xxxx.js" in your terminal. You were able to list all the contents of folder-one without having to move into the folder.

```
./
```
One dot means look in the current folder. This **./** path doesnt just apply to the terminal but also to our filepaths in our import statements.


#### Going up a directory
So one dot, **./** means look in the current directoy but if we wanted to go up a directory we need to add another dot, **../**.
Run the following command in your terminal while in **filepath-folder**
```
$ ls ../
```
This will list all the contents of the parent directory, **import-challenge**
We can even go up multiple directories.
```
../../
```
Would go up to directories
```
../../../
```
Would go up three directories and so on. 

## Recap
Filepaths are an important part of computing. With **relative pathing** it is important to understand that the path you are giving is relative to where the command is run. **./** will look in the current folder and **../** will go up one folder.

## Continue to
[Filepath Challenge One](https://github.com/SoftStackFactory/typescript-imports/tree/master/filepath-challenge-one)
