import express from 'express'
import projects from './server/projectsRoute'
import path from 'path'
import { urlencoded, json } from 'body-parser'

const app = express()
var distPath = path.join(__dirname, '/dist')

// Bodyparser middleware
app.use(
  urlencoded({
    extended: false,
    limit: '10Mb'
  })
)
app.use(json({
  limit: '10Mb'
}))

// Routes
app.use('/api/projects', projects)


// React Route
app.use(express.static(distPath))
  .get('*', (_, res) => {
    res.sendFile('index.html', {
      root: distPath
    })
  })

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server up and running on port ${port} !`))
