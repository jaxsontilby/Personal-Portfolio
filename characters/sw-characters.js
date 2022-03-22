import { people } from "../data/people.js";
import { getLastNumber, removeChildren } from "../utilities/index.js";

const header = document.querySelector("header");
const main = document.querySelector("main");

const allCharactersButton = document.createElement("button");
allCharactersButton.textContent = "All Characters";
allCharactersButton.addEventListener("click", function () {
  populateDom(people);
});

const maleCharacters = people.filter(person => person.gender === 'male')


const maleCharactersButton = document.createElement('button')
maleCharactersButton.textContent = 'Male Characters'
maleCharactersButton.addEventListener('click', () => populateDom(maleCharacters))


header.appendChild(allCharactersButton);
header.appendChild(maleCharactersButton)

function populateDom(characters) {
  // loop through all the characters and make figure elements
  removeChildren(main)
  characters.forEach((person) => {
    const personFig = document.createElement("figure")
    const personImg = document.createElement("img")

    let characterNum = getLastNumber(person.url)

    personImg.src = `https://starwars-visualguide.com/assets/img/characters/${characterNum}.jpg`
    const personCap = document.createElement("figcaption")
    personCap.textContent = person.name

    personFig.appendChild(personImg)
    personFig.appendChild(personCap)
    main.appendChild(personFig)
  })
}
