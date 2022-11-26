import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { GitHubProvider } from './context/context'
import { Auth0Provider } from '@auth0/auth0-react'



ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-nw54xmdaf7mlw531.eu.auth0.com"
      clientId="JoimR5FOwwULCBZRuctcOMmgp1iSMrtS"
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <GitHubProvider>
        <App />
      </GitHubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()



// {
//   "sub": "github|99593386",
//   "nickname": "Speedle-phd",
//   "name": "Emanuel Eirich",
//   "picture": "https://avatars.githubusercontent.com/u/99593386?v=4",
//   "updated_at": "2022-11-26T16:31:54.792Z"
// }
          
// {
//   "sub": "twitter|2913707847",
//   "nickname": "Speedle",
//   "name": "Speedle",
//   "picture": "https://pbs.twimg.com/profile_images/542666860945104896/xCqRP8hc_normal.jpeg",
//   "updated_at": "2022-11-26T16:33:45.684Z"
// }