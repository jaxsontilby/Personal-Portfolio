import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives.js'

const allCongressMembers = [...senators, ...representatives]

const senatorDiv = document.querySelector('.senatorsDiv')
const seniorityHeading = document.querySelector('.seniority')
const loyaltyList = document.querySelector('.loyaltyList')
function simplifiedSenators() {
    return senators.map(senator => {
        const middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
        return {
            id: senator.id,
            name: `${senator.first_name}${middleName}${senator.last_name}`,
            party: senator.party,
            gender: senator.gender,
            imgUrl: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
            seniority: +senator.seniority,
            missedVotesPct: senator.missed_votes_pct,
            loyaltyPct: senator.votes_with_party_pct
        }
    })
}

const simpleSenators = simplifiedSenators()

function populateSenatorDiv(senatorArray) {
    simpleSenators.forEach(senator => {
        const senFigure = document.createElement('figure')
        const figImg = document.createElement('img')
        const figCaption = document.createElement('figcaption')

        figImg.src = senator.imgUrl
        figCaption.textContent = senator.name

        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senatorDiv.appendChild(senFigure)
    })
}

populateSenatorDiv(simpleSenators)

const mostSeniorMember = simplifiedSenators().reduce((acc, senator) => {
    return acc.seniority > senator.seniority ? acc : senator
})

const biggestVacationerList = simplifiedSenators().filter (senator => senator.missedVotesPct === biggestMissedVotesPct.missedVotesPct).map(senator => senator.name).join()

const biggestMissedVotesPct = simplifiedSenators().reduce((acc, senator) => acc.missedVotesPct > senator. missedVotesPct ? acc : senator)

console.log(biggestMissedVotesPct.missedVotesPct)

seniorityHeading.textContent = `The most senior member of the senate is ${mostSeniorMember.name} and the biggest vacationers are ${biggestVacationerList}` 


simplifiedSenators().forEach(senator => {
    if(senator.loyaltyPct === 100) {
        let listItem = document.createElement('li')
        listItem.textContent = senator.name
        loyaltyList.appendChild(listItem)
    }
})

