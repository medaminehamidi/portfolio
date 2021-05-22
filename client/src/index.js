import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'whatwg-fetch'
import ReactDOM from 'react-dom'
import App from 'core/App'
import { Auth0Provider } from "@auth0/auth0-react"

ReactDOM.render(
  <Auth0Provider
    domain="dev-dr9ucp96.us.auth0.com"
    clientId="otiyBDOsvTYumRNxSXLWtKuroyxgicP5"
    redirectUri='http://localhost:7070/admin'
  >
    <App />
  </Auth0Provider>, document.getElementById('root'))

