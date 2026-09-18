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
  'guerrero-protecion': {
    'Classic Opcion 1': 'https://www.wowisclassic.com/en/best-in-slot/warrior/?phase=1&specialization=prot',
    'Classic Opcion 2': 'https://wowtbc.gg/classic/bis-list/fury-protection-warrior/',
    TBC: 'https://wowtbc.gg/bis-list/protection-warrior/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/protection-warrior/'
  },

  'guerrero-furia': {
    'Classic Opcion 1':'https://www.wowisclassic.com/en/best-in-slot/warrior/?phase=1&specialization=fury',
    'Classic Opcion 2':'https://wowtbc.gg/classic/bis-list/fury-warrior/',
    TBC: 'https://wowtbc.gg/bis-list/fury-warrior/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/fury-warrior/'
  },

  'guerrero-armas': {
    TBC: 'https://wowtbc.gg/bis-list/arms-warrior/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/arms-warrior/'
  },
  // BRUJO
  'brujo-afliccion': {
    Classic: 'https://wowtbc.gg/classic/bis-list/affliction-warlock/',
    TBC: 'https://wowtbc.gg/bis-list/affliction-warlock/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/affliction-warlock/'
  },
  'brujo-demonologia': {
    TBC: 'https://wowtbc.gg/bis-list/demonology-warlock/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/demonology-warlock/'
  },
  'brujo-destruccion': {
    Classic: 'https://wowtbc.gg/classic/bis-list/destruction-warlock/',
    TBC: 'https://wowtbc.gg/bis-list/destruction-warlock/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/destruction-warlock/'
  },
 // CHAMÁN
  'chaman-elemental': {
    'Classic Opcion 1': 'https://www.wowisclassic.com/en/best-in-slot/shaman/?phase=1&specialization=elem',
    'Classic Opcion 2': 'https://wowtbc.gg/classic/bis-list/elemental-shaman/',
    TBC: 'https://wowtbc.gg/bis-list/elemental-shaman/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/elemental-shaman/'
  },
  'chaman-restauracion': {
    'Classic Opcion 1': 'https://www.wowisclassic.com/en/best-in-slot/shaman/?phase=1&specialization=resto',
    'Classic Opcion 2': 'https://wowtbc.gg/classic/bis-list/restoration-shaman/',
    TBC: 'https://wowtbc.gg/bis-list/restoration-shaman/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/restoration-shaman/'
  },
  'chaman-mejora': {
    'Classic Opcion 1': 'https://www.wowisclassic.com/en/best-in-slot/shaman/?phase=1&specialization=enhan',
    'Classic Opcion 2': 'https://wowtbc.gg/classic/bis-list/enhancement-shaman/',
    TBC: 'https://wowtbc.gg/bis-list/enhancement-shaman/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/enhancement-shaman/'
  },
    // SACERDOTE
  'sacerdote-sagrado': {
    'Classic Opcion 1': 'https://www.wowisclassic.com/en/best-in-slot/priest/?phase=1&specialization=holy',
    'Classic Opcion 2': 'https://wowtbc.gg/classic/bis-list/holy-priest/',
    TBC: 'https://wowtbc.gg/bis-list/holy-priest/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/holy-priest/'
  },
  'sacerdote-sombras': {
    'Classic Opcion 1': 'https://www.wowisclassic.com/en/best-in-slot/priest/?phase=1&specialization=shadow',
    'Classic Opcion 2': 'https://wowtbc.gg/classic/bis-list/shadow-priest/',
    TBC: 'https://wowtbc.gg/bis-list/shadow-priest/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/shadow-priest/'
  },
  'sacerdote-disciplina': {
  LK: 'https://wowtbc.gg/wotlk/bis-list/discipline-priest/'
  },
  // PALADÍN
  'paladin-protecion': {
    Classic: 'https://www.wowisclassic.com/en/best-in-slot/paladin/?phase=1&specialization=protection',
    TBC: 'https://wowtbc.gg/bis-list/protection-paladin/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/protection-paladin/'
  },
   'paladin-retribucion': {
    'Classic Opcion 1': 'https://www.wowisclassic.com/en/best-in-slot/paladin/?phase=1&specialization=ret',
    'Classic Opcion 2': 'https://wowtbc.gg/classic/bis-list/retribution-paladin/',
    TBC: 'https://wowtbc.gg/bis-list/retribution-paladin/',
    LK: 'https://wowtbc.gg/wotlk/bis-list/retribution-paladin/',
   },
   'paladin-sagrado': {
   'Classic Opción 1': 'https://www.wowisclassic.com/en/best-in-slot/paladin/?phase=1&specialization=heal',
   'Classic Opcion 2': 'https://wowtbc.gg/classic/bis-list/holy-paladin/',
   TBC: 'https://wowtbc.gg/bis-list/holy-paladin/',
   LK: 'https://wowtbc.gg/wotlk/bis-list/holy-paladin/',
  },
  // PÍCARO
  'picaro-dagas': {
  'Classic Opcion 1': 'https://www.wowisclassic.com/en/best-in-slot/rogue/?phase=1&specialization=dagger',
  'Classic Opcion 2': 'https://wowtbc.gg/classic/bis-list/combat-daggers-rogue/',
  }, 
  'picaro-espadas': {
  'Classic Opcion 1': 'https://www.wowisclassic.com/en/best-in-slot/rogue/?phase=1&specialization=sword',
  'Classic Opcion 2': 'https://wowtbc.gg/classic/bis-list/combat-rogue/',
  },
  'picaro-combate': {
  TBC: 'https://wowtbc.gg/bis-list/combat-rogue/',
  LK: 'https://wowtbc.gg/wotlk/bis-list/combat-rogue/'
  },
  'pica-asesi': {
  TBC: 'https://wowtbc.gg/bis-list/assassination-rogue/',
  LK: 'https://wowtbc.gg/wotlk/bis-list/assassination-rogue/'
  },
  'picaro-sutileza': {
   TBC: 'https://wowtbc.gg/bis-list/subtlety-rogue/',
  },
  // MAGO
  'mago-arcano': {
  Classic: 'https://wowtbc.gg/classic/bis-list/arcane-mage/',
  TBC: 'https://wowtbc.gg/bis-list/arcane-mage/',
  LK: 'https://wowtbc.gg/wotlk/bis-list/arcane-mage/'
  },
  'mag-escarcha': {
  'Classic Opcion 1': 'https://www.wowisclassic.com/en/best-in-slot/mage/?phase=1',
  'Classic Opcion 2': 'https://wowtbc.gg/classic/bis-list/frost-mage/',
  TBC: 'https://wowtbc.gg/bis-list/frost-mage/',
  LK: 'https://wowtbc.gg/wotlk/bis-list/frost-mage/',
  },
  'mago-fuego': {
  Classic: 'https://wowtbc.gg/classic/bis-list/fire-mage/',
  TBC: 'https://wowtbc.gg/bis-list/fire-mage/',
  LK: 'https://wowtbc.gg/wotlk/bis-list/fire-mage/',
  },
  // DRUIDA
  'druida-oso': {
  'Classic Opcion 1': 'https://www.wowisclassic.com/en/best-in-slot/druid/?phase=1&specialization=tank',
  'Classic Opcion 2': 'https://wowtbc.gg/classic/bis-list/feral-tank-druid/',
  TBC: 'https://wowtbc.gg/bis-list/feral-tank-druid/',
  LK: 'https://wowtbc.gg/wotlk/bis-list/feral-tank-druid/',
  },
  'druida-gato': {
  'Classic Opcion 1': 'https://www.wowisclassic.com/en/best-in-slot/druid/?phase=1&specialization=cat',
  'Classic Opcion 2': 'https://wowtbc.gg/classic/bis-list/feral-dps-druid/',
  TBC: 'https://wowtbc.gg/bis-list/feral-dps-druid/',
  LK: 'https://wowtbc.gg/wotlk/bis-list/feral-dps-druid/',
  },
  'druida-equilibrio': {
  'Classic Opcion 1': 'https://www.wowisclassic.com/en/best-in-slot/druid/?phase=1&specialization=balance',
  'Classic Opcion 2': 'https://wowtbc.gg/classic/bis-list/feral-dps-druid/',
  TBC: 'https://wowtbc.gg/bis-list/balance-druid/',
  LK: 'https://wowtbc.gg/wotlk/bis-list/balance-druid/',
  },
  'druida-restauracion': {
  'Classic Opcion 1': 'https://www.wowisclassic.com/en/best-in-slot/druid/?phase=1&specialization=resto',
  'Classic Opcion 2': 'https://wowtbc.gg/classic/bis-list/restoration-druid/',
  TBC: 'https://wowtbc.gg/bis-list/restoration-druid/',
  LK: 'https://wowtbc.gg/wotlk/bis-list/restoration-druid/',
  },
  //CAZADOR
  'cazador-punteria': {
  'Classic Opcion 1': 'https://www.wowisclassic.com/en/best-in-slot/hunter/?phase=1&specialization=hunter',
  'Classic Opcion 2': 'https://wowtbc.gg/classic/bis-list/marksmanship-hunter/',
  TBC: 'https://wowtbc.gg/bis-list/marksmanship-hunter/',
  LK: 'https://wowtbc.gg/wotlk/bis-list/marksmanship-hunter/',
  },
  'cazador-bestias': {
  TBC: 'https://wowtbc.gg/bis-list/beast-mastery-hunter/',
  LK: 'https://wowtbc.gg/wotlk/bis-list/beast-mastery-hunter/',
  },
  'cazador-supervivencia': {
  TBC: 'https://wowtbc.gg/bis-list/survival-hunter/',
  LK: 'https://wowtbc.gg/wotlk/bis-list/survival-hunter/',
  },
   //CABALLERO DE LA MUERTE 
  'dk-sangre': {
  LK: 'https://wowtbc.gg/wotlk/bis-list/blood-tank-death-knight/',
  },
  'dk-escarcha': {
  LK: 'https://wowtbc.gg/wotlk/bis-list/frost-death-knight/',
  },
  'dk-profano': {
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
  respuesta += `**World of Warcraft Classic:**\n<${guia.Classic}>\n\n`;
}

if (guia['Classic Opcion 1']) {
  respuesta += `**World of Warcraft Classic - Opción 1:**\n<${guia['Classic Opcion 1']}>\n\n`;
}

if (guia['Classic Opcion 2']) {
  respuesta += `**World of Warcraft Classic - Opción 2:**\n<${guia['Classic Opcion 2']}>\n\n`;
}

if (guia.TBC) {
  respuesta += `**World of Warcraft: The Burning Crusade:**\n<${guia.TBC}>\n\n`;
}

if (guia.LK) {
  respuesta += `**World of Warcraft: Wrath of the Lich King:**\n<${guia.LK}>\n\n`;
}

  respuesta += '**Ten en cuenta que el enlace es solo una referencia del equipo (Pre-BiS/BiS); ajústalo según la fase y tu progreso.**';

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
