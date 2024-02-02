import express from 'express'
import ViteExpress from 'vite-express'

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

import handlerFunctions from './controller.js'
const {

    getHobbies,
    getHobby,
    getSupply,
    getTutorials,
    getSuggestions,
    postAdmin,
    addHobby,
    addSupply,
    addTutorial,
    addSuggestion,
    deleteHobby,
    deleteSupply,
    deleteTutorial,
    deleteSuggestion,
    editHobby,
    editSupply,
    editTutorial

} = handlerFunctions

app.get('/api/hobbies', getHobbies)
app.get('/api/hobby', getHobby)
app.get('/api/supply', getSupply)
app.get('/api/tutorials', getTutorials)
app.get('/api/suggestions', getSuggestions)
app.post('/api/admin', postAdmin)
app.post('/api/hobby', addHobby)
app.post('/api/supply', addSupply)
app.post('/api/tutorial', addTutorial)
app.post('/api/suggestion', addSuggestion)
app.delete('/api/hobby/:hobbyId', deleteHobby)
app.delete('/api/supply/:supplyId', deleteSupply)
app.delete('/api/tutorial/:tutorialId', deleteTutorial)
app.delete('/api/suggestion/:suggestionId', deleteSuggestion)
app.put('/api/hobby/:hobbyId', editHobby)
app.put('/api/supply/:supplyId', editSupply)
app.put('/api/tutorial/:tutorialId', editTutorial)


ViteExpress.listen(app, 8000, () => console.log('server is running on 8000'))