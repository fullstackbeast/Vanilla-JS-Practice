const letterO = './images/lettero.png'
const letterX = './images/letterx.png'
const line = document.querySelector("#line");

let last = letterO;

const cells = document.querySelectorAll(".grid-cell");

const placeLetter = (e) => {

    if (e.target.childElementCount !== 0 || e.target.nodeName === 'IMG') return;

    let image = document.createElement('img');

    image.src = last === letterO ? letterX : letterO;

    e.target.appendChild(image);

    last = last === letterO ? letterX : letterO;
}

const checkUniformRow = () => {

    for (let i = 1; i <= 3; i++) {
        const rows = Array.from(document.querySelectorAll(`.grid-cell[data-row="${i}"]`));

        if (rows[0].children[0]?.src !== undefined && rows.every(r => r.children[0]?.src === rows[0].children[0]?.src)) {

            switch (i) {
                case 1:
                    line.style.transform = "translateY(calc(var(--game-size) / 7))";
                    break;
                case 2:
                    line.style.transform = "translateY(calc(var(--game-size) / 2))";
                    break;
                case 3:
                    line.style.transform = "translateY(calc(var(--game-size) / 1.25))";
                    break;

            }

            break;
        }
    }
}

const checkUniformColumn = () => {

    for (let i = 1; i <= 3; i++) {
        const cols = Array.from(document.querySelectorAll(`.grid-cell[data-col="${i}"]`));

        if (cols[0].children[0]?.src !== undefined && cols.every(r => r.children[0]?.src === cols[0].children[0]?.src)) {
            switch (i) {
                case 1:
                    line.style.transform ="translateY(calc(var(--game-size) / 2.08)) translateX(calc(var(--game-size) / -3.03)) rotateZ(90deg)";
                    break;
                case 2:
                    line.style.transform = "translateY(calc(var(--game-size) / 2)) rotateZ(90deg)";
                    break;
                case 3:
                    line.style.transform ="translateY(calc(var(--game-size) / 2.08)) translateX(calc(var(--game-size) / 3.03)) rotateZ(90deg)";
                    break;

            }

            break;
        }
    }
}

const checkLeftDiagonal = () => {
    const lD = [];
    for (let i = 1; i <= 3; i++) lD.push(document.querySelector(`.grid-cell[data-col="${i}"][data-row="${i}"]`));

    if (lD[0].children[0]?.src !== undefined && lD.every(r => r.children[0]?.src === lD[0].children[0]?.src))

    line.style.transform = "translateY(calc(var(--game-size) / 2)) rotateZ(45deg)";
}

const checkRightDiagonal = () => {
    const cells = Array.from(document.querySelectorAll('.grid-cell'));

    const rD = cells.filter(c => parseInt(c.dataset.col) + parseInt(c.dataset.row) === 4);

    if (rD[0].children[0]?.src !== undefined && rD.every(r => r.children[0]?.src === rD[0].children[0]?.src))

        line.style.transform = "translateY(calc(var(--game-size) / 2)) rotateZ(-45deg)";
}

cells.forEach(c => c.addEventListener('click', e => {
    placeLetter(e);
    checkUniformRow();
    checkUniformColumn();
    checkLeftDiagonal();
    checkRightDiagonal();
}));