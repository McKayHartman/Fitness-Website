# Introduction

This project currently consists of an assortment of individual pages aimed to adhere to our 
This project's value proposition is: We help fitness newcomers build confidence and independence by offering an online learning platform that teaches newcomers the best way to begin and supports them into becoming consistent. To accomplish this, an *About* page was created to inform any users of this project's value. The system also contains a *Create Account* and a *Login* page, creating fields for users to input their information when they wish to create an account or log back in to their account. <br>
Follow [this link](https://github.com/McKayHartman/Fitness-Website) to view the current state of this project.


# Requirements

Requirement: As an interested fitness newcomer, I want to be able to create a personal account. <br>
Issue: https://github.com/McKayHartman/Fitness-Website/issues/65 <br>
Pull request: https://github.com/McKayHartman/Fitness-Website/pull/77 <br>
Implemented by: Bryce Panza <br>
Approved by: Lacy Hamilton <br>
Print screen: ![createAccountUX](./Images/createaccount.png) <br>


Requirement: As a new user, I would like to gather information about the site and its purpose. <br>
Issue: https://github.com/McKayHartman/Fitness-Website/issues/103 <br>
Pull request: https://github.com/McKayHartman/Fitness-Website/pull/87 <br>
Implemented by: Christian Lamb <br>
Approved by: Lacy Hamilton <br>
Print screen: ![aboutUX](./Images/about.png) <br>


Requirement: As a web user, I would like to be able to be directed to the homepage when visiting site. <br>
Issue: [#71](https://github.com/McKayHartman/Fitness-Website/issues/71) <br>
Pull request: [#72](https://github.com/McKayHartman/Fitness-Website/pull/72) <br>
Implemented by: Lacy Hamilton <br>
Approved by: McKay Hartman <br>
Print screen: ![homepageUX](./Images/homepage.png) <br>


Requirement: <br>
Issue: <link to your GitHub issue> <br>
Pull request: <br>
Implemented by: Logan Hunt <br>
Approved by: Lacy Hamilton <br>
Print screen: ![headerUX](./Images/headerUX.png) <br>


Requirement: As a web user, I would like to be able to navigate through different pages.<br>
Issue: [#88](https://github.com/McKayHartman/Fitness-Website/issues/88) <link to your GitHub issue> <br>
Pull request: [#78](https://github.com/McKayHartman/Fitness-Website/pull/78) <br>
Implemented by: Marco de la Rosa <br>
Approved by: Lacy Hamilton <br>


Requirement: As a frequent web user I would like to be able to log in to my account to access my personal settings and data. <br>
Issue: [#70](https://github.com/McKayHartman/Fitness-Website/issues/70) <br>
Pull request: [#74](https://github.com/McKayHartman/Fitness-Website/pull/74) <br>
Implemented by: McKay Hartman <br>
Approved by: Lacy Hamilton <br> 
Print screen: ![loginUX](./Images/login.png) <br>


List in this section, the requirements and associated pull request that you implemented for this release, following the example below---include the description of the requirement, a link to the issue, a link to the pull request(s) that implement the requirement, who implemented the requirement, who approved it, and a print screen that depicts the implemented feature (if applicable). I expect that you implement the features you specified in your MVP (c.f. D.2 Requirements). 

Order the requirements below by the name of the student who implemented them. All the members of the group should have worked on implementation activities and submitted pull requests. Only stable code should be included in the release. The code that is still under development should be in branches.

Example:

Requirement: As a Student, I want to add a homework assignment so that I can organize my ToDo list.  
Issue: <link to your GitHub issue>  
Pull request: https://github.com/user/project/pull/426  
Implemented by: Martin Fowler  
Approved by: Ada Lovelace  
Print screen: A print screen that depicts the implemented feature (if applicable)

All source code should be submitted by means of pull requests and the quality assurance person in the team should review and approve each pull request. For more information about pull requests:  
[https://help.github.com/articles/about-pull-requests/Links to an external site.](https://help.github.com/articles/about-pull-requests/)

_Grading criteria (8 points):_ This section will be evaluated in terms of correctness, completeness, thoroughness, consistency, coherence, adequate use of language, and amount of work put into the implementation. Students can receive different grades depending on their involvement. It is expected that all members contribute with non-trivial implementation. All pull requests should be approved and integrated by the quality assurance person. You should follow an adequate workflow (description of the requirement on the issue tracker, submission of the implemented requirement as a pull request, and review of the pull request by another developer). 

# Tests

We used the Vitest framework for testing the project. For HTTP testing, we also used the Supertest library in order to simulate HTTP requests. The unit tests are stored in the [backend/test](https://github.com/McKayHartman/Fitness-Website/tree/main/backend/test)  folder. 

A simple example of a unit test case is such: the "[sameHash](https://github.com/McKayHartman/Fitness-Website/blob/main/backend/test/auth.test.js)" test tests if a hash comparison function works correctly by hashing a string and immediately comparing it with itself using the function.

```
test('sameHash', async () => {
    expect(await sameHash('x', await hash('x'))).toBe(true);
})
```

Here are the results of the tests being run.
![Successful test cases](./images/test-cases.jpg)

# Technology

The list of adopted technologies our project utilizes is the following:

- React: We are using React to write out JavaScript and HTML in order to make working on the frontend more object oriented as we are able to make components. <br>
- Vite: We are using Vite as our development server in order to preview our React UI, and bundle the pages for production.
- SQLite: We are using SQLite for our database, as it is simple to deploy and works well for a smaller project such as this.<br>
- pnpm: We are using pnpm as our package manager to better manage our disk space during project development. <br>
- Node.js: We are using Node.js to be our JavaScript runtime enviorment as we have previous experience using. <br>
- Figma: We used Figma to finalize the website design for our UX Design as we wanted to be able to make a mockup of what we wanted our site to look like. <br>
- Azure: We are using Microsoft Azure to host our website as many of us have experience using this platform from previous coursework. <br>

# Deployment

Provide a link for the system in production and describe how you are deploying your system. 

Some alternatives for deploying your system in the cloud:

- AWS. AWS Educate offers free credits for students. See the tutorial at https://docker-curriculum.com/ on how to create a container and deploy it on AWS. ]
- Digital Ocean or Azzure. As part of the GitHub Education benefits, as a student, you can get $100 at Digital Ocean and $100 at Microsoft Azzure cloud computing platforms (see more details at [https://education.github.com/students)Links to an external site.](https://education.github.com/students\)).
- Oracle Cloud. Oracle offers a free tier in its cloud environment that should be more than enough for your needs.
- Firebase. Firebase can be a good choice if you are building a mobile phone app.

_Grading criteria (3 points):_ This section will be graded based on the adequate use of the technology and its adequate description.

# Licensing

We adopted a MIT License as we just wanted to have a simple license. The MIT License only involces conditions requiring preservation of copyright and license notices whereas licensed works, larger works, or modification can be distrubted under different terms without source code.

# Readme File

[CONTRIBUTING.md](https://github.com/McKayHartman/Fitness-Website/blob/main/README.md) <br>
[LICENSE](https://github.com/McKayHartman/Fitness-Website/blob/main/LICENSE) <br>
[CODE_OF_CONDUCT.md](https://github.com/McKayHartman/Fitness-Website/blob/main/CODE_OF_CONDUCT.md) <br>

# UX Design
For our user interface, we planned out basic design using tools like Figma. The UX should be intuitive and simplistic to streamline the process of creating accounts and accessing features. Much of the design is tied to inherited variables so that we can change things like colors globally if we choose to do so.

![loginUX](./Images/loginUX.png)
![registerUX](./Images/registerUX.png)
![headerUX](./Images/headerUX.png)

# Lessons Learned

In retrospect, the team has significantly improved their skills, especially in using React JS and GitHub. We started out disorganized, not utilizing features that would streamline the process.

We added protections to the main branch, so that pull requests would have to be reviewed before merging. This caused us to look at each others code more than we were and catch mistakes.

The team has also improved their workflow by better assigning tasks appropriate to each memeber's specific skill set. Specialization helps the team more quickly move through the development process because issues are delegated to people who know how to handle them.

# Demo

Include a link to a video showing the system working.

_Grading criteria (5 points):_ This section will be graded based on the quality of the video and on the evidence that the features are running as expected. Additional criteria are the relevance of the demonstrated functionalities, the correctness of the functionalities, and the quality of the developed system from the external point of view (user interface).
