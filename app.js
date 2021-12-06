const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT

const nombre = 'Augusto Sousa'
const titulo = 'Curso Node Fernando Herrera'

// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

// Servir contenido estático
app.use( express.static('public') )

app.get('/', (req, res) => {
  res.render('home', {
    nombre,
    titulo
  })
})

// Solución 1 para cambiar los enlances de la plantilla
/* app.get('/generic', (req, res) => {
res.sendFile(__dirname + '/public/generic.html')
}) */

// Solución 2 para cambiar los enlaces de la plantilla usando hbs
app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre,
    titulo
  })

})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre,
    titulo
  })
})

app.get('*', (req, res) => {
  res.render('404')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
