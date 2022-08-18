const { Console } = require('console');
const fs = require('fs')

const archivo = './db/data.json'

const guardarDB = (data) => {

    fs.writeFileSync( archivo, JSON.stringify(data) );

}

const leerDB = () => {

    // Revisa si hay un archivo existente
    if( !fs.existsSync(archivo) ){
        return null;
    }

    // Si hay un archivo lo lee y transforma
    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    const data = JSON.parse(info);

    return data

}

module.exports = {
    guardarDB,
    leerDB
}
