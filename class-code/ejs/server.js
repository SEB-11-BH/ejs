// imports
const express = require("express") //importing express package
const app = express() // creates an express application
app.use(express.static('public')) // serves all static files from public folder


// Database
const students = [
    {
        id: 1,
        name: 'munther'
    },
    {
        id: 2,
        name: 'Safa'
    },
    {
        id: 3,
        name: 'Saeed'
    },
    {
        id: 4,
        name: 'Abeer'
    }
]



app.get('/',(req,res)=>{

    // locales object
    // ALWAYS AN OBJECT
    res.render('home.ejs',{language: 'JavaScript', teacher: 'Denis' })
})







// Routes go here:












app.listen(3000,()=>{
    console.log('App is running on port 3000')
}) // app will be waiting for requests on port 3000










