 const dbd = require("dbd.js")
const { env } = require("process")

require("dotenv").config()

const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log("Ping recebido!")
  response.sendStatus(200);
});
app.listen(process.env.PORT)

const bot = new dbd.Bot({
token: "ODI1MTgwOTgzNDU1NjQ1NzA2.YF6LrQ.9THY6cjAKFeKXgwAopQH3iyZWx0", 
prefix: "l!" 
})


bot.onMessage()

bot.command({
name: "ticket",
code: `Ticket Created!
$newTicket[ticket-$random[100;10000];Hello, Please mention a staff member!;773356383625150505;no;Error!]
`
})

bot.variables({
  prefix: "l!"
})


const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
code: command.code
})
} 
}
