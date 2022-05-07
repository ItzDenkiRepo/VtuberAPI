import express from "express"
import fs from "fs"
import cors from "cors"
import rateLimit from "express-rate-limit"
const port = process.env.PORT || 5000
const app = express()
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
})
app.use(express.static("public"))
app.use(limiter)
app.use(cors())
// api key
const apikey = [
    "ZrB2SFzdvSlQ",
    "DjisTNQfWctm",
    "x3GlnWAp9p9U",
    "XINe14HQ267h",
    "DCaQ1P3aYoh1",
    "surjhD1Ph94v",
    "I0fYjVDyybaJ",
    "Lwy4bCgNnWkl",
    "mo6eYhgRen77",
    "xXHhdOc1Mmgq",
    "ToQ2XgHVXPNq",
    "nG4xq79QhA2x",
    "f3copk6G6tjp",
    "cyKUMBDzTX17",
    "i3wluRxpIkCq",
    "VfqyrGoN6znc",
    "Rf6x8bckLLvg"
]
app.get("/", (req, res) => {
    res.send("https://github.com/ItzDenkiRepo/VtuberAPI")
})
app.get("/randomvtuber", (req, res) => {
    const key = req.query.apikey
    const result = {}
    result.code = 200
    const imageList = fs.readdirSync("./public/randomvtuber")
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]
    result.url = `127.0.0.1:5000/randomvtuber/${randomImage}`
    result.author = "ItzDenki , VtuberAPI"
    result.source = "https://github.com/ItzDenkiRepo/VtuberAPI"
    res.header("Content-type", "application/json; charset=utf-8")
    if (apikey.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    } else {
        const result = {}
        result.code = 403
        result.message = "API Key không phù hợp"
        res.send(JSON.stringify(result, null, 2))
    }
})
app.get("/cosplay", (req, res) => {
    const key = req.query.apikey
    const result = {}
    result.code = 200
    const imageList = fs.readdirSync("./public/cosplay")
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]
    result.url = `127.0.0.1:5000/cosplay/${randomImage}`
    result.author = "ItzDenki , VtuberAPI"
    result.source = "https://github.com/ItzDenkiRepo/VtuberAPI"
    res.header("Content-type", "application/json; charset=utf-8")
    if (apikey.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    } else {
        const result = {}
        result.code = 403
        result.message = "API Key không phù hợp"
        res.send(JSON.stringify(result, null, 2))
    }
})
app.listen(port, "0.0.0.0", function () {
    console.log(`Server listening on port ${port}\n`)
})
