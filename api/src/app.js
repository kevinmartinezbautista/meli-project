const express = require('express');
const app = express();
const morgan = require('morgan');

//config
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev')); 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('./routes/index.routes'));
app.use('/api',require('./routes/products.routes'));

app.listen(3000, () => {
    console.log("Server on port 3000");
});