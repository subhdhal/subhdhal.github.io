# CSS Customization Guide

This guide shows you how to customize the appearance of your website by editing `css/style.css`.

## Color Variables

The main colors are defined at the top of `css/style.css` in the `:root` section. These control the entire color scheme.

### Current Color Scheme (Dark Mode)

```css
:root {
    --bg-primary: #0a0e27;      /* Main background (very dark blue) */
    --bg-secondary: #1a1f3a;    /* Secondary background (dark blue) */
    --text-primary: #e8e9f3;    /* Main text (light) */
    --text-secondary: #a6a9c7;  /* Secondary text/muted (gray) */
    --accent-color: #ff6b6b;    /* Accent color (red) */
    --accent-hover: #ff5252;    /* Hover state for accent */
    --border-color: #2a2f48;    /* Border color (dark) */
    --code-bg: #141829;         /* Code block background */
}
```

## Color Scheme Examples

### Option 1: Modern Blue (Professional)
```css
:root {
    --accent-color: #0066ff;      /* Bright blue */
    --accent-hover: #0052cc;      /* Darker blue hover */
}
```

### Option 2: Green (Tech/Nature)
```css
:root {
    --accent-color: #00d084;      /* Bright green */
    --accent-hover: #00b373;      /* Darker green hover */
}
```

### Option 3: Purple (Creative)
```css
:root {
    --accent-color: #9d4edd;      /* Purple */
    --accent-hover: #7b2cbf;      /* Darker purple hover */
}
```

### Option 4: Orange (Warm)
```css
:root {
    --accent-color: #ff8c42;      /* Warm orange */
    --accent-hover: #ff7a1f;      /* Darker orange hover */
}
```

### Option 5: Cyan (Modern)
```css
:root {
    --accent-color: #00d9ff;      /* Cyan/Aqua */
    --accent-hover: #00b8d4;      /* Darker cyan hover */
}
```

## How to Apply a New Color Scheme

1. Open `css/style.css` in your editor
2. Find the `:root` section (around line 1-20)
3. Replace the `--accent-color` value with your chosen color
4. Replace the `--accent-hover` value with a darker shade of the same color
5. Save the file
6. Refresh your browser to see the changes

## How to Find Color Codes

Use a color picker tool:
- [Coolors.co](https://coolors.co) - Generate color palettes
- [Color-hex.com](https://www.color-hex.com) - Get hex codes
- Built-in browser dev tools - Right-click → Inspect → Color picker
- [Adobe Color Wheel](https://color.adobe.com/create/color-wheel)

## Font Customization

To change fonts, edit these variables:

```css
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', ...
--font-mono: 'Fira Code', 'Courier New', monospace;
```

### Example: Use Google Fonts

1. Visit [Google Fonts](https://fonts.google.com)
2. Select a font (e.g., "Inter" or "JetBrains Mono")
3. Copy the import statement
4. Add it to the top of `css/style.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

:root {
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', ...
}
```

## Size & Spacing Customization

### Font Sizes
```css
h1 { font-size: clamp(2rem, 5vw, 3.5rem); }  /* Hero title */
h2 { font-size: clamp(1.5rem, 4vw, 2.25rem); } /* Section title */
h3 { font-size: 1.25rem; }                    /* Subsection */
```

### Spacing (Gaps, Margins, Padding)
```css
--spacing-xs: 0.5rem;   /* Extra small: 8px */
--spacing-sm: 1rem;     /* Small: 16px */
--spacing-md: 1.5rem;   /* Medium: 24px */
--spacing-lg: 2rem;     /* Large: 32px */
--spacing-xl: 3rem;     /* Extra large: 48px */
```

To make the site more compact, reduce these values:
```css
--spacing-md: 1rem;     /* Reduced from 1.5rem */
--spacing-lg: 1.5rem;   /* Reduced from 2rem */
```

## Border & Corner Customization

### Rounded Corners
Search for `border-radius` in the CSS and change values:

```css
/* Current: moderate rounding */
border-radius: 8px;

/* More rounded */
border-radius: 12px;

/* Sharp corners */
border-radius: 4px;

/* Very rounded (pill-shaped buttons) */
border-radius: 50px;
```

## Shadow & Elevation

Add more depth with box-shadow:

```css
/* Subtle shadow */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

/* Medium shadow */
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

/* Strong shadow */
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
```

## Animation Speed

Change the transition speed by editing:

```css
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

- `0.3s` = current speed (300 milliseconds)
- `0.1s` = faster (100 milliseconds)
- `0.5s` = slower (500 milliseconds)

## Common Customizations

### Make the site more "Compact"
```css
:root {
    --spacing-md: 1rem;     /* Less gap between sections */
    --spacing-lg: 1.5rem;   /* Less padding */
    --spacing-xl: 2rem;     /* Less margins */
}
```

### Make the site more "Spacious"
```css
:root {
    --spacing-md: 2rem;
    --spacing-lg: 3rem;
    --spacing-xl: 4rem;
}
```

### Increase Font Size for Better Readability
```css
body {
    font-size: 1.1rem;  /* Increase from default 1rem */
}

p {
    font-size: 1.1rem;  /* Make body text larger */
}
```

### Remove Rounded Corners (Sharp Design)
Search and replace all `border-radius: 8px;` with `border-radius: 0;`

### Increase Animation Speed
```css
--transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
```

## Using CSS Variables in Your Custom Code

When adding new elements, use the predefined variables:

```css
/* Instead of hard-coding colors, use variables */
.my-element {
    background-color: var(--bg-secondary);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
    padding: var(--spacing-md);
    border-radius: 8px;
    transition: var(--transition);
}

.my-element:hover {
    color: var(--accent-color);
}
```

## Light Mode Customization

The light mode colors are defined separately in a media query:

```css
@media (prefers-color-scheme: light) {
    :root {
        --bg-primary: #ffffff;
        --bg-secondary: #f5f5f9;
        --text-primary: #1a1a2e;
        --text-secondary: #6c7089;
        /* ... */
    }
}
```

To adjust light mode colors, edit these values.

## Testing Your Changes

1. Save the CSS file
2. Refresh your browser (Cmd+R on Mac, Ctrl+R on Windows)
3. If changes don't appear, do a hard refresh:
   - Mac: Cmd+Shift+R
   - Windows: Ctrl+Shift+F5
4. Test in both dark mode and light mode

## CSS Structure Overview

- **Lines 1-20:** Color variables and theme definitions
- **Lines 21-80:** Typography (fonts, sizes, weights)
- **Lines 81-150:** Layout and spacing
- **Lines 151-300:** Component styles (navigation, hero, posts, etc.)
- **Lines 301+:** Responsive design and animations

## Common Issues & Fixes

**Changes not appearing:**
- Hard refresh browser (Cmd+Shift+R)
- Check for typos in variable names
- Verify color format is correct (#RRGGBB)

**Color looks different in light mode:**
- Light and dark modes have separate variable definitions
- Edit both the `:root` and `@media (prefers-color-scheme: light)` sections

**Elements look too big/small:**
- Check the spacing variables
- Adjust `--spacing-md`, `--spacing-lg`, etc.

---

## Quick Reference: Color Hex Codes

Popular colors to try:

- Red: `#ff6b6b`, `#ff4757`, `#e74c3c`
- Blue: `#0066ff`, `#3498db`, `#2196f3`
- Green: `#00d084`, `#27ae60`, `#2ecc71`
- Purple: `#9d4edd`, `#8e44ad`, `#9b59b6`
- Orange: `#ff8c42`, `#e67e22`, `#f39c12`
- Pink: `#ff6b9d`, `#e91e63`, `#f06292`
- Teal: `#00d9ff`, `#1abc9c`, `#16a085`

---

Happy customizing! 🎨
