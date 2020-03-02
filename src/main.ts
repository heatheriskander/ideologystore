import {
    IdeologyPart,
    Color,
    prefixes,
    heads,
} from "./tables";
import {
    getRandomIntInclusive,
    getRandomItem
} from "./util";

function generateIdeology() {
    let ideologyParts: IdeologyPart[] = [];
    const prefixCount = getRandomIntInclusive(1, 3);

    for (let i = 0; i < prefixCount; i++) {
        if (Math.random() < 0.5) {
            ideologyParts.push(prefixes[Math.floor(Math.random() * prefixes.length)])
        } else {
            ideologyParts.push(prefixes[Math.floor(Math.random() * prefixes.length)])
        }
    }

    ideologyParts.push(heads[Math.floor(Math.random() * heads.length)])

    let ideologyName = "";
    let colorSet = new Set<Color>();
    ideologyParts.forEach(part => {
        ideologyName = ideologyName.concat(part.name);
        part.colors.forEach(color => {
            colorSet.add(color);
        });
    });

    let color = getRandomItem(colorSet);

    let canvas = <HTMLCanvasElement>document.getElementById("flagCanvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 600, 400);
    if (color == Color.BLACK) {
        ctx.fillStyle = "black";
    } else if (color == Color.WHITE) {
        ctx.fillStyle = "white";
    } else {
        ctx.fillStyle = `hsl(${color.h + getRandomIntInclusive(-10, 10)}, 100%, ${color.l + getRandomIntInclusive(-10, 10)}%)`;
    }
    ctx.fillRect(0, 0, 600, 400);

    if (colorSet.size == 2) {
        color = getRandomItem(colorSet);
        if (color == Color.BLACK) {
            ctx.fillStyle = "black";
        } else if (color == Color.WHITE) {
            ctx.fillStyle = "white";
        } else {
            ctx.fillStyle = `hsl(${color.h + getRandomIntInclusive(-10, 10)}, 100%, ${color.l + getRandomIntInclusive(-10, 10)}%)`;
        }

        for (let i = 0; i < 400; i += 160) {
            ctx.fillRect(0, i, 600, 80);
        }
    }

    if (Math.random() < 0.01) {
        ideologyName = ideologyName.concat(" with chinese characteristics");
    }

    if (ideologyName.includes("anarch") || ideologyName.includes("mutualism")) {
        ctx.fillStyle = "black";
        ctx.moveTo(0, 400);
        ctx.lineTo(600, 0);
        ctx.lineTo(600, 400);
        ctx.fill();
    }

    document.getElementById("ideologyLabel").textContent = ideologyName;
}

document.getElementById("regen").onclick = generateIdeology;
generateIdeology();