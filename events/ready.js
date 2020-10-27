const Discord = require("discord.js")
const { client, config } = require("../index.js")

client.on("ready", () => {

    console.log("|\n|    Mass DM Discord Bot\n|   Made by CRPT0#0001\n|\n| Last Update: 10/27/2020\n|")

    client.user.setActivity(`#BlackLivesMatter`, { type: "PLAYING" }).catch(console.error);

})
