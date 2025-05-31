import { obtenerSuperheroesPorId, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30 } from '../service/superheroesService.mjs'
import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs';

export function obtenerSuperheroesPorIdController(req, res) {
    const { id } = req.params;
    const superheroe = obtenerSuperheroesPorId(parseInt(id));

    if(superheroe) {
        res.send(renderizarSuperheroe);
    }else {
        res.status(404).send({mensaje: "Superheroe no encontrado"});
    }
}

export function buscarSuperheroesPorAtributoController(req, res){
    const {atributo, valor} = req.params;
    const superheroe = buscarSuperheroesPorAtributo(atributo, valor);

    if(superheroe.length > 0){
        res.send(renderizarListaSuperheroes(superheroe));
    }else{
        res.status(404).send({mensaje: "No se encontraron superheroes con este atributo"});
    }
}

export function obtenerSuperheroesMayoresDe30Controller(req, res){
    const superheroes = obtenerSuperheroesMayoresDe30();
    res.sen(renderizarListaSuperheroes(superheroes));
}

