# timeLines - A tool to simultaneously show multiple *hystories*

Too frequently teachers are unable to sufficiently stress the **connections** among their subject and the rest of human knowledge. In particular, too few temporal references are made to which events are ongoing in a particular time frame on differences areas.

The timeLines project aims at creating a easy-to-use tool for displaying events, which are grouped accordingly to an *a priori* established criteria, in a colored time line by using marks whose size emphasizes the event relevance for the topic under discussion. Authors believe that a remarkably relevant feature is the simultaneous presence of more than one of these lines in the same screen, naturally with event time collocation scaled accordingly.

At the current stage of development, the project elaborates a number of text files, each containing a line *i.e.* a topic and all its events, with a JSON formatting style. Upon loading those files, all lines are displayed simultaneously.

---

# List of features YET to be implemented

* create a menu for selecting the lines to be simultaneously loaded
* implement temporal zoom
* implement movement, both vertical and horizontal, when the screen cannot contain the whole display
* create a questionnaire section for training and one for testing
* chose and implement a questionnaire format
* implement a GUI for line files creation
* put the website on-line and make sure it properly adapts to any screen size
* create a users database and store training and test questionnaire score in each line
* think a way to moderate users contributions in terms of new lines and questionnaires

---

# How to install prerequisites and use the tool locally

The tool uses nodejs and expressjs as web server. After cloning the git repository in your local copy, install all dependencies according to the package.json file by simply running

```
npm install
```

Then simply run 

```
node index.js
```

To see the result open a browser in http://localhost:3000

# Authors

This project is intended to be a self-developed platform for high-school students. Below the list of coordinator teachers

* Prof. Davide Barcelli Ph.D. (http://www.sarrocchi.it/CMpro-v-p-49.html) (http://www.dii.unisi.it/~barcelli/)

List of developer students:

*
*

List of content writer students

*
*
