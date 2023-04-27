function DiakInfo(nev: string, csoport: number, típus: boolean): string {
    let tanulonev: string = nev;
    let team: string = csoport < 10 ? `[Team0${csoport}]` : `[Team${csoport}]`;
    let kepzes: string = típus ? "– Junior Frontend" : "– Webprogramozó";
    return tanulonev + " " + team + " " + kepzes;
}

DiakInfo("Minta Márton", 8, true);

function SzovegesErtekeles(jegy: number): [string, string] | string {
    if (jegy > 5 || jegy < 2) {
        return "Hibás érték"
    }
    if (jegy === 5) {
        return ["Példás", "Példás"]
    }
    if (jegy === 4) {
        return ["Jó", "Jó"]
    }
    if (jegy === 3) {
        return ["Változó", "Változó"]
    }
    return ["Hanyag", "Rossz"]
}

SzovegesErtekeles(2);

function HarommalOszthatokSzama(szamTomb: number[]): number {
    let eredmeny: number = 0;
    szamTomb.forEach((szam) => { if (szam % 3 === 0) eredmeny++ })
    return eredmeny
}

HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]);

function Nyeroszamok(mennyiseg: number, alsoHatar: number, felsoHatar: number): number[] {
    let szamok: number[] = [];
    for (let i: number = 0; i < mennyiseg; i++) {
        let generaltSzam = Math.floor(Math.random() * (felsoHatar - alsoHatar + 1) + alsoHatar)
        if (szamok.includes(generaltSzam)) {
            i - 1;
        } else { szamok.push(generaltSzam) }
    }
    return szamok
}

Nyeroszamok(5, 1, 90);