import { Client, Message, Contact, MessageMedia } from "whatsapp-web.js";
import { RESPONSE_MESSAGES } from "./messages/response.message";
import { REQUEST_MESSAGES } from "./messages/request.message";
import qrcode from "qrcode-terminal";
// import path from "path";
// import fs from "fs";

const client = new Client({
  puppeteer: { headless: true },
});

client.on("qr", (qr: string) => {
  qrcode.generate(qr, { small: true });
  console.log("QR RECEIVED", qr);
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", async (msg: Message) => {
  const contact: Contact = await msg.getContact();
  const { SALES_CONTENT } = RESPONSE_MESSAGES(contact);
  const { PRIMARY_KEY, ALT_PRIMARY_KEY } = REQUEST_MESSAGES;

  if (msg.body.toLowerCase() === PRIMARY_KEY || ALT_PRIMARY_KEY) {
    // SIMULAR DIGITAÇÃO
    // const typingMessage = await client.sendMessage(msg.from, "_digitando..._");

    // setTimeout(async () => {
    //   await typingMessage.delete(true);

    //   // AUDIO DE INSTRUÇÕES:
    //   // const audioPath = path.join(__dirname, "..", "assets", "instrucoes.opus");
    //   // const audioData = fs.readFileSync(audioPath);
    //   // const audioMedia = new MessageMedia(
    //   //   "audio/opus",
    //   //   audioData.toString("base64"),
    //   //   "instrucoes.opus"
    //   // );
    //   // await client.sendMessage(msg.from, audioMedia);
    // }, 1000);

    await msg.reply(SALES_CONTENT);
  }
});

client.initialize();
