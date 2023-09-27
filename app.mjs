// Importaciones
import 'dotenv/config';
import express from 'express';
import * as url from 'url';
import hbs from 'hbs';

// Datos generales
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const datos = {
  nombre: 'Rodrigo Salgado',
  titulo: 'Curso de Node'
};

// Express
const app = express()
const port = process.env.PORT

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' );

// Servir contenido estatico
app.use( express.static( 'public' ) )

// Home
app.get('/', (req, res) => {
  res.render( 'home', datos );
})

// Páginas secundarias
app.get('/generic', (req, res) => {
  res.render( 'generic', datos );
})

app.get('/elements', (req, res) => {
  res.render( 'elements', datos );
})

// Página de Error
app.get('*', (req, res) => {
  res.render( '404', datos );
})

// Puerto
/*app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/
app.listen(port, '0.0.0.0', () => {
  console.log(`Escuchando el puerto ${port}`);
});