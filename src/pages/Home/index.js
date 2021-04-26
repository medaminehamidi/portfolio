import { useEffect } from 'react'
import Header from '../../components/Header'
import TabBar from '../../components/TabBar'
import ImageGalerie from '../../components/ImageGalerie'
import { useAuth0 } from "@auth0/auth0-react"

export default () => {
  useEffect(() => {
    window.fetch('/api/projects/getProjects')
  .then(response => response.json())
  .then(data => console.log(data))
  })
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0()
  console.log(user)
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
      {/* <Header />
      <TabBar />
      <ImageGalerie /> */}
      <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
    </>
  )
}
