const inquirer = require('inquirer')
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.magenta} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.magenta} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.magenta} Listar tareas terminadas`
            },
            {
                value: '4',
                name: `${'4.'.magenta} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.magenta} Completar tareas`
            },
            {
                value: '6',
                name: `${'6.'.magenta} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.magenta} Salir`
            }
        ]
    }
]

const inquirerMenu = async () => {

    console.clear();

    console.log('==========================='.cyan)
    console.log('   Seleccione una opción   '.blue)
    console.log('===========================\n'.cyan)

    const {opcion} = await inquirer.prompt(preguntas)

    return opcion
}

const pausa = async () => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'Enter'.green} para continuar`
        }
    ]

    console.log(`\n`)
    await inquirer.prompt(question)
}

const leerInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            Validate(value){
                if(this.validate.length === 0) return 'Por favor ingrese un valor'

                return true;
            }
        }
    ]

    const {desc} = await inquirer.prompt(question);

    return desc
}

const listadoTareasBorrar = async(tareas = []) => {
    const choices = tareas.map( (tarea, i) => {
        const idx = `${i + 1}`.magenta

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    })

    const preguntas = [
        { 
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas)

    return id;

}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar
}