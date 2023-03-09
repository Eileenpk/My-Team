# My Team - A three page responsive website 

## Table of contents

- [Overview](#overview)
  - [The HTML](#the-HTML)
  - [The CSS](#the-CSS)
  - [The JavaScript](#the-JavaScript)
  - [The Expected Behavior](#Expected-Behavior)
    - [All Pages](#All-Pages)
    - [The Home page](#Home)
    - [The About page](#About)
    - [The Contact page](#Contact)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
- [Author](#author)

## Overview
This project is built with HTML5, CSS, Tailwind, React (ES6), and Next Js. The form data will be sent to the FormSpree API for collection. 

### The HTML
The HTML has:

- Three pages:
    - Home
        - Nav bar
        - Header 
            - Find the best (h1)
            - Info text (p)
            - Two background images at desktop size
            - Only one background image at tablet and mobile size
        - Build and manage
            - Build and manage (h2)
            - Background Image
            - Benefits cards
                - Experienced Individuals (h3)
                - Easy to Implement (h3)
                - Enhanced Productivity (h3)
            - Delivering results (h2)
                - Two background Image
                - Success stories cards
                    - Quote
                    - Full name (h3)
                    - Position 
                    - Avatar
                    - Background quote image
            - Ready to get started
            - Footer

    - About
        - Header
            - About (h1)
            - Info text (p)
            - Background image
        - Meet the Directors (h2)
            - Two background images
            - director card 
                - Avatar
                - Full name (h3)
                - Position (p)
                - Plus or minus btn that shows/hides
                    - Full name (h2)
                    - Quote
                    - Social icons
        - Clients
            - Background image
                - Some of our clients (h2)
                - list of clients (Image)
        - Ready to get started
        - Footer


    - Contact 
        - Nav
        - Header
            - Contact (h1)
            - Ask about (h2)
            - Benefits cards
                - Quality (h3)
                - Usage (h3)
                - Innovation (h3)
        - Form
            - Name 
            - Email address
            - Company name
            - Title
            - Message
            - Submit btn
        - Footer

- All pages will reuse the following components:
    - Nav
        - Logo
        - Page links
        - Contact Btn
    - Footer
        - Logo
        - Page links
        - Address
        - Social links
        - Copyright

- Other components reused across pages:
    - Ready to get started
        - Background image
        - Ready to get started (h2)
        - Contact Btn
    - Benefits cards
        - Image
        - Heading (h3)
        - Info (p)


### The CSS
The CSS has:
- Modular style sheets
- Mobile first development
- Tailwind - only used for general styling like margin and padding
- Prefers light or dark mode
- Variables
- The organization of the styles.css will be(in descending order):

    - Variables
    - Resets
    - All typography
    - Media query for typography
    - General styles
    - Media query for General styles

### The JavaScript
The JavaScript has:
- All forms will use FormSpree for data collection
- GetWindowWidth function to dynamically render content
- ToggleClass function to toggle a class for dynamic rendering and transitions
- Logic for mobile nav bar

### Expected Behavior

#### All Pages

- When the "Contact us" call-to-action in the Nav bar is clicked, navigate to the Contact page

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site


#### Home
- When the "Contact us" call-to-action in the Ready to get started component is clicked, navigate to the Contact page

#### About
- When the "Contact us" call-to-action in the Ready to get started component is clicked, navigate to the Contact page

- See the correct content for each team member when the `+` icon is clicked

- Hide the extra content for each team member when the `-` icon is clicked

#### Contact

- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Message` fields are empty should show "This field is required"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"

### Screenshot

![screen shot of full screen webpage](https://github.com/Eileenpk/My-Team/blob/main/public/images/Screenshot-desktop.png)
![screen shot of mobile webpage](https://github.com/Eileenpk/My-Team/blob/main/public/images/Screenshot-mobile.png)
### Links

- Solution URL: [GitHub](https://github.com/Eileenpk/My-Team)
- Live Site URL: [live site](https://my-team-beta.vercel.app/)

### Built with

- [Semantic HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) - HTML5 with clear and descriptive tags for better accessibility and search engine optimization
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - A utility-first CSS framework
- Mobile-first workflow
- [Tailwind](https://tailwindcss.com/) - A utility-first CSS framework
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [FormSpree](https://formspree.io/) - Form API with endpoint for submitted form data to be sent to

## Author

- Frontend Mentor - [@Eileenpk](https://www.frontendmentor.io/profile/Eileenpk)
- LinkedIn - [@Eileenpk](www.linkedin.com/in/eileen-dangelo)
