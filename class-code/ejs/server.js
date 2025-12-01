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
    res.render('home.ejs',{language: 'JavaScript', teacher: 'denis' })
})


app.get('/students',(req,res)=>{
    console.log(students)
    res.render('students.ejs',{students: students})
})


// for displaying 1 resource
app.get('/students/:id',(req,res)=>{
    console.log('student details route')
    console.log(req.params)

    
    const foundStudent = students.find((oneStudent)=>{
    return oneStudent.id == req.params.id
    }) // this returns the student with id same as req.params.id

    console.log(foundStudent)
    
    res.render('student-details.ejs',foundStudent)
})




const shoppingCart = [
    {
        name: "Laptop",
        price: 1200,
        shipsToBahrain: true
    },
    {
        name: "Smartphone",
        price: 800,
        shipsToBahrain: false
    },
    {
        name: "Headphones",
        price: 150,
        shipsToBahrain: true
    },
    {
        name: "Smartwatch",
        price: 300,
        shipsToBahrain: false
    }
];


// 


// Routes go here:












app.listen(3000,()=>{
    console.log('App is running on port 3000')
}) // app will be waiting for requests on port 3000










