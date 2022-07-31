// Imports
const express = require('express')
const app = express()
const port = 5000

// Static Files
app.use(express.static('public'));

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Index
app.get('', (req, res) => {
    res.render('index')
})

app.get('/index.html', (req, res) => {
    res.render(__dirname + '/views/index.ejs')
})

app.get('/index.ejs', (req, res) => {
    res.render(__dirname + '/views/index.ejs')
})

// Blog details
app.get('/blog-details', (req, res) => {
   res.render(__dirname + '/views/blog-details.ejs')
})

app.get('/blog-details.html', (req, res) => {
    res.render(__dirname + '/views/blog-details.ejs')
})

app.get('/blog-details.ejs', (req, res) => {
    res.render(__dirname + '/views/blog-details.ejs')
})

// Blog
app.get('/blog', (req, res) => {
    res.render(__dirname + '/views/blog.ejs')
})

app.get('/blog.html', (req, res) => {
    res.render(__dirname + '/views/blog.ejs')
})

app.get('/blog.ejs', (req, res) => {
    res.render(__dirname + '/views/blog.ejs')
})

// Contact
app.get('/contact', (req, res) => {
    res.render(__dirname + '/views/contact.ejs')
})

app.get('/contact.html', (req, res) => {
    res.render(__dirname + '/views/contact.ejs')
})

app.get('/contact.ejs', (req, res) => {
    res.render(__dirname + '/views/contact.ejs')
})

// Feature
app.get('/feature', (req, res) => {
    res.render(__dirname + '/views/feature.ejs')
})

app.get('/feature.html', (req, res) => {
    res.render(__dirname + '/views/feature.ejs')
})

app.get('/feature.ejs', (req, res) => {
    res.render(__dirname + '/views/feature.ejs')
})

// Pricing
app.get('/pricing', (req, res) => {
    res.render(__dirname + '/views/pricing.ejs')
})

app.get('/pricing.html', (req, res) => {
    res.render(__dirname + '/views/pricing.ejs')
})

app.get('/pricing.ejs', (req, res) => {
    res.render(__dirname + '/views/pricing.ejs')
})
 

app.listen(port, () => console.info(`App listening on port ${port}`))

