var express = require('express');
var router = express.Router();

//接続情報を設定
const {MongoClient} = require("mongodb");
const uri = 
"mongodb+srv://yasusa:k20140312@sample.h71o90k.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

router.get('/',async (req,res) => {
    //データベース、コレクションを指定
    const database = client.db('notes');
    const notes = database.collection('notes');

    //idが１のドキュメントを取得
    const query = {id : 1};
    const note = await notes.findOne(query);

    res.json(note);
})


//レスポンスデータ（ノート全件）
const responseObjectDataAll = {
    textObject1:{
        id: 1,
        title: 'ノート1のタイトルです',
        subTitle: 'ノート1のサブタイトルです',
        bodyText: 'ノート1の本文です'
    },
    textObject2: {
        id: 2,
        title: 'ノート2のタイトルです',
        subTitle: 'ノート2のサブタイトルです',
        bodyText: 'ノート2の本文です'
    }
};

/**
* メモを全件取得するAPI
* @returns {Object[]} data
* @returns {number} data.id - ID
* @returns {string} data.title - タイトル
* @returns {string} data.text - 内容
*/

router.get('/',function(req,res,next){
    res.json(responseObjectDataAll);
})

module.exports = router;
