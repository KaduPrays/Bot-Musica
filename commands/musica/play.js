module.exports = ({
  name: "play",
  code: `
$description[$playSong[$message;30s;yes;Erro!]]
$onlyIf[$voiceID!=;Você precisa estar em um canal de voz!]
$argsCheck[>1;Coloque o nome da musica!]
$color[ff0ff]

  `
})