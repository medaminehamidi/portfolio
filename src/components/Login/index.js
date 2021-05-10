import { useState } from 'react'
import { createUseStyles } from 'react-jss'
import style from './style'
import { loginAction } from './store'
import { useSelector, useDispatch } from 'react-redux'

const useStyles = createUseStyles(style)

const WrongCredentials = ({ smallTitleClass , redBox }) => <div className={redBox}>
  <p className={smallTitleClass}></p>
</div>

export default ({ setAccess }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [pwd, setPwd] = useState('')
  const [isLogedIn, setIsLogedIn] = useState(false)
  const signin = (username, password) => dispatch(loginAction(username, password))
  const { inputClass, titleClass, container, smallTitleClass, buttonClass, form } = useStyles()

  return (
    <div className={container}>
      <div className={form}>
        <p className={titleClass}>Welcome</p>
        <p className={smallTitleClass}>Name</p>
        <input
          className={inputClass}
          placeholder='username'
          type='text'
          onChange={e => setName(e.target.value)}
        />
        <p className={smallTitleClass}>Password</p>
        <input
          className={inputClass}
          placeholder='password'
          type='password'
          onChange={e => setPwd(e.target.value)}
        />
        <button onClick={() => signin({ username: name, password: pwd })} className={buttonClass}>Log in</button>
      </div>
    </div>
  )
}
