import { Hobby, Supply, Tutorial, Suggestion, Buy, Admin } from './db/models.js'

const handlerFunctions = {

    getHobbies: async (req, res) => {
        const {category} = req.query

        const query = {}
        if (category) {
            query.category = category
        }
        const hobbies = await Hobby.findAll({
            where: query,
            include: [{model: Supply}, {model: Tutorial}, {model: Buy}]
        })

        res.send(hobbies)
    },

    getHobby: async (req, res) => {
        const {hobbyId, hobbyName} = req.query

        const query = {}
        if (hobbyId) {
            query.hobbyId = +hobbyId
        }
        if (hobbyName) {
            query.hobbyName = hobbyName
        }
        const hobby = await Hobby.findOne({
            where: query,
            include: [{model: Supply}, {model: Tutorial}, {model: Buy}]
        })
        
        res.send(hobby)
    },
    
    getSupply: async (req, res) => {
        // gets all supplies for a specified hobby ID and if optional
        const {hobbyId, optional} = req.query
        
        const query = {}
        if (hobbyId) {
            query.hobbyId = hobbyId
        }
        if (optional) {
            query.optional = optional
        }
        const supplies = await Supply.findAll({
            where: query
        })

        res.send(supplies)
    },

    getTutorials: async (req, res) => {
        // gets all tutorials specified by hobby ID and by paid
        const {hobbyId, paid} = req.query

        const query = {}
        if (hobbyId) {
            query.hobbyId = hobbyId
        }
        if (paid) {
            query.paid = paid
        }
        const tutorials = await Tutorial.findAll({
            where: query
        })

        res.send(tutorials)
    },

    getSuggestions: async (req, res) => {
        const suggestions = await Suggestion.findAll()

        res.send(suggestions)
    },

    addHobby: async (req, res) => {
        const {hobbyName, hobbyImg, category, mapQuery} = req.body

        const newHobby = {
            hobbyName,
            hobbyImg,
            category,
            mapQuery
        }

        await Hobby.create(newHobby)
        const hobbies = await Hobby.findAll({include: [{model: Supply}, {model: Tutorial}]})

        res.send(hobbies)
    },
    
    addSupply: async (req, res) => {
        const {hobbyId, supplyName, optional} = req.body

        const newSupply = {
            hobbyId,
            supplyName,
            optional
        }

        await Supply.create(newSupply)
        const supplies = await Supply.findAll({where: {hobbyId: hobbyId}})

        res.send(supplies)
    },

    addTutorial: async (req, res) => {
        const {hobbyId, tutorialImg, tutorialName, tutorialLink, paid} = req.body

        const newTutorial = {
            hobbyId,
            tutorialImg,
            tutorialName,
            tutorialLink,
            paid
        }

        await Tutorial.create(newTutorial)
        const tutorials = await Tutorial.findAll({where: {hobbyId: hobbyId}})

        res.send(tutorials)
    },

    addSuggestion: async (req, res) => {
        const {hobbyName, basicSupplies, optionalSupplies, tutorialLinks} = req.body

        const newSuggestion = {
            hobbyName,
            basicSupplies,
            optionalSupplies,
            tutorialLinks
        }

        await Suggestion.create(newSuggestion)
        const suggestions = await Suggestion.findAll()

        res.send(suggestions)
    },
    
    deleteHobby: async (req, res) => {
        const {hobbyId} = req.params

        const hobby = await Hobby.findByPk(hobbyId)
        await hobby.destroy()
        const hobbies = await Hobby.findAll({include: [{model: Supply}, {model: Tutorial}]})

        res.send(hobbies)
    },

    deleteSupply: async (req, res) => {
        const {supplyId} = req.params
        const {hobbyId} = req.query

        const supply = await Supply.findByPk(supplyId)
        await supply.destroy()
        const supplies = await Supply.findAll({where: {hobbyId: hobbyId}})

        res.send(supplies)
    },

    deleteTutorial: async (req, res) => {
        const {tutorialId} = req.params
        const {hobbyId} = req.query

        const tutorial = await Tutorial.findByPk(tutorialId)
        await tutorial.destroy()
        const tutorials = await Tutorial.findAll({where: {hobbyId: hobbyId}})

        res.send(tutorials)
    },

    deleteSuggestion: async (req, res) => {
        const {suggestionId} = req.params

        const suggestion = await Suggestion.findByPk(suggestionId)
        await suggestion.destroy()
        const suggestions = await Suggestion.findAll()

        res.send(suggestions)
    },

    editHobby: async (req, res) => {
        const {hobbyId} = req.params
        const {hobbyName, hobbyImg, category, mapQuery} = req.body

        const editHobby = await Hobby.findByPk(hobbyId)

        editHobby.hobbyName = hobbyName
        editHobby.hobbyImg = hobbyImg
        editHobby.category = category
        editHobby.mapQuery = mapQuery

        await editHobby.save()

        const hobby = await Hobby.findByPk(hobbyId, {include: [{model: Supply}, {model: Tutorial}]})
        res.send(hobby)
    },

    editSupply: async (req, res) => {
        const {supplyId} = req.params
        const {optional} = req.body

        const editSupply = await Supply.findByPk(supplyId)

        editSupply.optional = optional

        await editSupply.save()

        const supply = await Supply.findByPk(supplyId)
        res.send(supply)
    },

    editTutorial: async (req, res) => {
        const {tutorialId} = req.params
        const {paid} = req.body

        const editTutorial = await Tutorial.findByPk(tutorialId)

        editTutorial.paid = paid

        await editTutorial.save()

        const tutorial = await Tutorial.findByPk(tutorialId)
        res.send(tutorial)
    }
}

export default handlerFunctions