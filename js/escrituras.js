upCarousel()

function upCarousel(){

    let product = [
        {
            image: '../assets/images/compraventa.jpg',
            alt: 'grupo-estrategia-legal-compraventa',
            subtitle: 'Escritura de compraventa',
            paragraph: null,
        },
        {
            image: '../assets/images/cesion.jpg',
            alt: 'grupo-estrategia-legal-cesion',
            subtitle: 'Cesiones de derechos',
            paragraph: null,
        },
        {
            image: '../assets/images/constitucion.jpg',
            alt: 'grupo-estrategia-legal-constitucion',
            subtitle: 'Constitución de sociedades, modificaciones y migraciones',
            paragraph: null,
        },
        {
            image: '../assets/images/liquidacion.jpg',
            alt: 'grupo-estrategia-legal-liquidacion',
            subtitle: 'Liquidaciones de sociedad conyugal',
            paragraph: null,
        },
        {
            image: '../assets/images/usufructo.jpg',
            alt: 'grupo-estrategia-legal-usufructo',
            subtitle: 'Constitución de usufructos',
            paragraph: null,
        },
        {
            image: '../assets/images/otros.jpg',
            alt: 'grupo-estrategia-legal-otros',
            subtitle: 'Otras',
            paragraph: null,
        }
    ]

    let process = [
        {
            image: '../assets/images/form.png',
            alt: 'grupo-estrategia-legal-form',
            subtitle: 'Paso 1',
            paragraph:'Envíanos un formulario solicitando una <b>COTIZACIÓN</b> por la escritura que deseas.',
        },
        {
            image: '../assets/images/contact.png',
            alt: 'grupo-estrategia-legal-contact',
            subtitle: 'Paso 2',
            paragraph:'Te contactaremos, <b>RESOLVEREMOS</b> tus inquietudes y conocerás el alcance de nuestro servicio.',
        },
        {
            image: '../assets/images/document.png',
            alt: 'grupo-estrategia-legal-document',
            subtitle: 'Paso 3',
            paragraph:'Cancela el valor del servicio y comenzaremos a trabajar <b>INMEDIATAMENTE</b> en tu escritura.',
        },
        {
            image: '../assets/images/time.png',
            alt: 'grupo-estrategia-legal-time',
            subtitle: 'Paso 4',
            paragraph:'En menos de <b>48 HORAS</b> tendrás tu escritura redactada por un abogado experto.',
        },
    ]

    createCarousel('products', product, 'icon')
    createCarousel('process', process, 'icon')
}