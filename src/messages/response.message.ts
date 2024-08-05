import { Contact } from "whatsapp-web.js";

export const RESPONSE_MESSAGES = (contact: Contact) => {
  const currentDate = new Date();
  const hours = currentDate.getHours();

  let greeting: string;

  if (hours >= 0 && hours < 5) {
    greeting = "Boa madrugada";
  } else if (hours >= 5 && hours < 12) {
    greeting = "Bom dia";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Boa tarde";
  } else {
    greeting = "Boa noite";
  }

  const userName: string = contact.pushname || contact.name || contact.number;
  return {
    SALES_CONTENT: `
🌟 ${greeting}, *${userName}*! 🌟

Guia de acesso rápido *(1.500 LIVROS)*

- *ENTREGA VIA GOOGLE DRIVE*📚📁

- *FAÇA O PIX E ENVIE O COMPROVANTE* 📄📷

- *ACESSO IMEDIATO e VITALÍCIO*⚡✅

(Valor promocional) *R$ 19,90*

- *PIX* : 04327271241 📋 
(Moisés Atalias Farias Silva de Souza)

Abraços,
Estou te aguardando!
`,
  };
};
