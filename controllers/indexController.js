const fs = require('fs');
const path = require('path');
const comidas = require('../data/comidas.json')


module.exports = {
    index: (req,res) => {

        res.render('index',{
            title: 'Pimienta y sal',
            comidas
        })
    },

    about: (req,res) => {
        res.render('about',{
            title:'About'
        })
    }
}