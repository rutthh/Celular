var estadoCelular = "apagado";
var celular = document.getElementById("pantalla");



function controlarCelular() {
    if (estadoCelular == "apagado") {
        estadoCelular = "encendido";
        celular.classList.add("active");
    } else {
        estadoCelular = "apagado";
        celular.classList.remove("active");
    }
}



// Liberia:

//stock de libros con algunas caracteristicas ("autor/a -titulo - precio- id- stock")
//muestre la informacion de cada libro en stok

/* class Libro {
    constructor(autor, titulo, precio, id, stock){
        this.autor = autor;
        this.titulo = titulo;
        this.precio = precio;
        this.id = id;
        this.stock = stock;
    } //fabrica, son los parametros que despues se llaman
    mostrarInfo(){
    let info = `Autora: ${this.autor}- TITULO: - PRECIO: - ID: `;

    if (this.stock==0) {
        return `${info} STOCK: No está disponible`

    } else {
        return `${this.stock} STOCK: ${this.stock}`
    }
}
} */

/* let libro1 = new Libro("J. K. Rowling", "Harry Potter y la piedrra filosofal", 2500, 1, 34)
let libro2 = new Libro("Ana Frack", "El diario de Ana Frack", 3500, 2, 0)

console.log(libro2.mostrarInfo)
console.log(libro2.precio)
console.log(libro1.autor) */

//extends trae todas las instancias de la clase Libro
/* class Comic extends Libro {
    constructor(autor, titulo, precio, id, stock, ilustradores, volumen){
        super (autor,titulo, precio, id, stock)
        this.ilustradores = ilustradores;
        this.volumen = volumen;
    }

}

let comic1 = new Comic ('Jeph Loeb', 'Batman: Silencio', 3000, 10, 0, ["Jim Lee", "pepe pompin"], 1); //si hay mas ilustradores se tiene q poner en un array

console.log(comic1.mostrarInfo) */