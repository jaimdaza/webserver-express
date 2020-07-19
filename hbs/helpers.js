const hbs = require('hbs');
// helpers funciones globales a llamar
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});