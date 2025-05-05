import React from 'react'; // Import React
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'; // Import i18next configuration

// Simple loading fallback component
const Loading = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    Loading translations...
  </div>
);

createRoot(document.getElementById("root")!).render(
  // Wrap App with React.Suspense
  <React.Suspense fallback={<Loading />}>
    <App />
  </React.Suspense>
);
