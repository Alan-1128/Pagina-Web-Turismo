let cerrarModal = document.querySelector('.moku_boton');
let abrirModal = document.querySelector('#promos');
let apareceModal = document.querySelector('.moku_ficha');
let pie = document.querySelector('.footer');

let img = document.querySelector('.moku_img');
let parrafo = document.querySelector('.moku_p');
let titulo = document.querySelector('.tituloM');

const cancun = 'Una de las islas más conocidas para disfrutar de sus playas con arenas blancas y sus aguas turquesas. '
const cdmx = 'Historias como la de la famosa “Frida Khalo” que atrae la atención de los turistas por ser un Museo de colores atrapantes que guarda una historia conmovedora e inspiradora.';
const oaxaca = 'Es famosa por sus edificios coloniales, muchos de los cuales fabricados con piedra volcánica verde. Y a tan solo 10 km se encuentra Monte Albán.'
const puebla = 'Ciudad reconocida por su historia culinaria, la arquitectura colonial y las cerámicas. Quizás algo distinto a lo que se puede encontrar en las otras ciudades.'
const vallarta = 'Cuenta con fascinantes playas, y la posibilidad de realizar la más amplia cantidad de deportes acuáticos.'

gsap.from('.nuevoI', {
    duration: 4,
    backgroundColor: 'black',
    opacity: 4
});

const html = (e) => {
    titulo.textContent = `${e.titulo}`
    img.src = `${e.imagen}`

    e.titulo == 'Cancún'? parrafo.textContent = cancun:
    e.titulo == 'CDMX' ? parrafo.textContent = cdmx :
    e.titulo == 'Oaxaca' ? parrafo.textContent = oaxaca :
    e.titulo == 'Puebla' ? parrafo.textContent = puebla :
    e.titulo == 'Vallarta' ? parrafo.textContent = vallarta : 'Uno de los lugares turísticos que contiene una belleza única proveniente de las playas bañadas por el Mar de Cortés. Arenas doradas y aguas turquesas, que se esconden entre paisajes de montañas y desiertos. '

}

const leerDatos = (e) => {
    
    const info = {
        imagen: e.querySelector('img').src,
        titulo: e.querySelector('h2').textContent 
    }
    return info
}

abrirModal.addEventListener('click', (e) => {

    e.preventDefault();
    let btnInfo = e.target.classList.contains('boton')

    if(btnInfo){
        div = e.target.parentElement;
        let nuevo = leerDatos(div)
        html(nuevo)
       
        apareceModal.style.opacity = '1';
        apareceModal.style.visibility = 'visible';
    }
})

cerrarModal.addEventListener('click', (e) => {
    e.preventDefault();
    apareceModal.style.opacity = '0';
    apareceModal.style.visibility = 'hidden';
})

pie.addEventListener('click', (e) => {

    e.preventDefault();

})

