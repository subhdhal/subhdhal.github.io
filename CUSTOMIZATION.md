# Customization Checklist ✓

Complete these steps to personalize your website before pushing to GitHub.

## 🔴 MUST DO (Critical)

- [ ] **Replace "Subhashree Dhal" with your name**
  - Search and replace across all `.html` files
  - Key files: `index.html`, `about.html`, `resume.html`

- [ ] **Update email address**
  - Replace `subhashree@example.com` with your email
  - Check: `index.html`, `about.html`, social links

- [ ] **Update GitHub username**
  - Replace `subhdhal` with your username
  - Check: All GitHub links (usually in social sections)

- [ ] **Update professional title**
  - Change "DevOps Engineer" to your actual role
  - Files: `index.html`, `resume.html`, `about.html`

- [ ] **Update social media URLs**
  - [ ] GitHub profile URL
  - [ ] Twitter/X handle
  - [ ] LinkedIn profile URL
  - Verify links are correct

## 🟡 SHOULD DO (Highly Recommended)

- [ ] **Update resume content**
  - Replace job titles with your actual positions
  - Update company names and dates
  - Add your real experience
  - Update skills and certifications
  - File: `resume.html`

- [ ] **Update About page**
  - Personalize the introduction
  - List your actual skills
  - Update technical stack
  - Adjust languages and tools

- [ ] **Replace blog posts**
  - Update or replace the 4 sample blog posts
  - Adjust dates to match your post dates
  - Write about your actual experience

- [ ] **Choose a color scheme** (optional)
  - Edit `css/style.css`
  - Change `--accent-color` variable (currently red `#ff6b6b`)
  - Test in both dark and light modes

## 🟢 NICE TO HAVE (Optional)

- [ ] Create custom favicon
  - Replace `favicon.svg` with your own design
  - Or use an online favicon generator

- [ ] Add profile image
  - Create a `img/` folder
  - Add your professional photo
  - Update `index.html` to reference it

- [ ] Customize hero section
  - Add a personal tagline
  - Update the subtitle

- [ ] Add more blog posts
  - Create new HTML files in `posts/` folder
  - Use existing post templates
  - Add links to `posts.html`

## 📋 File-by-File Checklist

### index.html (Home Page)
- [ ] Change "Subhashree Dhal" to your name
- [ ] Update "@subhdhal" to your handle
- [ ] Change "OpenShift SRE at Red Hat" to your role
- [ ] Verify all social media links
- [ ] Update email address

### about.html
- [ ] Update "Who I Am" section
- [ ] Customize "What I Do" section
- [ ] Update tech stack to your technologies
- [ ] Verify contact links

### resume.html
- [ ] Update name and title
- [ ] Change professional summary
- [ ] Update work experience
  - [ ] Company names
  - [ ] Job titles
  - [ ] Dates
  - [ ] Responsibilities
- [ ] Update skills
- [ ] Update education
- [ ] Update certifications

### posts.html
- [ ] Keep or replace blog posts
- [ ] Update post titles and descriptions
- [ ] Verify post links work correctly

### posts/*.html (Blog Posts)
- [ ] Update post titles
- [ ] Change post content
- [ ] Update dates
- [ ] Verify navigation links

### css/style.css
- [ ] (Optional) Change accent color
- [ ] (Optional) Adjust fonts
- [ ] (Optional) Modify spacing

### js/main.js
- [ ] Usually no changes needed
- [ ] Review theme toggle functionality

## 🚀 Deployment Checklist

Before pushing to GitHub:

- [ ] All personal information updated
- [ ] No placeholder text remaining
- [ ] All links are correct
- [ ] Tested locally (if possible)
- [ ] Dark mode works correctly
- [ ] Light mode works correctly
- [ ] Mobile responsive (tested on phone/tablet)
- [ ] All images load (if added any)

## 🔗 Verification Links to Check

Replace `subhdhal` with your GitHub username:

- [ ] Home page social links work
- [ ] About page contact links work
- [ ] All blog post links accessible
- [ ] Resume downloads/links work
- [ ] Theme toggle functions correctly

## 📝 Git Commands to Deploy

```bash
# Navigate to your repo
cd /Users/subhashreedhal/subhdhal.github.io

# Check what's changed
git status

# Stage all changes
git add .

# Commit with a message
git commit -m "Customize personal website with my information"

# Push to GitHub (this deploys your site!)
git push origin main
```

## ⏱️ Estimated Time to Complete

- **Basic customization (names, links, etc.):** 10-15 minutes
- **Full customization (content, colors, posts):** 30-60 minutes
- **Deploy to GitHub:** 1 minute
- **Site goes live:** 1-5 minutes after push

## 📞 Quick Questions?

**Q: How do I change the color scheme?**
A: Edit `css/style.css`, find the `:root` section at the top, and change the `--accent-color` variable.

**Q: How do I add a new blog post?**
A: Copy one of the files in `posts/` folder, rename it, edit the content, and add a link in `posts.html`.

**Q: How long until my site is live?**
A: Usually 1-5 minutes after you push to GitHub.

**Q: Can I use my custom domain?**
A: Yes! Check GitHub Pages settings and add your CNAME file for custom domain setup.

**Q: How do I preview changes locally?**
A: Run `python3 -m http.server 8000` and visit `http://localhost:8000`

---

✅ Once you complete these items, your website is ready to share with the world!
