const express = require('express')
const app = express()
const {
    emptyAreaCode,
    notFoundAreaCode,
    notFoundSubAreaCode,
    numberValidation,
    charValidation,
    spaceValidation
} = require('./message');
const async = require("async")
'use strict'
var fs = require('fs');
const {
    json
} = require('express/lib/response');
const e = require('express');
const {
    readFileSync
} = require('fs');

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.post('/plat/', async (req, res) => {
    let areaCode = req.body.areaCode
    let subAreaCode = req.body.subAreaCode ? req.body.subAreaCode : ""
    areaCode = areaCode.toUpperCase()
    subAreaCode = subAreaCode.toUpperCase()

    var regExp = new RegExp("^[a-zA-Z]+$");
    let validation = true

    //Validation
    if (!areaCode) {
        res.status(404)
        res.json(message(emptyAreaCode)).end()
        console.log(message(emptyAreaCode))
        validation = false
        return
    }
    if (areaCode.includes(" ") || subAreaCode.includes(" ")) {
        console.log(message(spaceValidation))
        res.status(404)
        res.json(message(spaceValidation)).end()
        validation = false
        return
    }
    if (regExp.test(areaCode) == false || regExp.test(subAreaCode) == false) {
        console.log(message(charValidation))
        res.status(404)
        res.json(message(charValidation)).end()
        validation = false
        return
    }
    if (validation == true) {
        const output = calculate(areaCode, subAreaCode)
        console.log(await output)
        if ((await output).areaName == undefined) {
            console.log(message(notFoundAreaCode))
            res.status(404)
            res.json(message(notFoundAreaCode)).end()
            return
        }
        res.status(200)
        res.json(await output).end()
        return
    }

})

// Catch all handler for all other request.
app.use('*', (req, res) => {
    res.json({
        msg: 'no route handler found'
    }).end()
})

// Start the servers
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`index.js listening on ${port}`)
})

async function calculate(areaCode, subAreaCode) {
    const data = readFileSync('./api/area.json');
    const parsed = (JSON.parse(data))

    let areaName
    let subAreaName
    let subAreaArr = []
    for (var i = 0; i < parsed.data.length; i++) {
        if (parsed.data[i].areaCode == areaCode) {
            areaName = parsed.data[i].areaName
            const subArea = parsed.data[i].subArea
            subAreaArr = subArea
            if (subAreaCode) {
                for (var j = 0; j < subArea.length; j++) {
                    if (areaCode == "G" || areaCode == "H" || areaCode == "K" || areaCode == "R" || areaCode == "AA" || areaCode == "AB" || areaCode == "AD") {
                        if (subArea[j].subAreaCode == subAreaCode.slice(-1)) {
                            subAreaName = subArea[j].subAreaName
                        }
                    } else {
                        if (subArea[j].subAreaCode == subAreaCode.substring(0, 1)) {
                            subAreaName = subArea[j].subAreaName
                        }
                    }
                }
            }
        }
    }
    return {
        "areaCode": areaCode,
        "subAreaCode": subAreaCode,
        "areaName": areaName,
        "subAreaName": subAreaName ? subAreaName : notFoundSubAreaCode,
        "subAreaArr": subAreaArr
    }
}

function message(msg) {
    return {
        "msg": msg
    }
}