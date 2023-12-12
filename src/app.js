const express = require('express')

//entry point of the application
const app = express();

//register the view engine
app.set('view engine', 'ejs');

//middleware
app.use(express.static('public'));

app.listen(3000)
app.get('/', (req, res) => {
    res.render('index')
})