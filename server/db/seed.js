import {Hobby, Supply, Tutorial, Admin, db} from './models.js'
import hobbyData from './data/hobby.json' assert {type: 'json'}
import supplyData from './data/supply.json' assert {type: 'json'}
import tutorialData from './data/tutorial.json' assert {type: 'json'}

console.log('Syncing database...')
await db.sync({force: true})
console.log('Seeding database');

const hobbiesInDB = await Promise.all(
    hobbyData.map(async (hobby) => {
        const {hobbyName, hobbyImg, category} = hobby
        const newHobby = await Hobby.create({
            hobbyName,
            hobbyImg,
            category
        })
        return newHobby
    })
)

const suppliesInDB = await Promise.all(
    supplyData.map(async (supply) => {
        const {hobbyId, supplyName, optional} = supply
        const newSupply = await Supply.create({
            hobbyId,
            supplyName,
            optional
        })
        return newSupply
    })
)

const tutorialsInDB = await Promise.all(
    tutorialData.map(async (tutorial) => {
        const {hobbyId, tutorialName, tutorialLink, paid} = tutorial
        const newTutorial = await Tutorial.create({
            hobbyId,
            tutorialName,
            tutorialLink,
            paid
        })
        return newTutorial
    })
)

await db.close()
console.log('Finished seeding database');