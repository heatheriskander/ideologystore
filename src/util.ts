function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem<T>(set: Set<T>): T {
    const items = Array.from(set);
    return items[Math.floor(Math.random() * items.length)];
}

function shuffle<T>(a: Array<T>) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
}

function getAverageLightness(ctx: CanvasRenderingContext2D): number {
    const WIDTH = 600,
        HEIGHT = 400;

    const imageData = ctx.getImageData(0, 0, 600, 400);
    const data = imageData.data;
    let r = 0,
        g = 0,
        b = 0,
        l = 0;

    for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
        let x_max = Math.max(r, g, b),
            x_min = Math.min(r, b, b);
        l += (x_max + x_min) / 2;
    }

    return (l / (WIDTH * HEIGHT)) / 512;
}

export {
    getRandomIntInclusive,
    getRandomItem,
    shuffle,
    getAverageLightness
};