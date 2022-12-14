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

    borrarTarea(id = ''){
        if(this._listado[id]){
            delete this._listado[id]
        }
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

        console.log()

        this.listadoArr.forEach((tarea, i) => {
            const idx = `${i + 1}.`.magenta
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                ? 'Completada'.green
                : 'Pendiente'.red
            
            console.log(`${idx} ${desc} :: ${estado}`)
        })
    }

    listarPendientesCompletadas( completadas = true ){

        let contador = 0;

        console.log()

        this.listadoArr.forEach((tarea) => {
            const { desc, completadoEn } = tarea;

            if(completadas) {
            // Muestra tareas completadas
                if(completadoEn){
                    contador += 1;
                    console.log(`${ (contador + '.').magenta}. ${desc} :: ${completadoEn.brightCyan}`)
                }
            } else {
            // Muestra tareas pendientes
                if(!completadoEn){
                    contador += 1;
                    console.log(`${(contador + '.').magenta} ${desc}`)
                }
            }
        })
    }

    toggleCompletadas(ids = []){
        ids.forEach(id => {

            const tarea = this._listado[id];

            // Si la tarea no estaba completada previamente se hace el proceso, para no afectar fechas
            if(!tarea.completadoEn){
                // Agregar la fecha actual
                tarea.completadoEn = new Date().toISOString()
            }

        });

        this.listadoArr.forEach(tarea => {
            if( !ids.includes(tarea.id) ){
                this._listado[tarea.id].completadoEn = null;
            }
        });
    }
}

module.exports = Tareas;