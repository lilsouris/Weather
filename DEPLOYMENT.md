# Deployment Guide for weather.thomasjay.fr

This guide will help you deploy your weather forecast website to the custom domain `weather.thomasjay.fr`.

## Prerequisites

1. ✅ Weather forecast website code (completed)
2. ✅ GitHub repository set up (completed)
3. ✅ OpenWeatherMap API key
4. 🔄 Domain configuration
5. 🔄 Hosting platform setup

## Step 1: Get Your OpenWeatherMap API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/)
2. Sign up for a free account
3. Navigate to "My API keys" section
4. Copy your API key
5. **Important**: The free tier allows 1000 calls/day, which is sufficient for personal use

## Step 2: Choose a Hosting Platform

### Option A: Vercel (Recommended - Free)

1. Go to [Vercel](https://vercel.com/)
2. Sign up with your GitHub account
3. Click "New Project"
4. Import your `lilsouris/Weather` repository
5. Configure environment variables:
   - `OPENWEATHER_API_KEY`: Your API key from Step 1
6. Deploy

### Option B: Netlify (Free)

1. Go to [Netlify](https://netlify.com/)
2. Sign up with your GitHub account
3. Click "New site from Git"
4. Choose your `lilsouris/Weather` repository
5. Configure environment variables in Site settings
6. Deploy

### Option C: Railway (Free tier available)

1. Go to [Railway](https://railway.app/)
2. Sign up with your GitHub account
3. Create new project from GitHub repo
4. Add environment variables
5. Deploy

## Step 3: Configure Your Domain (weather.thomasjay.fr)

### DNS Configuration

You'll need to configure your domain's DNS settings. The exact steps depend on your domain registrar:

1. **Log into your domain registrar** (where you bought thomasjay.fr)
2. **Find DNS management** or **DNS settings**
3. **Add/Update DNS records**:

#### For Vercel:
```
Type: CNAME
Name: weather
Value: cname.vercel-dns.com
TTL: 3600 (or default)
```

#### For Netlify:
```
Type: CNAME
Name: weather
Value: your-site-name.netlify.app
TTL: 3600 (or default)
```

#### For Railway:
```
Type: CNAME
Name: weather
Value: your-app-name.railway.app
TTL: 3600 (or default)
```

### SSL Certificate

Most modern hosting platforms (Vercel, Netlify, Railway) automatically provide SSL certificates for custom domains.

## Step 4: Environment Variables Setup

### In Vercel:
1. Go to your project dashboard
2. Click "Settings" → "Environment Variables"
3. Add:
   - `OPENWEATHER_API_KEY`: Your actual API key

### In Netlify:
1. Go to Site settings → Environment variables
2. Add:
   - `OPENWEATHER_API_KEY`: Your actual API key

### In Railway:
1. Go to your project → Variables
2. Add:
   - `OPENWEATHER_API_KEY`: Your actual API key

## Step 5: Test Your Deployment

1. Wait for DNS propagation (can take up to 48 hours, usually much faster)
2. Visit `https://weather.thomasjay.fr`
3. Verify the weather data loads correctly
4. Test the responsive design on mobile devices

## Troubleshooting

### Common Issues:

1. **"API key not configured" error**
   - Check environment variables are set correctly
   - Ensure the variable name is exactly `OPENWEATHER_API_KEY`

2. **Weather data not loading**
   - Check browser console for errors
   - Verify your API key is valid
   - Check OpenWeatherMap API status

3. **Domain not working**
   - Verify DNS records are correct
   - Wait for DNS propagation
   - Check SSL certificate status

4. **Build errors**
   - Ensure all dependencies are installed
   - Check for TypeScript errors
   - Verify Next.js configuration

## Monitoring and Maintenance

### API Usage Monitoring:
- OpenWeatherMap free tier: 1000 calls/day
- Monitor usage in your OpenWeatherMap dashboard
- Consider upgrading if you exceed limits

### Performance:
- Vercel/Netlify provide analytics
- Monitor Core Web Vitals
- Optimize images and assets if needed

### Updates:
- Keep dependencies updated
- Monitor for security updates
- Test after major updates

## Cost Breakdown

- **Domain**: thomasjay.fr (annual cost depends on registrar)
- **Hosting**: Free (Vercel/Netlify/Railway free tiers)
- **API**: Free (OpenWeatherMap free tier)
- **Total**: Only domain registration cost

## Next Steps

After successful deployment:

1. **Set up monitoring** for uptime and performance
2. **Configure backups** of your code and environment
3. **Set up CI/CD** for automatic deployments
4. **Consider adding features** like:
   - Weather alerts
   - Historical data
   - Multiple cities
   - Dark mode toggle

## Support

If you encounter issues:

1. Check the hosting platform's documentation
2. Review the [README.md](README.md) for setup instructions
3. Check browser console for error messages
4. Verify all environment variables are set correctly

---

**Congratulations!** 🎉 Your weather forecast website will soon be live at `weather.thomasjay.fr`!
