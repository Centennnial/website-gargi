// Imports
const express = require('express')
const expressLayouts=require('express-ejs-layouts')
const app = express()
const port = process.env.PORT || 5000


// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/images'))
app.use('/fonts', express.static(__dirname + 'public/fonts'))

//Set Template engine partials
app.use(expressLayouts)
app.set('layout','./layout/main')

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
// home page
app.get('', (req, res) => {
    res.render('index', { text: 'Hey',title:'Home' })
})
app.get('/home', (req, res) => {
    res.render('index', { title:'Home' })
})
app.get('/about', (req, res) => {
    res.render('about', { title:'About' })
})
app.get('/service', (req, res) => {
    res.render('service', { title:'Service' })
})
app.get('/portfolio', (req, res) => {
    res.render('portfolio', { title:'portfolio' })
})   
app.get('/contact', (req, res) => {
    res.render('contact', { title:'contact' })
})
// Listen on Port 
app.listen(port, () => console.info(`App listening on port ${port}`))

const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://gargisoni:12332121As@cluster0.ocnpa.mongodb.net?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db("Project");
    const collection = database.collection("Contact");
    // create a document to be inserted
    const doc = { name: "gargi soni", email: "gargisoni2@gmail.com"  , phone: "8586016003"};
    const result = await collection.insertOne(doc);

    console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
