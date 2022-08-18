require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer.js')

const Tarea = require('./models/tarea')
const Tareas = require('./models/tareas')

const main = async () => {

    let opt = '';

    /**
     * Mostrar menu es una promesa que retorna un valor seleccionado por el usuario
     * 
     * inquirerMenu es un paquete que permite seleccionar con flechas una opción. 
     * Retorna la opción que selecciono el usuario, lo que permite llevar control 
     * sobre los datos introducidos.
     */

    do {
        opt = await inquirerMenu();

        console.log(opt)

        // const tareas = new Tareas();

        // const tarea = new Tarea('Comprar cosas');

        // tareas._listado[tarea.id] = tarea

        // console.log(tarea, tareas)

        await pausa();

    } while ( opt !== '0' )

}

main();