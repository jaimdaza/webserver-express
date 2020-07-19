const express = require('express')
const app = express(); // nos permite usar express
const hbs = require('hbs');
require('./hbs/helpers'); // llamar las funciones globales

// definir puerto en heroku y local
const port = process.env.PORT || 3000;

//middeware
app.use(express.static(__dirname + '/public'));

// express HBS, para decirle donde van a estar las paginas a incluir en otras
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



// configurando solicitud get cuando el paht sea /
app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'jaime daza',
        // anio: new Date().getFullYear()
    });
});

// configurando solicitud get cuando el paht sea /about
app.get('/about', function(req, res) {
    res.render('about',
        /* {
        anio: new Date().getFullYear()
    } */
    );
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});