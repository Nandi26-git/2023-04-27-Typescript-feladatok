function DiakInfo(nev, csoport, típus) {
    var tanulonev = nev;
    var team = csoport < 10 ? "[Team0".concat(csoport, "]") : "[Team".concat(csoport, "]");
    var kepzes = típus ? "– Junior Frontend" : "– Webprogramozó";
    return tanulonev + " " + team + " " + kepzes;
}
DiakInfo("Minta Márton", 8, true);
function SzovegesErtekeles(jegy) {
    if (jegy > 5 || jegy < 2) {
        return "Hibás érték";
    }
    if (jegy === 5) {
        return ["Példás", "Példás"];
    }
    if (jegy === 4) {
        return ["Jó", "Jó"];
    }
    if (jegy === 3) {
        return ["Változó", "Változó"];
    }
    return ["Hanyag", "Rossz"];
}
SzovegesErtekeles(2);
function HarommalOszthatokSzama(szamTomb) {
    var eredmeny = 0;
    szamTomb.forEach(function (szam) {
        if (szam % 3 === 0)
            eredmeny++;
    });
    return eredmeny;
}
HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]);
function Nyeroszamok(mennyiseg, alsoHatar, felsoHatar) {
    var szamok = [];
    for (var i = 0; i < mennyiseg; i++) {
        var generaltSzam = Math.floor(Math.random() * (felsoHatar - alsoHatar + 1) + alsoHatar);
        if (szamok.includes(generaltSzam)) {
            i--;
        }
        else {
            szamok.push(generaltSzam);
        }
    }
    return szamok;
}
Nyeroszamok(5, 1, 90);
