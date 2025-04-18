# Modern Portfolio Website

## Introduction
This is a modern, responsive portfolio website template built with HTML, CSS, and JavaScript. It's designed to showcase your skills, projects, and professional information in a clean and visually appealing way. The portfolio includes a light/dark mode toggle, smooth animations, and interactive elements that create an engaging user experience.

## Features
- **Responsive Design** - Looks great on all devices (mobile, tablet, desktop)
- **Dark/Light Mode** - Toggle between color themes with persistent user preference
- **Modern UI** - Clean design with appropriate whitespace and subtle animations
- **Interactive Elements** - Including project filtering, form validation, and hover effects
- **Smooth Scrolling** - Navigation between sections with smooth transitions
- **Project Showcase** - Filtering capability to categorize and display projects
- **Contact Form** - With built-in validation for user inputs
- **Lazy Loading** - Images load only when needed for better performance
- **Semantic HTML** - Properly structured for better accessibility
- **CSS Variables** - Easy customization of colors and themes

## File Structure
```
portfolio/
│
├── index.html              # Main HTML file
├── README.md               # This documentation file
│
├── css/
│   └── style.css           # All styling for the website
│
├── js/
│   └── main.js             # JavaScript functionality
│
└── images/                 # Image assets folder
    ├── profile-placeholder.jpg
    ├── project-placeholder-1.jpg
    ├── project-placeholder-2.jpg
    ├── project-placeholder-3.jpg
    └── project-placeholder-4.jpg
```

## Customization Guide

### 1. Replacing Placeholder Images
- Replace the placeholder images in the `images/` folder with your own images:
  - `profile-placeholder.jpg` - Your professional photo (recommended size: 400x400px)
  - `project-placeholder-1.jpg` through `project-placeholder-4.jpg` - Screenshots or images of your projects (recommended size: 600x400px)
- Make sure to maintain the same filenames, or update the references in the HTML file

### 2. Updating Personal Information
- Open `index.html` in a code editor and modify the following sections:
  - **Hero Section**: Update your name, title, and introduction
  - **About Me Section**: Update your bio, education details, and experience
  - **Skills Section**: Adjust skill names and proficiency levels (modify the width percentage in the style attribute)
  - **Contact Section**: Update your email, phone, and location information
  - **Footer**: Update your name in the copyright and add your social media links

### 3. Modifying Projects
- In the Projects section of `index.html`, each project is contained in a `<div class="project">` element
- To add a new project, copy an existing project structure and update:
  - The image source
  - Project title and description
  - Tags (technologies used)
  - Links to live demo and code
  - Update the `data-category` attribute to match your filtering needs ("web", "mobile", "design", or add custom categories)
- To modify the filter buttons, update the `<div class="projects__filter">` section and ensure the `data-filter` attributes match your project categories

### 4. Customizing Colors and Themes
- Open `css/style.css` and locate the `:root` selector at the top
- Modify the CSS variables to change the color scheme:
  - `--primary-color`: Main accent color
  - `--secondary-color`: Secondary accent color
  - `--background-color`: Page background
  - `--text-color`: Primary text color
  - `--card-bg`: Background color for cards and sections
- To customize the dark theme, modify the variables inside the `[data-theme="dark"]` selector

## Viewing the Website Locally
1. Simply open the `index.html` file in a web browser.
2. For the best development experience, consider using a local development server:
   - If you have Node.js installed, you can use packages like `http-server` or `live-server`
   - If you have Python installed, you can run `python -m http.server` in the portfolio directory
   - Many code editors (like VSCode) have extensions for local servers

## Deployment Tips
To make your portfolio available online, you have several options:

1. **GitHub Pages** (Free and Easy):
   - Push your portfolio to a GitHub repository
   - Go to repository Settings > Pages
   - Select the branch to deploy (usually main/master)
   - Your site will be available at `https://yourusername.github.io/repository-name/`

2. **Netlify** (Free with Premium Options):
   - Sign up for Netlify
   - Drag and drop your portfolio folder to deploy
   - Alternatively, connect to your GitHub repository for continuous deployment

3. **Vercel** (Free with Premium Options):
   - Similar to Netlify, offers simple deployment from GitHub repositories
   - Good option for front-end projects

4. **Custom Domain** (Paid):
   - Purchase a domain from a registrar (GoDaddy, Namecheap, Google Domains, etc.)
   - Connect it to your hosting service (GitHub Pages, Netlify, Vercel, etc.)
   - Follow the hosting service's instructions for custom domain setup

## Additional Customization Options

### Adding Animations
- The CSS already includes some animations, but you can add more using CSS animations or transitions
- Consider using libraries like AOS (Animate On Scroll) for more complex scroll animations

### Adding Custom Fonts
- Currently using Google Fonts (Poppins and Roboto)
- To change fonts, update the Google Fonts link in the `<head>` section of `index.html`
- Then update the font variables in the CSS `:root` selector

### Adding Blog or Additional Pages
- Create new HTML files in the root directory (e.g., `blog.html`)
- Link to them from the navigation menu
- Maintain consistent styling by linking to the same CSS file

### Adding Analytics
- Consider adding Google Analytics or other tracking tools
- Add the tracking code just before the closing `</body>` tag

### Performance Optimization
- Compress your images using tools like TinyPNG
- Minify your CSS and JavaScript files for production
- Consider using WebP format for images when browser support is sufficient

---

Feel free to customize this template to make it your own! If you have any questions or need help with customization, please refer to the documentation of the specific technologies used (HTML, CSS, JavaScript).
