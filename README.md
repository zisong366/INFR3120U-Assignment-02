# INFR3120U-Assignment-02
## Personal Portfolio Website

This project is a general portfolio website developed for INFR3120U Assignment 02.

The website was built using Node.js, ExpressJS, and EJS templates. It uses Bootstrap and Font Awesome to create a responsive and user-friendly interface.

## Technologies Used
- Node.js
- ExpressJS
- EJS
- HTML
- CSS3
- JavaScript
- Bootstrap 5
- Font Awesome
- Git and GitHub

## Features
The portfolio contains four main pages:

### Home
Introduces the portfolio and provides navigation to the About Me and Projects pages.

### About Me
Provides information about my background, interests, and technical skills.

### Projects
Displays my web development projects using Bootstrap cards, descriptions, and GitHub links.

### Contact Me
Contains a contact form with name, email, and message fields.

The form uses an ExpressJS POST route to process submissions and display a confirmation page.

Note: This is a demonstration form. Messages are not sent by email or stored in a database.

### Project Structure

INFR3120-Assignment-02/
|-- bin/
|   -- www
|-- public/
|   |--images/
|   |-- javascripts/
|    -- stylesheets/
|       -- style.css
|-- routes/
|   |-- index.js
|    -- users.js
|-- views/
|   |-- partials/
|   |   |-- header.ejs
|   |    -- footer.ejs
|   |-- index.ejs
|   |-- about.ejs
|   |-- projects.ejs
|   |-- contact.ejs
|   |-- contact-success.ejs
|    -- error.ejs
|-- app.js
|-- package.json
|-- package-lock.json
|-- .gitignore
 -- README.md

## Installation and Setup

### 1. Clone the Repository

-- Poweshell
git clone https://github.com/zisong366/INFR3120U-Assignment-02.git

### 2. Navigate to the project directory

-- Powershell
cd INFR3120U-Assignment-02

### 3. Install dependencies

-- Powershell
npm install

### 4. Start the application

-- Powershell
npm start

### 5. Open the website

Visit:
http://localhost:3000

## Application Routes

| Route | Description |
|-------|-------------|
| / | Home page |
| /about | About Me page |
| /projects | Projects page |
| /contact | Contact Me page |
| POST /contact | Processes contact form submissions |

## Responsive Design

The website uses Bootstrap's responsive grid system and custom CSS media queries to support desktop, tablet, and mobile screen sizes.

## Reusable EJS Templates

The application uses shared header and footer partials to maintain consistent navigation and styling across the website.

## GitHub Repository
https://github.com/zisong366/INFR3120U-Assignment-02.git

## Cloud Deployment


