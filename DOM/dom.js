
/*
console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByName("nombre"))
console.log(document.getElementById("menu"))
console.log(document.querySelector("#menu"))
console.log(document.querySelector("a"))
*/



/*
console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"))
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.setAttribute("lang", "es");
console.log(document.documentElement.lang);

//agregando atributos a una etiqueta
const $linkDom = document.querySelector(".link-dom");
console.log($linkDom)
$linkDom.setAttribute("target", "_blank")
$linkDom.setAttribute("rel", "noopener")//asignando atributo
$linkDom.setAttribute("href", "https://youtube.com/jonmircha")
console.log($linkDom.hasAttribute("rel"))// verificar si existe atributo
$linkDom.removeAttribute("rel")// quitando atributo


//Data-Attributes

console.log($linkDom.getAttribute('data-description'))
$linkDom.setAttribute("data-love", "amor")
$linkDom.dataset.love = 'love julian '
console.log($linkDom.dataset)

//style
$linkDom.style.color = 'red';
$linkDom.style.backgroundColor = 'orange';
$linkDom.style.padding = '.1rem';

*/





/*

// variables CSS  custom Properties CSS

const $html = document.documentElement,
    $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color'),
    varYellowColor = getComputedStyle($html).getPropertyValue('--yellow-color');

console.log(varDarkColor, varYellowColor)
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;
*/



/*

// agrgando clases css a una etiqueta html desde javascript


const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45")
$card.classList.toggle("separeitor")//el toggle agrega y quita una clase dependiendo de si existe o no
$card.classList.replace("separeitor", "oeoeoe")
// $card.classList.remove("rotate-45")
console.log($card.classList);

*/


/*

//cambiando el contenido


const $whatIsDom = document.getElementById('que-es');

let tex = `hola campeon`,
    amor = 'ella es mi todo'

$whatIsDom.innerText += tex;
$whatIsDom.textContent += amor;

*/



/*

//DOM TRAVERSING

const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.firstElementChild);//primer element hijo
console.log($cards.lastElementChild);//ultimo  element hijo
console.log($cards.previousElementSibling)//nodo vecino superio
console.log($cards.nextElementSibling)//nodo vecino inferior
// console.log($cards.children[2]);

*/



/*
// creando etiquetas desde javascript
const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcationText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards");

$img.setAttribute("src", "https://placeimg.com/200/200/animals")
$img.setAttribute("alt", "Animals")


$figcaption.appendChild($figcationText)
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

document.write("<h3>estaciones del year</h3>")

const estaciones = ['primavera', 'varano', 'invierno', 'otono'];
$ul = document.createElement("ul");
document.body.appendChild($ul)
estaciones.forEach(el => {
    $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
})



*/



/*

//implementando fragmentos

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo']
$ul3 = document.createElement("ul");
const $fragment = document.createDocumentFragment();

meses.map(el => {
    $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
})
$ul3.appendChild($fragment);
document.body.appendChild($ul3)

*/



// /*
// EXPLICACION DE TEMPLATES EN JAVASCRIPT

const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Naturaleza",
            img: "https://placeimg.com/200/200/nature"
        },
        {
            title: "Personas",
            img: "https://placeimg.com/200/200/people"
        },
        {
            title: "Tecnologia",
            img: "https://placeimg.com/200/200/tech"
        },
        {
            title: "Arquitectura",
            img: "https://placeimg.com/200/200/arch"
        },
    ]

console.log($template)
cardContent.forEach(({ title, img }) => {
    $template.querySelector("img").setAttribute("src", img);
    $template.querySelector("img").setAttribute("alt", title);
    $template.querySelector("figcaption").textContent = title;

    let $clone = document.importNode($template, true);//el true significa que compie todo lo que tenga la etiqueta

    $fragment.appendChild($clone);
})
$cards.appendChild($fragment);
// */

/*
// METODOS PARA REMPLASAR ELEMENTOS DE UN NODO, metodos de antano

// $cards.replaceChild($newCards,children[2])
// $cards.insertBefore($newCard,$cards.firstElementChild)
// $cards.removeChild($cards.lastElementChild)
const $cards = document.querySelector(".cards");
$cloneCards = $cards.cloneNode(true);
document.body.appendChild($cloneCards)
*/


/*
--insertAdjacent--
insertAdjacentElement(position,el);
insertAdjacentHTML(position,html);
insertAdjacentText(positiion,text);

Posiciones:
beforeBegin(hermano anterior)
afterbegin(primer hijo)
beforeend(ultimo hijo)
afterend(hermano siguiente)


*/

/*
const $cards = document.querySelector(".cards"),
    $newCards = document.createElement('figure');

$contentCard = `
<img src="https://placeimg.com/200/200/any" alt="Any" >
<figcaption></figcaption>
`
$newCards.insertAdjacentHTML("afterbegin", $contentCard);
$newCards.querySelector("figcaption").insertAdjacentText("afterbegin", "any");
// $cards.insertAdjacentElement("beforebegin", $newCards)

// OTROS METODOS PARA INSERTAR NODOS

// $cards.prepend($newCards)//primer hijo
// $cards.append($newCards)//ultimo hijo
// $cards.before($newCards)//ultimo hijo
// $cards.after($newCards)//vecino siguiente

*/

/*

// FLUJO DE EVENTOS  (BURBUJA Y CAPTURA)

$div = document.querySelectorAll(".eventos-flujo div");
console.log($div);

function mostrar(e) {
    console.log(`hola te saluda ${this.className} el click lo origino ${e.target.className}`)
    e.stopPropagation(); 
}
$div.forEach(div => {
    div.addEventListener("click", mostrar);
    // div.addEventListener("click", mostrar, {
    //     capture: true,//se propaga de afuera hacia adentro
    //     once: true// se ejucuta una  sola vez el evento
    // })
});
*/



/*

//Delegacion de eventos

document.addEventListener("click", (e) => {
    console.log("click  en ", e.target)

    if (e.target.matches(".uno")) {
        console.log("soy Julian")
    }
})

*/


/*

//Propiedades del BOM


window.addEventListener("resize", (e) => {
    console.clear()
    console.log("------event resize---------")
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerHeight);
    console.log(window.outerWidth);

})
window.addEventListener("scroll", (e) => {
    console.clear()
    console.log("------event scroll---------")
    console.log(window.scrollX);
    console.log(window.scrollY);

})

window.addEventListener("load", (e) => {
    // console.clear()
    console.log("------event load---------")
    console.log(window.screenX);
    console.log(window.screenY);

})

document.addEventListener("DOMContentLoaded", (e) => {
    console.log("------event DOMContentLoaded---------")
    console.log(window.screenX);
    console.log(window.screenY);
    confirm("verdadero")
})

*/



//BOM: Objetos: URL, Historial y Navegador

console.log(location);
console.log(history);
console.log(navigator);
// console.log(history.back());
// console.log(history.forward());
// console.log(history.go());
