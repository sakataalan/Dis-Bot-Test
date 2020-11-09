const Discord = require('discord.js')
const bot = new Discord.Client()
const config = require('./config.json')

bot.login(config.token)
bot.on('ready', ()=>{
    console.log('aooooo')
})

bot.on('message', message =>{
    if(message.content.startsWith("$salve")){
        message.channel.send('Salve ' + message.author.username)
    }
})