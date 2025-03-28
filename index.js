// https://www.youtube.com/watch?v=S4uRtTb8U-U&t=3s

let numSelected = null;
let tileSelected = null;

let errors = 0;

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

window.onload = function () {
  setGame();
};

// window.onload je událost, která se spustí, jakmile se celá webová stránka načte.

// function () { setGame(); } znamená, že po načtení stránky se zavolá funkce setGame().

function setGame() {
  // Digits 1-9
  for (let i = 1; i <= 9; i++) {
    // Spustí se for smyčka, která projde čísla od 1 do 9 (i = 1; i <= 9; i++)
    //<div></div>
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

  // VYTVOŘENÍ MŘÍŽKY 9x9:

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let tile = document.createElement("div");
      // document.createElement("div") vytvoří nový HTML <div> pro každou buňku v mřížce.
      tile.id = r.toString() + "-" + c.toString();
      // Nastavení unikátního id pro každou buňku, které odpovídá jeho souřadnicím v mřížce.
      // První buňka (levý horní roh) dostane id="0-0".
      // Buňka v prvním řádku a třetím sloupci dostane id="0-2".
      // Poslední buňka (pravý dolní roh) dostane id="8-8".
      tile.addEventListener("click", selectTile);
      tile.classList.add("tile");
      document.getElementById("board").append(tile);
      // document.getElementById("board") najde element <div id="board"> v HTML.
      // .append(tile) přidá vytvořenou buňku (tile) dovnitř <div id="board">.
      //  <div id="0-0" class="tile"></div>
    }
  }
}

// První for cyklus (let r = 0; r < 9; r++) iteruje řádky (r = 0 až 8, celkem 9 řádků).

// Druhý for cyklus (let c = 0; c < 9; c++) iteruje sloupce (c = 0 až 8, celkem 9 sloupců).

// Tímto způsobem se projdou všechny kombinace řádku a sloupce, což dohromady vytvoří 9×9 = 81 prvků.

// FUNKCE - VÝBĚR ČÍSLA

function selectNumber() {
  if (numSelected != null) {
    numSelected.classList.remove("number-selected");
    // Zruší předchozí výběr čísla

    // Pokud existuje nějaké vybrané číslo (numSelected != null), odstraní mu CSS třídu "number-selected".

    // To znamená, že staré číslo přestane být vizuálně označené.
  }
  numSelected = this;
  numSelected.classList.add("number-selected");
}

// Nastaví nové vybrané číslo

// numSelected = this; → Uloží vybrané číslo do proměnné numSelected.

// this odkazuje na prvek, na který bylo kliknuto (např. <div class="number">1</div>).

// Přidá třídě "number-selected" vizuální efekt

// Nově vybrané číslo dostane CSS třídu "number-selected", která ho zvýrazní.

function selectTile() {
  if (numSelected) {
    this.innerText = numSelected.id;
  }
}

// 1.Zkontroluje, zda je vybrané číslo (numSelected)

// Pokud žádné číslo není vybráno, funkce neprovede nic.

// 2. Vloží vybrané číslo do dlaždice

// this.innerText = numSelected.id;

// this znamená dlaždici, na kterou uživatel klikl.

// numSelected.id obsahuje číslo (např. "5"), které se zobrazí uvnitř dlaždice.
