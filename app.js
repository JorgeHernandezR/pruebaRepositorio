const fs   = require("fs");
let tareas = fs.readFileSync("./tareas.json","utf-8");
let tareasArray= JSON.parse(tareas);




let accion= process.argv[2];

switch(accion){
    case 'listar':
        console.log("listado de tareas:");
     tareasArray.array.forEach(element => {
         console.log(tareasArray.titulo);
     });
        for(let i=0; i<=tareasArray.length;i++){
            console.log(i+"."+ tareasArray[i].titulo+"-"+tareasArray.estado)
        }
        console.log()
        break;
        case 'hola':
            console.log("holii")
            break;

            case undefined:
                console.log(" tienes que pasarme una accion");
                break;

                default:
                    console.log("No entiendo que me estas pidiendo");
                    console.log("las acciones disponibles son : listar");
                    break;
}