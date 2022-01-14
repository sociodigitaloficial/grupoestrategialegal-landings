upCarousel()

function upCarousel(){

    let product = [
        {
            image: '../assets/images/titulos.jpg',
            alt: 'grupo-estrategia-legal-titulos',
            subtitle: 'Estudio de títulos',
            paragraph: 'Realiza un análisis de los antecedentes legales de un inmueble, en el cual se verifica si los títulos de dominio o propiedad del inmueble están conforme a derecho y si sobre el mismo se han constituido hipotecas, servidumbres u otros gravamenes y/o limitaciones al dominio.',
        },
        {
            image: '../assets/images/promesa.jpg',
            alt: 'grupo-estrategia-legal-promesa',
            subtitle: 'Promesas de compraventa',
            paragraph: 'Obtén una promesa de contrato que funcione como garantía, donde las partes se obligan recíprocamente a celebrar, en el futuro y con todos los requisitos que la Ley exige, un contrato de compraventa de un inmueble.',
        },
        {
            image: '../assets/images/conservador.jpg',
            alt: 'grupo-estrategia-legal-conservador',
            subtitle: 'Trámites en el Conservador',
            paragraph: 'Una mala inscripción en el Conservador de Bienes Raíces puede generar grandes problemas a futuro, ya sea para vender, arrendar o recibir el inmueble como herencia, por esta razón es necesario que la inscripción sea realizada por un profesional.',
        },
        {
            image: '../assets/images/linea.jpg',
            alt: 'grupo-estrategia-legal-linea',
            subtitle: 'Solicitud de documentación en línea',
            paragraph: 'Te asesoramos para que pudas obtener todos los papeles necesarios en la compra o venta de un inmueble, especificando los trámites que debes realizar y dándote a conocer la manera en que podemos ayudarte.',
        }
    ]

    let process = [
        {
            image: '../assets/images/form.png',
            alt: 'grupo-estrategia-legal-form',
            subtitle: 'Paso 1',
            paragraph:'Envíanos un formulario contándonos tu caso de compra o venta de un inmueble y solicitando una <b>ASESORÍA GRATUITA</b>.',
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
            image: '../assets/images/keys.png',
            alt: 'grupo-estrategia-legal-keys',
            subtitle: 'Paso 4',
            paragraph:'Bajo nuestra asesoría tu compra o venta será <b>100% SEGURA</b> y conforme a la ley, ahorrándote problemas y malos ratos a futuro.',
        },
    ]

    createCarousel('products', product, 'icon')
    createCarousel('process', process, 'icon')
}