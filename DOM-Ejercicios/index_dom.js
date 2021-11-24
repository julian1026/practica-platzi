import hamburgerMenu from "./js/menu_amburguesa.js";
import { DigitalClock, Alarma } from "./js/reloj.js";
import { shortcuts, moveBall } from "./js/teclado.js";
import { temporizador } from "./js/temporizador.js";
import { moveScroll } from "./js/scroll.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    DigitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    Alarma("./assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma")
    temporizador(".temp");
    moveScroll(".scroll-top-btn");
})

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})