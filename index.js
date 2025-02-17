// REST api in express server with using json file


////////////////////////////////////////////////////////////////////////
//
// all Import Statment
//
////////////////////////////////////////////////////////////////////////
const express = require('express')
const file = require('fs')
const DB = require('./db.json')
const app = express()
const port = 3000


////////////////////////////////////////////////////////////////////////
//
// use the middleware : for data which is get from html body 
// encoding by this middleware 
//
////////////////////////////////////////////////////////////////////////
app.use(express.urlencoded({ extended: 'false' }));


////////////////////////////////////////////////////////////////////////
//
// Entry Point : http://127.0.0.1:3000
//
////////////////////////////////////////////////////////////////////////
app.get('/', (req, res) => {
    res.send('Welcome to REST-api server')
})

////////////////////////////////////////////////////////////////////////
//
// Function    : GET (REST) API
// Description : Get all user data db.json file
// Route       : http://127.0.0.1:3000/user
//
////////////////////////////////////////////////////////////////////////
app.get('/user', (req, res) => {
    res.json(DB)
})


////////////////////////////////////////////////////////////////////////
//
// Function    : GET (REST) API
// Description : Get specific user data db.json file
// route       : http://127.0.0.1:3000/user/get/2
//
////////////////////////////////////////////////////////////////////////
app.get('/user/get/:id', (req, res) => {
    let id = Number(req.params.id)


    if (id == 0 || id >= DB.length + 1) { // check for user validation
        res.send('User are not Available...')
    }

    res.json(DB[id - 1])
})


////////////////////////////////////////////////////////////////////////
//
// Function    : POST (REST) API
// Description : Create a user into db.json file
// route       : http://127.0.0.1:3000/user/create
//
//////////////////////////////////////////////////////////////////////// 
app.post('/user/create', (req, res) => {

    const data = req.body;

    data.id = Number(data.id)
    data.admin = Boolean(data.admin)

    if (data.id == DB[DB.length-1].id)
    {
        return res.send('User id is already created...')
    }
    DB.push(data);

    file.writeFile('db.json', JSON.stringify(DB), (err) => {

        if (err) throw err;

        res.send('User is created sucsessfully...')

    })
})


////////////////////////////////////////////////////////////////////////
// Function    : DELETE(REST) API
// Description : delete a specific data from db.json file
// route       : http://127.0.0.1:3000/user/delete/3
//
//////////////////////////////////////////////////////////////////////// 
app.delete('/user/delete/:id', (req, res) => {

    let id = Number(req.params.id);

    if (id == 0 || id >= DB.length + 1) { // check for user validation
        res.send('User are not Available...')
    }


    DB.splice((id - 1), 1)

    file.writeFile('db.json', JSON.stringify(DB), (err) => {

        if (err) throw err;

        res.send('User is Delete sucsessfully...')

    })


})


////////////////////////////////////////////////////////////////////////
//
// Function    : PATCH   (REST) API
// Description : Upadte a existing record from db.json file
// route       : http://127.0.0.1:3000/user/update/1
//
//////////////////////////////////////////////////////////////////////// 
app.patch('/user/update/:id', (req, res) => {

    let id = Number(req.params.id);

    if (id == 0 || id >= DB.length + 1) { // check for user validation
        res.send('User are not Available...')
    }

    let data = req.body;

    data.id = Number(data.id);
    data.admin = Boolean(data.admin)

    DB.splice(id - 1, 1, data)

    file.writeFile('db.json', JSON.stringify(DB), (err) => {

        if (err) throw err;

        res.send('User is Update sucsessfully...')

    })

})


////////////////////////////////////////////////////////////////////////
// 
// server is on in listen port which is use active sever
//
////////////////////////////////////////////////////////////////////////


app.listen(port, () => {
    console.log(`http://127.0.0.1:${3000}/`)
})