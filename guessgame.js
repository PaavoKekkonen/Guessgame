////////////////// A R V A U S P E L I ///////////////////

/*
 * Arvauspelissä tehtäväsi on arpoa luku esimerkiksi yhden
 * ja kymmenen väliltä ja sitten antaa käyttäjän arvata
 * numeroa kunnes hän arvaa oikein. Pelin voi myös aloittaa
 * alusta.
 *
 * Tehtävän maksimimistemäärä on 10p
 */

/*
 * Mikäli käytät VSCodea, voit asentaa Live Server -laajennuksen,
 * joka luo sinulle palvelimen ja päivittää sivun aina kun tallennat
 * tiedoston. Tämä helpottaa kehitystyötä, koska sinun ei tarvitse
 * käynnistää palvelinta erikseen.
 *
 * Live Serverin asennusohjeet:
 * https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
 *
 */

/*
 * Tee tähän muuttuja, johon arvattava numero tallennetaan.
 * Muuttuja on funktioiden ulkopuolella, jotta se näkyy myös
 * muihin funktioihin.
 */

/* Start-funktiota kutsutaan heti kun sivu ladataan, mutta
 * numeromuuttuja on alustettava ennen tätä.
 */
start();

/*
 * Kirjoita tähän koodi, joka arpoo satunnaisnumeron,
 * ja tallentaa sen yo. muuttujaan.
 * Math.random() on hyvä tapa tuottaa satunnaislukuja,
 * ja esimerkiksi Math.floor() on helppo tapa muodostaa
 * desimaaliluvusta kokonaisluku jättämällä desimaalit
 * pois.
 */
function start() {
  console.log("Start");
}

/*
 * Lisätään guessButton-napille kuuntelija, joka kutsuu
 * numeronarvausfunktiota.
 *
 * Tämä tarkoittaa sitä, että joka kerta kun käyttäjä painaa nappia,
 * funktio guessNumber() suoritetaan.
 */

const guessButton = document.querySelector("#guessButton");
guessButton.addEventListener("click", function (event) {
  guessNumber();
});

/*
 * Kirjoita tähän koodi, joka ottaa arvon
 * tekstikentästä, tarkistaa onko se isompi, pienempi
 * vai oikea numero, ja antaa käyttäjälle palautteen
 * feedback-diviin. Voit lisätä palautteelle luokan
 * too-small tai too-big näyttääksesi palautteen myös
 * värinä. Tyhjennä samalla tekstikenttä uutta arvausta
 * varten.
 * Käytettäviä eri elementtejä voi hakea
 * document.getElementById()-funktiolla. Feedback-
 * elementin sisälle voi asettaa html-sisältöä innerHTML-
 * muuttujalla.
 */
function guessNumber() {
  console.log("Guess made");

  /*
   * Suosittelemme käyttämään switch/case rakennetta
   * tässä tehtävässä, mutta voit käyttää myös if-else
   * ketjua
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
   */
}

/*
 * Lisää samanlainen kuuntelija kuin yllä myös reset-napille
 * (id resetButton) ja kutsu siinä reset()-funktiota.
 */

function reset() {
  console.log("Reset");
}
