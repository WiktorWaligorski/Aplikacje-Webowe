const express = require('express')
const path = require("node:path");
const fs = require("fs");
const 

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send("Strona główna")
})

app.get('/json', (req, res) => {
    const data = {Lesson: "Math", Grade: "6"};
    res.send(data);
})

app.get('/html', (req, res) => {
    const html = `
      <!DOCTYPE html>
      <html lang="pl">
      <head><meta charset="UTF-8"><title>HTML z Node</title></head>
      <body><h1>HTML wygenerowanym za pomocą Node.js</h1></body>
      </html>`;
    res.send(html);
})

app.get('/plik', (req, res) => {
    res.sendFile(path.join(__dirname, 'html.html'));
})

app.get('/params', (req, res) => {
    let time = Date.now();
    const params = req.query;

    let FileName = `params_${time}.json`;
    let filePath = path.join(__dirname, FileName);
    fs.writeFile(filePath, JSON.stringify(params, null, 2), (err) => {})
    res.json({
        ok: "ok"
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname , 'assets'+req.url), err => {
        if (err) {
            res.json({
                error: 404
            })
        }
        else {
            console.log(mime.lookup(req.url))
        }
    });
})

app.listen(port, () => {
    console.log("App listening at http://localhost:" + port)
})
