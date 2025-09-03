
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Keep if you use global styles

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);