import express from 'express';
import { obtenerSuperheroesMayoresDe30Controller, obtenerSuperheroesPorIdController, buscarSuperheroesPorAtributoController} from './project/controllers/superheroesController.mjs';

const app = express();
const PORT = 3005;

app.get('./superheroes/id/:id', obtenerSuperheroesPorIdController);
app.get('./superheroes/atributo/:atributo/:atributo', buscarSuperheroesPorAtributoController);
app.get('./superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controller);

app.listen(PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

