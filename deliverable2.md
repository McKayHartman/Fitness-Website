# Deliverable 2

## 1. Positioning

#### Problem Statement

The problem of **irregular or unproductive fitness sessions** affects **people who want to reach their fitness goals;** the impact of which is
**ineffective workout routines resulting in little to no progress.**

#### Production Position Statement

For **internet users** who **struggle with fitness planning, the fitness planner is a website** that **assists users in planning and developing fitness routines and setting and completing fitness goals for free** unlike **MyFitnessPal,** our product **is a free website that centralizes and automates all fitness planning functions.**

#### Value Proposition and Customer Segment

Value Proposition: We help fitness newcomers build confidence and independence by offering an online learning platform that teaches newcomers the best way to begin and supports them into becoming consistent.

Customer Segment: Fitness newcomers.

## 2. Stakeholders

- User:
  - Someone who struggles with creating workout routines and plans.
  - Does not find that keeping mental notes of fitness goals improves routines.
  - Someone who does not want to pay for expensive apps.
  - Most alternatives and competitors have monthly or annual fees that deter users.
- Personal trainers:
  - Personal trainers can use it for each of their clients to keep track of statistics and fitness habits.

## 3. Functional Requirements (Features)

- Website for desktop and mobile
- Functional calendar display for planning workouts
  - Edits and additions can be made
  - Tracks past workouts
  - System to track streaks
- Workout information pool
  - Recommendation algorithm for workouts
  - Questionnaire and calendar data collection to personalize workouts
  - Workout example videos
- Account system
  - Ability to create, personalize, and delete account
  - System to track progress of other users for friends and personal trainers
  - Personal trainers can use the website for each of their clients to keep track of statistics and fitness habits.
- Developer:
  - Develops, tests, maintains, and reflects on the project at every step of development.
  - Interacts with users frequently to determine best direction for the product.
- Competitor:
  - Provides a reference of a system that is not serving the gym newcomers audience well enough.
  - Creates an incentive for developing a clean and well-tailored product.

## 3. Functional Requirements (Features)

1. Website for desktop and mobile
2. Functional calendar display for planning workouts
   - Edits and additions can be made
   - Tracks past workouts
   - System to track streaks
3. Workout information pool
   - Recommendation algorithm for workouts
   - Questionnaire and calendar data collection to personalize workouts
   - Workout example videos
4. Account system
   - Ability to create, personalize, and delete account
   - System to track progress of other users for friends and personal trainers

## 4. Non-Functional Requirements

1. Portability

   - Goal: Website is usable on both desktop AND mobile devices.

2. Usability

   - Goal: Navigatable without external guidance.

3. Availability

   - Goal: Downtime of servers is kept to a minimum of 1 hour per week.

4. Securability
   - Goal: Each users data can only be accessed by that user.

## 5. Minimum Viable Product

- Personal User Accounts/Login:
  - Every user will have a unique username and password.
  - A user can only sign in to their account if they provide the correct password.
  - Testing and validation:
    - Several accounts will be created with unique passwords.
    - Provide the system with many incorrect strings for the password. The system must be confirmed the fail log-in.
    - Provide the system with the correct string for the password. The system must be confirmed to pass log-in.
- Calendar System for Tracking Consistency:
  - Website must contain a live calender representing the current month and year correctly.
  - Users should be able to view and edit their own personal plan using the calender.
  - Visual representation for each workout as being in a completed, incompleted, or upcoming state.
  - Testing and validation:
    - Calender should provide accurate display of the month when given a specific date as an input.
    - Verify correct state change for each workout by changing completion statuses and given dates for each goal. This data should be tracked for each user.
    - Test that a given workout plan input is saved to an account's calender. Verify changes, additions, and deletions are saved for the account.
- Goal Progress Tracker:
  - User completion data should be saved over some time interval (daily, weekly, monthly, etc).
  - Visually express completion data in some segment of the website. Provide the user with their current workout "streak", how often they complete or miss a workout, or some kind of completion data pertaining to consistency.
  - Testing and validation:
    - Verify that all completion data for an account from the calender section is accessible and readable.
    - Test that multiple events (such as a completion or a failure to complete) are saved to a shared pool only under within the specified time window. Verify that the data does not reset before the time window has elapsed.
- Workout Recommendation System:
  - Create a system that will recommend a saved workout from a pool of workouts to a user based on their activity.
  - Users will be able to add a "tag" to their workout to classify it.
  - Website should be able to produce several recommended workouts from an accessible pool. Recommendations will be based on user completion data and tags in order to assure user-tailored accuracy and customer satisfaction.
  - Testing and validation:
    - Confirm that completion data is accessible.
    - Test that a given workout pool is saved and updated based on changes made.
    - Verify that the same pool is opened on different log-ins on the same account and on different accounts.
    - Create user completion data ranging from moderate to extreme conditions. Verify that produced recommendations follow the predefined expectations.

## 6. Use Cases

![Use Case Diagram](./Deliverable2Images/image.png)

## 7. User Stories

As a user, I would like the program to connect to send calendar notifications to my email address so I can be notified what my workouts should be for the week.

- Priority: Low
- Estimated Effort: 3

As a user, I want to be able to upload workouts directly from my Apple watch so I don't have to manually input everything.

- Priority: Low
- Estimated Effort: 21

As someone who has had trouble maintaining consistency at the gym in the past, I would like some way to track my performance of maintaining my goal.

- Priority: Low
- Estimated Effort: 1

As a Beginner, I want to be able to find videos about the exercises I'm going to do, so that I can know how to do an exercise correctly.

- Priority: Medium
- Estimated Effort: 3

As a newcomer, I want to be able to leave comments on my workouts before and after to track my progress.

- Priority: Medium
- Estimated Effort: 1

As a personal trainer, I want to manage multiple clients accounts so that I can monitor their progress.

- Priority: Medium
- Estimated Effort: 8

As a beginner, I want to know if the workouts I'm doing are optimal for my growth (like a score).

- Priority: Medium
- Estimated Effort: 13

As a user, I want to be able to share my achievements with friends on the website.

- Priority: Low
- Estimated Effort: 3

As a user, I want to track my workout progress so that I can see improvements over time.

- Priority: High
- Estimated Effort: 5

As a beginner, I want to know the best workouts to do for my growth.

- Priority: High
- Estimated Effort: 8

As someone who doesn't have time to sit down for a long time to detail my workout, I want to be able to quickly record my workout without having to make many details so that I can be more consistent in my goal progress.

- Priority: Medium
- Estimated Effort: 2

As a person who works out at a gym, I want to be able to use the website on my phone so that I can update my data at the gym.

- Priority: High
- Estimated Effort: 21

## 8. Issue Tracker

https://github.com/McKayHartman/Fitness-Website/issues

![Screenshot (2)](./Deliverable2Images/issueTrackerDeliverable2.png)
