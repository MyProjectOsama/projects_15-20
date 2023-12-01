let ana = document.getElementById('ana');
let alt = document.getElementById('alt');
let elementbasma = document.getElementsByClassName('element');
let osama = 5;
let baba = document.getElementById('baba');
let anne = document.getElementById('anne');
let baslik = document.getElementById('baslik');
let altbaslik = document.getElementById('altbaslik');
let karebir = document.getElementsByClassName('kaer')[3];
let kareiki = document.getElementsByClassName('kaer')[2];
let kareuc = document.getElementsByClassName('kaer')[1];
let karedort = document.getElementsByClassName('kaer')[0];
let yazbir = document.getElementsByClassName('h5')[0];
let yaziki = document.getElementsByClassName('h5')[3];
let yazuc = document.getElementsByClassName('h5')[2];
let yazdort = document.getElementsByClassName('h5')[1];
let elementsembolalt = [
    "Ce",
    "Pr",
    "Nd",
    "Pm",
    "Sm",
    "Eu",
    "Gd",
    "Tb",
    "Dy",
    "Ho",
    "Er",
    "Tm",
    "Yb",
    "Lu",
    "Th",
    "Pa",
    "U",
    "NP",
    "Pu",
    "Am",
    "Cm",
    "Bk",
    "Cf",
    "Es",
    "Fm",
    "Md",
    "No",
    "Lr",
]
let elementsembolust = [
    "H",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "He",
    "Li",
    "Be",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "B",
    "C",
    "N",
    "O",
    "F",
    "Ne",
    "Na",
    "Mg",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "Al",
    "Si",
    "P",
    "S",
    "Cl",
    "Ar",
    "K",
    "Ca",
    "Sc",
    "Ti",
    "V",
    "Cr",
    "Mn",
    "Fe",
    "Co",
    "Ni",
    "Cu",
    "Zn",
    "Ga",
    "Ge",
    "As",
    "Se",
    "Br",
    "Kr",
    "Rb",
    "Sr",
    "Y",
    "Zr",
    "Nb",
    "Mo",
    "Tc",
    "Ru",
    "Rh",
    "Pd",
    "Ag",
    "Cd",
    "In",
    "Sn",
    "Sb",
    "Te",
    "I",
    "Xe",
    "Cs",
    "Ba",
    "LA",
    "Hf",
    "Ta",
    "W",
    "Re",
    "Os",
    "Ir",
    "Pt",
    "Au",
    "Hg",
    "Tl",
    "Pb",
    "Bi",
    "Po",
    "At",
    "Rn",
    "Fr",
    "Ra",
    "Ac",
    "Rf",
    "Db",
    "Sg",
    "Bh",
    "Hs",
    "Mt",
    "Ds",
    "Rg",
    "Cn",
    "Nh",
    "Fl",
    "Mg",
    "Lv",
    "Ts",
    "Og",

]
for (let i = 0; i < 43; i++) {
    let h6 = document.getElementsByTagName('h6')[i];
    h6.classList.add("fount");
}

function usttablo(a) {
    let anadiv = document.createElement('div');
    anadiv.innerHTML = `<p>${elementsembolust[a]}</p>`;
    anadiv.classList.add("element", "black");
    ana.appendChild(anadiv);
    if (a == 1 || a == 2 || a == 3 || a == 4 || a == 5 || a == 6 || a == 7 || a == 8 || a == 9 || a == 10 || a == 11 || a == 12 || a == 13 || a == 14 || a == 15 || a == 16 || a == 20 || a == 21 || a == 22 || a == 23 || a == 24 || a == 25 || a == 26 || a == 27 || a == 28 || a == 29 || a == 38 || a == 39 || a == 40 || a == 41 || a == 42 || a == 43 || a == 44 || a == 45 || a == 46 || a == 47) {
        anadiv.classList.add("hiden");
    }
}
for (let i = 0; i < 126; i++) {
    usttablo(a = i);
}

function alttablo(e = 1) {

    let altdiv = document.createElement('div');
    altdiv.innerHTML = `<p>${elementsembolalt[e]}</p>`;
    altdiv.classList.add("element", "black");
    alt.appendChild(altdiv);
}
for (let i = 0; i < 28; i++) {
    alttablo(e = i);
}
setTimeout(function() {
    baba.classList.remove("none");
    anne.classList.add("none");
}, 3000);
while (osama == 5) {
    for (let i = 0; i < 200; i++) {
        let onelement = document.querySelectorAll('.element')[i];
        onelement.onclick = function() {
            if (i == 0 || i == 31 || i == 32 || i == 33 || i == 34 || i == 50 || i == 51 || i == 52 || i == 69 || i == 70 || i == 88) {
                onelement.classList.toggle("red");
                onelement.classList.add("transform");
                setTimeout(function() {
                    onelement.classList.remove("transform");
                }, 800)
            } else if (i == 17 || i == 35 || i == 53 || i == 71 || i == 89 || i == 107) {
                onelement.classList.toggle("prpl");
                onelement.classList.add("transform");
                setTimeout(function() {
                    onelement.classList.remove("transform");
                }, 800)
            } else if (i == 30 || i == 49 || i == 67 || i == 68 || i == 86 || i == 87 || i == 105 || i == 106) {
                onelement.classList.toggle("green");
                onelement.classList.add("transform");
                setTimeout(function() {
                    onelement.classList.remove("transform");
                }, 800)
            } else {
                onelement.classList.toggle("white");
                onelement.classList.add("transform");
                setTimeout(function() {
                    onelement.classList.remove("transform");
                }, 800)
            }

        }
        karebir.onclick = function() {
            for (let i = 0; i < 200; i++) {
                let onelement = document.querySelectorAll('.element')[i];
                if (i == 0 || i == 31 || i == 32 || i == 33 || i == 34 || i == 50 || i == 51 || i == 52 || i == 69 || i == 70 || i == 88) {
                    onelement.classList.remove("red");
                }
            }
        }
        kareiki.onclick = function() {
            for (let i = 0; i < 200; i++) {
                let onelement = document.querySelectorAll('.element')[i];
                if (i == 17 || i == 35 || i == 53 || i == 71 || i == 89 || i == 107) {
                    onelement.classList.remove("prpl");
                }
            }
        }
        kareuc.onclick = function() {
            for (let i = 0; i < 200; i++) {
                let onelement = document.querySelectorAll('.element')[i];
                if (i == 30 || i == 49 || i == 67 || i == 68 || i == 86 || i == 87 || i == 105 || i == 106) {
                    onelement.classList.remove("green");
                }
            }
        }
        karedort.onclick = function() {
            for (let i = 0; i < 200; i++) {
                let onelement = document.querySelectorAll('.element')[i];
                if (i == 0 || i == 31 || i == 32 || i == 33 || i == 34 || i == 50 || i == 51 || i == 52 || i == 69 || i == 70 || i == 88) {

                } else if (i == 17 || i == 35 || i == 53 || i == 71 || i == 89 || i == 107) {

                } else if (i == 30 || i == 49 || i == 67 || i == 68 || i == 86 || i == 87 || i == 105 || i == 106) {

                } else {
                    onelement.classList.remove("white");
                }
            }
        }
        yazbir.onclick = function() {
            for (let i = 0; i < 200; i++) {
                let onelement = document.querySelectorAll('.element')[i];
                if (i == 0 || i == 31 || i == 32 || i == 33 || i == 34 || i == 50 || i == 51 || i == 52 || i == 69 || i == 70 || i == 88) {
                    onelement.classList.add("red");
                }
            }
        }
        yaziki.onclick = function() {
            for (let i = 0; i < 200; i++) {
                let onelement = document.querySelectorAll('.element')[i];
                if (i == 17 || i == 35 || i == 53 || i == 71 || i == 89 || i == 107) {
                    onelement.classList.add("prpl");
                }
            }
        }
        yazuc.onclick = function() {
            for (let i = 0; i < 200; i++) {
                let onelement = document.querySelectorAll('.element')[i];
                if (i == 30 || i == 49 || i == 67 || i == 68 || i == 86 || i == 87 || i == 105 || i == 106) {
                    onelement.classList.add("green");
                }
            }
        }
        yazdort.onclick = function() {
            for (let i = 0; i < 200; i++) {
                let onelement = document.querySelectorAll('.element')[i];
                if (i == 0 || i == 31 || i == 32 || i == 33 || i == 34 || i == 50 || i == 51 || i == 52 || i == 69 || i == 70 || i == 88) {

                } else if (i == 17 || i == 35 || i == 53 || i == 71 || i == 89 || i == 107) {

                } else if (i == 30 || i == 49 || i == 67 || i == 68 || i == 86 || i == 87 || i == 105 || i == 106) {

                } else {
                    onelement.classList.add("white");
                }
            }
        }
        baslik.onclick = function() {
            baslik.classList.add("transformbaslik");
            setTimeout(function() {
                baslik.classList.remove("transformbaslik");
            }, 800);
            for (let i = 0; i < 200; i++) {
                let onelement = document.querySelectorAll('.element')[i];
                if (i == 0 || i == 31 || i == 32 || i == 33 || i == 34 || i == 50 || i == 51 || i == 52 || i == 69 || i == 70 || i == 88) {
                    onelement.classList.remove("red");
                } else if (i == 17 || i == 35 || i == 53 || i == 71 || i == 89 || i == 107) {
                    onelement.classList.remove("prpl");
                } else if (i == 30 || i == 49 || i == 67 || i == 68 || i == 86 || i == 87 || i == 105 || i == 106) {
                    onelement.classList.remove("green");
                } else {
                    onelement.classList.remove("white");
                }
            }
        }
        altbaslik.onclick = function() {
            altbaslik.classList.add("transformaltbaslik");
            setTimeout(function() {
                altbaslik.classList.remove("transformaltbaslik");
            }, 800);
            for (let i = 0; i < 200; i++) {
                let onelement = document.querySelectorAll('.element')[i];
                if (i == 0 || i == 31 || i == 32 || i == 33 || i == 34 || i == 50 || i == 51 || i == 52 || i == 69 || i == 70 || i == 88) {
                    onelement.classList.add("red");

                } else if (i == 17 || i == 35 || i == 53 || i == 71 || i == 89 || i == 107) {
                    onelement.classList.add("prpl");
                } else if (i == 30 || i == 49 || i == 67 || i == 68 || i == 86 || i == 87 || i == 105 || i == 106) {
                    onelement.classList.add("green");
                } else {
                    onelement.classList.add("white");
                }
            }
        }
    }


}