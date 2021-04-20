import { Typography } from '@material-ui/core'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default () => {
  const { tabs, tab, selectedTab, title, selectedTitle } = useStyles()
  return (
    <>
      <div className={tabs}>
        <div className={selectedTab}>
          <Typography variant='h4' className={selectedTitle}>
            Home
          </Typography>
        </div>
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
      </div>
    </>
  )
}
