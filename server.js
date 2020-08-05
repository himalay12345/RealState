const express = require('express')
const app = express();
const port = 8000;
const router = require('./routes/index');
// const expressLayouts = require('express-ejs-layouts');


// app.use(expressLayouts);
// app.use(express.static('./assets'));
// app.set('layout extractStyles', true);
// app.set('layout exrtactScripts', true);

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./assets'));

app.use('/', router);
app.listen(port, function(err) {
    if (err) {
        console.log('Error is : ', err);
        return;
    }
    console.log('Server started at port :', port);
});