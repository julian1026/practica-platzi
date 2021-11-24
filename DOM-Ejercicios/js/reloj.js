const d = document;

export function DigitalClock(clock, btnPlay, btnStop) {
    let clockTemp;
    d.addEventListener("click", (e) => {
        if (e.target.matches(btnPlay)) {
            clockTemp = setInterval(() => {
                let clockHours = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHours}</h3>`;
            }, 1000)
            e.target.disabled = true;
        }
        if (e.target.matches(btnStop)) {
            clearInterval(clockTemp);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
        }
    })
}

export function Alarma(sound, btnPlay, btnStop) {

    const $alarma = d.createElement("audio");
    let alarmaTemp;
    $alarma.src = sound;
    d.addEventListener("click", (e) => {
        if (e.target.matches(btnPlay)) {
            alarmaTemp = setTimeout(() => {
                $alarma.play();
            }, 2000)
            e.target.disabled = true;
            console.log('oe')
        }
        if (e.target.matches(btnStop)) {
            clearTimeout(alarmaTemp);
            $alarma.pause();
            $alarma.currentTime = 0;
            d.querySelector(btnPlay).disabled = false;
        }
    })
}