# Quick Start Guide - Deploying to GitHub Pages

## Step 1: Verify Your Repository Settings

1. Go to your GitHub repository: https://github.com/subhdhal/subhdhal.github.io
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

GitHub will automatically deploy your site in a few minutes!

## Step 2: Make Your Edits

Before pushing, customize your website:

### Essential Changes:

1. **Replace "Subhashree Dhal" with your name**
   - Files: `index.html`, `about.html`, `resume.html`, all posts
   - Search and replace all instances

2. **Update contact information**
   - Email: Replace `subhashree@example.com` with your email
   - GitHub: Replace `subhdhal` with your GitHub username
   - LinkedIn: Update your LinkedIn URL
   - Twitter: Update your Twitter handle

3. **Update professional details**
   - Update job titles, company names, and dates in `resume.html`
   - Update skills and technologies in `about.html`
   - Replace job descriptions with your experience

4. **Customize colors (optional)**
   - Edit `css/style.css`
   - Change the `--accent-color` variable (currently `#ff6b6b` - red)
   - Adjust other CSS variables as desired

### Content Changes:

5. **Blog posts**
   - Edit existing posts in `posts/` directory
   - Or create new ones using the existing templates
   - Make sure to update post dates and content

## Step 3: Test Locally (Optional)

Before pushing to GitHub, test your site locally:

```bash
cd /Users/subhashreedhal/subhdhal.github.io

# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have it installed)
npx http-server
```

Then visit `http://localhost:8000` in your browser to preview the site.

## Step 4: Commit and Push

```bash
cd /Users/subhashreedhal/subhdhal.github.io

# Stage all changes
git add .

# Commit your changes
git commit -m "Update personal website with my information"

# Push to GitHub
git push origin main
```

## Step 5: Verify Deployment

1. Your site should be live at: `https://subhdhal.github.io`
2. Check GitHub Pages status under Settings → Pages
3. If there are issues, check the "Actions" tab for build errors

## Customization Tips

### Changing Theme Colors

Edit `css/style.css` and update these variables in the `:root` section:

```css
:root {
    --accent-color: #ff6b6b;      /* Main accent color - change this! */
    --bg-primary: #0a0e27;        /* Dark background */
    --text-primary: #e8e9f3;      /* Light text */
    /* ... more variables ... */
}
```

### Adding New Blog Posts

1. Copy one of the existing post files from `posts/` directory
2. Rename it to something descriptive (e.g., `my-new-post.html`)
3. Update the title, date, and content
4. Add an entry to the posts grid in `posts.html`
5. Commit and push

### Changing Your Avatar/Profile Picture

Add an image file and reference it in `index.html`:

```html
<img src="path/to/your/image.jpg" alt="Your Name" class="profile-image">
```

## Important Notes

- ⚡ Changes take a few seconds to deploy
- 🔒 Your repository is public - don't commit sensitive data
- 📱 Test on mobile to ensure responsive design works
- 🌙 The site includes dark/light mode toggle - test both!
- ♿ The site is built with accessibility in mind

## If You Change Your GitHub Username

If your GitHub username changes from `subhdhal`:

1. Rename the repository to `yourusername.github.io`
2. Update all links in the HTML files
3. Your site will be accessible at `https://yourusername.github.io`

## Troubleshooting

**Site not showing up?**
- Check that the repository is named `yourusername.github.io`
- Verify GitHub Pages is enabled in Settings → Pages
- Clear your browser cache
- Wait a few minutes for deployment

**Changes not appearing?**
- Hard refresh your browser (Cmd+Shift+R on Mac)
- Check the Actions tab to ensure builds are passing
- Verify your latest commit was pushed

**Need more help?**
- GitHub Pages docs: https://pages.github.com
- Check the Actions tab for build logs
- Verify your `main` branch is up to date

---

Happy blogging! 🚀
