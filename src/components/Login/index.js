import { useState } from 'react'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default ({ setAccess }) => {
  const [name, setName] = useState('')
  const [adress, setAdress] = useState('')
  const { inputClass, titleClass, container, smallTitleClass, buttonClass, form } = useStyles()
  return (
    <div className={container}>
      <div className={form}>
        <p className={titleClass}>Welcome</p>
        <p className={smallTitleClass}>Name</p>
        <input
          className={inputClass}
          placeholder='Fill with your admin log in'
          value={name}
          type='text'
          onChange={e => setName(e.target.value)}
        />
        <p className={smallTitleClass}>Password</p>
        <input
          className={inputClass}
          placeholder='Fill with your admin password'
          value={adress}
          type='password'
          onChange={e => setAdress(e.target.value)}
        />
        <button onClick={() => name.toLowerCase() === 'admin' && adress === '123' ? setAccess(true) : null} className={buttonClass}>Log in</button>
      </div>
    </div>
  )
}
