const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
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

  if (msg === '!hola') {
    const embed = new EmbedBuilder()
      .setColor(0x3498db)
      .setTitle('👋 Bienvenido a La Mano de Plata')
      .setThumbnail('https://i.imgur.com/AKXElX0.png')
      .setFooter({ text: 'Hermandad La Mano de Plata' });

    message.reply({ embeds: [embed] });
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
