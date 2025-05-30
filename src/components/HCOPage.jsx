**Project Folder Structure for HCO Website (Vite + React + Tailwind)**

📁 hco-site/
├── 📄 index.html
├── 📄 package.json
├── 📄 vite.config.js
├── 📁 public/
│   └── 📄 favicon.ico
├── 📁 src/
│   ├── 📄 main.jsx
│   ├── 📄 App.jsx
│   ├── 📄 index.css
│   └── 📁 components/
│       └── 📄 HCOPage.jsx
└── 📁 tailwind.config.cjs

---

📄 index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HCO</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
  </head>
  <body class="bg-black text-white">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

📄 package.json
```json
{
  "name": "hco-site",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.21",
    "tailwindcss": "^3.3.2",
    "vite": "^4.0.0"
  }
}
```

📄 vite.config.js
```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

📄 tailwind.config.cjs
```js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

📄 src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

📄 src/main.jsx
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

📄 src/App.jsx
```jsx
import HCOPage from './components/HCOPage';

export default function App() {
  return <HCOPage />;
}
```

📄 src/components/HCOPage.jsx
