# Deployment Instructions for Netlify

## Prerequisites

- A GitHub account
- A Netlify account (free tier works perfectly)
- Your code pushed to a GitHub repository

## Step-by-Step Deployment

### 1. Push Your Code to GitHub

If you haven't already, create a GitHub repository and push your code:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repository as remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2. Connect to Netlify

1. **Go to Netlify**: Visit [https://app.netlify.com](https://app.netlify.com)
2. **Sign in/Up**: Sign in with your GitHub account (or create a new account)
3. **Add New Site**: Click "Add new site" → "Import an existing project"
4. **Connect to GitHub**: Click "Connect to GitHub" and authorize Netlify
5. **Select Repository**: Choose your repository from the list

### 3. Configure Build Settings

Netlify should auto-detect SvelteKit, but verify these settings:

- **Build command**: `npm run build`
- **Publish directory**: `.svelte-kit/netlify`
- **Node version**: Leave as default (or set to 18+ if needed)

### 4. Deploy

1. Click **"Deploy site"**
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be live at a URL like: `https://random-name-123.netlify.app`

### 5. Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the instructions to configure your domain

## Important Notes

- **Profile Image**: Make sure you add `profile.jpg` to the `static/` folder before deploying
- **Environment Variables**: If you add any later, set them in Netlify dashboard under **Site settings** → **Environment variables**
- **Auto-deploy**: Every push to your `main` branch will automatically trigger a new deployment
- **Build Logs**: Check the deploy logs in Netlify dashboard if something goes wrong

## Troubleshooting

If the build fails:

1. Check the build logs in Netlify dashboard
2. Make sure all dependencies are in `package.json`
3. Verify Node.js version (should be 18+)
4. Ensure `netlify.toml` is in the root directory

## Quick Commands Reference

```bash
# Local development
npm run dev

# Build locally to test
npm run build

# Preview production build
npm run preview
```
