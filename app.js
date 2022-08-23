require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo.js');
const { 
    inquirerMenu, 
    pausa, 
    leerInput, 
    listadoTareasBorrar, 
    confirmar,
    mostrarListadoChecklist
} = require('./helpers/inquirer.js')

const Tarea = require('./models/tarea')
const Tareas = require('./models/tareas')

const main = async () => {

    let opt = '';

    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB){ // Cargar tareas
        tareas.cargarTareasFromArray(tareasDB);
    }

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
                tareas.listadoCompleto();
            break;

            case  '3':
                tareas.listarPendientesCompletadas();
            break;
            
            case '4':
                tareas.listarPendientesCompletadas(false);
            break;

            case '5':
                const ids = await mostrarListadoChecklist(tareas.listadoArr)

                tareas.toggleCompletadas(ids)
            break;

            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr)

                if( id !== '0'){
                    const confirm = await confirmar('¿Estas seguro de borrar esta tarea?')
                    
                    if(confirm){
                        tareas.borrarTarea(id)
                        console.log('Tarea eliminada')
                    }
                }

            break;

        }

        guardarDB( tareas.listadoArr );

        await pausa();


    } while ( opt !== '0' )

}

main();