import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './Context.jsx';



createRoot(document.getElementById('root')).render(
<AppProvider>
<BrowserRouter>
    <App />
</BrowserRouter>
</AppProvider>
)
