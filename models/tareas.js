const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    // Getter para retornar un nuevo arreglo
    get listadoArr() {

        const listado = [];

        // Arreglo se llena con los ids de listado
        Object.keys(this._listado).forEach(key => {
            // Llena el arreglo con tareas.
            // Crea una tarea, extrayendola de listado donde su id sea el mismo que se esta mandando
            const tarea = this._listado[key]

            listado.push(tarea)
        })

        // Retorna el listado nuevo
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    // Recibe tareas
    cargarTareasFromArray(tareas = []){

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });

    }

    crearTarea( desc = '' ){
        const tarea = new Tarea(desc);

        // Manda el id generado en tarea
        this._listado[tarea.id] = tarea
    }

    listadoCompleto(){

        // TODO: Listar tareas con solo la descripción y decir si esta completada (verde) o pend. (rojo)

        console.log()

        this.listadoArr.forEach((tarea, i) => {
            const idx = `${i + 1}`.green
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                ? 'Completada'.green
                : 'Pendiente'.red
            
            console.log(`${idx} ${desc} :: ${estado}`)
        })
    }
}

module.exports = Tareas;