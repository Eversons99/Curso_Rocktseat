const getFlagsValue = require("./flags") // Importando o modulo Flags
console.log(`Oi ${getFlagsValue('--name')}. ${getFlagsValue('--greeting')}`)
