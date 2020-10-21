// Imports
const express = require('express')
const expressLayouts=require('express-ejs-layouts')
const app = express()
const port = 5000

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/icon-fonts', express.static(__dirname + 'public/icon-fonts'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/source', express.static(__dirname + 'public/source'))

//Set Template engine partials
//app.use(expressLayouts)
//app.set('layout','./partial/main')

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('index', { text: 'This Is Sample ' })
})

app.get('/about', (req, res) => {
   res.sendFile(__dirname + '/views/about.html')
})

app.listen(port, () => console.info(`App listening on port ${port}`))