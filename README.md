# Excel Music Bot Website

A modern, responsive website for the Excel Music Discord Bot, built with React and styled with CSS.

## Features

- Responsive design that works on desktop and mobile devices
- Dark mode theme with beautiful gradients
- Animated UI elements using Framer Motion
- Multiple pages: Home, Commands, and Premium
- Complete list of bot commands organized by category
- Premium subscription plans information

## Tech Stack 

- React 18
- React Router for navigation
- Framer Motion for animations
- CSS for styling
- Material UI icons
- React Intersection Observer for scroll animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/excel-music-website.git
   cd excel-music-website
   ```

2. Install dependencies
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Start the development server
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Project Structure

```
/public            # Static files
/src               # Source files
  /components      # Reusable components
  /context         # React context providers
  /pages           # Page components
  /styles          # CSS files
  App.jsx          # Main App component
  index.jsx        # Entry point
```

## Deployment

### Building for Production

To build the app for production, run:

```
npm run build
```
or
```
yarn build
```

This will create a `build` folder with optimized production files.

### Deployment Options

1. **Vercel** (Recommended)
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect React and set up the build configuration

2. **Netlify**
   - Connect your GitHub repository to Netlify
   - Set the build command to `npm run build` or `yarn build`
   - Set the publish directory to `build`

3. **GitHub Pages**
   - Add `"homepage": "https://yourusername.github.io/excel-music-website"` to package.json
   - Install gh-pages: `npm install --save-dev gh-pages`
   - Add deploy scripts to package.json:
     ```
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
     ```
   - Run `npm run deploy` or `yarn deploy`

## Environment Variables

Create a `.env` file in the root directory for any environment variables:

```
REACT_APP_API_URL=your_api_url_here
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments 

- Excel Music Bot team for the inspiration
- React team for the amazing framework
- Framer Motion for the beautiful animations
