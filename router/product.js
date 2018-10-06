const express = require('express')
const product_router = express.Router()

product_router.get('/', (req, res) => {
    res.send('amader product list ekhane dekha jabe')
})

product_router.get('/tel', (req, res) => {
    res.send('tel er dam ajke 100 taka')
})

product_router.get('/saban', (req, res) => {
    res.send("saban 1 pc 25 taka")
})

product_router.get('/lobon', (req, res) => {
    res.send('ayodin mukto lobon 10 taka')
})

module.exports = product_router