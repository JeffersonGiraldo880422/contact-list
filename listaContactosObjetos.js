// Cambios para rama project-1git 

// Defino mi array con nombres y apellidos
let miLista=["Jefferson Giraldo", "Nicolas Mejía", "Arturo Guerra","Camilo Estrada", "Victor Bula"];

// Creo mi función adicionContacto() para agregar un contacto nuevoContacto
const adicionContacto = (nuevoContacto) => {
    miLista.push(nuevoContacto);
}

// Llamo mi función adicionContacto adicionando "Leydi Vidal"
adicionContacto ("Leydi Vidal");

console.log(miLista);

// Creo mi función eliminaContacto para eliminar contactoBorrar
function eliminaContacto (contactoBorrar) {
    return miListaFiltrada = miLista.filter(elemento => elemento !== contactoBorrar);
}

// Llamo mi función eliminaContacto para eliminar "Jefferson Giraldo" 
console.log(eliminaContacto("Jefferson Giraldo"));

// Creo mi función imprimirContacto
function imprimirContactos(){
    console.log(miListaFiltrada);
}

// Llamo mi función imprimirContacto
imprimirContactos();