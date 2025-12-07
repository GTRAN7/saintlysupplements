# Saintly Supplements

A nonprofit website for **Saintly Supplements**, an organization that provides free, high-quality vitamins and supplements to people with chronic medical conditions who cannot afford them.

## Features

- **Home Page**: Hero section, mission statement, conditions supported, supplements provided, and community impact
- **Corporate Partners**: Showcase of partner organizations with impact metrics
- **Our Work**: Programs and mission details
- **Get Involved**: Volunteer opportunities and application form
- **Blogs**: News and stories from the community
- **Shop**: Coming soon - Shopify integration planned
- **Donate**: Donation form with impact visualization

## Tech Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router v6
- **Styling**: CSS with CSS Variables
- **Language**: JavaScript (no TypeScript)
- **Fonts**: Google Fonts (Fraunces, Nunito, DM Sans)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd saintlysupps
```

2. Install dependencies:
```bash
cd client
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
saintlysupps/
├── client/
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── ScrollToTop.jsx
│   │   │   ├── home/
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── WhoWeHelp.jsx
│   │   │   │   ├── Conditions.jsx
│   │   │   │   ├── Supplements.jsx
│   │   │   │   └── Community.jsx
│   │   │   └── partners/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── OurWork.jsx
│   │   │   ├── Blogs.jsx
│   │   │   ├── GetInvolved.jsx
│   │   │   ├── Partners.jsx
│   │   │   ├── Shop.jsx
│   │   │   └── Donate.jsx
│   │   ├── styles/
│   │   │   ├── variables.css
│   │   │   ├── global.css
│   │   │   └── animations.css
│   │   ├── hooks/
│   │   │   ├── useScrollToTop.js
│   │   │   └── useScrollReveal.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🎨 Design System

### Colors

**Primary Blues:**
- Powder Blue: `#B0E0E6`
- Cornflower Blue: `#6495ED`
- Cobalt Blue: `#0047AB`
- Teal: `#008080`
- Turquoise: `#40E0D0`
- Capri: `#00BFFF`

**Warm Accents:**
- Butterscotch: `#E59400`
- Cadmium Orange: `#ED872D`
- Gamboge: `#E49B0F`
- Golden Yellow: `#FFDF00`
- Orange: `#FFA500`
- Peach: `#FFCBA4`

### Typography

- **Headlines**: Fraunces (serif)
- **Body**: Nunito (sans-serif)
- **Accent/Navigation**: DM Sans (sans-serif)

## 🔜 Future Enhancements

- [ ] Shopify integration for the Shop page
- [ ] Backend API with Node.js/Express
- [ ] Contact form submission handling
- [ ] Blog post detail pages
- [ ] User authentication for volunteers
- [ ] Admin dashboard

## 📄 License

This project is for Saintly Supplements nonprofit organization.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

