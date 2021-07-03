export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    console.log("request: ", JSON.stringify(req.query))
    res.end(JSON.stringify({ query: req.query }))
 }