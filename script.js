const scenes = {
  start: {
    title: "Arly sin klasse",
    description: "Timen starter rolig helt til Arly gliser mot deg og roper at dere skal MAMPE. Du får to sjanser til å reagere.",
    caption: "Velg om du vil fyre ham opp eller prøve å få slippe ut.",
    image: "Images/Picture 1.png",
    alt: "Arly står foran klassen og sier at dere skal MAMPE.",
    theme: "calm",
    choices: [
      { text: "Fortelle han å holde kjeft", next: "mouthOff" },
      { text: "Spørre om å gå på do", next: "bathroomRequest" }
    ]
  },
  mouthOff: {
    title: "Du fyrer ham opp",
    description: "Du ber Arly holde kjeft. Smilet blir smalere, øynene skarpere, og hele klasserommet blir stille.",
    caption: "Han er sint nå, men fortsatt ikke ferdig med deg.",
    image: "Images/IMAGES TO USE!/Option 1 picture 1.png",
    alt: "Arly blir sint etter at du svarer tilbake.",
    theme: "warning",
    choices: [
      { text: "Prøve å roe ham ned", next: "apologize" },
      { text: "Provosere ham enda mer", next: "challenge" }
    ]
  },
  apologize: {
    title: "Skummel våpenhvile",
    description: "Du glatter over det, men Arly går fra sint til altfor interessert. Nå smiler han som om dere har en avtale.",
    caption: "Den dårlige nyheten: han er ikke lenger sint. Den verre nyheten: han liker deg.",
    image: "Images/IMAGES TO USE!/eoeoeoeoe.png",
    alt: "Arly ser plutselig begeistret ut etter at du roer ham ned.",
    theme: "mint",
    choices: [
      { text: "Spille med på galskapen", next: "ending-partners" },
      { text: "Bruke øyeblikket til å gli unna", next: "ending-slipAway" }
    ]
  },
  challenge: {
    title: "Klasseromsduell",
    description: "Du nekter å backe ned. Arly finner fram boksehansker midt i timen og erklærer at dette skal avgjøres her og nå.",
    caption: "To valg. Ingen voksne kommer til å hjelpe deg.",
    image: "Images/IMAGES TO USE!/pictureeeee.png",
    alt: "Arly tar på seg boksehansker i klasserommet.",
    theme: "danger",
    choices: [
      { text: "Ta imot kampen", next: "ending-knocked" },
      { text: "Slå ham med en fisk", next: "ending-fish" }
    ]
  },
  bathroomRequest: {
    title: "Kan jeg gå på do?",
    description: "Du spør om hallpass. Arly sier ja, men bare på sin egen, svært skumle måte.",
    caption: "Han vil fortsatt ha kontroll på hvert steg du tar.",
    image: "Images/Option 2 picture 1.png",
    alt: "Du spør Arly om å få gå på do.",
    theme: "calm",
    choices: [
      { text: "Ja greit, kom da med", next: "guidedHall" },
      { text: "Nei, la meg gå alene", next: "aloneHall" }
    ]
  },
  guidedHall: {
    title: "Han følger etter",
    description: "I gangen blir det bare verre. Arly følger rett bak deg og begynner å smile som om dette er en date.",
    caption: "Jo lenger bort fra klassen du kommer, jo rarere blir han.",
    image: "Images/IMAGES TO USE!/smily.png",
    alt: "Arly følger etter deg i gangen og smiler truende.",
    theme: "mint",
    choices: [
      { text: "La ham følge deg helt inn", next: "bananaTrap" },
      { text: "Prøv å banke ham opp", next: "hallwayFight" }
    ]
  },
  aloneHall: {
    title: "Du går alene",
    description: "Du insisterer på å gå selv, men han slipper deg ikke helt ut av syne. Fra dørsprekken følger han med.",
    caption: "Du er alene i teorien. Ikke i praksis.",
    image: "Images/IMAGES TO USE!/hanersur.png",
    alt: "Arly kikker ut fra døren mens du står i gangen.",
    theme: "sun",
    choices: [
      { text: "Prøv å løpe unna", next: "ending-caught" },
      { text: "Faktisk gå på do", next: "stallTrap" }
    ]
  },
  bananaTrap: {
    title: "Skummel hallpass-felle",
    description: "Med Arly bak deg er du aldri trygg.",
    caption: "Du må velge om du vil flykte eller bare overleve øyeblikket.",
    image: "Images/IMAGES TO USE!/cddvfffr.png",
    alt: "Arly står i banankostyme på skoletoalettet.",
    theme: "sun",
    choices: [
      { text: "Klatre ut vinduet", next: "ending-bananaEscape" },
      { text: "Bare stå helt stille", next: "ending-bananaCurse" }
    ]
  },
  hallwayFight: {
    title: "Slåsskamp ved doen",
    description: "Du går løs på ham i gangen. Du treffer faktisk, men Arly er fortsatt på beina og nå er han bare mer aggressiv.",
    caption: "Dette ble ikke en rask løsning.",
    image: "Images/IMAGES TO USE!/ediieirirfiririoriririrrir.png",
    alt: "Arly er skadet, men fortsatt klar til å slåss i gangen.",
    theme: "danger",
    choices: [
      { text: "Fortsett til han går ned", next: "ending-teacherDown" },
      { text: "Back unna og lås deg inn", next: "ending-toxicRage" }
    ]
  },
  stallTrap: {
    title: "Feil bås",
    description: "Du går inn på do og ser en kropp ligge på gulvet. Nå er det for sent å late som dette bare var en vanlig hallpass.",
    caption: "Velg fort. Noe i rommet vil at du skal bli.",
    image: "Images/IMAGES TO USE!/rfefef.png",
    alt: "Et mørkt skoletoalett med en kropp på gulvet.",
    theme: "night",
    choices: [
      { text: "Snu og løp", next: "ending-undead" },
      { text: "Kikk nærmere", next: "ending-bloodyHand" }
    ]
  },
  "ending-partners": {
    title: "Slutt 1: Arlys favoritt",
    description: "Du spiller med. Resten av skoleåret blir du hans faste sidekick, og ingen skjønner helt om du vant eller tapte.",
    caption: "Du overlevde, men på en veldig tvilsom måte.",
    image: "Images/IMAGES TO USE!/eoeoeoeoe.png",
    alt: "Arly ser ekstremt fornøyd ut etter at du spiller med.",
    theme: "mint",
    ending: true
  },
  "ending-slipAway": {
    title: "Slutt 2: Du glapp unna",
    description: "Mens Arly drømmer seg bort, rygger du ut av rommet, ned gangen og helt ut av skolen før han våkner igjen.",
    caption: "Noen ganger er den beste planen bare å forsvinne.",
    image: "Images/IMAGES TO USE!/hanersur.png",
    alt: "En tom skolegang mens Arly kikker etter deg fra døren.",
    theme: "calm",
    ending: true
  },
  "ending-knocked": {
    title: "Slutt 3: Slått i bakken",
    description: "Du tar kampen, men Arly har ventet på dette hele dagen. Klasserommet blir ringen, og du går ned før friminuttet.",
    caption: "Han kalte det undervisning. Alle andre kalte det katastrofe.",
    image: "Images/IMAGES TO USE!/di9dieidei.png",
    alt: "Arly står klar til kamp med boksehansker på.",
    theme: "danger",
    ending: true
  },
  "ending-fish": {
    title: "Slutt 4: Fiskeslaget",
    description: "Du griper det nærmeste våpenet du finner: en fisk. Det virker sjokkerende bra, og Arly går rett i bakken av ren fornærmelse.",
    caption: "Ingen i klassen kommer til å glemme dette slaget.",
    image: "Images/IMAGES TO USE!/Fisk option.png",
    alt: "En fisk treffer Arly i ansiktet i klasserommet.",
    theme: "warning",
    ending: true
  },
  "ending-caught": {
    title: "Slutt 5: Tatt i gangen",
    description: "Du prøver å løpe, men Arly var allerede ett steg foran. Hallpassen var en felle hele tiden.",
    caption: "Det var aldri meningen at du skulle komme deg langt.",
    image: "Images/IMAGES TO USE!/smily.png",
    alt: "Arly står i gangen og blokkerer veien din.",
    theme: "mint",
    ending: true
  },
  "ending-bananaEscape": {
    title: "Slutt 6: Bananflukt",
    description: "Du kaster opp vinduet, hopper ut og forsvinner før noen rekker å forklare hvorfor Arly var kledd som banan.",
    caption: "Et kaotisk, men effektivt rømningsforsøk.",
    image: "Images/IMAGES TO USE!/eieieiei.png",
    alt: "Arly i banankostyme på skoletoalettet.",
    theme: "sun",
    ending: true
  },
  "ending-bananaCurse": {
    title: "Slutt 7: Han forsvinner, men ikke uten konsekvenser..",
    description: "Du blir stående stille, og Arly bestemmer og haunte deg for evig... du er frytert/stekt..",
    caption: "Det finnes skjebner som er verre enn anmerkning.",
    image: "Images/IMAGES TO USE!/Mapmepd.png",
    alt: "Cooked død.",
    theme: "danger",
    ending: true
  },
  "ending-teacherDown": {
    title: "Slutt 8: Læreren går ned",
    description: "Du fullfører slåsskampen og Arly kollapser ved doene. Ingen vet helt hva som skjedde, men du får i hvert fall fred.",
    caption: "Skolen får mange spørsmål etterpå. Du svarer ingen.",
    image: "Images/IMAGES TO USE!/rfefef.png",
    alt: "Arly ligger på gulvet på skoletoalettet.",
    theme: "night",
    ending: true
  },
  "ending-toxicRage": {
    title: "Slutt 9: Giftig raseri",
    description: "Du låser deg inne, men Arly kommer tilbake grønn, glisende og klar for runde to. Nå eier han hele doen.",
    caption: "Noen bosskamper burde aldri få fase to.",
    image: "Images/IMAGES TO USE!/eideojdwejd.png",
    alt: "En grønn og truende Arly med boksehansker på skoletoalettet.",
    theme: "danger",
    ending: true
  },
  "ending-undead": {
    title: "Slutt 10: Det reiser seg igjen",
    description: "Du snur for å løpe, men kroppen på gulvet begynner å røre på seg. Nå er du fanget mellom to versjoner av Arly.",
    caption: "Flukt var riktig valg. Bare litt for sent.",
    image: "Images/IMAGES TO USE!/scmdcksdckscjs.png",
    alt: "En grønn kropp ligger på gulvet på skoletoalettet.",
    theme: "night",
    ending: true
  },
  "ending-bloodyHand": {
    title: "Slutt 11: Blodig hånd",
    description: "Du bøyer deg ned for å se nærmere. Noe annet rekker deg først, og historien slutter der.",
    caption: "Hallpass avslått. Permanent.",
    image: "Images/IMAGES TO USE!/creepy-bloody-hand-reaching-out-in-the-dark-for-horror-theme-photo.jpg",
    alt: "En blodig hånd strekker seg ut i mørket.",
    theme: "danger",
    ending: true
  }
};

const sceneTitle = document.getElementById("sceneTitle");
const sceneDescription = document.getElementById("sceneDescription");
const sceneImage = document.getElementById("sceneImage");
const sceneCaption = document.getElementById("sceneCaption");
const choiceStrip = document.getElementById("choiceStrip");
const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const endingPanel = document.getElementById("endingPanel");
const endingTitle = document.getElementById("endingTitle");
const endingText = document.getElementById("endingText");
const restartBtn = document.getElementById("restartBtn");
const endingCount = document.getElementById("endingCount");
const endingTotal = document.getElementById("endingTotal");

let currentSceneId = "start";
const unlockedEndings = new Set();
const totalEndings = Object.values(scenes).filter((scene) => scene.ending).length;

function updateEndingMenu() {
  endingCount.textContent = String(unlockedEndings.size);
  endingTotal.textContent = String(totalEndings);
}

function showEnding(scene) {
  unlockedEndings.add(currentSceneId);
  updateEndingMenu();
  choiceStrip.hidden = true;
  endingPanel.hidden = false;
  endingTitle.textContent = scene.title;
  endingText.textContent = scene.description;
}

function showChoices(scene) {
  const [firstChoice, secondChoice] = scene.choices;
  choiceA.textContent = firstChoice.text;
  choiceB.textContent = secondChoice.text;
  choiceA.onclick = () => renderScene(firstChoice.next);
  choiceB.onclick = () => renderScene(secondChoice.next);
  choiceStrip.hidden = false;
  endingPanel.hidden = true;
}

function renderScene(sceneId) {
  const scene = scenes[sceneId];

  if (!scene) {
    console.warn(`Manglende scene: ${sceneId}`);
    return;
  }

  currentSceneId = sceneId;
  document.body.dataset.theme = scene.theme;
  sceneTitle.textContent = scene.title;
  sceneDescription.textContent = scene.description;
  sceneImage.src = scene.image;
  sceneImage.alt = scene.alt;
  sceneCaption.textContent = scene.caption;

  if (scene.ending) {
    showEnding(scene);
    return;
  }

  showChoices(scene);
}

restartBtn.addEventListener("click", () => {
  renderScene("start");
});

updateEndingMenu();
renderScene(currentSceneId);
