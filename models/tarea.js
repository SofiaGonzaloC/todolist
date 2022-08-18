const { v4: uuidv4 } = require('uuid');

class Tarea {

    id = '';
    desc = '';
    completadoEn = null;
    
    constructor( desc ){
        // Lo que se ejecute cuando creamos una nueva instancia de Tarea

        this.id = uuidv4(); // Genera un id único
        this.desc= desc;
    }

}

module.exports = Tarea;