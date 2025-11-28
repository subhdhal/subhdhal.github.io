# Quick Reference Guide

## Files You MUST Edit Before Deploying

### 1. **index.html** (Home Page)
Find and replace:
- `Subhashree Dhal` → Your name
- `@subhdhal` → Your social handle
- `DevOps Engineer at Red Hat specializing in OpenShift` → Your role/title
- `subhashree@example.com` → Your email
- Update all social media profile URLs (GitHub, Twitter, LinkedIn)

### 2. **about.html** (About Page)
Find and replace:
- `Subhashree Dhal` → Your name
- Entire "Who I Am" section (around line 50)
- "What I Do" section with your responsibilities
- "Tech Stack" section with your actual skills
- Contact URLs (LinkedIn, GitHub, Twitter, email)

### 3. **resume.html** (Resume/CV)
Find and replace:
- `Subhashree Dhal` → Your name
- Professional title
- Email and social links
- Professional summary (around line 60)
- All job titles, company names, and dates
- Responsibilities in each job
- Technical skills
- Certifications
- Education details

### 4. **posts.html** (Blog Posts Page)
Find and replace:
- Post titles
- Post descriptions
- Post dates
- Post links in the grid

### 5. **posts/*.html** (Individual Blog Post Files)
For each post file, find and replace:
- Title and date
- Article content
- All references to your name at the bottom

## Files You CAN Edit (Optional)

- `css/style.css` - Change colors, fonts, spacing
- `js/main.js` - Usually no changes needed
- Add images to an `img/` folder
- Create more blog posts using existing templates

## Files You DON'T Need to Edit

- `.gitignore` - Already configured
- `.git/` - Git configuration (auto-generated)
- `favicon.svg` - Can replace with your own

## Quick Search & Replace Commands

### Using VS Code:
1. Press `Cmd+H` (Mac) or `Ctrl+H` (Windows)
2. In "Find" box: `subhdhal`
3. In "Replace" box: Your username
4. Click "Replace All"

Repeat for:
- `Subhashree Dhal` → Your name
- `subhashree@example.com` → Your email
- Other specific information

## File Structure

```
📁 subhdhal.github.io/
├── 📄 index.html              ← Edit: Home page content
├── 📄 about.html              ← Edit: About/Bio
├── 📄 resume.html             ← Edit: CV/Resume
├── 📄 posts.html              ← Edit: Blog list
├── 📁 posts/                  ← Edit: Blog post content
│   ├── 📄 kubernetes-best-practices.html
│   ├── 📄 terraform-aws-infrastructure.html
│   ├── 📄 ci-cd-pipeline-setup.html
│   └── 📄 monitoring-observability.html
├── 📁 css/
│   └── 📄 style.css           ← Edit: Colors, fonts (optional)
├── 📁 js/
│   └── 📄 main.js             ← Don't edit (usually)
├── 📄 favicon.svg             ← Replace with your own (optional)
├── 📄 README.md               ← Main project readme
├── 📄 SETUP.md                ← Deployment instructions
├── 📄 CUSTOMIZATION.md        ← Customization checklist
├── 📄 CSS_CUSTOMIZATION.md    ← CSS color guide
└── 📄 .gitignore              ← Git ignore file
```

## Deployment Steps (Easy!)

```bash
# 1. Navigate to your repo
cd /Users/subhashreedhal/subhdhal.github.io

# 2. Check what changed
git status

# 3. Add all changes
git add .

# 4. Commit with message
git commit -m "Update website with my information"

# 5. Push to GitHub (DEPLOYS YOUR SITE!)
git push origin main

# Your site goes live at: https://subhdhal.github.io
```

## What Gets Deployed

Everything in this repository automatically goes live at your GitHub Pages URL:
- All `.html` files become web pages
- All `.css` and `.js` files get served
- Images in any folder are accessible
- Everything is public and searchable

## Important Links

- **Your website:** https://subhdhal.github.io
- **Repository:** https://github.com/subhdhal/subhdhal.github.io
- **GitHub Pages docs:** https://pages.github.com
- **Edit settings:** https://github.com/subhdhal/subhdhal.github.io/settings/pages

## Color Change Quick Start

To change the accent color (currently red):

1. Open `css/style.css`
2. Find line with: `--accent-color: #ff6b6b;`
3. Change `#ff6b6b` to your color:
   - Blue: `#0066ff`
   - Green: `#00d084`
   - Purple: `#9d4edd`
   - Orange: `#ff8c42`
4. Save and reload page

## Character Count Guide

For natural writing:
- **Name:** 2-50 characters (yours: `Subhashree Dhal` = 15)
- **Role:** 10-100 characters
- **Bio:** 50-500 characters
- **Blog title:** 20-80 characters
- **Blog excerpt:** 100-300 characters

## File Sizes (for reference)

- `index.html`: ~4 KB
- `about.html`: ~6 KB
- `resume.html`: ~8 KB
- `posts.html`: ~5 KB
- `style.css`: ~20 KB
- `main.js`: ~4 KB

**Total:** ~50 KB (very fast load times! ⚡)

## Testing Checklist

Before deploying:
- [ ] All names updated
- [ ] All links working
- [ ] No typos in titles
- [ ] Email is correct
- [ ] Social media URLs valid
- [ ] Tested locally (if possible)
- [ ] Dark mode works
- [ ] Light mode works
- [ ] Mobile view checked

## Most Common Mistakes

❌ **Forgot to update name in one file**
- Solution: Use search/replace in VS Code

❌ **Social links point to wrong profiles**
- Solution: Double-check each URL is correct

❌ **Changes don't appear on website**
- Solution: Wait 1-5 minutes and hard refresh (Cmd+Shift+R)

❌ **Created content but forgot to link it**
- Solution: Add post entry to `posts.html` grid

❌ **Broke the website by editing CSS**
- Solution: Use git to revert changes, or fix the CSS syntax

## Pro Tips

💡 **Tip 1:** Use VS Code's Find/Replace feature (Cmd+H) to change names across all files at once

💡 **Tip 2:** Create a local test by running `python3 -m http.server 8000` before pushing

💡 **Tip 3:** Keep blog posts between 500-2000 words for good readability

💡 **Tip 4:** Use consistent date format (e.g., "November 15, 2025")

💡 **Tip 5:** Update social media handle in one place = use find/replace everywhere

## Git Cheat Sheet

```bash
# See what changed
git status

# Stage all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub (deploys)
git push origin main

# See recent commits
git log --oneline

# Undo last commit (before push)
git reset HEAD~1
```

## FAQ Answers

**Q: How do I add a new blog post?**
A: Copy `posts/kubernetes-best-practices.html`, rename it, edit content, add link to `posts.html`

**Q: Can I use markdown instead of HTML?**
A: Not with GitHub Pages free tier - stick with HTML

**Q: How do I change the color?**
A: Edit `css/style.css`, change `--accent-color` variable

**Q: My changes don't show up!**
A: Hard refresh (Cmd+Shift+R), then wait 5 minutes

**Q: Can I use a custom domain?**
A: Yes! Add CNAME file and configure DNS (see GitHub Pages docs)

**Q: How do I hide/delete a page?**
A: Delete the file, commit, and push. GitHub will update within seconds.

---

**Ready to deploy?** Follow the deployment steps above! 🚀

Need help? Check the other documentation files:
- `SETUP.md` - Detailed setup guide
- `CUSTOMIZATION.md` - Full customization checklist
- `CSS_CUSTOMIZATION.md` - Color and styling guide
