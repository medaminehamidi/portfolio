// import fetch from '../src/core/fetch'
import fetch from 'node-fetch'
const express = require('express')
const router = express.Router()

const BASE_URL = 'https://projects-6d56.restdb.io/rest/projects'

router.get('/getProjects', async (req, res) => {
  fetch('https://projects-6d56.restdb.io/rest/projects', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'x-apikey': '13c6a0337fc642827efe0e6aa67a003bc1dbb'
    }
  })
    .then(res => res.json())
    .then(json => {
      return res
        .status(200)
        .json({ projects: json })
    })
    .catch(err => {
      return res
        .status(200)
        .json({
          error: true,
          err
        })
    })

})

module.exports = router
