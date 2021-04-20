import { Button, IconButton, InputAdornment, TextField, Typography, useMediaQuery } from '@material-ui/core'
import { createUseStyles } from 'react-jss'
import { logo2 } from '../../assets'
import style from './style'
import SearchIcon from '@material-ui/icons/Search'
import { useState } from 'react'

const useStyles = createUseStyles(style)

export default () => {
  const [search2, setSearch] = useState('')
  const matches = useMediaQuery('(min-width:1100px)')
  const { logoStyle, topbarRightSide, title, topbar, title2, topbarLeftSide, textinput, button, topSection, searchContainer, searchSubContainer, bigTitle } = useStyles()
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
            {matches && (
              <>
                <Typography variant='h4' className={title}>
                  Explore
                </Typography>
                <Typography variant='h4' className={title}>
                  Licence
                </Typography>
                <Typography variant='h4' className={title}>
                  Upload
                </Typography>
              </>
            )}
            <Typography variant='h4' className={title}>
              ...
            </Typography>
            <Button variant='contained' className={button}>
              Join
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
