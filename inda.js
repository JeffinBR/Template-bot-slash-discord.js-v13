function numero(number, precision=2) {
const suffsFromZeros = { 0:'', 3:'k', 6:'M', 9:'G', 12:'T' }
const { length } = number.toString()
const lengthThird = length%3
const divDigits = length-(lengthThird || lengthThird+3)
const calc = ''+(number/(10**divDigits)).toFixed(precision)
return number < 1000 ? ''+number : (calc.indexOf('.') === calc.length-3 ? calc.replace(/\.00/, '') : calc)+suffsFromZeros[divDigits]
}



module.exports = {

//emojis
emoji_caixa1: `<:box3:944756548989759488>`,
emoji_caixa2: `<:box4:944756815541977159>`,
emoji_caixa3: `<:box5:944757060183142440>`,
emoji_garfos: `<:SacoDinheiro:666306132461092864>`,
emijis_garfos2: `<:CaixaRapido:666308666982662164>`,
emoji_info: `<:infu:906307163805335603>`,
emoji_bugH: `<:bugHunterGold:897168559342485527>`,
emoji_text: `<:textChannel:943211284743208980>`,
emoji_voice: `<:voiceChannel2:943211397486108722>`,
emoji_no2: `<:no:942039210066587678>`,
emoji_no: `<:errado:907065364196773918>`,
emoji_yes: `<:correto:907065244688453694>`,
emoji_yes2: `<a:sim:903065144521818203>`,
emoji_festa: `<:festa:907960224562962462>`,
emoji_festa2: `<a:agiveway:942041292949557259>`,
emoji_list: '<:richPresence:897170613473525801>',
emoji_catRoll: `<a:cate_role:906138165692215316>`,
emoji_user: `<:agricultores:907360395906396170>`,

//fuctions
numero: numero,

//infos
prefix: "b.",
color: `a`,
color2: `a`,
ver: "2.0",
thumb:"https://media.discordapp.net/attachments/883784689205256222/890250297509830657/oie_transparent_1.png?width=406&height=406",
}
