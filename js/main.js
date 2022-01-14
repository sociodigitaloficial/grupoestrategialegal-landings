document.location.href = "#presentation-anchor";
contactControl();

function contactControl(){

    var fecha = new Date();
    console.log(fecha.getDay())
    console.log(fecha.getHours())

    if(fecha.getDay() == 6 || fecha.getDay() == 0){
        document.getElementsByClassName('float-contact')[0].setAttribute('style','display:none;')
    }else{
		if(fecha.getHours()>8 && fecha.getHours()<19){
            document.getElementsByClassName('float-contact')[0].setAttribute('style','display:flex;')
        }else{
			document.getElementsByClassName('float-contact')[0].setAttribute('style','display:none;')
		}
	}
}

function createCarousel(id, info, type){

	let carousel = document.getElementById(id)

    let carousel_content = document.createElement('div')
    carousel_content.setAttribute('class','carousel-content')

	for (let i = 0; i < info.length; i++){
        let mobile
        if(i == 0){mobile = "item--enabled"}
        else {mobile = "item--disabled" }
        let nodo;
        if(type === 'icon'){
            nodo = createItem(info[i].image, info[i].alt, info[i].subtitle, info[i].paragraph, mobile)
        } else {
            nodo = createList(info[i], mobile)
        }
		carousel_content.appendChild(nodo)
	}

    carousel.appendChild(carousel_content)
    carousel.appendChild(createControls(id))
}

function createItem(imageURL, imageAlt, subtitleText, paragraphText, mobile){

    let item = document.createElement('div')
	item.setAttribute('class',`carousel-item ${mobile}`)

    if(imageURL != null){
	    let image = document.createElement('img')
	    image.src = imageURL
	    image.setAttribute('class','carousel-image')
        image.setAttribute('alt',imageAlt)
        item.appendChild(image)
    }

    if(subtitleText != null){
        let subtitle = document.createElement('h3')
	    subtitle.innerText = subtitleText
	    subtitle.setAttribute('class','carousel-subtitle')
        item.appendChild(subtitle)
    }

    if(paragraphText != null){
        let paragraph = document.createElement('p')
	    paragraph.innerHTML = paragraphText
	    paragraph.setAttribute('class','carousel-paragraph')
        item.appendChild(paragraph)
    }

	return item
}

function createList(list, mobile){

    let item = document.createElement('div')
	item.setAttribute('class',`carousel-item ${mobile}`)

    if(list.title != null){
        let title = document.createElement('p')
        title.innerText = list.title
        item.appendChild(title)
    }

    let ul = document.createElement('ul')
    ul.setAttribute('class','carousel-list')

    for (let i = 0; i < list.text.length; i++ ){
        let li = document.createElement('li')
        li.setAttribute('class','carousel-point')
        li.innerText = list.text[i]
        ul.appendChild(li)
    }
    item.appendChild(ul)

    if(list.anchor != null && list.button != null ){
        let anchor = document.createElement('a')
        anchor.href = list.anchor
        let button = document.createElement('button')
        button.setAttribute('class','button button--list')
        button.innerText = list.button
        anchor.appendChild(button)
        item.appendChild(anchor)
    }

    return item
}

function createControls(id){

    let carrousel_controls = document.createElement('div')
    carrousel_controls.setAttribute('class','carousel-controls')

    let previus = document.createElement('p')
    previus.setAttribute('class','control-arrow')
    previus.setAttribute('onclick',`handleControl('${id}', 'previus')`)
    previus.innerText = '<'

    let next = document.createElement('p')
    next.setAttribute('class','control-arrow')
    next.setAttribute('onclick',`handleControl('${id}', 'next')`)
    next.innerText = '>'

    carrousel_controls.appendChild(previus)
    carrousel_controls.appendChild(next)


	return carrousel_controls
}

function handleControl(id, action){

    let items = document.getElementById(id).getElementsByClassName('carousel-item')

    let size = items.length

    let index

    for (let i = 0; i<size; i++){
        if(items[i].classList[1] === "item--enabled"){
            index = i
        }
    }

    items[index].setAttribute('class','carousel-item item--disabled')

    if(action === 'next'){
        if(index <size-1){        
            items[index+1].setAttribute('class','carousel-item item--enabled')
        }else {
            items[0].setAttribute('class','carousel-item item--enabled')
        }
    } else {
        if(index >0){        
            items[index-1].setAttribute('class','carousel-item item--enabled')
        }else {
            items[size-1].setAttribute('class','carousel-item item--enabled')
        }
    }
}

const form = document.getElementById('form')
form.addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementsByClassName('buton--form')[0].value = 'ENVIANDO...'
    let data = new FormData(form);

    fetch('../db/send.php',{
        method: 'POST',
        body: data
    })
    .then (function (res){
        if(res.ok){
            window.dataLayer.push({'event': 'formSubmit'})
            gracias()
            document.location.href = "#header-anchor";
        } else {
            document.getElementsByClassName('buton--form')[0].value = 'ERROR'
            console.log(res)
        }
    })
})

function gracias(){

    let sections = document.getElementsByClassName('section')
    for (let i = 0; i <sections.length; i++){
        if(i != 0) {
            sections[i].setAttribute('style','display:none;')
        }
    }
    document.getElementsByClassName('background--call1')[0].setAttribute('style','display:none;')
    document.getElementsByClassName('background--call2')[0].setAttribute('style','display:none;')
    document.getElementsByClassName('background--call3')[0].setAttribute('style','display:none;')
    document.getElementsByClassName('presentation-title')[0].innerHTML = '<strong class ="strong-dorado">GRACIAS</strong> por contactarnos'
    document.getElementsByClassName('presentation-text')[0].setAttribute('style','display:none;')
    document.getElementsByClassName('presentation-benefits')[0].setAttribute('style','display:none;')
    document.getElementsByClassName('presentation-benefits')[1].setAttribute('style','display:none;')
    document.getElementsByClassName('presentation-benefits')[2].setAttribute('style','display:none;')
    document.getElementsByClassName('presentation-benefits')[3].setAttribute('style','display:none;')
    document.getElementsByClassName('form-container')[0].setAttribute('style','display:none;')

    let container = document.getElementsByClassName('presentation-container')[0]
    container.setAttribute('style','display: flex; flex-direction: column; align-items: center; width: 100%;')

    let message = document.createElement('p')
    message.setAttribute('class','presentation-message')
   
    var fecha = new Date();

	if(fecha.getDay() == 6 || fecha.getDay() == 0){
		message.innerHTML = "En breves minutos te llegará un mail de confirmación con la recepción de tus consultas. Debido a que durante el fin de semana no hacemos las asesorías, el próximo día hábil a primera hora nos colocaremos en contacto contigo para brindar la información que necesitas.";			
	}else{
		if(fecha.getHours()<18){
			message.innerHTML = "En breves minutos te llegará un mail de confirmación con la recepción de tus consultas. Durante la jornada nos colocaremos en contacto contigo para brindar la información que necesitas.";
		}else{
			message.innerHTML = "En breves minutos te llegará un mail de confirmación con la recepción de tus consultas. Debido a que por hoy nuestra jornada de asesorías ha terminado, el próximo día hábil a primera hora nos colocaremos en contacto contigo para brindar la información que necesitas.";			
		}
	}


    container.appendChild(message)

    document.getElementsByClassName('presentation')[0].setAttribute('style','padding: 72px 10%;')

}