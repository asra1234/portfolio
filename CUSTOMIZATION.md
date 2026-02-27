# Portfolio Customization Guide

## Adding Images

### 1. Profile Picture (About Section)
1. Add your profile photo to `src/assets/profile.jpg`
2. Open `src/components/About.js`
3. Add the class `has-image` to the image placeholder:
```jsx
<div className="image-placeholder has-image">
```

### 2. Hero Background Image (Optional)
1. Add your background image to `src/assets/bg-hero.jpg`
2. The opacity is set to 0.05 by default (subtle)
3. Adjust opacity in `src/components/Hero.css`:
```css
opacity: 0.1; /* Change this value (0.0 to 1.0) */
```

### 3. Pattern Background
A subtle grid pattern is already added to the entire app. You can:
- Remove it by deleting the `.App::before` rule in `App.css`
- Change the grid size by modifying `background-size: 50px 50px;`
- Change opacity in the `linear-gradient` or the `opacity` property

### 4. Section Backgrounds
Each section can have its own background:

**For Projects Section:**
```css
.projects {
  background-image: url('../assets/bg-projects.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}

.projects::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.9); /* Dark overlay */
  z-index: 0;
}
```

## Recommended Image Sizes

- **Profile Picture**: 500x500px (square, JPG or PNG)
- **Hero Background**: 1920x1080px (landscape, JPG)
- **Section Backgrounds**: 1920x1080px (landscape, JPG)

## Free Image Resources

- [Unsplash](https://unsplash.com/) - Free high-quality photos
- [Pexels](https://pexels.com/) - Free stock photos
- [Pixabay](https://pixabay.com/) - Free images and vectors
- [UI Gradient](https://uigradients.com/) - Beautiful gradient backgrounds

## Image Optimization Tips

1. **Compress images** before adding them (use TinyPNG or ImageOptim)
2. **Use WebP format** for better performance
3. **Lazy load** images for faster initial page load
4. Keep file sizes under 500KB for backgrounds

## Color Customization

### Change Gradient Colors
Find and replace these values throughout CSS files:
- Primary: `#667eea` (blue-purple)
- Secondary: `#764ba2` (purple)

### Change Background Color
In `App.css` and section CSS files:
```css
background: #0a0a0a; /* Change to your preferred color */
```

## Typography

The portfolio uses **Poppins** font from Google Fonts.

To change the font:
1. Update the Google Fonts link in `public/index.html`
2. Change `font-family` in `src/index.css`

## Animation Speed

Adjust animation durations in component files:
```jsx
transition={{ duration: 0.5 }} // Change this value
```

---

Need help? Check the main README.md for more information.
