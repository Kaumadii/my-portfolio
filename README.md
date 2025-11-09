# My Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, shadcn/ui, and Framer Motion, ready for deployment on Vercel.

## 🚀 Tech Stack

- **Frontend**: Next.js 14 (React framework)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Deployment**: Vercel (optimized)

## ✨ Features

- **Home Section**: Hero section with introduction and social links
- **About Me**: Personal information and background
- **Skills**: Technical skills with animated progress bars
- **Projects**: GitHub projects integration (auto-fetches from your GitHub)
- **Achievements**: Certifications, awards, and recognitions
- **Education**: Academic background and timeline
- **Contact Me**: Contact form and information
- **CV Download**: Download button in header
- **Responsive Design**: Works on all devices
- **Smooth Animations**: Modern UI with Framer Motion animations
- **Dark Mode Ready**: Built with shadcn/ui theming system

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Update Your Information

1. **Update GitHub Username**:
   - Open `components/Projects.tsx`
   - Find `const GITHUB_USERNAME = 'YOUR_GITHUB_USERNAME';`
   - Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username

2. **Update Personal Information**:
   - Update components with your actual information:
     - `components/Home.tsx` - Name, title, description, social links
     - `components/About.tsx` - About text and personal info
     - `components/Skills.tsx` - Your skills and proficiency levels
     - `components/Achievements.tsx` - Your achievements
     - `components/Education.tsx` - Your education history
     - `components/Contact.tsx` - Contact information

3. **Add Your CV**:
   - Place your CV file in the `public` folder as `cv.pdf`
   - Or update the path in `components/Header.tsx`

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

### 4. Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and deploy

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository or upload your project
4. Vercel will automatically configure everything

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── Header.tsx          # Navigation header
│   ├── Home.tsx            # Home section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects section
│   ├── Achievements.tsx    # Achievements section
│   ├── Education.tsx       # Education section
│   ├── Contact.tsx         # Contact section
│   ├── Footer.tsx          # Footer
│   └── ScrollToTop.tsx     # Scroll to top button
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   └── cv.pdf              # Your CV file
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json           # Dependencies
```

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: 238.7 83.5% 66.7%;      /* Indigo */
  --secondary: 262.1 83.3% 57.8%;    /* Purple */
  /* ... */
}
```

Or customize the Tailwind theme in `tailwind.config.ts`.

### Adding More Sections

1. Create a new component in `components/`
2. Add it to `app/page.tsx`
3. Add navigation link in `components/Header.tsx`

## 📝 Notes

- GitHub API is used to fetch your repositories (public repos only)
- Contact form uses mailto link (you can integrate with a backend service like Formspree, EmailJS, etc.)
- All animations use Framer Motion for smooth transitions
- The project uses TypeScript for type safety
- shadcn/ui components are fully customizable

## 🔧 Troubleshooting

### GitHub Projects Not Loading

- Make sure `GITHUB_USERNAME` is set correctly in `components/Projects.tsx`
- Ensure your GitHub repositories are public
- Check browser console for API errors

### Build Errors

- Make sure all dependencies are installed: `npm install`
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`
- Check TypeScript errors: `npm run lint`

## 📄 License

This portfolio template is free to use and modify for personal or commercial projects.

---

**Need Help?** Feel free to customize this template to match your needs!
