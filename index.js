// 1
const Coche = {
    marca: "Audi",
    modelo: "A1",
    matricula: "UwU",
};
//2
const Casa = {
    codPostal: "11111",
    calle: "Rue del percebe",
    portal: "2",
    piso: "Izquierda",
}; 
//3
const FullStackDeveloper = {
    lenguajes: [],
    proyectos: [],
};
//4
const Perro = {
    nombre: "Chibi",
    raza: "chihuahua",
    color: "blanco",
    edad: 33,
    ladrar: function () {
        console.log('guau')
    },
    popo: function () {
        return Math.random() *3;
    }
};
//5
// const Portatil = {
//     marca: "Lenovo",
//     modelo: "nombre"
// };
const marcaPortatil = Portatil.marca;
//6
const marcaPortatil2 = Portatil["marca"];
//7
// const Concierto = {
//     grupos: ["grupo1","grupo2"],
//     cartelera:[],
//     fecha:''
// };
const grupos = Concierto["grupos"];
//8
// const Led = {
//     rojo: false,
//     verde: false,
//     azul: true,
//     encendido:false,
// };
const RGB = [Led.rojo, Led.verde, Led.azul]
//9
Portatil.modelo = "P345";
// 10
Concierto.cartelera = ['Queen','Guns N\' Roses'];
// 11
Concierto.fecha= new Date()
// 12
// const Impresora={
//     imprimiendo: {},
//     tinta:{}
// };
Impresora.imprimiendo= {
    nombreArchivo:'' ,
    copias:'',
    numPaginas:'',
};
// 13
const Noticia = {
    titular:'',
    cuerpo:''
};
// 14
const Persona={
    nombre:'',
    apellidos:'', 
    edad:0,
}
// 15
const Avion={
    numPasajeros:'', 
    despegar:function(){
        console.log('despegando')
    },
    volar:function(){
        console.log('llegando al destino')
    },
    aterrizar:function(){
        console.log('aterrizando')
    }
};
// 16
const Paquete={
    contenido:[]
};
// 17
const Pais={
    numHabitantes:'',
    continente:'', 
    gentilicio:''
};
// 18
// const O_Error={
//     codigo:'',
// };
const codError= O_Error.codigo;
// 19
// const Grupo={
//     integrantes:[],
//     numIntegrantes:0,
// };
const integrantes=Grupo.integrantes;
// 20
Impresora.tinta={
    rojo:'',
    verde:'', 
    azul:'',
};
const nivelesTinta= Impresora.tinta;
// 21
// const Pantalla={
//     pixeles:[[]],
//     dimensiones:'',
// };
const pixeles=Pantalla.pixeles;
// 22
// const Movil={
//     especificaciones:["especificaciones"],
//     temperatura:'',
// };
const especificaciones=Movil.especificaciones;
// 23
Grupo.numIntegrantes = 5;
// 24
Pantalla.dimensiones='1920x1080';
// 25
Led.encendido= !Led.encendido;
// 26
Movil.temperatura='20º';