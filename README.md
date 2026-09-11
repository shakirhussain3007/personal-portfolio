# Shakir Hussain — Portfolio Website

This is the complete portfolio website of **Shakir Hussain**, a Full Stack Developer.

## Project Structure

```text
portfolio-package/
├── index.html              # Main website page
├── css/
│   └── style.css           # Website styling
├── js/
│   └── script.js           # Project image slider functionality
├── images/
│   ├── shakir-photo.jpg    # Profile photo
│   └── project*-shot*.jpg  # Project screenshots
└── README.md               # Project information
```

## How to Run

No installation or setup is required.

1. Download or copy the complete `portfolio-package` folder.
2. Open the folder.
3. Double-click `index.html`.
4. The portfolio will open in your web browser.

You can also upload the complete folder to platforms such as **GitHub Pages, Netlify, Vercel, or Hostinger** to publish the website online.

## Customization

### 1. Replace Images

Go to the `images/` folder and replace the placeholder images with your own images.

Keep the same file names, or update the image paths in `index.html`.

* `shakir-photo.jpg` → Your professional profile photo
* `project1-shot1.jpg` → Project 1 screenshot
* `project1-shot2.jpg` → Project 1 screenshot
* `project1-shot3.jpg` → Project 1 screenshot
* `project2-shot1.jpg` → Project 2 screenshot
* `project2-shot2.jpg` → Project 2 screenshot
* `project2-shot3.jpg` → Project 2 screenshot
* `project3-shot1.jpg` → Project 3 screenshot
* `project3-shot2.jpg` → Project 3 screenshot
* `project3-shot3.jpg` → Project 3 screenshot

Recommended image sizes:

* Profile photo: around **640 × 480 px**
* Project screenshots: around **800 × 450 px (16:9)**

### 2. Update Website Content

Open `index.html` in VS Code or any text editor to update:

* Project names and descriptions
* Technologies used in each project
* Experience and job details
* About section
* Email address
* GitHub profile link
* LinkedIn profile link
* Experience/years information

Replace any placeholder links such as `href="#"` with your actual links.

### 3. Change Colors

All main website colors are defined at the beginning of `css/style.css` inside the `:root` section.

```css
--ink: #0F1B2D;
--paper: #F1EEF7;
--brass: #B8875B;
--lilac: #C9BFE8;
--mint: #A9D4C3;
--peach: #F0C9A8;
```

Change these values to create your own color theme.

## Features

* Responsive portfolio design
* About section
* Skills and technologies
* Projects showcase
* Project image slider
* Experience section
* Contact section
* GitHub and LinkedIn links
* Clean and modern UI

## Technologies

* HTML5
* CSS3
* JavaScript
* Google Fonts

## Notes

This portfolio is built using **HTML, CSS, and JavaScript** only.

No framework or package installation is required.

The project image slider is controlled by `js/script.js` and includes both **navigation arrows and dots**.

Google Fonts are loaded from the internet, so an internet connection is required for the fonts to load correctly.
