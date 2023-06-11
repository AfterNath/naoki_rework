const { MessageEmbed } = require('discord.js');
const config = require("../config")
const db = require('quick.db')
const cl = new db.table("Color")

module.exports = {
    name: 'support',
    usage: 'support',
    description: `Support commande.`,
    async execute(client, message, args) {

        let color = db.fetch(`color_${message.guild.id}`)
        if (color == null) color = config.app.color

        const embed = new MessageEmbed()
            .setColor(color)
            .setDescription(`Pour rejoindre notre support [cliquez ici](https://discord.gg/YesU79pV5D) \n** Crédits : Naoki Reworked by AFTERNATH`)
            .setFooter({ text: `AFTERNATH` })

        //message.reply({ content: ':white_check_mark:' })
        message.react('💎')
        message.member.send({ content: `https://discord.gg/YesU79pV5D`, embeds: [embed] });
    }
}