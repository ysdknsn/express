var express = require('express');
var router = express.Router();
var cors = require('cors');
require('dotenv').config();

//接続情報を設定
const {MongoClient} = require("mongodb");
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

router.use(cors());

router.get('/',async (req,res) => {
    //データベース、コレクションを指定
    const database = client.db('notes');
    const notes = database.collection('notes');

    const note = await notes.find({}).toArray();
    res.json(note);
})




module.exports = router;
