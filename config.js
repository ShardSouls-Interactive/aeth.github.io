const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  botToken: process.env.token,
  mongoUrl: process.env.mongoUrl,
  clientId: process.env.clientId,
  logChannel: process.env.logChannel,
  deploySlashOnReady: true,
  underDevelopment: false,
  developers: [
    {
      name: "bot.ghost_",
      id: "973133599568171039",
    },
  ],
  devGuilds: [
    {
      name: "GhΘςτ bφt's hidden shelter",
      id: "1345682462927491101",
    },
    {
      name: "Asher Hex",
      id: "1330314785903874110",
    },
  ],
  betaTestGuilds: [
    {
      name: "Asher Hex",
      id: "1330314785903874110",
    },
  ],
  logWebhook: process.env.logWebhook,
};
