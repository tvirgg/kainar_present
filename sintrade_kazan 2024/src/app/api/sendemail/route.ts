import nodemailer from 'nodemailer';

async function streamToBuffer(stream: ReadableStream): Promise<Buffer> {
    const chunks = [];
    const reader = stream.getReader();

    let done, value;
    while (!done) {
        ({ done, value } = await reader.read());
        if (value) {
            chunks.push(value);
        }
    }

    return Buffer.concat(chunks);
}
// В этом примере предполагается, что файл уже обработан и доступен по URL или в виде Base64
export async function POST(req: Request) {
    const formData = await req.formData();
    const data = formData.get('data') as string; // Получаем строку JSON
    const file = formData.get('file'); // Это будет объект File
    // Разбор строки JSON для получения данных
    const { companyName, email, message } = JSON.parse(data);
        // Настройка отправщика email
        const transporter = nodemailer.createTransport({
            host: 'smtp.timeweb.ru',
            port: 2525,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            connectionTimeout: 10000 // 10 секунд
        });
    if (file instanceof File) {
        var attachments = []; // Инициализируем пустой массив вложений
        if (file instanceof File) {
            const buffer = await streamToBuffer(file.stream());
            attachments.push({
                filename: file.name, // Имя файла
                content: buffer, // Содержимое файла как Buffer
            });
        }
    }
        // Подготовка и отправка email
        const mailOptions = {
            from: 'support@syntrade-kazan.msk0.ru',
            to: 'admin@syntrade-kazan.msk0.ru',
            subject: `Новый заказ от ${companyName}`,
            html: message,
            attachments: attachments
        };

        try {
            const result = await transporter.sendMail(mailOptions);
            return new Response(JSON.stringify({ message: 'Email успешно отправлен' }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error:any) {
            // Возвращаем ответ со статусом 500 и сообщением об ошибке
            return new Response(JSON.stringify({ message: 'Ошибка при отправке email', error: error.message }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }
}
