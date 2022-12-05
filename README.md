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
+ [Technology](#technology "Technology")
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

## Technology
## Testing
## Deployment
## Credits