upCarousel()

function upCarousel(){

    let product = [
        {
            image: '../assets/images/deshaucio.jpg',
            alt: 'grupo-estrategia-legal-deshaucio',
            subtitle: 'Testamento',
            paragraph: 'Es un acto jurídico por el cual una persona estipula quien o quienes serán las personas que podrán disponer de todos sus bienes al momento de su muerte. Dicho documento debe ser bien redactado para que sea entendible y conforme a la ley vigente.',
        },
        {
            image: '../assets/images/compraventa.jpg',
            alt: 'grupo-estrategia-legal-compraventa',
            subtitle: 'Posesión efectiva',
            paragraph: 'Tiene como objetivo determinar quienes son los herederos y herederas de una persona que falleció sin dejar testamento y asi puedan disponer de sus bienes. Una posesión efectiva mal realizada puede acarrear problemas en el futuro.',
        },
        {
            image: '../assets/images/particion.jpg',
            alt: 'grupo-estrategia-legal-particion',
            subtitle: 'Juicios de partición',
            paragraph: 'Si dos o más personas no han logrado acordar la forma de liquidar o repartir los bienes, se procede a un juicio, en donde es necesario estar representado por un abogado de cara a las resoluciones que adquiera el árbitro de la partición.',
        },
        {
            image: '../assets/images/cesion.jpg',
            alt: 'grupo-estrategia-legal-cesion',
            subtitle: 'Cesión de derechos',
            paragraph: 'Es un acto jurídico por el cual un heredero transfiere la totalidad o una cuota de sus derechos (que le corresponden en la herencia de una persona fallecida) a otro sujeto que puede ser otro heredero o un tercero. Al ser un acto jurídico necesita la asesoría de un abogado.',
        },
        {
            image: '../assets/images/usufructo.jpg',
            alt: 'grupo-estrategia-legal-usufructo',
            subtitle: 'Usufructo vitalicio',
            paragraph: 'El usufructo vitalicio es el derecho a disfrutar de un bien (del que no se posee la propiedad) durante toda la vida, estipulándose la obligación de conservar su forma y sustancia, excepto que la ley o el título de su constitución autoricen otra cosa.',
        }
    ]

    let process = [
        {
            image: '../assets/images/form.png',
            alt: 'grupo-estrategia-legal-form',
            subtitle: 'Paso 1',
            paragraph:'Envíanos un formulario contándonos tu caso de herencia y solicitando una <b>ASESORÍA GRATUITA</b>.',
        },
        {
            image: '../assets/images/contact.png',
            alt: 'grupo-estrategia-legal-contact',
            subtitle: 'Paso 2',
            paragraph:'Te contactaremos, <b>RESOLVEREMOS</b> tus inquietudes y conocerás las soluciones que tienes a tu disposición.',
        },
        {
            image: '../assets/images/document.png',
            alt: 'grupo-estrategia-legal-document',
            subtitle: 'Paso 3',
            paragraph:'Cancela el valor del servicio y comenzaremos a trabajar <b>INMEDIATAMENTE</b> en resolver tu problema.',
        },
        {
            image: '../assets/images/herencia.png',
            alt: 'grupo-estrategia-legal-herencia',
            subtitle: 'Paso 4',
            paragraph:'Bajo nuestra asesoría <b>PROTEGERÁS</b> tus intereses patrimoniales, ya sea heredando de manera correcta o negociando con otros herederos.',
        },
    ]

    createCarousel('products', product, 'icon')
    createCarousel('process', process, 'icon')
}