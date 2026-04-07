const { Client, GatewayIntentBits } = require('discord.js');
const express = require("express");

// ----------------------
// Discord Bot
// ----------------------
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

client.on('messageCreate', message => {
  const msg = message.content.toLowerCase(); // Comandos no sensibles a mayúsculas

  // COMANDOS
  if (msg === '!dc') {
    message.reply('Únete a nuestro Discord:\nhttps://discord.gg/hDzSYR9erM');
  }

  if (msg === '!wsp') {
    message.reply('Grupo de WhatsApp:\nhttps://chat.whatsapp.com/F0NvVPFr6FBFQqPyVZNCMk');
  }

if (msg === '!hola') {

  const embed = new EmbedBuilder()
    .setColor(0x3498db) // azul elegante
    .setTitle('👋 Bienvenido a La Mano de Plata')
    .setDescription('Saludos aventurero.\nPrepárate para la batalla ⚔️')
    .setThumbnail('https://i.imgur.com/AKXElX0.png')
    .setFooter({ text: 'Hermandad La Mano de Plata' });

  message.reply({ embeds: [embed] });
}

  // Aquí puedes agregar más comandos fácilmente
});

// Login con token seguro desde .env o Environment de Render
client.login(process.env.TOKEN);

// ----------------------
// Mini servidor Express para Render
// ----------------------
const app = express();

// Endpoint para mantener el bot activo
app.get("/", (req, res) => {
  res.send("Bot activo ✅");
});

// Render asigna un puerto dinámico vía environment variable
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor Express activo en puerto ${PORT}`));
