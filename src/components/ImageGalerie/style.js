export default {
  titleSection: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '12px 0 0 39px',
    alignItems: 'center'
  },
  title: {
    fontSize: '19px !important',
    justifyContent: 'center',
    fontWeight: 'bold !important',
    display: 'flex',
    color: '#000 !important'
  },
  picsContainer: (matches) => ({
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: matches ? 'row' : 'column',
    padding: 16
  }),
  picsBigRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  picsRow: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    margin: 8
  },
  image: {
    '&:hover': {
      filter: 'brightness(50%)'
    },
    width: '100%',
    margin: 8,
    borderRadius: 2
  },
  cardTitle: {
    fontSize: '16px !important',
    display: 'none',
    color: '#fcfcfc !important',
    position: 'relative',
    bottom: 44,
    left: 30,
    lineHeight: '0 !important'
  },
  cardContainer: {
    '&:hover': {
      '& > h4': {
        display: 'flex'
      }
    },
    cursor: 'pointer',
    width: '100%'
  }
}
