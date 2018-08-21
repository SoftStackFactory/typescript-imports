# File Pathing

#### Overview
A file path is just as the term sounds, a path to a file within the computers filesystem.
This is not a javascript, typescript or even angular specific rule. This is a general rule acrosslanguages and platforms.
Our file system you can see on the left in cloud9, is all the green folders and also we can view our filesysem in the terminal. 

#### Relative Pathing
This type of file pathing is relative to where you currently are typing the file path Whether the file path is written in code or the terminal this rule applies.

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
This should output "xxxx.js" in your terminal. You were able to list all th contents of folder-one without having to move into the folder.

```
./
```
One dot means look in the current folder. This **./** path doesnt just apply to the terminal but also to our filepaths in our import statements.


#### Going up a directory
So one ./ means look in the current directoy but if we wanted to go up a directory we need to add another dot, **../**.
Run the following command in your terminal while in **filepath-folder**
```
$ ls ../
```
This while list all the contents of the parent directory **import-challenge**
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
Filepaths are an import part of computing **relative pathing** is important to understand that the path you are giving is relative to where the command is run. **./** will look in the current folder and **../** will go up one folder.
