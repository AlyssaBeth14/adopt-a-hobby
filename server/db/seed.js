import {Hobby, Supply, Tutorial, Admin, db} from './models.js'
import hobbyData from './data/hobby.json' assert {type: 'json'}
// import supplyData from './data/supply.json' assert {type: 'json'}
// import tutorialData from './data/tutorial.json' assert {type: 'json'}

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

// const suppliesInDB = await Promise.all(
//     supplyData.map(async (supply) => {
//         const {hobbyId, supplyName, optional} = supply
//         const newSupply = await Supply.create({
//             hobbyId,
//             supplyName,
//             optional
//         })
//         return newSupply
//     })
// )

// const tutorialsInDB = await Promise.all(
//     tutorialData.map(async (tutorial) => {
//         const {hobbyId, tutorialName, tutorialLink, paid} = tutorial
//         const newTutorial = await Tutorial.create({
//             hobbyId,
//             tutorialName,
//             tutorialLink,
//             paid
//         })
//         return newTutorial
//     })
// )

await db.close()
console.log('Finished seeding database');

// const oilPainting = await Hobby.create({
//     hobbyName: 'Oil Painting',
//     hobbyImg: 'https://cdn.shopify.com/s/files/1/1130/7582/files/acrylic_paint_or_oil_paint_600x600.webp?v=1692107088',
//     category: 'Arts'
// })

// const oilPaints = await Supply.create({
//     hobbyId: 1,
//     supplyName: 'Oil Paints',
// })
// const solvent = await Supply.create({
//     hobbyId: 1,
//     supplyName: 'Paint Solvent',
// })
// const paintbrushes = await Supply.create({
//     hobbyId: 1,
//     supplyName: 'Paintbrushes',
// })
// const canvas = await Supply.create({
//     hobbyId: 1,
//     supplyName: 'Canvas',
// })
// const palette = await Supply.create({
//     hobbyId: 1,
//     supplyName: 'Paint Palette',
// })
// const cleaner = await Supply.create({
//     hobbyId: 1,
//     supplyName: 'Oil Paint Brush Cleaner',
// })
// const easel = await Supply.create({
//     hobbyId: 1,
//     supplyName: 'Easel',
//     optional: true
// })
// const oil = await Supply.create({
//     hobbyId: 1,
//     supplyName: 'Linseed Oil',
//     optional: true
// })
// const knives = await Supply.create({
//     hobbyId: 1,
//     supplyName: 'Palette Knives',
//     optional: true
// })

// const danya = await Tutorial.create({
//     hobbyId: 1,
//     tutorialName: 'Oil Painting Tutorial For Beginners',
//     tutorialLink: 'https://www.youtube.com/watch?v=GMT0hJR700Y'
// })



// const crocheting = await Hobby.create({
//     hobbyName: 'Crocheting',
//     hobbyImg: 'https://cdn.shopify.com/s/files/1/1130/7582/files/acrylic_paint_or_oil_paint_600x600.webp?v=1692107088',
//     category: 'Fashion'
// })

// const hook = await Supply.create({
//     hobbyId: 2,
//     supplyName: 'Crochet Hook',
// })
// const yarn = await Supply.create({
//     hobbyId: 2,
//     supplyName: 'Yarn',
// })
// const needle = await Supply.create({
//     hobbyId: 2,
//     supplyName: 'Yarn Needle',
// })
// const scissors = await Supply.create({
//     hobbyId: 2,
//     supplyName: 'Scissors',
// })
// const markers = await Supply.create({
//     hobbyId: 2,
//     supplyName: 'Stitch Markers',
// })
// const tape = await Supply.create({
//     hobbyId: 2,
//     supplyName: 'Measuring Tape',
// })
// const bowl = await Supply.create({
//     hobbyId: 2,
//     supplyName: 'Yarn Bowl',
//     optional: true
// })
// const counter = await Supply.create({
//     hobbyId: 2,
//     supplyName: 'Row Counter',
//     optional: true
// })
// const blocking = await Supply.create({
//     hobbyId: 2,
//     supplyName: 'Blocking Mats & Pins',
//     optional: true
// })
// const winder = await Supply.create({
//     hobbyId: 2,
//     supplyName: 'Ball Winder',
//     optional: true
// })
// const swift = await Supply.create({
//     hobbyId: 2,
//     supplyName: 'Yarn Swift',
//     optional: true
// })

// const beginner = await Tutorial.create({
//     hobbyId: 2,
//     tutorialName: 'How to Crochet for Beginners',
//     tutorialLink: 'https://sarahmaker.com/how-to-crochet/',
// })



// const pyrography = await Hobby.create({
//     hobbyName: 'Pyrography',
//     hobbyImg: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F49%2F2019%2F12%2F20%2FfishOpener_0.jpg&q=60',
//     category: 'Arts'
// })

// const pen = await Supply.create({
//     hobbyId: 3,
//     supplyName: 'Wood Burning Pen',
// })
// const wood = await Supply.create({
//     hobbyId: 3,
//     supplyName: 'Wood',
// })
// const safety = await Supply.create({
//     hobbyId: 3,
//     supplyName: 'Safety Gear',
// })
// const pliers = await Supply.create({
//     hobbyId: 3,
//     supplyName: 'Pliers',
//     optional: true
// })
// const sandpaper = await Supply.create({
//     hobbyId: 3,
//     supplyName: 'Sandpaper',
//     optional: true
// })
// const stencil = await Supply.create({
//     hobbyId: 3,
//     supplyName: 'Stencil',
//     optional: true
// })

// const woodburning = await Tutorial.create({
//     hobbyId: 3,
//     tutorialName: '10 Steps for Wood Burning By Hand',
//     tutorialLink: 'https://www.woodburncorner.com/burnblog/guide-to-wood-burning',
// })