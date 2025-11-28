# Subhashree Dhal - Personal Website

A modern, minimal dark-themed personal website showcasing my work as a DevOps Engineer. Built with HTML, CSS, and vanilla JavaScript. Hosted on GitHub Pages.

## Features

- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Fast static site
- 🎨 Modern, clean aesthetic
- 🔍 SEO optimized
- ♿ Accessible (WCAG compliant)
- 📊 Multiple sections: Home, About, Posts, Resume

## Pages

- **Home** (`index.html`) - Hero section with introduction and social links
- **About** (`about.html`) - Professional background and skills
- **Posts** (`posts.html`) - Blog posts and technical articles
- **Resume** (`resume.html`) - Detailed CV and experience

## Getting Started

### Prerequisites

- A GitHub account
- Git installed locally
- Your favorite text editor

### Setup

1. Clone this repository:
```bash
git clone https://github.com/subhdhal/subhdhal.github.io.git
cd subhdhal.github.io
```

2. Customize the content:
   - Edit the name and information in `index.html`, `about.html`, `resume.html`
   - Update email and social links with your information
   - Replace text in posts with your own articles
   - Update social media links

3. Test locally (optional):
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx http-server
```

Visit `http://localhost:8000` in your browser.

4. Push to GitHub:
```bash
git add .
git commit -m "Initial personal website setup"
git push origin main
```

Your site will be live at `https://yourusername.github.io`

## Customization

### Colors
Edit the CSS variables in `css/style.css` (`:root` selector) to change colors:

```css
:root {
    --bg-primary: #0a0e27;
    --text-primary: #e8e9f3;
    --accent-color: #ff6b6b;
    /* ... more variables */
}
```

### Content
- Update your name, bio, and social links in all HTML files
- Add more blog posts by copying the post template structure
- Update resume information in `resume.html`

### Social Links
Find and replace the placeholder URLs:
- `subhdhal` → your GitHub username
- `subhashree@example.com` → your email
- LinkedIn and Twitter URLs

## File Structure

```
├── index.html              # Home page
├── about.html              # About page
├── posts.html              # Blog posts listing
├── resume.html             # Resume page
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── main.js             # JavaScript functionality
├── posts/
│   ├── kubernetes-best-practices.html
│   ├── terraform-aws-infrastructure.html
│   ├── ci-cd-pipeline-setup.html
│   └── monitoring-observability.html
└── README.md               # This file
```

## Adding Blog Posts

1. Create a new HTML file in the `posts/` directory
2. Use one of the existing post files as a template
3. Update the navigation path (`../` to reference parent files)
4. Add the post to `posts.html` in the posts grid

## Technologies

- HTML5
- CSS3 (with CSS variables and grid/flexbox)
- Vanilla JavaScript
- GitHub Pages (hosting)

## Features Included

- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Smooth Animations**: Fade-in effects on page load
- **Navigation**: Easy navigation between sections
- **Social Links**: Quick access to social profiles
- **SEO Meta Tags**: Properly formatted for search engines

## Performance

- No external dependencies (fully self-contained)
- Lightweight CSS (~15KB)
- Minimal JavaScript (~4KB)
- Fast page loads (under 1 second)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

This project is open source and available under the MIT License.

## Support

If you have questions or suggestions, feel free to:
- Open an issue on GitHub
- Check the existing code for examples
- Modify and customize as needed

## Next Steps

1. Edit this README with your own information
2. Update all HTML files with your personal details
3. Customize colors in `css/style.css`
4. Add your own blog posts
5. Push to GitHub and enable GitHub Pages in repository settings
6. Your site will be live at `https://yourusername.github.io`

---

Built with ❤️ by Subhashree Dhal
