# Task from Module 9 Challenge

"Make sure to clone the starter code repository and make your own repository with the starter code. Do not fork the starter code repository!"

# How this is done:
To clone the starter code repository and create your own repository with the starter code, you can follow these steps:

1. Go to the starter code repository on GitHub.
2. Click on the green "Code" button and copy the URL of the repository.

     ## url: https://github.com/coding-boot-camp/potential-enigma.git

     ## mkdir on your computer to where you want to clone this starter-code repo

3. Open a terminal or command prompt on your computer and navigate to the directory where you want to clone the repository.
4. Run the command `git clone https://github.com/coding-boot-camp/potential-enigma.git`. This will download the starter code repository to your local machine.
5. Navigate into the cloned directory using `cd <repository-name>` where `<repository-name>` is the name of the repository you just cloned (potential-enigma).
6. Create a new repository in your GitHub by clicking on the "+" button in the top-right corner of the GitHub page and selecting "New repository".
7. Give your repository a name and description, choose whether it should be public or private, and then click "Create repository".
8. Copy the URL of your new repository from the "Quick setup" section on the GitHub page.
9. Back in your terminal or command prompt, run the commands:

```
git remote rename origin starter-code
git remote add origin https://github.com/waynefenwick/09-Professional-README.git

```
This renames the original remote repository to "starter-code" and adds your new repository as the new remote repository.
10. Finally, run the command `git push -u origin main` to push the starter code to your new repository.

Now you have cloned the starter code repository and created your own repository with the starter code. You can start working on the code in your new repository and commit your changes to the repository as you make them.

NOTE: In the command git push -u origin main, origin refers to the remote repository you are pushing your changes to, and main refers to the local branch that you want to push to the remote repository. By using the -u flag, you are telling Git to set the remote main branch as the upstream branch for your local main branch.