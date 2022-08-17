require('colors');

const mostrarMenu = () => {

    return new Promise((resolve => {

        console.clear();

        console.log('==========================='.cyan)
        console.log('   Seleccione una opción   '.blue)
        console.log('===========================\n'.cyan)

        console.log(`${'1.'.green} Crear una tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir \n`);

        // Paquete que viene por default con Node
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readLine.question('Seleccione una opción: ', (opt) => {
            readLine.close();   // Cierra el readline
            resolve(opt);       // Retorna en la promesa el valor definido por el usuario
        });

    }));

}

const pausa = () => {

    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readLine.question(`\nPresione ${'ENTER'.blue} para continuar \n`, (opt) => {
            readLine.close();   // Cierra el readline
            resolve();
        });
    })

}

module.exports = {
    mostrarMenu,
    pausa
}