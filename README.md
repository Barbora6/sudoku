1. PROMĚNNÉ

let numSelected = null;
let tileSelected = null;
let errors = 0;

numSelected – uchovává vybrané číslo (např. pokud klikneš na číslo 5, uloží se sem).

tileSelected – není zde využito, ale mohlo by sloužit pro uchování vybrané dlaždice.

errors – počítá chyby hráče, pokud vloží nesprávné číslo.

---

let board = [
"--74916-5",
"2---6-3-9",
"-----7-1-",
"-586----4",
"--3----9-",
"--62--187",
"9-4-7---2",
"67-83----",
"81--45---"
];

let solution = [
"387491625",
"241568379",
"569327418",
"758619234",
"123784596",
"496253187",
"934176852",
"675832941",
"812945763"
];

board – reprezentuje herní pole (počáteční stav).

"-" znamená prázdné místo, kde hráč může doplnit číslo.

solution – obsahuje správné řešení Sudoku.

Používá se k porovnání, zda hráč umístil správné číslo.

---

3. Spuštění hry při načtení stránky

window.onload = function () {
setGame();
};

Jakmile se stránka načte, zavolá se funkce setGame(), která vytvoří herní prvky.

---

4. Funkce setGame() – Vytvoření čísel a mřížky
   Přidání čísel (1-9):

for (let i = 1; i <= 9; i++) {
let number = document.createElement("div");
number.id = i;
number.innerText = i;
number.addEventListener("click", selectNumber);
number.classList.add("number");
document.getElementById("digits").appendChild(number);
}

// V každém kroku smyčky:

// Vytvoří nový <div>.

// Nastaví jeho id na číslo (např. 1, 2, 3... až 9).

// Vloží do <div> text s číslem.

// Přidá CSS třídu "number" (pro pozdější stylování).

// Přidá <div> do HTML elementu s id="digits".

4.2. Vytvoření hracího pole (mřížky 9x9)

for (let r = 0; r < 9; r++) {
for (let c = 0; c < 9; c++) {
let tile = document.createElement("div");
tile.id = r.toString() + "-" + c.toString();

Pro každý řádek (r) a sloupec (c) se vytvoří prvek <div>.

Každé pole (tile) dostane unikátní ID ve formátu "řádek-sloupec" (např. "0-0", "3-5").

      // document.createElement("div") vytvoří nový HTML <div> pro každou buňku v mřížce.
      tile.id = r.toString() + "-" + c.toString();
      // Nastavení unikátního id pro každou buňku, které odpovídá jeho souřadnicím v mřížce.
      // První buňka (levý horní roh) dostane id="0-0".
      // Buňka v prvním řádku a třetím sloupci dostane id="0-2".
      // Poslední buňka (pravý dolní roh) dostane id="8-8"

4.3. Předvyplněná čísla

if (board[r][c] != "-") {
tile.innerText = board[r][c];
tile.classList.add("tile-start");
}

Pokud je v board[r][c] číslo (není "-"), pak se zobrazí v dané dlaždici (tile.innerText).

Dlaždice dostane třídu "tile-start", která se může použít pro styling (např. jiná barva pro původní čísla).

---

4.4. Přidání čar oddělujících bloky 3x3

if (r == 2 || r == 5) {
tile.classList.add("horizontal-line");
}
if (c == 2 || c == 5) {
tile.classList.add("vertical-line");
}

Přidává vizuální čáry mezi bloky 3x3 v Sudoku.

Třídy "horizontal-line" a "vertical-line" mohou být použity v CSS k vykreslení čar.

---

4.5. Přidání event listeneru a vložení do HTML

tile.addEventListener("click", selectTile);
tile.classList.add("tile");
document.getElementById("board").append(tile);

Každá dlaždice (tile) získá event listener na funkci selectTile(), což umožní hráči kliknout na pole a vložit číslo.

Dlaždice se přidá do HTML do prvku s ID "board".

---

5. Funkce selectNumber() – Výběr čísla

function selectNumber() {
if (numSelected != null) {
numSelected.classList.remove("number-selected");
}
numSelected = this;
numSelected.classList.add("number-selected");
}

Umožňuje hráči vybrat číslo (1-9).

Pokud už je nějaké číslo vybrané, odstraní se jeho zvýraznění.

Nové číslo se označí třídou "number-selected" (vizuální efekt v CSS).

6.  Funkce selectTile() – Výběr a umístění čísla
    function selectTile() {
    if (numSelected) {
    if (this.innerText != "") {
    return;
    }

Hráč klikne na dlaždici – pokud je vybrané číslo (numSelected), zkusí ho vložit.

Kontrola, zda je dlaždice prázdná – pokud ne, funkce skončí (return).

6.1. Získání souřadnic a porovnání s řešením

let coards = this.id.split("-");
let r = parseInt(coards[0]);
let c = parseInt(coards[1]);

if (solution[r][c] == numSelected.id) {
this.innerText = numSelected.id;
} else {
errors += 1;
document.getElementById("errors").innerText = errors;
}

Rozdělí ID ("3-5") na čísla r=3, c=5.

Porovná číslo v řešení (solution[r][c]) s vybraným číslem (numSelected.id).

Pokud je číslo správné, vloží ho do dlaždice.

Pokud je číslo špatné, zvýší počet chyb a zobrazí je v HTML prvku s ID "errors".

---

✅ setGame()

Vytvoří čísla (1-9) a přidá je do HTML.

Vytvoří mřížku 9x9 a naplní ji počátečními čísly.

✅ selectNumber()

Umožní vybrat číslo 1-9.

✅ selectTile()

Hráč klikne na prázdnou dlaždici a vloží vybrané číslo.

Porovná vložené číslo se správným řešením.

Pokud je číslo špatné, zvýší se počet chyb (errors).
