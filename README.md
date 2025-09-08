# Abdullah Ali - Portfolio Website

A professional portfolio website showcasing Full-Stack & DevOps expertise with case studies, animations, and modern design.

## 🚀 Features

- **Hero Section** with profile photo and animated border glow
- **About Section** with animated skill cards
- **Services Section** with hover effects
- **Portfolio Section** with 6 custom SVG illustrations for case studies
- **Contact Form** with validation and database storage
- **Admin Panel** to view received messages
- **Responsive Design** for all devices
- **Blue & White Theme** (ByteVibe Digitals branding)

## 🛠 Tech Stack

- **Frontend**: React with Vite, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Animations**: CSS transitions and transforms
- **Deployment**: Vercel-ready configuration

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database (for production)

## 🏃‍♂️ Local Development Setup

### Option 1: Quick Setup
```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your DATABASE_URL in .env file

# Push database schema
npm run db:push

# Start development server
npm run dev
```

### Option 2: Manual Setup
```bash
# Install dependencies
npm install

# Create .env file with your database URL
echo "DATABASE_URL=your_postgresql_connection_string" > .env

# Push database schema to create tables
npm run db:push

# Build the project
npm run build

# Start development server
npm run dev
```

The application will be available at `http://localhost:5000`

## 🗄 Database Setup

The project uses PostgreSQL with the following tables:
- `users` - User authentication (if needed)
- `contact_messages` - Contact form submissions

### Environment Variables Required:
```env
DATABASE_URL=postgresql://username:password@host:port/database
NODE_ENV=development
```

## 📱 Admin Panel

Access the admin panel to view contact form submissions:
- **URL**: `/admin`
- **Features**: View all received messages with timestamps
- **Storage**: Messages are permanently stored in PostgreSQL

## 🚀 Deployment on Vercel

### Step 1: Prepare Your Repository
```bash
# Make sure all files are committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Import your repository
4. Configure environment variables:
   - `DATABASE_URL` - Your PostgreSQL connection string
   - `NODE_ENV` - Set to `production`

### Step 3: Database Setup for Production
- Use [Neon.tech](https://neon.tech) (free PostgreSQL)
- Or [Supabase](https://supabase.com) (free tier)
- Copy the connection string to `DATABASE_URL`

### Step 4: Automatic Deployment
- Vercel will automatically build and deploy
- The `vercel.json` configuration is already set up
- Database tables will be created automatically

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run db:push      # Push database schema
npm run check        # TypeScript type checking
```

## 📁 Project Structure

```
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── lib/         # Utilities and configs
│   │   └── hooks/       # Custom React hooks
├── server/              # Backend Express application
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   ├── storage.ts       # Database operations
│   └── db.ts           # Database connection
├── shared/              # Shared types and schemas
│   └── schema.ts        # Database schema definitions
└── vercel.json         # Vercel deployment config
```

## 🎨 Case Studies Included

1. **NeuroCom** - AI SaaS Platform
2. **HR Platform** - Workforce Optimization
3. **Manufacturing Automation** - Industrial Systems
4. **Mobile Parts Distributor** - E-commerce Platform
5. **Global Retailer** - Digital Transformation
6. **Cloud Kitchen App** - Food Delivery System

## 📞 Contact Information

- **Email**: abdullahyamin456@gmail.com
- **Phone**: +92 316 1319919
- **Location**: Karachi, Pakistan
- **GitHub**: github.com/abdul7y

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ by Abdullah Ali - Full-Stack & DevOps Engineer