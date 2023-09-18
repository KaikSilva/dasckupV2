import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//template css
import './assets/plugins/bootstrap/css/bootstrap.min.css'
import './assets/plugins/perfectscroll/perfect-scrollbar.css'
import './assets/plugins/pace/pace.css'
import './assets/css/horizontal-menu/horizontal-menu.css'
import './assets/css/custom.css'
import './assets/css/main.min.css'

import './assets/plugins/pace/pace.min.js';
import './assets/plugins/apexcharts/apexcharts.min.js';
import './assets/plugins/jquery/jquery-3.5.1.min.js'
import './assets/plugins/bootstrap/js/bootstrap.min.js'
import './assets/js/main.min.js'
import './assets/js/custom.js'
import './assets/js/pages/dashboard.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



