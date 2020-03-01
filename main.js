const adjectives = [
    "trans-exclusionary",
    "classical",
    "orthodox",
    "post-left",
    "left",
    "right",
    "gender-abolitionist",
    "libertarian",
    "conservative",
    "egoist",
    "authoritarian",
    "christian",
    "islamic",
    "buddhist",
    "jewish",
    "green",
    "individualist",
    "collectivist",
    "democratic",
    "radical",
    "utopian",
    "scientific",
    "egalitarian",
    "hegelian",
    "marxist",
    "primitive",
    "liberal",
    "fascist",
    "state",
    "national",
    "international",
    "queer",
];
const attatchedPrefixes = [
    "anti-",
    "left-",
    "right-",
    "proto-",
    "post-",
    "neo-",
    "paleo-",
    "marxism-",
    "leninism-",
    "eco-",
    "techno-",
    "crypto-",
    "anarcho-",
    "anarcha-",
    "alt-",
    "cyber-",
    "ultra-",
];
const nouns = [
    "anarchism",
    "communism",
    "socialism",
    "maoism",
    "juche",
    "marxism",
    "leninism",
    "trotskyism",
    "dengism",
    "posadism",
    "corporatism",
    "fascism",
    "monarchism",
    "democracy",
    "liberalism",
    "libertarianism",
    "centrism",
    "primitivism",
    "anarchism",
    "mutualism",
    "individualism",
]

function generateIdeology() {
    document.getSelection()
        .removeAllRanges();
    var ideologyName = "";
    ideologyName = ideologyName
        .concat(adjectives[Math.floor(Math.random() * adjectives.length)])
        .concat(" ")
        .concat(attatchedPrefixes[Math.floor(Math.random() * attatchedPrefixes.length)])
        .concat(nouns[Math.floor(Math.random() * nouns.length)]);
    console.log(ideologyName);
    document.getElementById("ideologyLabel").textContent = ideologyName;
}