const express = require("express")
const port = 2001

const app = express()
app.use(express.static("public"))
app.set("view engine", "hbs")

app.get("/", (req, res) => {
  res.render("index")
})
app.get("/kontakt", (req, res) => {
  res.send("")
})

app.listen(port)
