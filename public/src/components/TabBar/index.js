import Header from '../../components/Header'
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
            Selected Dick
          </Typography>
        </div>
        <div className={tab}>
          <Typography variant='h4' className={title}>
            Dick
          </Typography>
        </div>
        <div className={tab}>
          <Typography variant='h4' className={title}>
            Dick
          </Typography>
        </div>
        <div className={tab}>
          <Typography variant='h4' className={title}>
            Dick
          </Typography>
        </div>
      </div>
    </>
  )
}
