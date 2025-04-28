Structure your deliverable according to the following sections. Check the lecture materials and perform additional research to produce a high-quality deliverable. As usual, if you have any questions, let me know.

## Description
Fitness planning can be challenging for many people, leading to irregular and unproductive workout sessions that hinder progress. For internet users who struggle with fitness planning, our website Fitness Website, provides a free solution that centralizes and automates all functions of creating effective workout plans with diverse exercises. We aim to empower fitness newcomers by offering a comprehensive platform that guides them in setting and achieving goals, building confidence and independence along the way.

Our system includes an accounts module ensuring that only authorized users can access their accounts using a correct password. Users register by supplying a unique username and email, and then log in to manage their personalized workouts. A workout contains several exercises. Users can schedule and update daily workouts, within their account which monitors completion rates. Furthermore, the goal system analyzes past workout data and suggests new routines based on specific workout tags that classify exercises by attributes like name, duration, muscle groups, and intensity. Beyond individual progress, the system encourages the community aspect of our website by enabling users to connect with friends, share achievements, and mutually support one another. Designed for both desktop and mobile use, the system emphasizes portability, usability, and minimal downtime to provide a seamless, fitness experience.

## Verification
Verification aims to ensure that you correctly developed the product. 

For this deliverable, show an example of a unit test that uses mock objects to isolate the class from the rest of the system. 

Test framework you used to develop your tests (e.g., JUnit, unittest, pytest, etc.)
Link to your GitHub folder where your automated unit tests are located.
An example of a test case that makes use of mock objects. Include in your answer a GitHub link to the class being tested and to the test.
A print screen showing the result of the unit tests execution. 
Grading criteria (5 points): adequate choice of a test framework, coverage of the tests, quality of the tests, adequate use of Mock objects, and a print screen showing successful test execution.

## Acceptance Test
An acceptance test is a test that verifies the correct implementation of a feature from the user interface perspective. An acceptance test is a black box test (the system is tested without knowledge about its internal implementation). Provide the following information:

Test framework you used to develop your tests (e.g., Selenium, Katalon Studio, Espresso2, Cucumber, etc.)
Link to your GitHub folder where your automated acceptance tests are located.
An example of an acceptance test. Include in your answer a GitHub link to the test and an explanation about the tested feature.
A print screen/video showing the acceptance test execution. 
Grading criteria (7 points): adequate choice of a test framework, coverage of the tests, quality of the tests, adequate example of an acceptance test, print screen/video showing successful tests execution.


**Framework:** Cypress
This test used Cypress to write a script to have it log in and validate that the test user was navigated to their home page and the test user was successfully logged in.

**Link to test script:** https://github.com/McKayHartman/Fitness-Website/cypress/e2d/login.cy.js
**Video:** [Video of Acceptance Test](../../cypress/videos/login.cy.js.mp4)

## Validation
### Script
1) What is your impression of the website’s page layouts and the routing?
2) On a scale of 1-10 what do you make of the goal tracking page?
3) On a scale of 1-10 how inviting is the homepage?
4) Is the login or create account page simple enough?
5) What do you think of the design (colors/themes)?
6) What do you think of the general user interface or user experience?
7) What else would you like to see on the website?
8) Would you use this website? If not, would you use a more finished version of this website?
9) What could we do to further aid in motivation?

### User Evaluation 1
1) The user thought there could be a history or a way to look at past workouts. He also wanted a list-view in addition to a calendar-view for workouts and the goal. The user liked the progress graph idea. He found it easy to navigate through everything. The user also wished there was a mounted navigation bar so that you don’t have to keep clicking the button to open the bar again.
2) 8/10 - the user liked the layout and the presentation of information.
3) 6/10 - thought the homepage was “kind of ugly.” He liked the image but did not like the repetition of the “welcome” messages on the homepage. Thought a tag line would be a nice element to include.
4) The user had trouble with login. Since the display was not responsive for incorrect password entry, he had some trouble with this. The user thought it was still simple enough, aside from these issues.
5) 7/10 - the user did not like the look of the text box on the homepage, mentioning he thought the big white text box was out of place.
6) 7/10 - liked the theme.
7) This user said he wished there would be a text-box for the goals section to write workout descriptions.
8) This user said he would use this website if it had some added features. He wished there were workouts to do and to log, and also thought that having workout advice would be a nice feature to include.
9) The user thought this website could address motivation more by being able to see progress on the homepage. He liked the visualization of progress through the graph, but thought it would be nicer to see something related to the streak on the homepage right when you log in. He also thought it would be nice to include some sort of a mascot for the website to help with motivation, referencing the Duolingo owl as an example.

### User Evaluation 2

### User Evaluation 3

### Reflections
  Based on the feedback from these three interviews, it seems that this project has not fully addressed the [value proposition](https://github.com/McKayHartman/Fitness-Website/blob/main/Deliverables/Deliverable2/deliverable2.md) due to lack of functional content, but that the project seems to be set in the correct direction. For instance, we received positive feedback toward the representation of goal progress through the donut chart, but that the placement could have been better. For isntance, one user claimed that they wished the progress could be displayed on the homepage to shift motivation. This is one example of how our project worked to address our value proposition, but in where it could have been addressed even stronger.
