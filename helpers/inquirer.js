const inquirer = require('inquirer')
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: ['1. Crear lista', 'opt2', 'opt3']
    }
]

const inquirerMenu = async () => {

    // console.clear();

    console.log('==========================='.cyan)
    console.log('   Seleccione una opción   '.blue)
    console.log('===========================\n'.cyan)

    const opt = await inquirer.prompt(preguntas)

    return opt
}

module.exports = {
    inquirerMenu
}