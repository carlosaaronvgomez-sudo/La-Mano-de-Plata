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
    message.reply(`Bienvenido a La Mano de Plata, ${message.author}`);
  }

  // COMANDOS DE CLASES
  const guias = {
    '!cl-gue-pro': 'https://www.wowisclassic.com/en/best-in-slot/warrior/?phase=1&specialization=prot',
    '!cl-gue-fur': 'https://www.wowisclassic.com/en/best-in-slot/warrior/?phase=1&specialization=fury',
    '!tbc-gue-pro': 'https://wowtbc.gg/bis-list/protection-warrior/',
    '!tbc-gue-fur': 'https://wowtbc.gg/bis-list/fury-warrior/',
    '!tbc-gue-arm': 'https://wowtbc.gg/bis-list/arms-warrior/',
    '!lk-gue-pro': 'https://wowtbc.gg/wotlk/bis-list/protection-warrior/',
    '!lk-gue-fur': 'https://wowtbc.gg/wotlk/bis-list/fury-warrior/',
    '!lk-gue-arm': 'https://wowtbc.gg/wotlk/bis-list/arms-warrior/',
    '!cl-bru': 'https://www.wowisclassic.com/en/best-in-slot/warlock/?phase=1&specialization=warlock',
    '!cl-cha-ele': 'https://www.wowisclassic.com/en/best-in-slot/shaman/?phase=1&specialization=elem',
    '!cl-cha-resto': 'https://www.wowisclassic.com/en/best-in-slot/shaman/?phase=1&specialization=resto',
    '!cl-cha-mejo': 'https://www.wowisclassic.com/en/best-in-slot/shaman/?phase=1&specialization=enhan',
    '!cl-pica-daga': 'https://www.wowisclassic.com/en/best-in-slot/rogue/?phase=1&specialization=dagger',
    '!cl-pica-espa': 'https://www.wowisclassic.com/en/best-in-slot/rogue/?phase=1&specialization=sword',
    '!cl-sac-sag': 'https://www.wowisclassic.com/en/best-in-slot/priest/?phase=1&specialization=holy',
    '!cl-sac-som': 'https://www.wowisclassic.com/en/best-in-slot/priest/?phase=1&specialization=shadow',
    '!cl-pal-rep': 'https://www.wowisclassic.com/en/best-in-slot/paladin/?phase=1&specialization=ret',
    '!cl-pal-pro': 'https://www.wowisclassic.com/en/best-in-slot/paladin/?phase=1&specialization=protection',
    '!cl-pal-sag': 'https://www.wowisclassic.com/en/best-in-slot/paladin/?phase=1&specialization=heal',
    '!cl-mag': 'https://www.wowisclassic.com/en/best-in-slot/mage/?phase=1',
    '!cl-dru-oso': 'https://www.wowisclassic.com/en/best-in-slot/druid/?phase=1&specialization=tank',
    '!cl-dru-gato': 'https://www.wowisclassic.com/en/best-in-slot/druid/?phase=1&specialization=cat',
    '!cl-dru-equi': 'https://www.wowisclassic.com/en/best-in-slot/druid/?phase=1&specialization=balance',
    '!cl-dru-resto': 'https://www.wowisclassic.com/en/best-in-slot/druid/?phase=1&specialization=resto',

  };

  if (guias[msg]) {
    message.reply(
      `${guias[msg]}\n\n` +
      'Ten en cuenta que el enlace es solo una referencia del equipo (Pre-BiS/BiS) que deberías buscar. ' +
      'Adáptalo según la fase en la que te encuentres.'
    );
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
