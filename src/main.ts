import {
    IdeologyPart,
    Color,
    Symbol,
    FlagType,
    prefixes,
    heads,
} from "./types";
import {
    getRandomIntInclusive,
    shuffle,
    getAverageLightness
} from "./util";

function drawFlag(ideologyParts: IdeologyPart[], ideologyName: string) {
    const button = <HTMLButtonElement>document.getElementById("regen");
    const isAnarchist = (ideologyName.includes("anarch") || ideologyName.includes("mutualism"));
    const isNational = (ideologyName.includes("national") && !ideologyName.includes("international"));
    let colorSet = new Set<Color>();
    let symbolSet = new Set<Symbol>();
    ideologyParts.forEach(part => {
        part.colors.forEach(color => {
            colorSet.add(color);
        });
        part.symbols.forEach(symbol => {
            symbolSet.add(symbol);
        });
    });

    if (isAnarchist && colorSet.size > 1 && colorSet.has(Color.BLACK)) {
        colorSet.delete(Color.BLACK);
    }

    let canvas = <HTMLCanvasElement>document.getElementById("flagCanvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 600, 400);

    let colorArray = Array.from(colorSet);

    if ((colorArray.length == 2 && symbolSet.size > 0) || (colorArray.length == 1)) {
        const color = colorArray.pop();
        ctx.fillStyle = `hsl(${color.h}, 100%, ${color.l}%)`;
        ctx.fillRect(0, 0, 600, 400);
    } else if (colorArray.length >= 2) {
        shuffle(colorArray);
        let color = colorArray.pop();
        ctx.fillStyle = `hsl(${color.h}, 100%, ${color.l}%)`;
        ctx.fillRect(0, 0, 600, 400);

        color = colorArray.pop();
        ctx.fillStyle = `hsl(${color.h}, 100%, ${color.l}%)`;
        const flagType: FlagType = getRandomIntInclusive(0, FlagType.__LENGTH - 1);
        switch (flagType) {
            case FlagType.DIAGONAL_SPLIT: {
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(600, 0);
                ctx.lineTo(600, 400);
                ctx.fill();
                break;
            }
            case FlagType.STRIPE: {
                ctx.fillRect(0, 80, 600, 80);
                ctx.fillRect(0, 240, 600, 80);
                break;
            }
            case FlagType.HORIZONTAIL_SPLIT: {
                ctx.fillRect(0, 0, 600, 200);
                break;
            }
        }
    }

    if (isAnarchist) {
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.moveTo(0, 400);
        ctx.lineTo(600, 0);
        ctx.lineTo(600, 400);
        ctx.fill();
    }

    let symbolArray = Array.from(symbolSet);
    shuffle(symbolArray);
    if (symbolArray.length > 0) {
        const symbolImage = new Image();
        symbolImage.addEventListener('load', function () {
            ctx.drawImage(symbolImage, 0, 0);
            button.disabled = false;
        }, false);
        if (isNational) { // draw black symbol in white circle
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(300, 200, 160, 0, Math.PI * 2, false);
            ctx.fill();

            symbolImage.src = "./images/symbol/".concat(symbolArray[0].getFilename(Color.BLACK));
        } else if (colorArray.length > 0) {
            symbolImage.src = "./images/symbol/".concat(symbolArray[0].getFilename(colorArray.pop()));
        } else {
            if (isAnarchist || (colorSet.size > 0 && !(colorSet.has(Color.YELLOW) || colorSet.has(Color.WHITE)))) {
                symbolImage.src = "./images/symbol/".concat(symbolArray[0].getFilename(Color.WHITE));
            } else {
                symbolImage.src = "./images/symbol/".concat(symbolArray[0].getFilename(Color.BLACK));
            }
        }
    } else {
        button.disabled = false;
    }
}

function generateIdeology() {
    const button = <HTMLButtonElement>document.getElementById("regen");
    button.disabled = true;

    let ideologyParts: IdeologyPart[] = [];
    const prefixCount = getRandomIntInclusive(1, 3);

    for (let i = 0; i < prefixCount; i++) {
        ideologyParts.push(prefixes[Math.floor(Math.random() * prefixes.length)])
    }

    ideologyParts.push(heads[Math.floor(Math.random() * heads.length)])

    let ideologyName = "";
    ideologyParts.forEach(part => {
        ideologyName = ideologyName.concat(part.name);
    });

    if (Math.random() < 0.01) {
        ideologyName = ideologyName.concat(" with chinese characteristics");
    }

    drawFlag(ideologyParts, ideologyName);

    document.getElementById("ideologyLabel").textContent = ideologyName;
}



document.getElementById("regen").onclick = generateIdeology;
generateIdeology();