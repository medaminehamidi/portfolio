import { createUseStyles } from 'react-jss'
import style from './style'
import { image1, image2, image3, image4, image5, image6, image7, image8 } from '../../assets'
import { Typography, useMediaQuery } from '@material-ui/core'

const useStyles = createUseStyles(style)

export default () => {
  const matches = useMediaQuery('(min-width:1100px)')
  const { titleSection, title, cardTitle, cardContainer, picsContainer, picsBigRow, picsRow, image } = useStyles(matches)
  return (
    <>
      <div className={titleSection}>
        <Typography variant='h4' className={title}>
          Free Stock Photos
        </Typography>
      </div>
      <div className={picsContainer}>
        <div className={picsBigRow}>
          <div className={picsRow}>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image1} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image1} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image7} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image5} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image1} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
          </div>
          <div className={picsRow}>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image4} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image5} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image1} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image2} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image3} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image6} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image7} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image1} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
          </div>
        </div>
        <div className={picsBigRow}>
          <div className={picsRow}>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image7} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image1} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image4} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image5} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image1} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image2} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
          </div>
          <div className={picsRow}>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image8} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image3} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image1} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image2} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image8} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
            <div className={cardContainer} onClick={() => window.open('https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window', '_blank')}>
              <img src={image2} className={image} />
              <Typography variant='h4' className={cardTitle}>
                Free Stock Photos
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
