// controllers/getWords.js

exports.GetWords = async(req, res) => {
    const origin = req.headers.origin;
    if (origin != undefined)
    {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    
    res.json('Hello World!')
}