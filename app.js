/*
*@author Noah Hong Mayers
*@date September 11 2026
*@brief Node.js and Express Lab Exercise
*@file app.js
* 
*/
var express = require("express")
var app = express()
app.set('view engine', 'ejs');

var modules = [false, false, false, false, false, false];

app.get("/", function (req, res) {
    res.render("pages/index")
})

app.get("/contact", function (req, res) {
    res.send(`
        <h1>This is the Contact Page</h1>

        <table>
            <tr>
                <th>Name</th>
                <td>Noah Hong Mayers</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>noahhongmayers@gmail.com</td>
            </tr>
            <tr>
                <th>Phone</th>
                <td>438 988 5222</td>
            </tr>
            <tr>
                <th>Address</th>
                <td>A200 Rue Cousineau, H7G 3J6</td>
            </tr>
        </table>

        <a href="/">Back to Home</a>
    `)
})
app.get("/module/:data", function (req, res) {
    var number = req.params.data//get the module number from the url
    if (number <= 6 && number >= 1) {
        modules[number - 1] = !modules[number - 1];//change module state
        res.render("pages/module", { number: number, state: modules[number - 1] })// Syntax = res.render("path", {name: value})
    }

    else {
        res.send(`
        <h1>Unknown Module Number</h1>
        <a href="/">Back to Home</a>
        `)
    }
})

app.get("/reset", function (req, res) {
    modules = [false, false, false, false, false, false];
    res.send(`
        <h1>All Modules Succesfully Reset</h1>
        <a href = "/">Back to Home</a>
        `)
})

app.get("/control", function (req, res) {
    res.send(`
        <h1>Current Modules States</h1>

        <p>Module 1: ${modules[0]}</p>
        <p>Module 2: ${modules[1]}</p>
        <p>Module 3: ${modules[2]}</p>
        <p>Module 4: ${modules[3]}</p>
        <p>Module 5: ${modules[4]}</p>
        <p>Module 6: ${modules[5]}</p>

        <a href = "/">Back to Home</a>
        `)
})

app.use(function (req, res) {
    res.status(404).send(`
    <h1>Page Not Found</h1>
    <a href="/">Back to Home</a>
`)
})

app.listen(8080, "0.0.0.0");
console.log("Server Launched on Port 8080")