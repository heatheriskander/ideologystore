// ideology prefix or head plus associated colors and symbol
class IdeologyPart {
    constructor(public name: string, public colors: Color[] = [], public symbols: Symbol[] = []) {
        this.name = (name.slice(-1) === "-" ? name : name.concat(" "));
        this.colors = colors;
        this.symbols = symbols;
    }
}

// HSL color
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
    public static readonly PURPLE = new Color(300, 100, 25);
    public static readonly YELLOW = new Color(60, 100, 50);
    public static readonly TEAL = new Color(180, 100, 25);
    public static readonly DARKGREEN = new Color(138, 68, 31);
    public static readonly WHITE = new Color(0, 0, 100);
    public static readonly BLACK = new Color(0, 0, 0);
}

class Symbol {
    constructor(private filename: string) { this.filename = filename }
    getFilename(c: Color) {
        switch (c) {
            case Color.RED: return this.filename.concat("_red.png");
            case Color.BLUE: return this.filename.concat("_blue.png");
            case Color.GREEN: return this.filename.concat("_green.png");
            case Color.ORANGE: return this.filename.concat("_orange.png");
            case Color.PINK: return this.filename.concat("_pink.png");
            case Color.PURPLE: return this.filename.concat("_purple.png");
            case Color.YELLOW: return this.filename.concat("_yellow.png");
            case Color.TEAL: return this.filename.concat("_teal.png");
            case Color.DARKGREEN: return this.filename.concat("_darkgreen.png");
            case Color.WHITE: return this.filename.concat("_white.png");
            case Color.BLACK: return this.filename.concat("_black.png");
        }
    }

    public static readonly ALGIZ = new Symbol("algiz");
    public static readonly HS_CN = new Symbol("hs_cn");
    public static readonly HS_CPUSA = new Symbol("hs_cpusa");
    public static readonly HS_USSR = new Symbol("hs_ussr");
    public static readonly JUCHE = new Symbol("juche");
    public static readonly SWASTIKA = new Symbol("swastika");
    public static readonly STAR_DAVID = new Symbol("david");
    public static readonly DHARMA = new Symbol("dharma");
    public static readonly CROSS = new Symbol("cross");
    public static readonly LABRYS = new Symbol("labrys");
    public static readonly STAR_CRESCENT = new Symbol("starcrescent");
    public static readonly FASCES = new Symbol("fasces");
    public static readonly TROTSKY = new Symbol("trotsky");
    public static readonly CROWN = new Symbol("crown");
    public static readonly SCALES = new Symbol("scales");
    public static readonly SNEK = new Symbol("snek");
    public static readonly DOVE = new Symbol("dove");
}

enum FlagType {
    STRIPE,
    DIAGONAL_SPLIT,
    HORIZONTAIL_SPLIT,
    __LENGTH
}

const prefixes = [
    new IdeologyPart("left-", [Color.RED, Color.BLACK]),
    new IdeologyPart("right-", [Color.YELLOW, Color.BLUE]),
    new IdeologyPart("proto-"),
    new IdeologyPart("post-"),
    new IdeologyPart("neo-"),
    new IdeologyPart("paleo-"),
    new IdeologyPart("marxism-", [Color.RED], [Symbol.HS_CN, Symbol.HS_USSR]),
    new IdeologyPart("leninism-", [Color.RED], [Symbol.HS_USSR]),
    new IdeologyPart("eco-", [Color.GREEN]),
    new IdeologyPart("techno-"),
    new IdeologyPart("crypto-"),
    new IdeologyPart("anarcho-", [Color.BLACK]),
    new IdeologyPart("anarcha-", [Color.PURPLE]),
    new IdeologyPart("alt-"),
    new IdeologyPart("cyber-"),
    new IdeologyPart("ultra-"),
    new IdeologyPart("judeo-", [], [Symbol.STAR_DAVID]),
    new IdeologyPart("trans-exclusionary", [Color.PURPLE], [Symbol.LABRYS]),
    new IdeologyPart("classical"),
    new IdeologyPart("orthodox"),
    new IdeologyPart("post-left"),
    new IdeologyPart("left", [Color.RED]),
    new IdeologyPart("right"),
    new IdeologyPart("gender-abolitionist", [Color.PURPLE, Color.PINK]),
    new IdeologyPart("libertarian", [Color.YELLOW], [Symbol.SNEK]),
    new IdeologyPart("conservative", [Color.RED]),
    new IdeologyPart("egoist", [Color.TEAL]),
    new IdeologyPart("authoritarian"),
    new IdeologyPart("christian", [Color.ORANGE], [Symbol.CROSS]),
    new IdeologyPart("islamic", [], [Symbol.STAR_CRESCENT]),
    new IdeologyPart("buddhist", [], [Symbol.DHARMA]),
    new IdeologyPart("green", [Color.GREEN]),
    new IdeologyPart("individualist", [Color.YELLOW]),
    new IdeologyPart("collectivist", [Color.RED]),
    new IdeologyPart("democratic", [Color.BLUE], [Symbol.SCALES]),
    new IdeologyPart("radical", [Color.RED]),
    new IdeologyPart("utopian"),
    new IdeologyPart("scientific"),
    new IdeologyPart("egalitarian"),
    new IdeologyPart("hegelian"),
    new IdeologyPart("marxist", [Color.RED]),
    new IdeologyPart("primitive", [Color.DARKGREEN]),
    new IdeologyPart("liberal", [Color.YELLOW], [Symbol.DOVE]),
    new IdeologyPart("fascist", [], [Symbol.FASCES]),
    new IdeologyPart("state"),
    new IdeologyPart("national", [Color.RED]),
    new IdeologyPart("international"),
    new IdeologyPart("queer", [Color.PINK]),
    new IdeologyPart("pagan", [], [Symbol.ALGIZ])
];
const heads = [
    new IdeologyPart("anarchism", [Color.BLACK]),
    new IdeologyPart("communism", [Color.RED], [Symbol.HS_CN, Symbol.HS_USSR, Symbol.HS_CPUSA]),
    new IdeologyPart("socialism", [Color.RED], [Symbol.HS_CN, Symbol.HS_USSR, Symbol.HS_CPUSA]),
    new IdeologyPart("maoism", [Color.RED, Color.YELLOW], [Symbol.HS_CN]),
    new IdeologyPart("juche", [Color.RED, Color.YELLOW], [Symbol.JUCHE]),
    new IdeologyPart("marxism", [Color.RED]),
    new IdeologyPart("leninism", [Color.RED, Color.YELLOW], [Symbol.HS_USSR]),
    new IdeologyPart("trotskyism", [Color.RED], [Symbol.TROTSKY]),
    new IdeologyPart("deng xiaoping thought", [Color.RED, Color.YELLOW], [Symbol.HS_CN]),
    new IdeologyPart("posadism", [Color.RED], [Symbol.TROTSKY]),
    new IdeologyPart("corporatism", [Color.RED]),
    new IdeologyPart("fascism", [], [Symbol.FASCES]),
    new IdeologyPart("nazism", [Color.RED], [Symbol.SWASTIKA]),
    new IdeologyPart("monarchism", [Color.PURPLE], [Symbol.CROWN]),
    new IdeologyPart("democracy", [Color.BLUE]),
    new IdeologyPart("liberalism", [Color.YELLOW], [Symbol.DOVE]),
    new IdeologyPart("libertarianism", [Color.YELLOW]),
    new IdeologyPart("centrism", [Color.WHITE]),
    new IdeologyPart("primitivism", [Color.DARKGREEN]),
    new IdeologyPart("anarchism", [Color.BLACK]),
    new IdeologyPart("mutualism", [Color.ORANGE]),
    new IdeologyPart("individualism", [Color.YELLOW]),
]

export {
    IdeologyPart,
    Color,
    Symbol,
    FlagType,
    prefixes,
    heads
};