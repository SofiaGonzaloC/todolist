require('colors');

const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer.js')

const Tarea = require('./models/tarea')
const Tareas = require('./models/tareas')

const main = async () => {

    let opt = '';

    const tareas = new Tareas();

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

        await pausa();

    } while ( opt !== '0' )

}

main();