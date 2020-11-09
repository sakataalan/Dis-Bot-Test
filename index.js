const Discord = require('discord.js')

const bot = new Discord.Client()

const token = "Nzc1NDA5OTY4MDM1Mzk3Njgy.X6l6zg.hVMhkHQdsjaj9eCdUjzmUxLTlas"

bot.login(token)
bot.on('ready', ()=>{
    console.log('aooooo')
})

bot.on('message', message =>{
    if(message.content.startsWith("$salve")){
        message.channel.send('Salve ' + message.author.username)
    }
})