class IdeologyPart {
    constructor(public name: string, public colors: Color[] = [], public symbols = []) {
        this.name = (name.slice(-1) === "-" ? name : name.concat(" "));
        this.colors = colors;
        this.symbols = symbols;
    }
}

class Color {
    constructor(public h: number, public s: number = 100, public l: number) {
        this.h = h;
        this.s = s;
        this.l = l;
    }
    public static readonly RED = new Color(0, 100, 50);
    public static readonly BLUE = new Color(240, 100, 50);
    public static readonly GREEN = new Color(120, 100, 50);
    public static readonly ORANGE = new Color(39, 100, 50);
    public static readonly PINK = new Color(330, 100, 71);
    public static readonly PURPLE = new Color(300, 100, 71);
    public static readonly YELLOW = new Color(60, 100, 71);
    public static readonly TEAL = new Color(180, 100, 25);
    public static readonly WHITE = new Color(0, 0, 100);
    public static readonly BLACK = new Color(0, 0, 0);
}

const prefixes = [
    new IdeologyPart("anti-"),
    new IdeologyPart("left-", [Color.RED, Color.BLACK]),
    new IdeologyPart("right-", [Color.YELLOW, Color.BLUE]),
    new IdeologyPart("proto-"),
    new IdeologyPart("post-"),
    new IdeologyPart("neo-"),
    new IdeologyPart("paleo-"),
    new IdeologyPart("marxism-", [Color.RED]),
    new IdeologyPart("leninism-", [Color.RED]),
    new IdeologyPart("eco-", [Color.GREEN]),
    new IdeologyPart("techno-"),
    new IdeologyPart("crypto-"),
    new IdeologyPart("anarcho-", [Color.BLACK]),
    new IdeologyPart("anarcha-", [Color.PURPLE]),
    new IdeologyPart("alt-"),
    new IdeologyPart("cyber-"),
    new IdeologyPart("ultra-"),
    new IdeologyPart("judeo-"),
    new IdeologyPart("trans-exclusionary", [Color.PURPLE]),
    new IdeologyPart("classical"),
    new IdeologyPart("orthodox"),
    new IdeologyPart("post-left"),
    new IdeologyPart("left", [Color.RED]),
    new IdeologyPart("right"),
    new IdeologyPart("gender-abolitionist", [Color.PURPLE, Color.PINK]),
    new IdeologyPart("libertarian", [Color.YELLOW]),
    new IdeologyPart("conservative", [Color.RED]),
    new IdeologyPart("egoist", [Color.TEAL]),
    new IdeologyPart("authoritarian"),
    new IdeologyPart("christian", [Color.ORANGE]),
    new IdeologyPart("islamic"),
    new IdeologyPart("buddhist"),
    new IdeologyPart("green", [Color.GREEN]),
    new IdeologyPart("individualist", [Color.YELLOW]),
    new IdeologyPart("collectivist", [Color.RED]),
    new IdeologyPart("democratic", [Color.BLUE]),
    new IdeologyPart("radical", [Color.RED]),
    new IdeologyPart("utopian"),
    new IdeologyPart("scientific"),
    new IdeologyPart("egalitarian"),
    new IdeologyPart("hegelian"),
    new IdeologyPart("marxist", [Color.RED]),
    new IdeologyPart("primitive", [Color.GREEN]),
    new IdeologyPart("liberal", [Color.RED]),
    new IdeologyPart("fascist"),
    new IdeologyPart("state"),
    new IdeologyPart("national", [Color.RED]),
    new IdeologyPart("international"),
    new IdeologyPart("queer", [Color.PINK]),
];
const heads = [
    new IdeologyPart("anarchism", [Color.BLACK]),
    new IdeologyPart("communism", [Color.RED]),
    new IdeologyPart("socialism", [Color.RED]),
    new IdeologyPart("maoism", [Color.RED]),
    new IdeologyPart("juche", [Color.RED]),
    new IdeologyPart("marxism", [Color.RED]),
    new IdeologyPart("leninism", [Color.RED]),
    new IdeologyPart("trotskyism", [Color.RED]),
    new IdeologyPart("deng xiaoping thought", [Color.RED]),
    new IdeologyPart("posadism", [Color.RED]),
    new IdeologyPart("corporatism", [Color.RED]),
    new IdeologyPart("fascism", [Color.RED]),
    new IdeologyPart("monarchism", [Color.PURPLE]),
    new IdeologyPart("democracy", [Color.BLUE]),
    new IdeologyPart("liberalism", [Color.YELLOW]),
    new IdeologyPart("libertarianism", [Color.YELLOW]),
    new IdeologyPart("centrism", [Color.WHITE]),
    new IdeologyPart("primitivism", [Color.GREEN]),
    new IdeologyPart("anarchism", [Color.BLACK]),
    new IdeologyPart("mutualism", [Color.ORANGE]),
    new IdeologyPart("individualism", [Color.YELLOW]),
]

export {
    IdeologyPart,
    Color,
    prefixes,
    heads
};