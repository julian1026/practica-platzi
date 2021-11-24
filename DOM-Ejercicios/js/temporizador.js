const d = document;

export function temporizador(temp) {
    const $temp = d.querySelector(temp);
    const $time = d.createElement("p");
    let hours = new Date().toLocaleString();
    $time.textContent = hours;
    $temp.appendChild($time);

    console.log(hours)
}