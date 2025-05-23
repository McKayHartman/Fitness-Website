### Description

Fitness planning can be challenging for many people, leading to irregular and unproductive workout sessions that hinder progress. For internet users who struggle with fitness planning, our website Fitness Website, provides a free solution that centralizes and automates all functions of creating effective workout plans with diverse exercises. We aim to empower fitness newcomers by offering a comprehensive platform that guides them in setting and achieving goals, building confidence and independence along the way.

Our system includes an accounts module ensuring that only authorized users can access their accounts using a correct password. Users register by supplying a unique username and email, and then log in to manage their personalized workouts. A workout contains several exercises. Users can schedule and update daily workouts, within their account which monitors completion rates. Furthermore, the goal system analyzes past workout data and suggests new routines based on specific workout tags that classify exercises by attributes like name, duration, muscle groups, and intensity. Beyond individual progress, the system encourages the community aspect of our website by enabling users to connect with friends, share achievements, and mutually support one another. Designed for both desktop and mobile use, the system emphasizes portability, usability, and minimal downtime to provide a seamless, fitness experience.

### Architecture

![Architecture](./Images/PackageDiagram.png)

This architecture follows a very linear progression for simplicity and ease-of-use. All interactions start with the user triggering some event in the front-end. This interaction must be handled by the server and apply the correct domain logic, representing the desired functionality and rules for thsi website, and then it may interact with the database to retrieve and update information.

### Class Diagrams

![ClassDiagram](./Images/UMLClasses.png)

### Sequence Diagrams

#### **Use Case: Workout Logging**

- **Actor**: User
- **Precondition**: The user is logged into their account.
- **Description**: The user can log workouts.
- **Flow of Events**:
  1. The user accesses the diary page.
  2. The user enters workout details and saves it.
  3. The system updates the diary to reflect the new workout.
  4. The user's goals are then updated to show the completed progress.
- **Postcondition**: The workout is successfully added to the calendar.

![sequence diagram](./Images/SeqDiagram2.png)

### Design Patterns
**Facade Pattern**
![Facade Design Pattern](./Images/UMLFacadeClass.png)
https://github.com/McKayHartman/Fitness-Website/blob/bryce-addFacade/frontend/src/UserUI.jsx 

**State Pattern**
![State Diagram Pattern](./Images/State_Diagram.png)
https://github.com/McKayHartman/Fitness-Website/blob/main/frontend/src/Header.jsx
### Design Principles

1.	**Open-Closed Principle** - The open-closed principle specifies that software should enable programmers to make additions without having to change the existing code. Our website uses the open-closed principle through its utilization of React JS. React allows us, as programmers to reuse components. For example, if we want to add a new page, we are able to do this more efficiently as we can just reuse components from previous pages. This extends the software while minimizing restructuring of existing code. For a class example, the User class is able to inherit the classes of admin, personal trainer, or basic. This follows the principle because it means that the User class does not have to be modified, and it can just be extended to accommodate the other three types of account.
2.	**Single Responsibility Principle** - The single responsibility principle states that each class should have one responsibility. There should not be any "monolithic" classes that encompass multiple responsibilities that could otherwise be divided into multiple classes. Our fitness website follows this principle because it divides responsibility of classes to one per. For example, there is a separate workout class and exercise class. This allows for the division of the responsibility of storing the workout date, and completion status into the workout class; the exercise class is then free to be responsible for the details of the of exercise, including muscle group, difficulty, video representation, etc.
3.	**Interface Segregation Principle** - The interface segregation principle states that interfaces should be broken up and only depend on what they absolutely need. One example is with the Consistency Goal class. Users are able to see their goal, but the class is only dependent on their goal streak and dates. By separating this from the workout or account class, we minimize the number of responsibilities the Consistency Goal class has, and overall improves the security and efficiency of the website.


