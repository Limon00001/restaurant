/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 2025-02-05
 * @copyright 2025 monayem_hossain_limon
 */

// External Dependencies
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Internal Dependencies
import App from './App.jsx';

// CSS
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
