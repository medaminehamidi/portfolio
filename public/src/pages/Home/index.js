import Header from '../../components/Header'
import { createUseStyles } from 'react-jss'
import style from './style'
import TabBar from '../../components/TabBar'
import { image1, image2, image3, image4, image5, image6, image7, image8 } from '../../assets'
import { Typography } from '@material-ui/core'

const useStyles = createUseStyles(style)

export default () => {
  const { titleSection, title, picsContainer, picsRow, image } = useStyles()
  return (
    <>
      <Header />
      <TabBar />
      <div className={titleSection}>
        <Typography variant='h4' className={title}>
          Free Stock Photos
        </Typography>
      </div>
      <div className={picsContainer}>
        <div className={picsRow}>
          <img src={image1} className={image} />
          <img src={image2} className={image} />
          <img src={image7} className={image} />
          <img src={image5} className={image} />
          <img src={image1} className={image} />
          <img src={image3} className={image} />
        </div>
        <div className={picsRow}>
          <img src={image4} className={image} />
          <img src={image5} className={image} />
          <img src={image1} className={image} />
          <img src={image2} className={image} />
          <img src={image3} className={image} />
          <img src={image6} className={image} />
        </div>
        <div className={picsRow}>
          <img src={image7} className={image} />
          <img src={image1} className={image} />
          <img src={image4} className={image} />
          <img src={image5} className={image} />
          <img src={image1} className={image} />
          <img src={image2} className={image} />
        </div>
        <div className={picsRow}>
          <img src={image5} className={image} />
          <img src={image3} className={image} />
          <img src={image1} className={image} />
          <img src={image2} className={image} />
          <img src={image1} className={image} />
          <img src={image2} className={image} />
        </div>
      </div>
    </>
  )
}
