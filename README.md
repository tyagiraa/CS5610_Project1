# CS5610 Project 1

**Author:** Rajiv Philip  
**Class:** [CS5610 - Web Development](https://www.northeastern.edu/)  
**Live Demo:** [rajivphilip18.github.io/CS5610_Project1](https://rajivphilip18.github.io/CS5610_Project1)

## Project Objective

Build a personal portfolio website that showcases my skills, projects, and experience as a software engineer. The site demonstrates proficiency in responsive design, modern web development practices, and clean UI/UX principles. This project covers HTML5 semantics, CSS3 styling, Bootstrap 5 framework, and vanilla JavaScript interactivity.

## What's in here

Pretty straightforward—a portfolio site with a home page, about section, projects, and contact info. It's got a scarlet and gold theme that I think looks pretty clean. Responsive too, so it doesn't look terrible on mobile.

The main pages are:
- **Home** - A quick intro with resume download and links to connect
- **About** - Background on who I am and what I'm about
- **Projects** - Stuff I've worked on
- **Contact** - How to get ahold of me

Built with Bootstrap 5 for the layout, Font Awesome for icons, and custom CSS to make it look a bit more polished than default Bootstrap. The navbar is sticky and responsive, so navigation works smoothly on all screen sizes.

There's also some JavaScript to add interactivity—a typewriter effect on the home page that creates a nice intro animation, and some other functionality to enhance the user experience.

## Design Document
You can access the design document directly from the GitHub repository or you can navigate to the link here- https://drive.google.com/file/d/1shgAjJHZAC7tzqJ3WdPPSlsSUL-e5BLX/view?usp=sharing


## Design

The color scheme is scarlet (#B01030) and gold (#D4AF37) which gives it a bit of personality compared to the typical blue/gray portfolios. There's also some bright silver accents. The fonts are clean and readable—using Inter for body text and UnifrakturCook for some accent text. All the colors are managed with CSS variables, so if you want to change the theme, it's pretty easy to tweak them all in one place.

Since I have used Bootstrap 5, the whole site is mobile-first, meaning it works on phones, tablets, and desktops without looking broken on any of them.

## Screenshots

[Add screenshots of home page, about page, projects page, and mobile view here]

## Build Instructions

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
-  Node.js installed (for local server)

### Option 1: Simple Browser View
Just clone the repo and open `index.html` directly in your browser. It'll work fine for basic viewing.

### Option 2: Local Server (Recommended)

**Using Node.js:**
```bash
git clone https://github.com/rajivphilip18/CS5610_Project1.git
cd CS5610_Project1
npx http-server
```

Then open the URL shown in the terminal (usually `http://127.0.0.1:8080`).

### Option 3: Deploy to GitHub Pages
The site is already deployed at [rajivphilip18.github.io/CS5610_Project1](https://rajivphilip18.github.io/CS5610_Project1). To deploy your own version:

1. Fork the repository
2. Enable GitHub Pages in your repo settings
3. Set the source to the `main` branch
4. Your site will be live at `https://yourusername.github.io/CS5610_Project1`

## File structure

```
CS5610_Project1/
├── index.html              # Home page
├── aboutMe.html            # About section
├── projects.html           # Project showcase
├── contact.html            # Contact page
├── css/
│   └── styles.css          # All the custom styling
├── js/
│   ├── main.js             # Main JavaScript entry point
│   └── typewriter.js       # Typewriter effect class
├── media/
│   ├── rp_logo.png         # Logo and favicon
│   ├── rp_headshot.png     # Profile images
│   ├── RajivPhilip_Resume.pdf
│   └── (company/school logos)
├── package.json            # Project dependencies
├── LICENSE
└── README.md
```

The whole site is static HTML/CSS/JS, so there's no backend or database. Everything is front-end only.

## Customizing it

### Colors

All the colors are defined at the top of `styles.css` as CSS variables. If you want to change the theme, just update these:

```css
:root {
    --dark-scarlet: #B01030;
    --golden: #D4AF37;
    --bright-silver: #C0C0C0;
}
```

### JavaScript

The project uses two main JavaScript files:

- **`main.js`** - Entry point that initializes the typewriter effect on the home page
- **`typewriter.js`** - A reusable Typewriter class that animates text. It types out code, pauses, then deletes it and types the final text. You can customize the text, speeds, and pause duration by passing options when creating a new instance.

To use the typewriter on different elements, just import it and create a new instance:

```javascript
import Typewriter from '/js/typewriter.js';

new Typewriter(element, {
    codeText: 'your code here',
    finalText: 'final text',
    typeSpeed: 80,
    deleteSpeed: 40,
    pauseDuration: 1200
});
```

### Adding Projects

Edit `projects.html` and add new project cards. They follow a simple structure with an image, title, description, and link.

### Updating Content

Just edit the HTML files directly. The structure is pretty straightforward, and Bootstrap classes handle most of the layout stuff.
