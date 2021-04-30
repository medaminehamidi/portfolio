import { Button, IconButton, InputAdornment, TextField, Typography } from '@material-ui/core'
import { createUseStyles } from 'react-jss'
import { logo2 } from '../../assets'
import style from './style'
import SearchIcon from '@material-ui/icons/Search'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'

const useStyles = createUseStyles(style)

export default ({ data, searchedData, setSearchedData }) => {
  const [search2, setSearch] = useState('')
  const dispatch = useDispatch()
  const searchCourse = (data, searchTerm) => {
    if (searchTerm.length === 0) return data
    return data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  // const matches = useMediaQuery('(min-width:1100px)')
  const { logoStyle, topbarRightSide, topbar, title2, topbarLeftSide, textinput, button, topSection, searchContainer, searchSubContainer, bigTitle } = useStyles()
  return (
    <>
      <div className={topSection}>
        <div className={topbar}>
          <div className={topbarRightSide}>
            <img src={logo2} className={logoStyle} />
            <Typography variant='h4' className={title2}>
              Pixel
            </Typography>
          </div>
          <div className={topbarLeftSide}>
            <Button variant='contained' onClick={() => dispatch(push('/admin'))} className={button}>
              Login
            </Button>
          </div>
        </div>
        <div className={searchContainer}>
          <div className={searchSubContainer}>
            <Typography variant='h4' className={bigTitle}>
              The best free stock photos and videos shared by talented creators.
            </Typography>
            <TextField
              className={textinput}
              InputLabelProps={{ style: { color: '#1a1a1a' } }}
              placeholder='Search for free photos '
              variant='outlined'
              onChange={(e) => {
                setSearch(e.target.value)
                setSearchedData(searchCourse(data, e.target.value))
              }}
              value={search2}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='Add'
                      style={{ width: 55, color: '#5e5e5e' }}
                      onClick={
                        () => {
                          setSearch('')
                        }
                      }
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
