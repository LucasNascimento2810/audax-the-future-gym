export const siteData = {
  city: "Cascavel - PR",
  addressLine: "Rua Fortaleza, 2850",
  instagramHandle: "@audaxgymcascavel",
  instagramUrl: "https://www.instagram.com/audaxgymcascavel",
  whatsappNumber: "554599000171",
  whatsappDisplay: "(45) 99000-0171",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.5!2d-53.4551!3d-24.9575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d5a1b2c3d4e5%3A0x0!2sRua%20Fortaleza%2C%202850%20-%20Cascavel%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1",
} as const;

export const plans = [
  {
    name: "ANUAL",
    durationLabel: "12 meses",
    price: "129",
    cents: "90",
    period: "/mês",
    discountLabel: "34% de desconto",
    billingLabel: "valor mensal",
    paymentOptions: [
      "Pix com valor total do plano",
      "Cartão de débito com valor total do plano",
      "Cartão de crédito",
      "Crédito recorrente com parcelamentos",
    ],
  },
  {
    name: "SEMESTRAL",
    durationLabel: "6 meses",
    price: "149",
    cents: "90",
    period: "/mês",
    discountLabel: "23% de desconto",
    billingLabel: "valor mensal",
    paymentOptions: [
      "Pix com valor total do plano",
      "Cartão de débito com valor total do plano",
      "Cartão de crédito",
      "Crédito recorrente com parcelamentos",
    ],
  },
  {
    name: "TRIMESTRAL",
    durationLabel: "3 meses",
    price: "169",
    cents: "90",
    period: "/mês",
    discountLabel: "11% de desconto",
    billingLabel: "valor mensal",
    paymentOptions: [
      "Pix com valor total do plano",
      "Cartão de débito com valor total do plano",
      "Cartão de crédito",
      "Crédito recorrente com parcelamentos",
    ],
  },
  {
    name: "MENSAL",
    durationLabel: "1 mês",
    price: "189",
    cents: "90",
    period: "",
    discountLabel: "Sem desconto",
    billingLabel: "valor do plano",
    paymentOptions: [
      "Dinheiro",
      "Pix",
      "Cartão de débito",
      "Cartão de crédito à vista",
    ],
  },
] as const;

export const faqItems = [
  {
    question: "Quais planos estão disponíveis?",
    answer:
      "Temos planos mensal, trimestral, semestral e anual. Fale com a equipe pelo WhatsApp para entender o melhor custo-benefício para a sua rotina.",
  },
  {
    question: "Como entrar em contato com a academia?",
    answer:
      "O caminho mais rápido é pelo WhatsApp no número (45) 99000-0171. Você também pode falar com a Audax pelo Instagram @audaxgymcascavel ou visitar a academia pessoalmente.",
  },
  {
    question: "Onde fica a Academia Audax?",
    answer: "Estamos na Rua Fortaleza, 2850, em Cascavel - PR. Se quiser, você pode agendar uma visita para conhecer a estrutura de perto.",
  },
  {
    question: "Quero saber mais antes de me matricular.",
    answer:
      "Sem problemas. Chame no WhatsApp e nossa equipe vai explicar planos, horários, formas de pagamento e tudo o que você precisa para começar com segurança.",
  },
] as const;

export const whatsappDefaultMessage =
  "Olá! Gostaria de mais informações sobre a Academia Audax.";

export const createWhatsAppLink = (message: string) =>
  `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const whatsappDefaultUrl = createWhatsAppLink(whatsappDefaultMessage);
