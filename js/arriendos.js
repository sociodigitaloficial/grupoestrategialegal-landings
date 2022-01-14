upCarousel()

function upCarousel(){

    let product = [
        {
            image: '../assets/images/impago.jpg',
            alt: 'grupo-estrategia-legal-impago',
            subtitle: 'Rentas impagas',
            paragraph: 'La ley faculta al arendador a entablar un juicio si el arrendatario a incumplido un periodo entero de mora, siendo obligatoria la representación de un abogado si la deuda es superior a 4 UTM.',
        },
        {
            image: '../assets/images/cesion.jpg',
            alt: 'grupo-estrategia-legal-cesion',
            subtitle: 'Incumplimiento de contrato',
            paragraph: 'El arrendador puede demandar por intermedio de un abogado ante el respectivo juzgado civil, para solicitar el término del contrato más el pago de las rentas impagas e indemnización de perjuicios.',
        },
        {
            image: '../assets/images/deshaucio.jpg',
            alt: 'grupo-estrategia-legal-deshaucio',
            subtitle: 'Desahucio',
            paragraph: 'Si uno de los contratantes del arriendo quiere poner fin al contrato anticipadamente, es indispensable recibir la asesoría de un abogado, con la finalidad de no incumplir las condiciones que el mismo contrato o la ley establecen.',
        },
        {
            image: '../assets/images/desalojo.jpg',
            alt: 'grupo-estrategia-legal-desalojo',
            subtitle: 'Lanzamiento con fuerza pública',
            paragraph: 'Para obtener la recuperación forzada de un inmueble por medio de la fuerza pública, primero debe existir una sentencia judicial ordenando que el ocupante restituya la propiedad y que dicha sentencia sea desobedecida.',
        }
    ]

    let process = [
        {
            image: '../assets/images/form.png',
            alt: 'grupo-estrategia-legal-form',
            subtitle: 'Paso 1',
            paragraph:'Envíanos un formulario contándonos tu problema de arriendo y solicitando una <b>ASESORÍA GRATUITA</b>.',
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
            paragraph:'Bajo nuestra asesoría <b>RECUPERARÁS</b> el control sobre tu inmueble, obteniendo el dinero impago o las llaves de la propiedad.',
        },
    ]

    createCarousel('products', product, 'icon')
    createCarousel('process', process, 'icon')
}