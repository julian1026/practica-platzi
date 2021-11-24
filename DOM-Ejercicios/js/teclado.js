
const d = document;
let x = 0, y = 0;
export function shortcuts(e) {
    // console.log(e);
    // console.log(e.type);
    // console.log(e.code);
    // console.log(e.which);
    console.log(e.keyCode);
    if (e.which == 65 && e.ctrlKey == true) {
        let go = confirm('vamos al parque');
        console.log(go);
    }
}

export function moveBall(e, ball, box) {
    const $ball = d.querySelector(ball),
        $box = d.querySelector(box),
        limitsBall = $ball.getBoundingClientRect(),
        limitsBox = $box.getBoundingClientRect();
    // console.log(limitsBall, limitsBox);

    switch (e.keyCode) {
        case 37:
            e.preventDefault();
            if (limitsBall.left > limitsBox.left) x--;
            break;
        case 38:
            e.preventDefault();
            if (limitsBall.top > limitsBox.top) y--;
            break;
        case 39:
            e.preventDefault();
            if (limitsBall.right < limitsBox.right) x++;
            break;
        case 40:
            e.preventDefault();
            if (limitsBall.bottom < limitsBox.bottom) y++;
            break;

        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}