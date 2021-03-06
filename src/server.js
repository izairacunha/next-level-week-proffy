const proffys = [
    { 
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "9899999999",
        bio: "Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    }
    ,
    { 
        name: "Izáira Cunha", 
        avatar: "https://avatars2.githubusercontent.com/u/64921552?s=460&u=afe3d6193429a085caba61781f08ecf8e8011554&v=4",
        whatsapp: "9899999999",
        bio: "Baiana, formada em Ciências Exatas e Tecnológicas e Engenharia Civil, apaixonada por livros e que está explorando o mundo do UX/UI Design e Front-end [...]",
        subject: "Tecnologia",
        cost: "40", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    }

]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber) {
    const position = +subjectNumber -1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0

    
    if (isNotEmpty){
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")
    }
    

    return res.render("give-classes.html",  {subjects, weekdays})
}

const express = require('express')
const server = express()

const nunjuncks = require('nunjucks')
nunjuncks.configure('src/views', {
    express: server,
    noCache: true,
})

server.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

.listen(5500)