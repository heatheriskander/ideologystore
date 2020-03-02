function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem<T>(set: Set<T>): T {
    const items = Array.from(set);
    return items[Math.floor(Math.random() * items.length)];
}

export {
    getRandomIntInclusive,
    getRandomItem
};