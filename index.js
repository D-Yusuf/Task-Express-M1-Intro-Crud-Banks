const express = require("express")
const accounts = require("./accounts")
const app = express()
app.use(express.json())
app.route('/users')
  .get((req, res) => {
    // res.send()
    return res.status(200).json(accounts)
  })
  .post((req, res) => {
    // res.send("input name and funds")
    const newUser = {
        id: accounts.length +1,
        name: req.body.name,
        funds: req.body.funds,
    }
    accounts.push(newUser)
    res.status(201).json(accounts)
  })

app.listen(4000, ()=>{
    console.log("welcome")
})