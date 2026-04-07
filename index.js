const { Client, GatewayIntentBits } = require('discord.js');
const express = require("express");

// 1. Crear cliente PRIMERO
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// 2. Eventos
client.once('clientReady', () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  const msg = message.content.toLowerCase();

  // COMANDO DC
  if (msg === '!dc') {
    message.reply('Únete a nuestro Discord:\nhttps://discord.gg/hDzSYR9erM');
  }

  // COMANDO WSP
  if (msg === '!wsp') {
    message.reply('Grupo de WhatsApp:\nhttps://chat.whatsapp.com/F0NvVPFr6FBFQqPyVZNCMk');
  }

  // COMANDO HOLA
  if (msg === '!hola') { 
    message.reply('Bienvenido a La Mano de Plata 👊');
  }

});

// 3. LOGIN SIEMPRE AL FINAL (del bot)
client.login(process.env.TOKEN);

// ----------------------
// Express (Render)
// ----------------------
const app = express();

app.get("/", (req, res) => {
  res.send("Bot activo ✅");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor Express activo en puerto ${PORT}`));
