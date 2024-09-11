export type EmailDataProps = (typeof EMAILS)[0]

export const EMAILS = [
    {
        id: "1",
        name: "Jonh Doe",
        avatar: "https://mighty.tools/mockmind-api/content/human/60.jpg",
        marker: "importante",
        subject: "Trabalho final de curso",
        message: "Veja bem, você precisa abordar o seguinte tema",
        start: true,
        date: "12 de fev."

    },
    {
        id: "2",
        name: "Eduarda",
        avatar: "https://mighty.tools/mockmind-api/content/human/49.jpg",
        subject: "Renovação de contrato",
        message: "Precisamos rever o contrato, talvez tenha coisas que precisam ser modificadas",
        start: false,
        date: "13 de fev."
    },
]