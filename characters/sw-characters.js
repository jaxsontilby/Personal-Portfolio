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

const femaleCharacters = people.filter(person => person.gender === 'female')

const femaleCharactersButton = document.createElement('button')
femaleCharactersButton.textContent = 'Female Characters'
femaleCharactersButton.addEventListener('click', () => populateDom(femaleCharacters))

const otherCharacters = people.filter(person => person.gender === 'other')

const otherCharactersButton = document.createElement('button')
otherCharactersButton.textContent = 'Other Characters'
otherCharactersButton.addEventListener('click', () => populateDom(otherCharacters))

header.appendChild(allCharactersButton);
header.appendChild(maleCharactersButton);
header.appendChild(femaleCharactersButton);
header.appendChild(otherCharactersButton);

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

populateDom(people)