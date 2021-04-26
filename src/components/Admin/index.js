import { useState } from 'react'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [download, setDownload] = useState('')
  const { inputClass, titleClass, container, smallTitleClass, buttonClass, form, imageContainerStyle, imageStyle } = useStyles()
  return (
    <div className={container}>
      <div className={form}>
        <p className={titleClass}>Add an Item to Main page</p>
        <p className={smallTitleClass}>Name of the item</p>
        <input
          className={inputClass}
          placeholder='Fill with your Item name'
          value={name}
          type='text'
          onChange={e => setName(e.target.value)}
        />
        <p className={smallTitleClass}>Image Link</p>
        <input
          className={inputClass}
          placeholder='Make sure The link is a valid link of a hosted image'
          value={image}
          type='text'
          onChange={e => setImage(e.target.value)}
        />
        <p className={smallTitleClass}>Download Link</p>
        <input
          className={inputClass}
          placeholder='Fill with your item download link'
          value={download}
          type='text'
          onChange={e => setDownload(e.target.value)}
        />
        <button className={buttonClass}>Add Item</button>
      </div>
      <div className={imageContainerStyle}>
        <img src={image} className={imageStyle} />
      </div>
    </div>
  )
}
