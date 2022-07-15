const express = require('express')
const db = require('../db/db')
const router = express.Router()

//Routes

//GET /api/v1/blogposts/
router.get('/', async (req, res) => {
    try {
        const posts = await db.getBlogposts()
        res.json(posts)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router