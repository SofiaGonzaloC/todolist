require('colors');

const {mostrarMenu, pausa} = require('./helpers/mensajes')

const { inquirerMenu } = require('./helpers/inquirer.js')

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

        if( opt !== '0') await pausa();

    } while ( opt !== '0' )

}

main();