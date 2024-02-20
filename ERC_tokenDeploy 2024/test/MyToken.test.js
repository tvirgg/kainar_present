export async function POST(req: Request) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.timeweb.ru',
        port: 2525,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        connectionTimeout: 10000 // 10 секунд
    });
    let { companyName, email, message } = await req.json();
    try {
        await transporter.sendMail({
            from: 'support@syntrade-kazan.msk0.ru',
            to: email,
            subject: `Новый заказ от ${companyName}`,
            html: message,
        });

        // Возвращаем ответ со статусом 200 и сообщением об успехе
        return new Response(JSON.stringify({ message: 'Email успешно отправлен' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error:any) {
        console.error('Ошибка при отправке email:', error.message);
        // Возвращаем ответ со статусом 500 и сообщением об ошибке
        return new Response(JSON.stringify({ message: 'Ошибка при отправке email', error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}