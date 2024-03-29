# Gofalu am Geredigion | Caring for Ceredigion

![Mock-Up](/static/images/readmd-images/mock-up.jpg)

## Milestone Project 3

This website has been created to advertise and support volunteering opportunities in Ceredigion, a rural, coastal county in west Wales.

Volunteering opportunities are grouped into three categories: animals, environment, and people.

Users to the site will be able to view a board of live opportunities and apply for them via a form. The backend of the website will support the storage of the data they provide (via a database) so that it can be passed on to the institutions or bodies providing the opportunities.

The website will also provide information about former successful candidates to various schemes and will detail their experiences.

The live site can be found [here](https://gag-cyc.herokuapp.com/)

## Table of contents
+ [UX](#ux "UX")
  + [All user goals](#all-user-goals "All user goals")
  + [Returning user goals](#returning-user-goals "Returning user goals")
  + [Future Development](#future-development "Future Development")
+ [Features](#features "Features")
  + [Clean structure](#clean-structure "Clean structure")
  + [Logo](#logo "Logo")
  + [Hero Image](#hero-image "Hero Image")
  + [Color Palette](#color-palette "Color Palette")
+ [Wireframes](#Wireframes "Wireframes")
  + [Home Page](#home-page "Home Page")
  + [Opportunities Page](#opportunities-page "Opportunities Page")
    + [Cards](#cards "Cards")
  + [Experiences Page](#experiences-page "Experiences Page")
+ [Functionality](#functionality "Functionality")
  + [Future Implementations](#future-implementations "Future Implementations")
  + [Accessibility](#accessibility "Accessibility")
+ [Technology](#technology "Technology")
  + [Languages Used](#languages-used "Languages Used")
  + [Database Used](#database-used "Database Used")
  + [Frameworks Used](#frameworks-used "Frameworks Used")
  + [Libraries & Packages Used](#libraries-&-packages-used "Libraries & Packages Used")
  + [Programs Used](#programs-used "Programs Used")
+ [Testing](#testing "Testing")
  + [User Stories](#user-stories "User Stories")
  + [Defensive Programming](#defensive-programming "Defensive Programming")
+ [Deployment](#deployment "Deployment")
+ [Credits](#Credits "Credits")

## UX

## User Stories
### Target Audience

The target audience for GaG | CfC are students and retired peoples in the local area. They will want to find a way to contribute to the local community, make friends, or build experience towards jobs or further education courses.
First Time Visitor Goals

#### As a first time user of the site I want to be able to:

- Understand what the site is for and how to navigate the site.
- Register for an account.
- See what other volunteers have gained from their experiences

#### Returning Visitor Goals

As a returning registered user of the site I want to be able to:

- Log in to my account.
- Apply for opportunities.
- View roles I have applied for and their application status.(Future Implementation)

#### Admin User

As an administrator for the site I want to be able to:

- Log in to my account.
- Create, edit, delete and view opportunity categories.
- Create, edit, delete and view oportunities.

#### User Journey

![Journey](/static/images/readmd-images/user_journey.jpg)

### All user goals
- Users want to be able to view and apply for volunteering opportunities.
- Users want to be able to create an account to manage their applications. 
- Users want to be able to easily navigate through the site.
- Users want to be able to see how other volunteers have enjoyed their experiences and how they too can benefit from volunteering.
### Returning user goals
- Users want to be able to easily log back on and check on application progress.
- Users want to be able to see new opportunities.
- Users want to be able to get in contact with ‘Gofalu am Geredigion | Caring for Ceredigion’ easily if they have new opportunities, experiences to report or further questions about opportunities.
### Future Development
- By law, all government funded projects must be billingual so this option would need to be offered.

## Features
### Clean structure
The website is designed to give the user a great experience and to be user-friendly on all types of devices. There will be no difference in the experience users have when on a mobile compared to a laptop. The front-end code will utilize a combination of [Materialize](https://materializecss.com/) themes and elements to achieve this.

![Templates](/static/images/readmd-images/parallax.jpg)

### Logo
The logo has been made through adapting Fontawesome Icons that will then be used throughout the site to denote the different catagories of voluntary oppertunities.

![Logo](/static/images/readmd-images/gag_logo.png)
![Icons](/static/images/readmd-images/fontawesome.jpg)

### Hero Image
The [hero image](https://www.cardigan-bay.com/cbay/wp-content/uploads/coast-path.jpg) has inspired the color palette.
![Hero Image](/static/images/coast-path.jpg)

### Color Palette
The colours were sampled in Gimp and then fine-tuned using Coolors. The feel is fresh, spring like and intended to be very easy to read.
![Color Palette](/static/images/readmd-images/thumbnail_palette.jpg)

### Favicon

![Favicon](static/favicon/android-chrome-192x192.png)  ![Favicon](static/favicon/apple-touch-icon.png) ![Favicon](static/favicon/apple-touch-icon.png)

Favicon has been used to generate the icon that is seen on the page tab when loaded.

## Wireframes

### Home Page
The home or landing page will welcome visitors and volunteers and give a brief description of whet the website does, and invite them to take a look at the volunteering oppertunities on offer. There will be a navbar that will appear across all pages, a hero image with the zoom animation from the ['Love Runing Project'](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+CSE101+2020_Q2/courseware/be0e510a3aca4bccb6e0bba4cf7cf06b/15fe9d557bcc4af5a117465b9150454f/) and introductory paragraphs about the three catagorys of opportuities available, utilisint the Fontawesome icons. 
![Home Page](/static/images/readmd-images/wireframe_landing_page.png)

### Opportunities Page
The opportunities page has been inspired by the [Code Institute non-relational database waltkthrough project](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+NRDB_L5+2022_Q3/courseware/9e2f12f5584e48acb3c29e9b0d7cc4fe/054c3813e82e4195b5a4d8cd8a99ebaa/) and will utilise cards to display voluteering opportunities that pulls information from a database. 

The Opportunities will be searchable, and when lregistered and logged in a user will be able to apply for opportunities directly from the relevant cards.

When logged in an admin will be able to edit and delete opportunities directly from these cards. Defensive programming will ensure that those who are not supposed to cannot carry out these functions.

![Opportunities Page](/static/images/readmd-images/wireframe_opportunities_page.png)

#### Cards
[MongoDB](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+NRDB_L5+2022_Q3/courseware/58bca0e827fc46bc862c5e2aeec97468/a4e711e56b114afaace001a03afd1c63/) will be used to create the database, and each opportunity record will be broken down into the following catagories:

| ID           | Unique key generated by MongoDB |
| ------------ | ------------------------------- |
| Category     | Animal/Environment/People       |
| Tile         | Opportunity title               |
| Description  | Description of opportunity      |
| Closing Date | Closing date for applications   |

### Experiences Page
The experiences page is influenced byt the [Code Institute Thorin project](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+FL101+2021_T1/courseware/4d995e6a4f384c3dafffdcbde3fd25ef/eb7780e1b9f643d7a956497f29d82f39/) which utilises [Flask](https://flask.palletsprojects.com/en/2.2.x/). I will also use this method to help display text and images from [Pexels](https://www.pexels.com/) to give a story-like feel to the website and add interest.
![Experiences Page](/static/images/readmd-images/wireframe_our_volunteers.jpg)

## Functionality
In order for the website to work there also needs to be functionality for the users to be able to login and apply for the roles. There will also need to be a sys-admin function that allows for CRUD functionality with the opportunity cards. This functionality will be adapted from the [Code Institute mini project](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+NRDB_L5+2022_Q3/courseware/9e2f12f5584e48acb3c29e9b0d7cc4fe/054c3813e82e4195b5a4d8cd8a99ebaa/).

### Future Implementations
In future implementations I would like to:
- Have the apply form autofill the opportunity or tasK name and the username fields.
- Build in bilingual functionality.
- Add logos and images to the opportunity cards so that they are more appealing and descriprive to users.
- Have a custom error page/s (e.g. for 404/405 errors) that will redirect users back to the app if an error occurs.

### Accessibility
I have been mindful during coding to ensure that the website is as accessible friendly as possible. This has been have achieved by:
- Using semantic HTML.
- Using descriptive alt attributes on images on the site.
- Providing information for screen readers where there are icons used and no text.
- Ensuring that there is a sufficient colour contrast throughout the site.

## Database Schema
[MongoDB](https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_prosp-brand_gic-null_emea-gb_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624581&adgroup=115749705343&gclid=CjwKCAiAheacBhB8EiwAItVO29sdvrgVs8vUgQ3Me6m_ziNfY-2SlCuVryM0vhVPA8GQ4zjXyz6rzxoCpZIQAvD_BwE) hasd been used to create the database, with four collections within it.

![Schema](/static/images/readmd-images/schema.jpg)

Apply holds information from the Application form including Opportunity Name, Username, First Name, Last Name, Email, and Description.

![Apply](/static/images/readmd-images/apply.jpg)

Categories holds the category types which are used to categorise or group opportunities.

![Categories](/static/images/readmd-images/categories.png)

The messages collection holds information from users who have used the contact form. This offers users to ask questions or communicate with the site admin. Information collected is: First Name, Last Name, Email and Message details.

![Message](/static/images/readmd-images/messages.jpg)

The tasks collection contains information about opportunities on offer. This includes Category Name, Task Name, Task Name, Task Description, Due Date and a Welsh Essential option.

![Tasks](/static/images/readmd-images/tasks.jpg)

The Users collection hold information about registered users. It holds their username and a hashed version of their password for security. This ensures no two users can hold the same username.

![Users](/static/images/readmd-images/users.jpg)

## Technology

### Languages Used
HTML, CSS, JavaScript, Python

### Database Used

[MongoDb](https://www.mongodb.com/home) for development.

### Frameworks Used

[Materialize](https://materializecss.com/)- A modern responsive front-end framework based on Material Design

### Libraries & Packages Used

[PyMongo](https://pymongo.readthedocs.io/en/stable/index.html)

[Flask](https://flask.palletsprojects.com/en/2.2.x/)

[Jinja](https://jinja.palletsprojects.com/en/3.1.x/)

[FontAwesome](https://materializecss.com/)

### Programs Used

[Heroku](https://id.heroku.com/login) for deployment

[Git](https://gitpod.io/) - For version control.

[GitHub](https://github.com/) - To save and store the files for this project.

[Google Dev Tools](https://developers.google.com/web/) - To troubleshoot, test features and solve issues with responsiveness and styling.

[Pip](https://pip.pypa.io/en/stable/index.html) - A tool for installing Python packages.


## Testing

### User Stories

| As a... I want to... | Action | Evidence |
| :--- | :--- | :--- |
| As a potential volunteer I want to be able register to the site to apply for opportunities. | By clicking on "Register" I can fill out a simple form to register to the site. I am shown a message when I am successful. | ![register](static/images/testing-images/userstoriesregister.png) |
| As a registered user I want to be able to login. | By clicking on the "Login" link on the main nav bar I can enter my details and succefully log in. I can then logout by selecting the "logout" link on the nav bar when I am done. I will see a message telling me that I have succesfully logged out. | ![Login Page](static/images/testing-images/userstorieslogingout.png) |
| As a registered user I want to be able to see my profile. | When logged in I can view the "Profile" link option oon the main nav bar. This does not show if I am not logged in. | ![Profile](static/images/testing-images/userstoriesprofile.png) |
| As a potential volunteer I want to be able to view all the opportunities on offer, and apply for them. | When logged in I can view the opportunities on offer in the Opportunities page and when I am ready, I can click the "Apply" button which will take me to a form. I can fill in the form and once I click "Send" I am shown a message that shows my application has been sent. | ![Apply](static/images/testing-images/userstoriesapply.png) |
| As a site user I want to send a message | I can navigate to the contact form which is a link on the main nav bar, fill out the form and recieve a message assuring me that my message has been sent. | ![Contact Page](static/images/testing-images/userstoriescontact.png) |
| As a site admin I want to be able to add opportunities. | When logged in as a site admin, the option to add a task or opportunity is shown as a link "New Task" in the main nav bar. This link is not visible to ordinary users or admins who are not logged in.Clicking on this takes me to a form that I can fill out giving details about category/title, description/due date and if the task requires a Welsh speaking individual. When I select the "Add Task" button, I am shown a message that the task has been succesfully added.| ![Add Opportunity](static/images/testing-images/userstoriesadd.png) | 
| As a site admin I want to be able to edit opportunities. | When logged in as a site admin, the option to edit a task or opportunity is shown as a button when a task is opened on the "Opportunities page". This button is not visible to ordinary users or admins who are not logged in. Clicking on the button takes me to a form that contains all the current task information, and I can esily change whatever I need to. If I decide to cancel the action, I can click the cancel button and I am returned to the opportunities page with no edits having been made to the task. If I decide to keep the edits, I can select "Edit Task" and the task will be re-submitted with the new information. I will also be shown a message confirming that the edit has been succesful.. When I select the "Add Task" button, I am shown a message that the task has been succesfully added.| ![Edit Opportunities](static/images/testing-images/userstoriesedittask.png) |
| As a site admin I want to be able to delete opportunities. | When logged in as a site admin, the option to delete a task or opportunity is shown as a button when a task is opened on the "Opportunities page". This button is not visible to ordinary users or admins who are not logged in. Clicking on the button shows a message confirming that the task has been succesfully deleted.| ![Delete Opportunities](static/images/testing-images/userstoriesdelete.png) |
| As a site admin I want to be able to add categories. | When logged in as a site admin, the option to add a task or opportunity is shown as a link "New category" in the main nav bar. This link is not visible to ordinary users or admins who are not logged in.Clicking on this takes me to a form that I can fill out giving details about category/title, description/due date and if the task requires a Welsh speaking individual. When I select the "Add category" button, I am shown a message that the category has been succesfully added.| ![Add Opportunity](static/images/testing-images/userstoriesaddcategory.png) | 
| As a site admin I want to be able to edit categories. | When logged in as a site admin, the option to edit a category is shown as a button when the "Manage Categories" page is open. This button is not visible to ordinary users or admins who are not logged in. Clicking on the button takes me to a form that contains all the current category information, and I can esily change whatever I need to. If I decide to cancel the action, I can click the cancel button and I am returned to the categories page with no edits having been made to the category. If I decide to keep the edits, I can select "Edit category" and the category will be re-submitted with the new information.The admin will also be shown a message confirming that the edit has been succesful. | ![Edit categories](static/images/testing-images/userstorieseditcategory.png) |
| As a site admin I want to be able to delete categories. | When logged in as a site admin, the option to delete a category or opportunity is shown as a button when a category is opened on the "categories page". This button is not visible to ordinary users or admins who are not logged in. Clicking on the button activates a modal that allows the admin to either cancel or continue to delete the category. Cancelling the action returns the admin to the category page. Selecting delete shows a message confirming that the category has been succesfully deleted.| ![Delete categories](static/images/testing-images/userstoriesdelete.png) |


#### HTML Validation

[W3C](https://validator.w3.org/)

| Page | Result| Evidence |
| :--- | :--- | :--- |
| Home Page | Pass | ![Home Page](static/images/testing-images/w3chome.png) | 
| Contact Page | Pass| ![Contact Page](static/images/testing-images/w3ccontact.png) |
| Login Page | Pass| ![Login Page](static/images/testing-images/w3clogin.png) |
| Add Opportunity Page | Pass | ![Add Opportunity](static/images/testing-images/w3cadd.png) | 
| Opportunities Page | Pass| ![Opportunities Page](static/images/testing-images/w3ctasks.png) |
| Volunteers Page | Pass| ![Login Page](static/images/testing-images/w3cvolunteers.png) |

#### CSS Validation

[W3C Jigsaw](https://jigsaw.w3.org/css-validator/) was used to validate the style.css file.

N.B. materialize.css and materialize.min.css were not validated as these are required files from Materialize.

![Style.css](static/images/testing-images/stylecss.png)

#### JavaScript Validator

[JS Hint](https://jshint.com/) was used to validate the script.js file.

N.B init.js, materialize.js and materialize.min.js were not validated as they are required files from Materialize.

![script.js](static/images/testing-images/jshint.png)

#### WAVE Validator

[WAVE Web Accessibility Evaluation Tools](https://wave.webaim.org/)

| Page | Result| Evidence |
| :--- | :--- | :--- |
| Home Page | Pass | ![Home Page](static/images/testing-images/wavehome.png) | 
| Contact Page | Pass| ![Contact Page](static/images/testing-images/wavecontact.png) |
| Login Page | Pass| ![Login Page](static/images/testing-images/w3clogin.png) |
| Add Opportunity Page | Pass | ![Add Opportunity](static/images/testing-images/waveadd.png) | 
| Opportunities Page | Pass| ![Opportunities Page](static/images/testing-images/wavegettasks.png) |
| Volunteers Page | Pass| ![Login Page](static/images/testing-images/wavevolunteers.png) |

#### Lighthouse

[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)

| Page | Result| Evidence |
| :--- | :--- | :--- |
| Home Page | Pass | ![Home Page](static/images/testing-images/lighthousehome.png) | 
| Contact Page | Pass| ![Contact Page](static/images/testing-images/lighthousecontact.png) |
| Login Page | Pass| ![Login Page](static/images/testing-images/lighthouselogin.png) |
| Add Opportunity Page | Pass | ![Add Opportunity](static/images/testing-images/lighthouseadd.png) | 
| Opportunities Page | Pass| ![Opportunities Page](static/images/testing-images/lighthouseopportunities.png) |
| Volunteers Page | Pass| ![Login Page](static/images/testing-images/lighthousevolunteers.png) |
| Profile Page | Pass| ![Profile Page](static/images/testing-images/lighthouseprofile.png) |
| Register Page | Pass| ![Register Page](static/images/testing-images/lighthouseregister.png) |
| Manage Categories Page | Pass| ![Manage Categories Page](static/images/testing-images/lighthousecategory.png) |

#### CI Python Linter

[CI Python Linter](https://pep8ci.herokuapp.com/)

![Python](/static/images/readmd-images/ci_pythonlinter.jpg)

### Defensive Programming

I have used defensive programming through my app to ensure that users who are not logged in, or users who did not create the opportunities or categories are unable to edit. This is achieved by checking whether there is a user in session, and then also checking to see if the session user is the same user who created the opportunity. Had I more time I would have liked to have developed a custom 404 pages that would direct users back to the home page, should any errors occur whilst they are using the app.

I have made use of modals to provide helpful warnings to the admin if records are to be deleted, double check that the admin definately wanted to do this.

## Deployment

The site was deployed to Heroku. Please follow the below steps.
Deployment steps

- add the list of requirements by writing in the terminal "pip3 freeze > requirements.txt"
- Add six and colorama==0.4.4 as they didn't seem to add automatically
- Git add and git commit the changes made
- Log into Heroku or create a new account and log in
- top right-hand corner click "New" and choose the option Create new app, if you are a new user, the "Create new app" button will appear in the middle of the screen
- Write app name - it has to be unique, it cannot be the same as this app
- Choose Region - I am in Europe
- Click "Create App"
- The page of your project opens. 
- Choose "settings" from the menu on the top of the page
- Go to section "Config Vars" and click button "Reveal Config Vars"
- Go to git pod and copy the content of "creds.json" file
- In the field for "KEY" enter "CREDS" - all capital letters
- Paste the content of "creds.json" and paste to field "VALUE" Click button "Add"
- Add another key "PORT" and value "8000"
- Go to section "Build packs" and click "Add build pack"
- in this new window - click Python and "Save changes"
- click "Add build pack" again
- in this new window - click Node.js and "Save changes"
- take care to have those apps in this order: Python first, Node.js second, drag and drop if needed
- Next go to "Deploy" in the menu bar on the top
- Go to section "deployment method", choose "GitHub"
- New section will appear "Connect to GitHub" - Search for the repository to connect to
- type the name of your repository and click "search"
- once Heroku finds your repository - click "connect"
- Scroll down to the section "Automatic Deploys"
- Click "Enable automatic deploys" or choose "Deploy branch" and manually deploy
- Click "Deploy branch"

Once the program runs: you should see the message "the app was sussesfully deployed" 23. Click the button "View"
Forking the GitHub repository

By forking out of this repository you will be able to view and edit the code without affecting the original repository.

- Locate the GitHub repository. Link can be found here.
- Click the button in the top right-hand corner "Fork"
- This will take you to your own repository to a fork that is called the same as the original branch.

### Making a local clone

- Locate the GitHub repository. Link can be found [here](https://github.com/ahaffg/gag-cyc).
- Next to the green Gitpod button you will see a button "code" with an arrow pointing down
- You are given the option to open with GitHub desktop or download zip
- You can also copy https full link, go to git bash and write git clone and paste the full link

## Credits
For code inspiration, design inputs, help and advice.
I have consulted numerous websites, individuals and slack channels to get support for the code. I have listed below from where I have adapted code to suit the needs of my app:

- [Techsini](https://techsini.com/) was used to create the devide mock-up image at the head of this document.
- [Kera Kudmore](https://github.com/kera-cudmore/seaside-sewing) For a fantactic example of a README.md file.
- [Fontawesome](https://fontawesome.com/) For icon use throughout the site as well as adaptation of icons for the site logo.
- [Favicon](https://favicon.io/) has been used for the favicon.

The many patient and knowledgeable tutors at Code Institute for their time and support.

### Media

- [Cardigan Bay Image](https://www.cardigan-bay.com/)
- [Kampus Production](https://www.pexels.com/photo/a-group-of-people-smiling-together-while-sitting-near-the-table-7551617/)
- [Cottonbro Studio](https://www.pexels.com/photo/a-woman-playing-with-her-dog-6568956/)
- [Anna Shvets](https://www.pexels.com/photo/volunteers-smiling-at-the-camera-while-holding-black-plastic-bags-5029860/)
- [Ksenia Chernaya](https://www.pexels.com/photo/a-woman-teaching-arts-to-preschoolers-8535214/)

## Acknowledgment
My fantastic mentor [Martina Terlević](https://www.linkedin.com/in/martinaterlevic/?originalSubdomain=de) for always being so helpful and flexible, as well as all round awesome human!