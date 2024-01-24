var express = require('express');
var router = express.Router();
const cors = require('cors');
require('dotenv').config();

//接続情報を設定
const {MongoClient} = require("mongodb");
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

router.use(cors());

router.get('/',async (req,res) => {
    const database = client.db('notes');
    const notes = database.collection('notes');

    const query = {id:2};
    const note = await notes.findOne(query);

    res.json(note);
})

module.exports = router;