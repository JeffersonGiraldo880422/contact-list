/* // Cambios para rama project-1git 

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
imprimirContactos(); */


// Creo mi array de Objetos de Contactos con los keys: id, nombres, apellidos, telefono, fechaNacimiento, ubicaciones, ciudad, direccion. Creo 3 contactos-objetos
let miLista = [
    {
      "id": "001",
      "nombres": "Jefferson Andrés",
      "apellidos": "Giraldo Apolinar",
      "telefono": 3194526032,
      "fechaNacimiento": new Date('1988-04-22'),
      "ubicaciones": {"ciudad":"Cali","direccion":"Calle 2 #  42-96"}
    },
    {
      "id": "002",
      "nombres": "Nicolas",
      "apellidos": "Mejía",
      "telefono": 3125637265,
      "fechaNacimiento": new Date('1992-05-29'),
      "ubicaciones": {"ciudad":"Armenía","direccion":"Calle 3 #  5-62"}
    },
    {
      "id": "003",
      "nombres": "Leydi",
      "apellidos": "Vidal",
      "telefono": 3114339404,
      "fechaNacimiento": new Date('1994-06-21'),
      "ubicaciones": {"ciudad":"Cali","direccion":"Calle 42 #  13-24"}
    },
  ];



// Creo mi función adicionContactoObjeto() para agregar un contacto nuevoContactoObjeto usando Factory Functions con los parametros id, nombres, apellidos, telefono, fechaNacimiento, ciudad, direccion
const adicionContactoObjeto = (id,nombres,apellidos,telefono,fechaNacimiento,ciudad,direccion) => {
    let nuevoContactoObjeto = {
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        fechaNacimiento: new Date(fechaNacimiento),
        ubicaciones: {ciudad:ciudad,direccion:direccion}
    }
    /* console.log(nuevoContactoObjeto); */
    miLista.push(nuevoContactoObjeto);
/*     return console.log(miLista); */
}

adicionContactoObjeto("004","Arturo","Guerra",3175437298,"1996-04-02","Medellin1","Cra3 #21-32");
adicionContactoObjeto("005","J Mario","Gil",3175437298,"1996-08-09","Riohacha","Calle 6 # 23-1");
adicionContactoObjeto("006","Jose Fernando","Hoyos",3022684502,"1990-06-13","Barranquilla","Calle 5 # 1-23");
adicionContactoObjeto("007","Camilo","Estrada",3043358588,"1995-09-03","Medellin2","Cra 25 #11-54");
adicionContactoObjeto("008","Victor Mauricio","Bula Marin",3194541706,"1994-10-23","Medellin3","Calle 8 #4-32");

// Imprimo como queda miLista tras usar la función adicionContactoObjeto varias veces
console.log(miLista);

// Creo mi función eliminaContactoObjetoID() para eliminar un contacto contactoExistente a través del Id usando .splice()
const  eliminaContactoObjetoId = (IdBorrar) => {
  let indiceIdExistente = miLista.findIndex(indiceIdExistente => indiceIdExistente.id==IdBorrar);
      miLista.splice(indiceIdExistente,1);
      return miLista;
}

// Creo mi función eliminaContactoObjetoNombres() para eliminar un contacto contactoExistente a través de los nombres usando .splice()
const  eliminaContactoObjetoNombres = (nombresBorrar) => {
  let indiceNombresExistente = miLista.findIndex(indiceNombresExistente => indiceNombresExistente.nombres==nombresBorrar);
  miLista.splice(indiceNombresExistente,1);
  return miLista;
}

// Creo mi función eliminaContactoObjetoApellidos() para eliminar un contacto contactoExistente a través de los apellidos usando .splice()
const  eliminaContactoObjetoApellidos = (apellidosBorrar) => {
  let indiceApellidosExistente = miLista.findIndex(indiceApellidosExistente => indiceApellidosExistente.apellidos==apellidosBorrar);
  miLista.splice(indiceApellidosExistente,1);
  return miLista;
}

// Creo mi función eliminaContactoObjetoTelefono() para eliminar un contacto contactoExistente a través del Telefono usando .splice()
const  eliminaContactoObjetoTelefono = (telefonoBorrar) => {
  let indiceTelefonoExistente = miLista.findIndex(indiceTelefonoExistente => indiceTelefonoExistente.telefono==telefonoBorrar);
  miLista.splice(indiceTelefonoExistente,1);
  return miLista;
}

// Creo mi función eliminaContactoObjetoCiudad() para eliminar un contacto contactoExistente a través de la Ciudad usando .splice()
const  eliminaContactoObjetoCiudad = (ciudadBorrar) => {
  let indiceCiudadExistente = miLista.findIndex(indiceCiudadExistente => indiceCiudadExistente.ubicaciones.ciudad==ciudadBorrar);
  miLista.splice(indiceCiudadExistente,1);
  return miLista;
}

// Creo mi función eliminaContactoObjetoDireccion() para eliminar un contacto contactoExistente a través de la direccion usando .splice()
const  eliminaContactoObjetoDireccion = (direccionBorrar) => {
  let indiceDireccionExistente = miLista.findIndex(indiceDireccionExistente => indiceDireccionExistente.ubicaciones.direccion==direccionBorrar);
  miLista.splice(indiceDireccionExistente,1);
  return miLista;
}

// Uso mis funciones de eliminar por nombres, apellidos, telefono, ciudad y direccion
/* console.log(eliminaContactoObjetoNombres("Jefferson Andrés"));
console.log(eliminaContactoObjetoApellidos("Mejía"));
console.log(eliminaContactoObjetoTelefono(3114339404));
console.log(eliminaContactoObjetoCiudad("Riohacha"));
console.log(eliminaContactoObjetoDireccion("Calle 5 # 1-23")); */


// Creo mi función para imprimir el array de objetos imprimeLista()
const imprimeLista = () => {
  console.log(miLista);
}

// Finalmente pruebo mi función imprimeLista
imprimeLista();

// Creo función para editar un contacto através del key nombres, con los parámetros: edicionNombres (Nombres del contacto que se quiere editar), id (nuevo), nombres (nuevo), apellidos (nuevo), telefono (nuevo), fechaNacimiento (nuevo), ciudad (nuevo) y direccion (nuevo)
const editarNombres =  (edicionNombres,id,nombres,apellidos, telefono, fechaNacimiento,ciudad, direccion) => {
  let indiceEdicionNombres = miLista.findIndex(indiceEdicionNombres => indiceEdicionNombres.nombres==edicionNombres);
  miLista[indiceEdicionNombres] = {
    id: id,
    nombres: nombres,
    apellidos: apellidos,
    telefono: telefono,
    fechaNacimiento: new Date(fechaNacimiento),
    ubicaciones: {ciudad:ciudad,direccion:direccion}
  }
  return miLista;
}

// Prueba cambiando el contacto nombres="Jefferson Andrés"
console.log(editarNombres("Jefferson Andrés","001-1","Jefferson","Giraldo A",3113111111,"1988-04-22","Madrid","Avenida Moncloa 6"));
// Prueba cambiando el contacto nombres="Victor Mauricio"
console.log(editarNombres("Victor Mauricio","001-1","Jefferson","Giraldo A",3113111111,"1988-04-22","Madrid","Avenida Moncloa 6"));