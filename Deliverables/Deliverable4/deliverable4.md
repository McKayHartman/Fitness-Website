For this deliverable, you should have a fully functional piece of software that delivers a set of features (don’t need to be the complete set, but it needs to be a working prototype). Structure your deliverable according to the following sections.

# Introduction

Provide a short paragraph that describes your system. This paragraph should contain the value proposition and a description of the main features of the software. At the end of the introduction, include a link to your project on GitHub.

_Grading criteria (1 point):_ This section will be evaluated in terms of correctness, completeness, thoroughness, consistency, coherence, and adequate use of language. The description should be consistent with the current state of the project. You should include the link to GitHub.

# Requirements

Requirement: As an interested fitness newcomer, I want to be able to create a personal account. <br>
Issue: https://github.com/McKayHartman/Fitness-Website/issues/65 <br>
Pull request: https://github.com/McKayHartman/Fitness-Website/pull/77 <br>
Implemented by: Bryce Panza <br>
Approved by: Lacy Hamilton <br>
Print screen: A print screen that depicts the implemented feature (if applicable) <br>


Requirement: <br>
Issue: <link to your GitHub issue> <br>
Pull request: <br>
Implemented by: Christian Lamb <br>
Approved by: Lacy Hamilton <br>
Print screen: A print screen that depicts the implemented feature (if applicable) <br>


Requirement: As a web user, I would like to be able to be directed to the homepage. <br>
Issue: [Link](https://github.com/McKayHartman/Fitness-Website/issues/71) <br>
Pull request: [Link](https://github.com/McKayHartman/Fitness-Website/pull/72) <br>
Implemented by: Lacy Hamilton <br>
Approved by: McKay Hartman <br>
Print screen: A print screen that depicts the implemented feature (if applicable) <br>


Requirement: <br>
Issue: <link to your GitHub issue> <br>
Pull request: <br>
Implemented by: Logan Hunt <br>
Approved by: Lacy Hamilton <br>
Print screen: A print screen that depicts the implemented feature (if applicable) <br>


Requirement: <br>
Issue: <link to your GitHub issue> <br>
Pull request: <br>
Implemented by: Marco de la Rosa <br>
Approved by: Lacy Hamilton <br>
Print screen: A print screen that depicts the implemented feature (if applicable) <br>

Requirement: As a frequent web user I would like to be able to log in to my account to access my personal settings and data. <br>
Issue:[Link] (https://github.com/McKayHartman/Fitness-Website/issues/70) <br>
Pull request: [Link](https://github.com/McKayHartman/Fitness-Website/pull/74)<br>
Implemented by: McKay Hartman <br>
Approved by: Lacy Hamilton <br> 
Print screen: ![Log In Page](https://github.com/McKayHartman/Fitness-Website/tree/main/Deliverables/Deliverable4/Images/Login.png) <br>


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

List the adopted technologies with a brief description and justification for choosing them.

The list of adopted technologies our project utilizes is the following:

- React: We are using React to write out JavaScript and HTML in order to make working on the frontend more object oriented as we are able to make components. <br>
- Vite: We are using Vite as our development server in order to preview our React UI, and bundle the pages for production.
- SQLite: We are using SQLite for our database, as it is simple to deploy and works well for a smaller project such as this.<br>
- pnpm: We are using pnpm as our package manager to better manage our disk space during project development. <br>
- Node.js: We are using Node.js to be our JavaScript runtime enviorment as we have previous experience using. <br>
- Figma: We used Figma to finalize the website design for our UX Design as we wanted to be able to make a mockup of what we wanted our site to look like. <br>
- Azure: We are using Microsoft Azure to host our website as many of us have experience using this platform from previous coursework. <br>

Grading criteria (1 point): This section will be evaluated in terms of correctness, completeness, thoroughness, consistency, coherence, and adequate use of language.

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

CONTRIBUTING.md:
LICENSE:
CODE_OF_CONDUCT:

You should also prepare your repository for receiving new contributors. You should prepare a Readme.md file. See an example at https://gist.github.com/PurpleBooth/109311bb0361f32d87a2   In the Readme file, the current version should be stated. You should follow the Semantic Versioning schema (https://semver.org/). Tag the GitHub repository accordingly (https://git-scm.com/book/en/v2/Git-Basics-Tagging). 

Your repository should contain a CONTRIBUTING.md file, a LICENSE file, and a CODE_OF_CONDUCT.md file. Search online for some examples of these files. In this section of the deliverable, put links to these files on GitHub.

_Grading criteria (3 points):_ This section will be based on the presence and quality of the information presented in the files.

# UX Design

Describe the approach you adopted to design your user interface. Include some screenshots.

_Grading criteria (3 points):_ This section will be graded based on the appearance (aesthetics) and usability (ease of use) of the system.

# Lessons Learned

In retrospective, describe what your team learned during this first release and what you are planning to change for the second release. 

_Grading criteria (2 points):_ Adequate reflection about problems and solutions, clear description with adequate use of language. 

# Demo

Include a link to a video showing the system working.

_Grading criteria (5 points):_ This section will be graded based on the quality of the video and on the evidence that the features are running as expected. Additional criteria are the relevance of the demonstrated functionalities, the correctness of the functionalities, and the quality of the developed system from the external point of view (user interface).
