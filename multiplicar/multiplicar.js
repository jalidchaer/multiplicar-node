/*
  requireds
*/

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('============================='.green);
    console.log(`Tabla del ${base}`.green);
    console.log('============================='.green);
    let data2 = '';
    for (let i = 1; i <= limite; i++) {
        data2 += `${base} * ${ i } = ${base*i}\n`;


    }
    console.log(data2);
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es numero`);
            return;
        }

        let data1 = '';

        for (let i = 1; i <= limite; i++) {
            data1 += `${base} * ${ i } = ${base*i}\n`;
        }

        const data = new Uint8Array(Buffer.from(data1));
        fs.writeFile(`tablas/tabla-${base}-al-limite-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-limite-${limite}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}