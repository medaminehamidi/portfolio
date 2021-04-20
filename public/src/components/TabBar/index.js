import { Typography, useMediaQuery } from '@material-ui/core'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default () => {
  const matches = useMediaQuery('(min-width:1100px)')
  const { tabs, tab, selectedTab, title, selectedTitle } = useStyles()
  return (
    <>
      <div className={tabs}>
        <div className={selectedTab}>
          <Typography variant='h4' className={selectedTitle}>
            Home
          </Typography>
        </div>
        {
          matches && (
            <>
              <div className={tab}>
                <Typography variant='h4' className={title}>
                  Discover
                </Typography>
              </div>
              <div className={tab}>
                <Typography variant='h4' className={title}>
                  Videos
                </Typography>
              </div>
              <div className={tab}>
                <Typography variant='h4' className={title}>
                  Leaderboard
                </Typography>
              </div>
              <div className={tab}>
                <Typography variant='h4' className={title}>
                  Challenges
                </Typography>
              </div>
            </>
          )}
      </div>
    </>
  )
}
