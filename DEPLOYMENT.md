# Deployment Guide

## 🚀 Deploying to Vercel (Free)

### Step 1: Database Setup (Choose One)

#### Option A: Neon.tech (Recommended - Free PostgreSQL)
1. Go to [neon.tech](https://neon.tech)
2. Sign up with GitHub
3. Create a new project
4. Copy the connection string (looks like: `postgresql://username:password@hostname/database`)

#### Option B: Supabase (Alternative Free Option)
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Go to Settings → Database
4. Copy the connection string

### Step 2: Prepare Code for Deployment
```bash
# Make sure your code is committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 3: Deploy to Vercel
1. Visit [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your portfolio repository
5. Configure build settings:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Step 4: Environment Variables
In Vercel dashboard, add these environment variables:
```
DATABASE_URL = postgresql://your_connection_string_here
NODE_ENV = production
```

### Step 5: Deploy
- Click "Deploy"
- Vercel will automatically build and deploy your site
- Database tables will be created automatically on first deployment

---

## 💻 Running Locally

### Requirements
- Node.js 18+
- PostgreSQL database

### Setup Steps
1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Database Setup**
   ```bash
   # Create .env file
   cp .env.example .env
   
   # Edit .env with your database URL
   DATABASE_URL=postgresql://username:password@localhost:5432/portfolio_db
   ```

4. **Initialize Database**
   ```bash
   npm run db:push
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

6. **Access Application**
   - Website: `http://localhost:5000`
   - Admin Panel: `http://localhost:5000/admin`

---

## 🔧 Production Setup

### Environment Variables Required
```env
DATABASE_URL=postgresql://connection_string
NODE_ENV=production
```

### Build Process
```bash
npm run build    # Builds both frontend and backend
npm start        # Starts production server
```

---

## 📊 Admin Panel Usage

### Accessing Messages
1. Navigate to `/admin` on your deployed site
2. View all contact form submissions
3. Messages are stored permanently in PostgreSQL
4. Sorted by newest first with timestamps

### Message Details Include:
- Sender name and email
- Message content
- Submission date and time
- Unique message ID

---

## 🛠 Troubleshooting

### Common Issues

**Database Connection Error:**
- Verify DATABASE_URL is correct
- Check database server is running
- Ensure firewall allows connections

**Build Failures:**
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version (requires 18+)
- Verify all dependencies are installed

**Deployment Issues:**
- Check Vercel function logs
- Verify environment variables are set
- Ensure build command is correct

### Getting Help
- Check deployment logs in Vercel dashboard
- Verify database connection string format
- Test locally before deploying

---

## 🔄 Updates and Maintenance

### Updating Content
1. Edit React components in `client/src/components/`
2. Commit changes: `git commit -am "Update content"`
3. Push to trigger auto-deployment: `git push origin main`

### Database Schema Changes
1. Update schema in `shared/schema.ts`
2. Run `npm run db:push` to apply changes
3. Test locally before deploying

### Adding New Features
1. Develop locally with `npm run dev`
2. Test thoroughly including admin panel
3. Deploy to Vercel via git push

---

Made with ❤️ by Abdullah Ali