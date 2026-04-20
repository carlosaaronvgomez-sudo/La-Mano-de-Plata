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
 client.on('messageCreate', message => {
  if (message.author.bot) return;

  const msg = message.content.toLowerCase();

  // DATOS
client.on('messageCreate', message => {
  if (message.author.bot) return;

  const msg = message.content.toLowerCase();

  const guias = {
    'gue-pro': {
      Classic: 'https://www.wowisclassic.com/en/best-in-slot/warrior/?phase=1&specialization=prot',
      TBC: 'https://wowtbc.gg/bis-list/protection-warrior/',
      LK: 'https://wowtbc.gg/wotlk/bis-list/protection-warrior/'
    }
  };

  const comando = msg.replace('!', '');

  if (guias[comando]) {
    const guia = guias[comando];
    let respuesta = '';

    if (guia.Classic) {
      respuesta += `Classic:\n<${guia.Classic}>\n\n`;
    }

    if (guia.TBC) {
      respuesta += `TBC:\n<${guia.TBC}>\n\n`;
    }

    if (guia.LK) {
      respuesta += `WotLK:\n<${guia.LK}>\n\n`;
    }

    message.reply(respuesta);
  }
});

  'gue-fur': {
    Classic: 'https://www.wowisclassic.com/en/best-in-slot/warrior/?phase=1&specialization=fury',
    TBC: 'https://wowtbc.gg/bis-list/fury-warrior/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/fury-warrior/'
  },
  'gue-arm': {
    TBC: 'https://wowtbc.gg/bis-list/arms-warrior/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/arms-warrior/'
   
 },
    'cl-bru': 'https://www.wowisclassic.com/en/best-in-slot/warlock/?phase=1&specialization=warlock',
    'tbc-bru-afli': 'https://wowtbc.gg/bis-list/affliction-warlock/',
    'tbc-bru-demo': 'https://wowtbc.gg/bis-list/demonology-warlock/',
    'tbc-bru-destu': 'https://wowtbc.gg/bis-list/destruction-warlock/',
    'lk-bru-afli': 'https://wowtbc.gg/wotlk/bis-list/affliction-warlock/',
    'lk-bru-demo': 'https://wowtbc.gg/wotlk/bis-list/demonology-warlock/',
    'lk-bru-destu': 'https://wowtbc.gg/wotlk/bis-list/destruction-warlock/',
    'cl-cha-ele': 'https://www.wowisclassic.com/en/best-in-slot/shaman/?phase=1&specialization=elem',
    'cl-cha-resto': 'https://www.wowisclassic.com/en/best-in-slot/shaman/?phase=1&specialization=resto',
    'cl-cha-mejo': 'https://www.wowisclassic.com/en/best-in-slot/shaman/?phase=1&specialization=enhan',
    'tbc-cha-ele': 'https://wowtbc.gg/bis-list/elemental-shaman/',
    'tbc-cha-resto': 'https://wowtbc.gg/bis-list/restoration-shaman/',
    'tbc-cha-mejo': 'https://wowtbc.gg/bis-list/enhancement-shaman/',
    'lk-cha-ele': 'https://wowtbc.gg/wotlk/bis-list/elemental-shaman/',
    'lk-cha-resto': 'https://wowtbc.gg/wotlk/bis-list/restoration-shaman/',
    'lk-cha-mejo': 'https://wowtbc.gg/wotlk/bis-list/enhancement-shaman/',
    'cl-pica-daga': 'https://www.wowisclassic.com/en/best-in-slot/rogue/?phase=1&specialization=dagger',
    'cl-pica-espa': 'https://www.wowisclassic.com/en/best-in-slot/rogue/?phase=1&specialization=sword',
    'tbc-pica-comba': 'https://wowtbc.gg/bis-list/combat-rogue/',
    'tbc-pica-asesi': 'https://wowtbc.gg/bis-list/assassination-rogue/',
    'tbc-pica-suti': 'https://wowtbc.gg/bis-list/subtlety-rogue/',
    'lk-pica-comba': 'https://wowtbc.gg/wotlk/bis-list/combat-rogue/',
    'lk-pica-asesi': 'https://wowtbc.gg/wotlk/bis-list/assassination-rogue/',
    'cl-sac-sag': 'https://www.wowisclassic.com/en/best-in-slot/priest/?phase=1&specialization=holy',
    'cl-sac-som': 'https://www.wowisclassic.com/en/best-in-slot/priest/?phase=1&specialization=shadow',
    'tbc-sac-sag': 'https://wowtbc.gg/bis-list/holy-priest/',
    'tbc-sac-som': 'https://wowtbc.gg/bis-list/shadow-priest/',
    'lk-sac-sag': 'https://wowtbc.gg/wotlk/bis-list/holy-priest/',
    'lk-sac-disc': 'https://wowtbc.gg/wotlk/bis-list/discipline-priest/',
    'lk-sac-som': 'https://wowtbc.gg/wotlk/bis-list/shadow-priest/',
    'cl-pal-rep': 'https://www.wowisclassic.com/en/best-in-slot/paladin/?phase=1&specialization=ret',
    'cl-pal-pro': 'https://www.wowisclassic.com/en/best-in-slot/paladin/?phase=1&specialization=protection',
    'cl-pal-sag': 'https://www.wowisclassic.com/en/best-in-slot/paladin/?phase=1&specialization=heal',
    'tbc-pal-rep': 'https://wowtbc.gg/bis-list/retribution-paladin/',
    'tbc-pal-pro': 'https://wowtbc.gg/bis-list/protection-paladin/',
    'tbc-pal-sag': 'https://wowtbc.gg/bis-list/holy-paladin/',
    'lk-pal-rep': 'https://wowtbc.gg/wotlk/bis-list/retribution-paladin/',
    'lk-pal-pro': 'https://wowtbc.gg/wotlk/bis-list/protection-paladin/',
    'lk-pal-sag': 'https://wowtbc.gg/wotlk/bis-list/holy-paladin/',
    'cl-mag': 'https://www.wowisclassic.com/en/best-in-slot/mage/?phase=1',
    'tbc-mag-arca': 'https://wowtbc.gg/bis-list/arcane-mage/',
    'tbc-mag-fue': 'https://wowtbc.gg/bis-list/fire-mage/',
    'tbc-mag-escar': 'hhttps://wowtbc.gg/bis-list/frost-mage/',
    'lk-mag-arca': 'https://wowtbc.gg/wotlk/bis-list/arcane-mage/',
    'lk-mag-fue': 'https://wowtbc.gg/wotlk/bis-list/fire-mage/',
    'lk-mag-escar': 'https://wowtbc.gg/wotlk/bis-list/frost-mage/',
    'cl-dru-oso': 'https://www.wowisclassic.com/en/best-in-slot/druid/?phase=1&specialization=tank',
    'cl-dru-gato': 'https://www.wowisclassic.com/en/best-in-slot/druid/?phase=1&specialization=cat',
    'cl-dru-equi': 'https://www.wowisclassic.com/en/best-in-slot/druid/?phase=1&specialization=balance',
    'cl-dru-resto': 'https://www.wowisclassic.com/en/best-in-slot/druid/?phase=1&specialization=resto',
    'tbc-dru-oso': 'https://wowtbc.gg/bis-list/feral-tank-druid/',
    'tbc-dru-gato': 'https://wowtbc.gg/bis-list/feral-dps-druid/',
    'tbc-dru-equi': 'https://wowtbc.gg/bis-list/balance-druid/',
    'tbc-dru-resto': 'https://wowtbc.gg/bis-list/restoration-druid/',
    'lk-dru-oso': 'https://wowtbc.gg/wotlk/bis-list/feral-tank-druid/',
    'lk-dru-gato': 'https://wowtbc.gg/wotlk/bis-list/feral-dps-druid/',
    'lk-dru-equi': 'https://wowtbc.gg/wotlk/bis-list/balance-druid/',
    'lk-dru-resto': 'https://wowtbc.gg/wotlk/bis-list/restoration-druid/',
    'lk-dk-sangre': 'https://wowtbc.gg/wotlk/bis-list/blood-tank-death-knight/',
    'lk-dk-escar': 'https://wowtbc.gg/wotlk/bis-list/frost-death-knight/',
    'lk-dk-profa': 'https://wowtbc.gg/wotlk/bis-list/unholy-death-knight/',

  };

const comando = msg.replace('!', '');

if (guias[comando]) {
  const guia = guias[comando];

  let respuesta = `**Guías BiS - ${comando.toUpperCase()}**\n\n`;

  if (guia.Classic) {
    respuesta += `Classic:\n${guia.Classic}\n\n`;
  }

  if (guia.TBC) {
    respuesta += `TBC:\n${guia.TBC}\n\n`;
  }

  if (guia.LK) {
    respuesta += `WotLK:\n${guia.LK}\n\n`;
  }

  respuesta += '\n\n**Ten en cuenta que el enlace es solo una referencia del equipo (Pre-BiS/BiS) que deberías buscar. Adáptalo según la fase en la que te encuentres**';

  message.reply(respuesta);
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
