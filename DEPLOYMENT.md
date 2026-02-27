# Deployment Guide - GitHub Pages

## 📋 Prerequisites

1. **GitHub Account** - Create one at [github.com](https://github.com)
2. **Git Installed** - Download from [git-scm.com](https://git-scm.com)

## 🚀 Deployment Steps

### Step 1: Install gh-pages
```bash
npm install
```

### Step 2: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `portfolio` (or any name you prefer)
3. Keep it **Public** (required for free GitHub Pages)
4. Do NOT initialize with README (we already have files)
5. Click "Create repository"

### Step 3: Initialize Git & Push to GitHub

Run these commands in your terminal (replace `asra1234` with your GitHub username):

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as remote (UPDATE USERNAME!)
git remote add origin https://github.com/asra1234/portfolio.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build your portfolio
- Create a `gh-pages` branch
- Deploy to GitHub Pages

### Step 5: Enable GitHub Pages (First Time Only)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source", select branch: `gh-pages`
4. Click **Save**
5. Wait 2-3 minutes for deployment

Your site will be live at: **https://asra1234.github.io/portfolio/**

## 🔄 Making Updates

After making changes to your portfolio:

```bash
# Save your changes
git add .
git commit -m "Description of changes"

# Push to GitHub
git push

# Deploy updated version
npm run deploy
```

## 🎯 Using Custom Domain (Optional)

If you own a domain (like `yourname.com`):

1. Add a file named `CNAME` in the `public` folder with your domain:
   ```
   yourname.com
   ```

2. Update `package.json` homepage:
   ```json
   "homepage": "https://yourname.com"
   ```

3. In your domain registrar, add DNS records:
   - Type: A, Host: @, Value: 185.199.108.153
   - Type: A, Host: @, Value: 185.199.109.153
   - Type: A, Host: @, Value: 185.199.110.153
   - Type: A, Host: @, Value: 185.199.111.153
   - Type: CNAME, Host: www, Value: asra1234.github.io

4. In GitHub Settings → Pages, add your custom domain

## 🐛 Troubleshooting

### Issue: "gh-pages not found"
```bash
npm install gh-pages --save-dev
```

### Issue: "Permission denied"
- Make sure you're logged into GitHub
- Or use SSH instead of HTTPS

### Issue: Page shows 404
- Wait 5 minutes after deployment
- Check GitHub Pages is enabled in repository Settings
- Verify gh-pages branch exists

### Issue: Blank page after deployment
- Check browser console for errors
- Verify homepage in package.json matches your GitHub Pages URL
- Clear browser cache

## 🌐 Alternative Deployment Options

### Vercel (Recommended - Easier)
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your portfolio repository
5. Click "Deploy"
6. Done! Get a free `yourname.vercel.app` subdomain

### Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `build` folder
3. Or connect to GitHub for automatic deployments

### GitHub Codespaces
1. Push code to GitHub
2. Open repository in Codespaces
3. Runs in browser, no local setup needed

## 📝 Quick Commands Reference

```bash
# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Check git status
git status

# View git history
git log --oneline

# Pull latest changes
git pull
```

## 🔗 Useful Links

- [GitHub Pages Documentation](https://pages.github.com/)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/)
- [Git Tutorial](https://git-scm.com/docs/gittutorial)

---

**Your Portfolio will be live at:**
`https://asra1234.github.io/portfolio/`

Update this URL with your actual GitHub username!
