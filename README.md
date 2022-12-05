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
  + [Contact Page](#contact-page "Contact Page")
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
+ [Deployment](#deployment "Deployment")
+ [Credits](#Credits "Credits")

## UX
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
The [hero image](https://www.cardigan-bay.com/cbay/wp-content/uploads/coast-path.jpg) will utilize the zoom animation from the 'Love Running' project and the colors have inspired the color palette.
![Hero Image](/static/images/coast-path.jpg)

### Color Palette
The colours were sampled in Gimp and then fine-tuned using Coolors. The feel is fresh, spring like and intended to be very easy to read.
![Color Palette](/static/images/readmd-images/thumbnail_palette.jpg)
## Wireframes
### Home Page
The home or landing page will welcome visitors and volunteers and give a brief description of whet the website does, and invite them to take a look at the volunteering oppertunities on offer. There will be a navbar that will appear across all pages, a hero image with the zoom animation from the ['Love Runing Project'](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+CSE101+2020_Q2/courseware/be0e510a3aca4bccb6e0bba4cf7cf06b/15fe9d557bcc4af5a117465b9150454f/) and introductory paragraphs about the three catagorys of opportuities available, utilisint the Fontawesome icons. 
![Home Page](/static/images/readmd-images/wireframe_landing_page.png)
### Opportunities Page
The opportunities page has been inspired by the [Code Institute non-relational database waltkthrough project](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+NRDB_L5+2022_Q3/courseware/9e2f12f5584e48acb3c29e9b0d7cc4fe/054c3813e82e4195b5a4d8cd8a99ebaa/) and will utilise cards to display voluteering opportunities that pulls information from a database. 
![Opportunities Page](/static/images/readmd-images/wireframe_opportunities_page.png)
#### Cards
[MongoDB](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+NRDB_L5+2022_Q3/courseware/58bca0e827fc46bc862c5e2aeec97468/a4e711e56b114afaace001a03afd1c63/) will be used to create the database, and each opportunity record will be broken down into the following catagories:
| ID           | Unique key generated by MongoDB |
| ------------ | ------------------------------- |
| Category     | Animal/Environment/People       |
| Tile         | Opportunity title               |
| Institution  | Name of institution             |
| Description  | Description of opportunity      |
| Closing Date | Closing date for applications   |
### Experiences Page
The experiences page is influenced byt the [Code Institute Thorin project](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+FL101+2021_T1/courseware/4d995e6a4f384c3dafffdcbde3fd25ef/eb7780e1b9f643d7a956497f29d82f39/) which utilises [Flask](https://flask.palletsprojects.com/en/2.2.x/). I will also use this method to help display text and images from [Pexels](https://www.pexels.com/) to give a story-like feel to the website and add interest.
![Experiences Page](/static/images/readmd-images/wireframe_our_volunteers.jpg)
### Contact Page
The contact page will contain a form that will collect user information and store it to another database sitting on MongoDB. This information will be used to address applications and queries from users. The database at the backend of this app will collect the following information:

| ID           | Unique key generated by MongoDB |
| ------------ | ------------------------------- |
| First Name   |Check for valid entry            |
| Last Name    |Check for valid entry            |
| Email        |Check for valid e-mail           |
| Phone Number |(optional)                       |
| Message      |Check for valid entry            |

![Contact Page](/static/images/readmd-images/wireframe_contact_page.png)

## Functionality
In order for the website to work there also needs to be functionality for the users to be able to login and apply for the roles. There will also need to be a sys-admin function that allows for CRUD functionality with the opportunity cards. This functionality will be adapted from the [Code Institute mini project](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+NRDB_L5+2022_Q3/courseware/9e2f12f5584e48acb3c29e9b0d7cc4fe/054c3813e82e4195b5a4d8cd8a99ebaa/).

### Future Implementations
In future implementations I would like to:
- Build in bilingual fuunctionality.
- Add Icons, logos and images to the opportunity cards so that they are more appealing and descriprive to users.

### Accessibility
I have been mindful during coding to ensure that the website is as accessible friendly as possible. This has been have achieved by:
- Using semantic HTML.
- Using descriptive alt attributes on images on the site.
- Providing information for screen readers where there are icons used and no text.
- Ensuring that there is a sufficient colour contrast throughout the site.

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