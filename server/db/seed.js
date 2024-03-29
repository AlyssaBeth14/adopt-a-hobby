import bcrypt from 'bcrypt'
import adminData from './data/admin.json' assert {type: 'json'}
import {Hobby, Supply, Tutorial, Buy, Admin, db} from './models.js'
import hobbyData from './data/hobby.json' assert {type: 'json'}
import supplyData from './data/supply.json' assert {type: 'json'}
import tutorialData from './data/tutorial.json' assert {type: 'json'}
import buyData from './data/buy.json' assert {type: 'json'}

console.log('Syncing database...')
await db.sync({force: true})
console.log('Seeding database');

const adminsInDB = await Promise.all(
    adminData.map(async (admin) => {
        const {adminName, adminPass} = admin

        const hashedPassword = await bcrypt.hash(adminPass, 10)

        const newAdmin = await Admin.create({
            adminName,
            adminPass: hashedPassword
        })
        return newAdmin
    })
)

const hobbiesInDB = await Promise.all(
    hobbyData.map(async (hobby) => {
        const {hobbyName, hobbyImg, category, mapQuery, cost} = hobby
        const newHobby = await Hobby.create({
            hobbyName,
            hobbyImg,
            category,
            mapQuery,
            cost
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
        const {hobbyId, tutorialName, tutorialLink, tutorialImg, paid} = tutorial
        const newTutorial = await Tutorial.create({
            hobbyId,
            tutorialName,
            tutorialLink,
            tutorialImg,
            paid
        })
        return newTutorial
    })
)

const buyInDB = await Promise.all(
    buyData.map(async (buy) => {
        const {hobbyId, buyImg, buyName, buyLink, owned} = buy
        const newBuy = await Buy.create({
            hobbyId,
            buyImg,
            buyName,
            buyLink,
            owned
        })
        return newBuy
    })
)

await db.close()
console.log('Finished seeding database');