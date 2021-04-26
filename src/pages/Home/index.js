import { useEffect } from 'react'
import Header from '../../components/Header'
import TabBar from '../../components/TabBar'
import ImageGalerie from '../../components/ImageGalerie'

export default () => {
  useEffect(() => {
    window.fetch('/api/projects/getProjects')
  .then(response => response.json())
  .then(data => console.log(data))

  })
  return (
    <>
      <Header />
      <TabBar />
      <ImageGalerie />
    </>
  )
}
