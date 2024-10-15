import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ToastContainer position='top-left' autoClose={2000} />
		<App />
	</StrictMode>
)
