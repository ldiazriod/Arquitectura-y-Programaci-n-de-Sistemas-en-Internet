const deepEquals = (obj1: object, obj2: object): boolean => {
    const obj1keys = Object.keys(obj1).sort();   //Creamos dos array, uno para cada objeto, con sus parametros dentro en forma de string
    const obj2keys = Object.keys(obj2).sort();
    if (obj1 === obj2) {  //Si comparten la misma dirección de memoria, entonces son iguales
        return true;
    } else if ((typeof obj1 === "object" && obj1 != null) && (typeof obj2 === "object" && obj2 != null)) { //Comprobamos que sean objetos
        if (obj1keys.length !== obj2keys.length) { //Si el tamaño de los arrays son distintos entonces no tienen son iguales
            return false;
        }
        if (obj1keys.join("") !== obj2keys.join("")) { //Juntamos todos los elementos del array y comprobamos si la unión en un solo string de los parametros apunta al mismo sitio.
            return false;
        }
        for (let i: number = 0; i < obj1keys.length; i++) { //Recorremos los valores de los parametros de forma recursiva
            if (!deepEquals(Object.values(obj1)[i], Object.values(obj2)[i])) { //Si hay alguno que no sea igual, entonces no son iguales
                return false;
            }
        }
        return true; //Si no es false ninguna de las otras, entonces devolvemos true
    } else {
        return false; //Si no es un objeto, o es null, entonces no pueden ser iguales
    }
}

const deepClone = (obj: object): object => {
    if (typeof obj === "object") {
        let clonedObj: any = Array.isArray(obj) ? [] : {} //Creamos un array o un objeto que puede almacenar los valores
        for (let i: number = 0; i < Object.keys(obj).length; i++) {    //Clonamos todos los elementos a nuestro nuevo objeto 
            clonedObj[Object.keys(obj)[i]] = deepClone(Object.values(obj)[i])
        }
        return clonedObj; //devolvemos el nuevo objeto
    } else {
        return obj //Si no es un objeto, devolvemos el parametro inicial
    }
}

interface IPersona {
    noc?: object[]
    noc2?: object[]
    name: string;
    edad: number;
    coche: boolean
}
interface IPersona2 {
    noc: object[]
    noc2?: object[]
    namee: string;
    edad: number;
    coche: boolean
}

const a: IPersona = {
    name: "Luis",
    edad: 19,
    noc: [{ noc1: 1, nocnoc: "nocnoc" }, { noc2: 2, nocnoc2: "nocnoc2" },],
    noc2: [{ ede: 2341 }, { de: "ede" }],
    coche: true
}

const b: IPersona = {
    name: "Luis",
    edad: 19,
    noc: [{ noc1: 1, nocnoc: "nocnoc" }, { noc2: 2, nocnoc2: "nocnoc2" },],
    noc2: [{ ede: 2341 }, { de: "ede" }],
    coche: true
}

const e: IPersona = {
    name: "Luis",
    edad: 19,
    noc: [{ noc1: 50000, nocnoc: "No hay nocnoc" }, { noc2: 2, nocnoc2: "nocnoc2" },],
    noc2: [{ ede: 2341 }, { de: "ede" }],
    coche: true
}


const c: IPersona2 = {
    namee: "Luis",
    edad: 19,
    noc: [{ noc1: 1, nocnoc: "nocnoc" }, { noc2: 2, nocnoc2: "nocnoc2" },],
    noc2: [{ ede: 2341 }, { de: "ede" }],
    coche: true
}

const f: IPersona = {
    name: "Manuela",
    edad: 19,
    noc: [{ noc1: 1, nocnoc: "nocnoc" }, { noc2: 2, nocnoc2: "nocnoc2" },],
    noc2: [{ ede: 2341 }, { de: "ede" }],
    coche: true
}

const g: IPersona = {
    name: "Alba",
    edad: 20,
    noc: [{ noc1: 1, nocnoc: "nocnoc" }, { noc2: 2, nocnoc2: "nocnoc2" },],
    coche: true
}
const h: IPersona = {
    name: "Fernando",
    edad: 32,
    coche: true
}

const d = c;

const deepPrint = (obj: object) => {
    for (let i: number = 0; i < Object.keys(obj).length; i++) { //Recorremos con un for
        if (Array.isArray(Object.values(obj)[i])) {   //Si encontramos un objeto, entonces llamamos a la funcion dando como objeto la posicion del nuevo objeto encontrado
            console.log(`${Object.keys(obj)[i]}: `)   //Puramente visual
            deepPrint(Object.values(obj)[i])
        } else {
            console.log(`${Object.keys(obj)[i]}:`, Object.values(obj)[i]) //En caso de no es un objeto, imprimimos.
        }
    }
}

console.log("Arquitectura y Programacion de Sistemas en Internet")
console.log("Practica 1: deepEquals, deepPrint y deepClone")
console.log("Realizado por: Luis Díaz del Río Delgado")
console.log("Fuentes: Internet y algunos compañeros")

console.log("--------------deepEquals--------------")

console.log("Comparar dos objetos iguales: ")
console.log(deepEquals(a, b))
console.log("Comprar dos objetos distintos, con un nombre de atributo distinto: ")
console.log(deepEquals(a, c))
console.log("Comprar dos objetos apuntado al mismo espacio de memoria: ")
console.log(deepEquals(c, d))
console.log("Comparar dos objetos distintos, con un atributo de tipo objeto distinto: ")
console.log(deepEquals(a, e))
console.log("Comprar dos objetos distintos, con valor del atributo nombre distinto: ")
console.log(deepEquals(a, f))

console.log("--------------deepPrint--------------")

console.log("Imprimir un objeto con dos atributos tipo objeto: ")
deepPrint(a)
console.log("Imprimir un objeto con un solo atributo tipo objeto: ")
deepPrint(g)
console.log("Imprimir un objeto con solo atributos simples: ")
deepPrint(h)

console.log("--------------deepClone--------------")
console.log("Clonar un objeto con dos atributo tipo objeto: ")
console.log(deepClone(a))
console.log("Clonar un objeto con un atributo tipo objeto: ")
console.log(deepClone(g))
console.log("Clonar un objeto con atributos simples: ")
console.log(h)