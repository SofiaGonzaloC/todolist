require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo.js');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer.js')

const Tarea = require('./models/tarea')
const Tareas = require('./models/tareas')

const main = async () => {

    let opt = '';

    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB){
        // Establecer las tareas


    }

    await pausa();

    do {
        // Imprime menu para seleccionar
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Crear opción
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                console.log( tareas.listadoArr)
            break;
        }

        // guardarDB( tareas.listadoArr );

    } while ( opt !== '0' )

}

main();