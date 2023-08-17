import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//IMPORTING ALL THE COMPONENTS 
import { CommingSoon } from '../components/_1_CommingSoon'
import { StartingAnimations } from '../components/_0-1_StartingAnimations'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <StartingAnimations/>
    <CommingSoon/>
  </React.StrictMode>,
)
