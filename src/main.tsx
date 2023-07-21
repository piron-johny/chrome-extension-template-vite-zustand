/** Fol local host development */
import React from 'react'
import ReactDOM from 'react-dom/client'
import Popup from './popup/components/popup'
import ContentComponent from './content/components/content'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Popup /> */}
    <ContentComponent />
  </React.StrictMode>,
)
