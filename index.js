const Discord = require('discord.js')
const bot = new Discord.Client()
const token = require('./token.json')

bot.login(token.token)

bot.on('ready', ()=>{
    console.log('aooooo')
})

bot.on('message', message =>{
    if(message.content.startsWith("$salve")){
        message.channel.send(`Salve ${message.author.username}`)
    }
})