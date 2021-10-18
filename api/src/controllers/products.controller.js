const axios = require('axios');

const { 
    getItemsByQuery, 
    getItemsById } = require('../services/products.service')
const controller = {}

controller.search = async (req, res) => {
    const query = req.query.q || '';
    console.log(query)
    const response = await getItemsByQuery(query)

    res.json(response)
}

controller.getItemsById = async (req, res) => {
    const id = req.params.id || '';
    console.log(id)
    const response = await getItemsById(id);

    res.json(response)
}

module.exports = controller;