import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import notes from './assets/notes.data'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App notes={notes}/>
  </React.StrictMode>,
)
