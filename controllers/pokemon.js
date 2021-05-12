// import express
const { Router } = require('express')
const express = require('express')
// instantiate a new Router instance
const router = express.Router()
// import the pokemon models
const pokemon = require('../models/pokemon')
// add the INDEX route for pokemon (returns all pokemon)
router.get('/', (req, res) => {
    res.json({
        status:200,
        data: pokemon
    })
})
// add the SHOW route (returns a single item)
router.get('/:id', (req, res) => {
    res.json({
        status: 200,
        data: pokemon[req.params.id]
    })
})


// add the POST route (allows user to send data)
router.post('/', (req, res)=>{
    console.log('POST - req.body', req.body)
    pokemon.push(req.body);
    res.json({
        status: 200,
        route: "HITTING THE POST ROUTE",
        data: req.body
    })
})

// add the DELETE route (allows users to remove data)
router.delete('/:id', (req, res) => {
    pokemon.splice(req.params.id, 1);
    
    res.json({
        status:200,
        route: 'hitting the DELETE route'
    })
})

// add the PUT route (allows users to update an element)
router.put('/:id', (req, res) => {
    console.log('PUT - req.params', req.params);
    console.log('PUT - req.body', req.body);
    pokemon[req.params.id] = req.body
    res.json({
        status:200,
        route: 'hitting the PUT route'
    })
})
// export router
module.exports = router