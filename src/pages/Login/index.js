import Login from '../../components/Login'
import { useAuth0 } from "@auth0/auth0-react"

export default () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0()
  return (
    <>
      <button onClick={() => loginWithRedirect()}>Log In</button>
       {isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )}
      <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
    </>
  )
}
