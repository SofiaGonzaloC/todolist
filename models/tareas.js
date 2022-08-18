const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    constructor(){
        this._listado = {};
    }

    crearTarea( desc = '' ){
        const tarea = new Tarea(desc);

        // Manda el id generado en tarea
        this._listado[tarea.id] = tarea
    }
}

module.exports = Tareas;