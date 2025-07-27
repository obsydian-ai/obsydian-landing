# 🚀 Deploy to Render

This guide will help you deploy your Obsydian landing page to Render.

## Prerequisites

1. **GitHub Account**: Make sure your code is pushed to a GitHub repository
2. **Render Account**: Sign up at [render.com](https://render.com)

## Deployment Steps

### Method 1: Using Render Dashboard (Recommended)

1. **Sign in to Render**
   - Go to [render.com](https://render.com)
   - Sign up or log in with your GitHub account

2. **Create New Static Site**
   - Click "New +" button
   - Select "Static Site"
   - Connect your GitHub repository

3. **Configure the Site**
   - **Name**: `obsydian-landing` (or your preferred name)
   - **Branch**: `main` (or your default branch)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Environment**: Leave as default

4. **Advanced Settings** (Optional)
   - Add custom domain if needed
   - Configure environment variables if required

5. **Deploy**
   - Click "Create Static Site"
   - Render will automatically build and deploy your site

### Method 2: Using render.yaml (Already Configured)

The project includes a `render.yaml` file that automates the deployment configuration. When you connect your repository to Render, it will automatically detect and use these settings.

## Configuration Files

### render.yaml
```yaml
services:
  - type: web
    name: obsydian-landing
    env: static
    buildCommand: npm install && npm run build
    staticPublishPath: ./dist
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
```

### _redirects (in public folder)
```
/*    /index.html   200
```

## Build Process

1. **Install Dependencies**: `npm install`
2. **Build Project**: `npm run build`
3. **Output**: Files are generated in the `dist` folder
4. **Deploy**: Render serves the `dist` folder as a static site

## Environment Variables

If you need to add environment variables:

1. Go to your Render dashboard
2. Select your site
3. Go to "Environment" tab
4. Add any required environment variables

## Custom Domain

To add a custom domain:

1. Go to your site settings in Render
2. Click "Custom Domains"
3. Add your domain
4. Update your DNS settings as instructed

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check the build logs in Render dashboard
   - Ensure all dependencies are in `package.json`
   - Verify the build command works locally

2. **Routing Issues**
   - The `_redirects` file should handle React Router
   - If issues persist, check the `render.yaml` routes configuration

3. **Assets Not Loading**
   - Ensure all assets are in the `public` folder
   - Check that paths are relative to the root

### Local Testing

Before deploying, test locally:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Preview the build
npm run preview
```

## Support

- [Render Documentation](https://render.com/docs)
- [Render Community](https://community.render.com)
- [Vite Documentation](https://vitejs.dev/guide/)

## Next Steps

After successful deployment:

1. **Set up custom domain** (optional)
2. **Configure analytics** (Google Analytics, etc.)
3. **Set up monitoring** and alerts
4. **Configure CI/CD** for automatic deployments 