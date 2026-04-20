const { Client, GatewayIntentBits } = require('discord.js');
const express = require("express");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

// 🔹 DATOS (FUERA)
const guias = {
     // GUERRERO
    'gue-pro': {
      Classic: 'https://www.wowisclassic.com/en/best-in-slot/warrior/?phase=1&specialization=prot',
      TBC: 'https://wowtbc.gg/bis-list/protection-warrior/',
      LK: 'https://wowtbc.gg/wotlk/bis-list/protection-warrior/'
     },
    'gue-fur': {
      Classic: 'https://www.wowisclassic.com/en/best-in-slot/warrior/?phase=1&specialization=fury',
      TBC: 'https://wowtbc.gg/bis-list/fury-warrior/',
      LK: 'https://wowtbc.gg/wotlk/bis-list/fury-warrior/'
    },
   'gue-arm': {
      TBC: 'https://wowtbc.gg/bis-list/arms-warrior/',
      LK: 'https://wowtbc.gg/wotlk/bis-list/arms-warrior/'
      },
  // BRUJO
  'bru-cl': {
    Classic: 'https://www.wowisclassic.com/en/best-in-slot/warlock/?phase=1&specialization=warlock'
  },
  'bru-afli': {
    TBC: 'https://wowtbc.gg/bis-list/affliction-warlock/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/affliction-warlock/'
  },
  'bru-demo': {
    TBC: 'https://wowtbc.gg/bis-list/demonology-warlock/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/demonology-warlock/'
  },
  'bru-destu': {
    TBC: 'https://wowtbc.gg/bis-list/destruction-warlock/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/destruction-warlock/'
  },
 // CHAMÁN
  'cha-ele': {
    Classic: 'https://www.wowisclassic.com/en/best-in-slot/shaman/?phase=1&specialization=elem',
    TBC: 'https://wowtbc.gg/bis-list/elemental-shaman/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/elemental-shaman/'
  },
  'cha-resto': {
    Classic: 'https://www.wowisclassic.com/en/best-in-slot/shaman/?phase=1&specialization=resto',
    TBC: 'https://wowtbc.gg/bis-list/restoration-shaman/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/restoration-shaman/'
  },
  'cha-mejo': {
    Classic: 'https://www.wowisclassic.com/en/best-in-slot/shaman/?phase=1&specialization=enhan',
    TBC: 'https://wowtbc.gg/bis-list/enhancement-shaman/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/enhancement-shaman/'
  },
    // SACERDOTE
  'sac-sag': {
    Classic: 'https://www.wowisclassic.com/en/best-in-slot/priest/?phase=1&specialization=holy',
    TBC: 'https://wowtbc.gg/bis-list/holy-priest/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/holy-priest/'
  },
  'sac-som': {
    Classic: 'https://www.wowisclassic.com/en/best-in-slot/priest/?phase=1&specialization=shadow',
    TBC: 'https://wowtbc.gg/bis-list/shadow-priest/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/shadow-priest/'
  },
  'sac-disc': {
  LK: 'https://wowtbc.gg/wotlk/bis-list/discipline-priest/'
  },
  // PALADÍN
  'pal-pro': {
    Classic: 'https://www.wowisclassic.com/en/best-in-slot/paladin/?phase=1&specialization=protection',
    TBC: 'https://wowtbc.gg/bis-list/protection-paladin/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/protection-paladin/'
  },
   'pal-rep': {
    Classic: 'https://www.wowisclassic.com/en/best-in-slot/paladin/?phase=1&specialization=ret',
    TBC: 'https://wowtbc.gg/bis-list/retribution-paladin/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/retribution-paladin/',
   },
   'pal-sag': {
   Classic: 'https://www.wowisclassic.com/en/best-in-slot/paladin/?phase=1&specialization=heal',
   TBC: 'https://wowtbc.gg/bis-list/holy-paladin/',
   LK: 'https://wowtbc.gg/wotlk/bis-list/holy-paladin/',
  },
  // PÍCARO
  'pica-daga': {
  Classic: 'https://www.wowisclassic.com/en/best-in-slot/rogue/?phase=1&specialization=dagger',
  }, 
  'pica-espa': {
  Classic: 'https://www.wowisclassic.com/en/best-in-slot/rogue/?phase=1&specialization=sword',
  },
  'pica-comba': {
  TBC: 'https://wowtbc.gg/bis-list/combat-rogue/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/combat-rogue/'
  },
  'pica-asesi': {
  TBC: 'https://wowtbc.gg/bis-list/assassination-rogue/',
  LK: 'https://wowtbc.gg/wotlk/bis-list/assassination-rogue/'
  },
  'pica-suti': {
   TBC: 'https://wowtbc.gg/bis-list/subtlety-rogue/',
  },
  // MAGO
  'mag-cl': {
  Classic: 'https://www.wowisclassic.com/en/best-in-slot/mage/?phase=1',
  },
  'mag-arca': {
  TBC: 'https://wowtbc.gg/bis-list/arcane-mage/',
  LK: 'https://wowtbc.gg/wotlk/bis-list/arcane-mage/'
  },
  'mag-escar': {
  TBC: 'https://wowtbc.gg/bis-list/frost-mage/',
  LK: 'https://wowtbc.gg/wotlk/bis-list/frost-mage/',
  },
  'mag-fue': {
  TBC: 'https://wowtbc.gg/bis-list/fire-mage/',
  LK: 'https://wowtbc.gg/wotlk/bis-list/fire-mage/',
  },
  // DRUIDA
  'dru-oso': {
  Classic: 'https://www.wowisclassic.com/en/best-in-slot/druid/?phase=1&specialization=tank',
  TBC: 'https://wowtbc.gg/bis-list/feral-tank-druid/',
  LK: 'https://wowtbc.gg/wotlk/bis-list/feral-tank-druid/',
  },
  'dru-gato': {
  Classic: 'https://www.wowisclassic.com/en/best-in-slot/druid/?phase=1&specialization=cat',
  TBC: 'https://wowtbc.gg/bis-list/feral-dps-druid/',
  LK: 'https://wowtbc.gg/wotlk/bis-list/feral-dps-druid/',
  },
  'dru-equi': {
  Classic: 'https://www.wowisclassic.com/en/best-in-slot/druid/?phase=1&specialization=balance',
  TBC: 'https://wowtbc.gg/bis-list/balance-druid/',
  LK: 'https://wowtbc.gg/wotlk/bis-list/balance-druid/',
  },
  'dru-resto': {
  Classic: 'https://www.wowisclassic.com/en/best-in-slot/druid/?phase=1&specialization=resto',
  TBC: 'https://wowtbc.gg/bis-list/restoration-druid/',
  LK: 'https://wowtbc.gg/wotlk/bis-list/restoration-druid/',
  },
  //CABALLERO DE LA MUERTE 
  'dk-sangre': {
  LK: 'https://wowtbc.gg/wotlk/bis-list/blood-tank-death-knight/',
  },
  'dk-escar': {
  LK: 'https://wowtbc.gg/wotlk/bis-list/frost-death-knight/',
  },
  'dk-profa': {
  LK: 'https://wowtbc.gg/wotlk/bis-list/unholy-death-knight/',
  }
  };  
// 🔹 UN SOLO EVENTO
client.on('messageCreate', message => {
  if (message.author.bot) return;

  const msg = message.content.toLowerCase();

  // COMANDO DC
  if (msg === '!dc') {
    return message.reply('Únete a nuestro Discord:\nhttps://discord.gg/hDzSYR9erM');
  }

  // COMANDO WSP
  if (msg === '!wsp') {
    return message.reply('Grupo de WhatsApp:\nhttps://chat.whatsapp.com/F0NvVPFr6FBFQqPyVZNCMk');
  }

  const comando = msg.replace('!', '');

  if (!guias[comando]) return;

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

  respuesta += '**Ten en cuenta que el enlace es solo una referencia del equipo (Pre-BiS/BiS).**';

  message.reply(respuesta);
});

// LOGIN
client.login(process.env.TOKEN);

// EXPRESS
const app = express();

app.get("/", (req, res) => {
  res.send("Bot activo ✅");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
