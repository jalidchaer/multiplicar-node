const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const { argv } = require('./config/yargs')
const colors = require('colors/safe');
//let base = 'abxc';

//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(base);
//console.log('limite', argv.limite);
//console.log(argv2);

let argv2 = process.argv;
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');

}


//crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo} `)).catch(err => console.log(err));