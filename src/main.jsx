import React from 'react'
import ReactDOM from 'react-dom/client'
import { FormRapportActivite } from './components/Form/FormRapportActivite.jsx'
import { DashBoardAdmin } from './components/Admin/DashBoardAdmin'
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FormRapportActivite/> */}
    <DashBoardAdmin/>
  </React.StrictMode>,
)
