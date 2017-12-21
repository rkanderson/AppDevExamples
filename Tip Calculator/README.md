# Welcome to the Tip Calculator tutorial!

This short tutorial should walk you through the process of creating a simple web application.

------------


##Setting Up
You must have a browser (Chrome or Firefox preferred) and a text editor (like Atom) installed. Create a folder for your project's files named "Tip Calculator". Finally, download the AppDevExamples repository [here](https://github.com/rkanderson/AppDevExamples/archive/master.zip) and place the contents of **Mini Project Template** in your folder.

Most text editors have some feature that allows you to view and interact with your project file structure. It's best to use these features when editing multiple files. For atom, either drag your project folder into the editor, or select your folder though file --> open. You should see something like this:
![editor screenshot](README_assets/0_editor_screen.png)

For now, testing your app is as simple as opening up index.html in your browser and hitting the refresh button every time you want to test a new change. Try double clicking on index.html, you should see the following display in your browser:
![browser screenshot](README_assets/1_browser_screen.png)


----------


##Building the User Interface
###Preview
There are several possible patterns for development. Some prefer to construct a minimal UI and jump straight into programming. We, however, will begin by creating most of what we need in terms of UI.
The following image represents our goal:
![final goal screenshot](README_assets/2_final_goal_screen.png)
### Centering rule
The first thing you may notice is that everything is centered both horizontally and vertically. There is a simple css trick to establish this centering rule for the entire page. Add the following code to styles.css

'''css
html, body {
    height: 100%;
}

body {
	display: flex;
	align-items: center;
}
'''

Refresh your page, and you'll already see the "Hello World" h1 tag centered vertically. 
In index.html, change the h1 tag to read "Tip Calculator" instead of "Hello World" and give it a text-center class. The h1 should look like this:

'''hmtl
<h1 class="text-center">Tip Calculator</h1>
'''
  
And you should see the following upon refreshing your browser:	
![screenshot](README_assets/3_tip_calc_center.png)

###Text Fields


